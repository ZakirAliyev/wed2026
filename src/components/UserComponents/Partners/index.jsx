import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './index.scss';

// Dynamically match any files starting with partnerLogo in src/assets/logolarWedinki
const logos = import.meta.glob('../../../assets/logolarWedinki/**/partnerLogo*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    import: 'default'
});

function Partners() {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language || 'en').toLowerCase().substring(0, 2);

    // Helper to find logo URL by base filename (case insensitive), prioritizing WebP
    const findLogo = (name) => {
        // First, try to find a WebP version
        const webpKey = Object.keys(logos).find(k => {
            const full = k.split('/').pop();
            const base = full.split('.').shift();
            const ext = full.split('.').pop().toLowerCase();
            return base.toLowerCase() === name.toLowerCase() && ext === 'webp';
        });
        if (webpKey) return logos[webpKey];

        // Fallback to any other format
        const key = Object.keys(logos).find(k => {
            const base = k.split('/').pop().split('.').shift();
            return base.toLowerCase() === name.toLowerCase();
        });
        return key ? logos[key] : null;
    };

    // Find all unique partner IDs from existing filenames
    const partnerIds = Array.from(new Set(
        Object.keys(logos).map(key => {
            const filename = key.split('/').pop();
            const match = filename.match(/partnerLogo(?:Az|Eng|En)(\d+)/i);
            return match ? parseInt(match[1], 10) : null;
        }).filter(id => id !== null)
    )).sort((a, b) => a - b);

    // Helper to resolve the correct logo URL based on current language and fallbacks
    const getLogoSrc = (id) => {
        const isAz = currentLang === 'az';

        if (isAz) {
            // AZ language: try AZ logo first, fallback to ENG
            let logo = findLogo(`partnerLogoAz${id}`);
            if (logo) return logo;
            logo = findLogo(`partnerLogoEng${id}`) || findLogo(`partnerLogoEn${id}`);
            if (logo) return logo;
        } else {
            // EN/Default language: try ENG first, fallback to AZ
            let logo = findLogo(`partnerLogoEng${id}`) || findLogo(`partnerLogoEn${id}`);
            if (logo) return logo;
            logo = findLogo(`partnerLogoAz${id}`);
            if (logo) return logo;
        }
        return null;
    };

    // Animation configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        }
    };

    // If no logo assets exist yet, display an informative state.
    if (partnerIds.length === 0) {
        return null;
    }

    return (
        <section id="partners">
            <div className="container">
                <motion.div
                    className="partners-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>{t('partners.title', 'Partners')}</h2>
                </motion.div>

                <motion.div 
                    className="partners-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {partnerIds.map((id) => {
                        const logoSrc = getLogoSrc(id);

                        if (!logoSrc) return null;

                        return (
                            <motion.div 
                                key={id} 
                                className="partner-logo-card"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img 
                                    src={logoSrc} 
                                    alt={`Partner ${id}`} 
                                    loading="lazy"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Partners;
