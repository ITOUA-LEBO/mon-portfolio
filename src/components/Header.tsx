import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

const Header: React.FC = () => {
  const { lang, t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    ['about', 'projects', 'education', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.5rem 0',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        backgroundColor: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
      }}>
        <motion.div
          style={{ fontWeight: '900', fontSize: '1.5rem', color: 'white' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NATHAN.
        </motion.div>

        <ul style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem', fontWeight: '600', listStyle: 'none', alignItems: 'center' }}>
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              >
                <a
                  href={item.href}
                  style={{
                    color: isActive ? 'white' : 'var(--text-secondary)',
                    position: 'relative',
                    paddingBottom: '4px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0,
                        height: '1px',
                        background: 'white',
                      }}
                    />
                  )}
                </a>
              </motion.li>
            );
          })}

          {/* Lang toggle */}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50px',
                padding: '6px 14px',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
              }}
            >
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
              >
                {lang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
              </motion.span>
            </motion.button>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
