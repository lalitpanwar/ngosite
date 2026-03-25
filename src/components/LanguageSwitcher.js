'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing'; // Apni routing file se import karein

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (nextLocale) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => handleSwitch('en')}
        className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
      <button 
        onClick={() => handleSwitch('hi')}
        className={`px-3 py-1 rounded ${locale === 'hi' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        हिन्दी
      </button>
    </div>
  );
}