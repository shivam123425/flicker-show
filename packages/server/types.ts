export interface UserJWTPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserJWTPayload;
      session?: {
        jwt: string
      }
    }
  }
}
