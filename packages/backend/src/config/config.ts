import { Config } from './interface';

export const config = (): Config => ({
  secret: 'secretKey',
  security: {
    expiresIn: '8h',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
})