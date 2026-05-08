import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, keywords, ogImage, ogUrl, canonical }) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0]; // Ensure it's 'az' or 'en'

    const siteTitle = "WED2026 | " + t('hero.title') + " Baku, Azerbaijan";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = "WED2026 - " + t('announcement.description');
    const defaultKeywords = "wed2026, wed 2026, world environment day, baku, azerbaijan";

    const baseDomain = "https://wed2026.az";

    return (
        <>
            <Helmet>
                {/* Standard metadata */}
                <title>{fullTitle}</title>
                <meta name="title" content={fullTitle} />
                <meta name="description" content={description || defaultDescription} />
                <meta name="keywords" content={keywords || defaultKeywords} />
                <html lang={currentLang} />

                {/* i18n SEO: hreflang tags */}
                <link rel="alternate" hreflang="az" href={`${baseDomain}/az`} />
                <link rel="alternate" hreflang="en" href={`${baseDomain}/en`} />
                <link rel="alternate" hreflang="x-default" href={baseDomain} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={ogUrl || baseDomain} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={description || defaultDescription} />
                <meta property="og:image" content={ogImage || `${baseDomain}/og-image.png`} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={ogUrl || baseDomain} />
                <meta property="twitter:title" content={fullTitle} />
                <meta property="twitter:description" content={description || defaultDescription} />
                <meta property="twitter:image" content={ogImage || `${baseDomain}/og-image.png`} />

                {/* Canonical link */}
                <link rel="canonical" href={canonical || baseDomain} />
            </Helmet>
            {/* Visually Hidden H1 for SEO (invisible to users, visible to Google) */}
            <h1 style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                borderWidth: '0',
                display: 'none' // Some search engines might ignore display:none, but many use it. 
                // Using opacity 0 and absolute positioning is safer for modern SEO.
            }}>
                WED2026 - World Environment Day 2026 Baku Azerbaijan
            </h1>
        </>
    );
};

export default SEO;
