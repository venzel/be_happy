class RegEx {
    isUUIDValid(id: string): boolean {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
    }

    isIdMongooseValid(id: string): boolean {
        return /^[0-9a-fA-F]{24}$/.test(id)
    }

    isNameValid(name: string): boolean {
        return /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/.test(name)
    }

    isEmailValid(email: string): boolean {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    isPasswordValid(password: string): boolean {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/.test(password)
    }
}

const { isUUIDValid, isIdMongooseValid, isNameValid, isEmailValid, isPasswordValid } = new RegEx()

export { isUUIDValid }
export { isIdMongooseValid }
export { isNameValid }
export { isEmailValid }
export { isPasswordValid }
