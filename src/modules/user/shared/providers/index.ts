import { container } from 'tsyringe'

import { IHashProvider } from './HashProvider/models/IHashProvider'
import { BcryptHashProvider } from './HashProvider/services/BcryptHashProvider'

import { ITokenProvider } from './TokenProvider/models/ITokenProvider'
import { JWTTokenProvider } from './TokenProvider/services/JWTTokenProvider'

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider)
container.registerSingleton<ITokenProvider>('TokenProvider', JWTTokenProvider)
