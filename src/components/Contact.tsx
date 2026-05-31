import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';

const Contact: React.FC = () => {
  const { t } = useLang();
  const { ref, inView } = useInView();

  const links = [
    { label: t.contact.cta_email, href: 'mailto:lebo.itoua-lebo@efrei.net', primary: true },
    { label: t.contact.cta_linkedin, href: 'https://linkedin.com/in/the-data-master/', primary: false },
    { label: t.contact.cta_github, href: 'https://github.com/ITOUA-LEBO/ITOUA-LEBO', primary: false },
  ];

  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.p
          style={{
            fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '1.5rem',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.contact.eyebrow}
        </motion.p>

        <h2 style={{ marginBottom: '1.5rem' }}>{t.contact.title}</h2>

        <p style={{ maxWidth: '600px', margin: '0 auto 3.5rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          {t.contact.sub}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.primary ? undefined : '_blank'}
              rel={link.primary ? undefined : 'noopener noreferrer'}
              className={link.primary ? 'btn btn-primary' : 'btn'}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
