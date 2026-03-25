import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'hi'],
  defaultLocale: 'en',
  // Isse uncomment karo! Ye zaroori hai clean URL ke liye
  localePrefix: 'as-needed' 
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);