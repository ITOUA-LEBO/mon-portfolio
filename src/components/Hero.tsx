import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

const Hero: React.FC = () => {
  const { t } = useLang();
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  const words = t.hero.typed as readonly string[];

  useEffect(() => {
    setDisplayed('');
    setDeleting(false);
    setWordIndex(0);
  }, [words]);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background orbs */}
      <motion.div
        style={{
          position: 'absolute', top: '30%', left: '20%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          zIndex: -1, filter: 'blur(40px)',
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute', top: '50%', right: '15%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          zIndex: -1, filter: 'blur(60px)',
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: -1,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
      }} />

      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.p variants={itemVariants} style={{
          color: 'white', fontWeight: '700', marginBottom: '2rem',
          textTransform: 'uppercase', letterSpacing: '0.4em',
          fontSize: '0.8rem', opacity: 0.5,
        }}>
          {t.hero.name}
        </motion.p>

        <motion.h1 variants={itemVariants}>
          {t.hero.headline}{' '}
          <span style={{
            background: 'linear-gradient(90deg, #fff 0%, #666 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {displayed}
            <span style={{
              display: 'inline-block',
              width: '3px', height: '0.85em',
              background: 'white',
              marginLeft: '2px',
              verticalAlign: 'middle',
              animation: 'cursor-blink 0.8s steps(1) infinite',
            }} />
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} style={{
          maxWidth: '700px', fontSize: '1.3rem',
          margin: '2rem auto 4rem', lineHeight: '1.8',
          color: 'var(--text-secondary)',
        }}>
          {t.hero.sub}
        </motion.p>

        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <motion.a href="#projects" className="btn btn-primary" whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
            {t.hero.cta_primary}
          </motion.a>
          <motion.a href="#about" className="btn" whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
            {t.hero.cta_secondary}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          {t.hero.scroll}
        </span>
        <motion.div
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
