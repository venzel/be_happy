interface IEmotionReport {
    _id: any
    emotion_id: string
    owner_id: string
    read: boolean
    created_at: Date
    deleted_at: Date | null
}

export { IEmotionReport }
