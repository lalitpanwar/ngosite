import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Ye matcher sabse important hai. 
  // Isme static files skip honi chahiye warna locale detect nahi hota.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};