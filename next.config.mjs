import { paraglide } from '@inlang/paraglide-next/plugin';
/** @type {import('next').NextConfig} */

const nextConfig = {
    // i18n: {
    //     locales: ['default', 'en', 'de', 'fr'],
    //     defaultLocale: 'default',
    //     localeDetection: false,
    // },
    // trailingSlash: false,
};

export default paraglide({
    paraglide: {
        project: './project.inlang',
        outdir: './src/paraglide',
    },
    ...nextConfig,
});
