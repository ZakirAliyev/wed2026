import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, keywords, ogImage, ogUrl, canonical }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const siteTitle = "World Environment Day 2026 Baku, Azerbaijan";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = "Official platform for World Environment Day 2026 (WED 2026) in Baku, Azerbaijan.";
    const defaultKeywords = "wed, wed2026, world environment day, baku, azerbaijan";

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <html lang={currentLang} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl || "https://wed2026.az/"} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage || "https://wed2026.az/og-image.png"} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogUrl || "https://wed2026.az/"} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={ogImage || "https://wed2026.az/og-image.png"} />

            {/* Canonical link */}
            <link rel="canonical" href={canonical || "https://wed2026.az/"} />
        </Helmet>
    );
};

export default SEO;
