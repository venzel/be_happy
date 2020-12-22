import multer, { StorageEngine, FileFilterCallback } from 'multer'
import { Request, Express } from 'express'
import { resolve } from 'path'
import { randomBytes } from 'crypto'
import { extname } from 'path'
import { AppException } from '@shared/exceptions/AppException'

class Storage {
    public tmp_folder: string
    public uploads_folder: string
    public avatars_folder: string
    public config: {}

    constructor() {
        this._setup()
    }

    private _setup(): void {
        this._tmpfolder()
        this._uploadsfolder()
        this._avatarsfolder()
        this._config()
    }

    private _tmpfolder(): void {
        this.tmp_folder = resolve(__dirname, '..', '..', 'tmp')
    }

    private _uploadsfolder(): void {
        this.uploads_folder = resolve(this.tmp_folder, 'uploads')
    }

    private _avatarsfolder(): void {
        this.avatars_folder = resolve(this.tmp_folder, 'uploads', 'avatars')
    }

    private _storage(): StorageEngine {
        return multer.diskStorage({
            destination: this.uploads_folder,
            filename(
                _req: Request,
                file: Express.Multer.File,
                callback: (error: Error | null, filename: string) => void
            ) {
                const fileHash = randomBytes(5).toString('hex')

                const fileName = `${fileHash}-${file.originalname}`

                return callback(null, fileName)
            },
        })
    }

    private _filefilter(): Function {
        return (
            _req: Request,
            file: Express.Multer.File,
            callback: (error: AppException | null, acceptFile: boolean) => void
        ) => {
            const extensions: string[] = ['.png', '.jpg', '.gif', '.jpeg']

            const extensionFile: string = extname(file.originalname)

            if (!extensions.includes(extensionFile))
                return callback(new AppException('Only images are allowed!'), false)

            callback(null, true)
        }
    }

    private _config(): void {
        this.config = {
            storage: this._storage(),
            fileFilter: this._filefilter(),
        }
    }
}

const { config, uploads_folder, avatars_folder } = new Storage()

export default config
export { uploads_folder }
export { avatars_folder }
