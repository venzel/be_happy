import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { ICreateEmotionDTO } from '../dtos/ICreateEmotionDTO'

interface IEmotionRepository {
    findOneById(emotion_id: string): Promise<IEmotionEntity | undefined>

    filterByOwnerId(owner_id: string): Promise<IEmotionEntity[]>

    create(data: ICreateEmotionDTO): Promise<IEmotionEntity>

    save(emotion: IEmotionEntity): Promise<IEmotionEntity>

    delete(emotion: IEmotionEntity): Promise<IEmotionEntity>

    list(): Promise<IEmotionEntity[]>
}

export { IEmotionRepository }
