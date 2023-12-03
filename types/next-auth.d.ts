// types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth/jwt' {
  /** Extending the built-in JWT types to include custom properties */
  interface JWT {
    accessToken?: string;
  }
}

declare module 'next-auth' {
  /**
   * Extending the built-in session types to include custom properties
   */
  interface Session {
    accessToken?: string;
  }
  
}

