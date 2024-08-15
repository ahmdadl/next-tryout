import { useTranslations } from 'next-intl';

export default function ShowPage() {
    const t = useTranslations('HomePage');
    return <h1>{t('title')}</h1>;
}
