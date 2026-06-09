import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';
import { useIsMobile } from '../hooks/useIsMobile';

const stats = [
  { value: '2', label: 'SaaS\nBuilt' },
  { value: '3+', label: 'Years of\nExperience' },
  { value: '∞', label: 'Problems\nSolved' },
];

const categoryIcons: Record<string, string> = {
  Development: '⌨',
  Développement: '⌨',
  'Data Analysis': '◈',
  'Analyse de données': '◈',
  Product: '◎',
  Produit: '◎',
};

const About: React.FC = () => {
  const { t } = useLang();
  const { ref, inView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const isMobile = useIsMobile();

  return (
    <section id="about">
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          style={{ marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            {t.about.title}{' '}
            <span style={{ color: 'var(--text-secondary)' }}>{t.about.title_accent}</span>
          </h2>
          <motion.div
            style={{
              width: '60px', height: '2px',
              background: 'linear-gradient(90deg, white, transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: isMobile ? '3rem' : '4rem',
          alignItems: 'start',
        }}>

          {/* Left — text + stats */}
          <div>
            {[t.about.p1, t.about.p2, t.about.p3].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
                style={{
                  marginBottom: '1.4rem',
                  fontSize: i === 0 ? '1.15rem' : '1rem',
                  color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: i === 0 ? '500' : '400',
                  lineHeight: '1.8',
                }}
              >
                {text}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              ref={statsRef}
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  style={{ textAlign: 'center', flex: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5, type: 'spring', stiffness: 200 }}
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: '900',
                      letterSpacing: '-0.04em',
                      background: 'linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </motion.div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: '0.25rem',
                    whiteSpace: 'pre-line',
                    lineHeight: '1.4',
                  }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — skills */}
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '28px',
              padding: '2.5rem',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top glow */}
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            }} />

            <h3 style={{
              marginBottom: '2rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-secondary)',
            }}>
              {t.about.expertise}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {t.about.skills.map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.8rem',
                  }}>
                    <span style={{ fontSize: '1rem', opacity: 0.7 }}>
                      {categoryIcons[cat.title] ?? '◆'}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.5)',
                    }}>
                      {cat.title}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 + j * 0.05, duration: 0.35 }}
                        whileHover={{
                          scale: 1.06,
                          background: 'rgba(255,255,255,0.12)',
                          borderColor: 'rgba(255,255,255,0.3)',
                        }}
                        style={{
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '5px 14px',
                          borderRadius: '50px',
                          fontSize: '0.83rem',
                          color: 'rgba(255,255,255,0.8)',
                          background: 'rgba(255,255,255,0.04)',
                          cursor: 'default',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
