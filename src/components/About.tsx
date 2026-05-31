import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';

const About: React.FC = () => {
  const { t } = useLang();
  const { ref, inView } = useInView();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  return (
    <section id="about">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}
      >
        <motion.div variants={leftVariants}>
          <motion.h2 style={{ textAlign: 'left', marginBottom: '2rem' }}>
            {t.about.title}{' '}
            <span style={{ color: 'var(--text-secondary)' }}>{t.about.title_accent}</span>
          </motion.h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: '500' }}>
            {t.about.p1}
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{t.about.p2}</p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{t.about.p3}</p>
        </motion.div>

        <motion.div
          variants={rightVariants}
          style={{
            backgroundColor: '#f9f9f9', color: 'black',
            padding: '3rem', borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'black' }}>{t.about.expertise}</h3>
          {t.about.skills.map((cat, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#555', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                {cat.title}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 + j * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.08, backgroundColor: '#e8e8e8' }}
                    style={{ border: '1px solid #ddd', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', color: 'black', cursor: 'default' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
