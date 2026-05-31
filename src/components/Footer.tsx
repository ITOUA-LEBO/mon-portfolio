import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '2.5rem 20px',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        color: 'var(--text-secondary)',
        fontSize: '0.85rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <span>© {new Date().getFullYear()} ITOUA LEBO Lebo Rohi Nathan. {t.footer.rights}</span>
      <span style={{ opacity: 0.3 }}>—</span>
      <span style={{ opacity: 0.5 }}>{t.footer.built}</span>
    </motion.footer>
  );
};

export default Footer;
