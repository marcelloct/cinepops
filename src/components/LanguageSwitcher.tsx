import type { Lang } from '../i18n/lang';
import { useLang, useT } from '../i18n/useT';

const OPTIONS: { value: Lang; short: string; name: string }[] = [
  { value: 'pt', short: 'PT', name: 'Português' },
  { value: 'en', short: 'EN', name: 'English' },
];

export function LanguageSwitcher() {
  const [lang, setLang] = useLang();
  const { t } = useT();

  return (
    <div className="lang-switch" role="group" aria-label={t.language}>
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          lang={o.value}
          aria-label={o.name}
          title={o.name}
          aria-pressed={lang === o.value}
          onClick={() => setLang(o.value)}
        >
          {o.short}
        </button>
      ))}
    </div>
  );
}
