import { t } from 'lib/translate';

const labels = {
  HERO_BANNER: 'Hero Banner'
};

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <h1>{t(labels)('hero_banner')}</h1>
    </div>
  );
};

export default HeroBanner;
