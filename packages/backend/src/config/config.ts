import { Config } from './interface';

export const config = (): Config => ({
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
})