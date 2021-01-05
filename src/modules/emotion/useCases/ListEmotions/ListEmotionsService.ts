import { injectable, inject } from 'tsyringe'
import { IListEmotionsDTO } from './IListEmotionsDTO'
import { IEmotionEntity } from '@modules/emotion/shared/models/entities/IEmotionEntity'
import { IEmotionRepository } from '@modules/emotion/shared/repositories/IEmotionRepository'

@injectable()
class ListEmotionsService {
    constructor(@inject('EmotionRepository') private _emotionRepository: IEmotionRepository) {}

    public async execute(data: IListEmotionsDTO): Promise<IEmotionEntity[]> {
        const { query_user_id, owner_id, role } = data

        let emotions: IEmotionEntity[] = []

        if (role === 'ADMIN') {
            if (!query_user_id) {
                emotions = await this._emotionRepository.list()
            } else {
                emotions = await this._emotionRepository.filterByOwnerId(query_user_id)
            }
        } else {
            emotions = await this._emotionRepository.filterByOwnerId(owner_id)
        }

        return emotions
    }
}

export { ListEmotionsService }
