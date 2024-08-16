import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // i18n: {
    //     locales: ['default', 'en', 'de', 'fr', 'ar'],
    //     defaultLocale: 'default',
    //     localeDetection: false,
    // },
    trailingSlash: false,
};

export default withNextIntl(nextConfig);
