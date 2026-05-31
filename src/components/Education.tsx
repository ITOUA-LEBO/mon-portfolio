import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';

const Education: React.FC = () => {
  const { t } = useLang();
  const { ref, inView } = useInView();

  return (
    <section id="education">
      <div style={{ maxWidth: '800px' }}>
        <motion.h2
          style={{ textAlign: 'left' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t.education.title}
        </motion.h2>

        <div ref={ref} style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {t.education.items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
              style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                gap: '2rem',
                paddingBottom: '3rem',
                marginBottom: i < t.education.items.length - 1 ? '3rem' : 0,
                borderBottom: i < t.education.items.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', left: '148px', top: '8px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)' }} />
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)', paddingTop: '2px' }}>
                {f.period}
              </div>
              <div>
                <motion.h3
                  style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  {f.school}
                </motion.h3>
                <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{f.degree}</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
