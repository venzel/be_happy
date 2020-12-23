const isUUIDValid = (id: string): boolean => {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
}

const isIdMongooseValid = (id: string): boolean => {
    return /^[0-9a-fA-F]{24}$/.test(id)
}

const isNameValid = (name: string): boolean => {
    return /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/.test(name)
}

const isEmailValid = (email: string): boolean => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

const isPasswordValid = (password: string): boolean => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/.test(password)
}

export { isUUIDValid }
export { isIdMongooseValid }
export { isNameValid }
export { isEmailValid }
export { isPasswordValid }
