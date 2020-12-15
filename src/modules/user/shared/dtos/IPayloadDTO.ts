interface IPayloadDTO {
    user: {
        ownerId: string
        role: string
        activated: boolean
    }
}

export { IPayloadDTO }
