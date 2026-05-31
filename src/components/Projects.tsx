import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';

const Projects: React.FC = () => {
  const { t } = useLang();
  const { ref, inView } = useInView(0.1);

  return (
    <div style={{ backgroundColor: 'black', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <section id="projects">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t.projects.title}
        </motion.h2>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            marginTop: '2rem',
          }}
        >
          {t.projects.items.map((p, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{
                    display: 'inline-block', padding: '5px 14px', borderRadius: '50px',
                    fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.05em',
                    border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)',
                  }}>
                    {p.type}
                  </span>
                  <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}>
                    0{i + 1}
                  </span>
                </div>
                <h3 style={{ margin: '0 0 1rem', fontSize: '1.75rem', fontWeight: '800' }}>{p.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
                  {p.description}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {p.tech.map(tech => (
                  <span key={tech} style={{ fontSize: '0.7rem', fontWeight: '700', color: 'white', opacity: 0.35, letterSpacing: '0.05em' }}>
                    /{tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
