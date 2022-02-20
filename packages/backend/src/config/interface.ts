export interface Config {
  secret: string;
  security: SecurityConfig;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}