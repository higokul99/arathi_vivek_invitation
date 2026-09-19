import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import arathiAndVivek from '../assets/arathi_and_vivek.webp';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const MainInvitation = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Image pulls back and darkens
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <motion.div
      className="main-invitation"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="hero-section">
        <motion.div
          className="hero-image-container"
          style={{ scale, opacity, y }}
        >
          <img src={arathiAndVivek} alt="Arathi and Vivek" className="hero-image" />
          <div className="hero-overlay">
            <div className="hero-text">
              <h1 className="text-shimmer">A Beautiful Beginning</h1>
              <p>Engagement Invitation</p>
            </div>
            <div className="scroll-indicator">
              <span>Scroll to discover</span>
              <ChevronDown size={24} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="content-section">
        <motion.div
          className="content-block glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Two hearts, two families, <br />
            and a beautiful journey about to begin.
          </p>
          <p>
            With the blessings of our families<br />
            and the love of those who mean the most to us,<br />
            we invite you to be a part of our special evening<br />
            as we celebrate our engagement.
          </p>
        </motion.div>

        <div className="names-block">
          <motion.div
            className="name-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-shimmer">THE BRIDE</p>
            <h3>Arathi B Raj</h3>
            <p>Daughter of</p>
            <p>Late. K Baburaj & Bindu Baburaj</p>
          </motion.div>

          <motion.div
            className="ampersand"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            &
          </motion.div>

          <motion.div
            className="name-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-shimmer">THE GROOM</p>
            <h3>Vivek Varnnan</h3>
            <p>Son of</p>
            <p>Sree Varnnan & Lissy SreeVarnnan</p>
          </motion.div>
        </div>

        <motion.div
          className="event-details"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>The Engagement</h3>
          <div className="date-large text-shimmer">31st OCTOBER</div>
          <p>The evening begins at</p>
          <div className="time">5:30 PM</div>
        </motion.div>

        <motion.div
          className="photo-showcase"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={img1} alt="Arathi and Vivek" />
        </motion.div>

        <motion.div
          className="content-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Come celebrate with us,<br />
            share in our happiness,<br />
            and make this beautiful occasion even more memorable.
          </p>

          <div className="divider"></div>

          <h3 className="text-shimmer" style={{ marginBottom: '1rem', fontSize: '1.2rem', letterSpacing: '2px' }}>RING EXCHANGE</h3>
          <div className="time" style={{ marginBottom: '1rem' }}>7:00 PM</div>
          <p>
            A little moment,<br />
            a promise of forever.
          </p>
          <p>
            Join us as we exchange rings<br />
            and begin a new chapter together.
          </p>
        </motion.div>

        <motion.div
          className="content-block glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-shimmer" style={{ marginBottom: '1rem', letterSpacing: '2px' }}>COME CELEBRATE WITH US</h3>
          <p>
            An evening filled with love, laughter,<br />
            beautiful memories and cherished moments.
          </p>
          <p>Your presence will make our celebration complete.</p>
        </motion.div>

        <motion.div
          className="photo-showcase"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={img2} alt="Arathi and Vivek" />
        </motion.div>

        <motion.div
          className="shimmer-dress-code"
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-shimmer">DRESS TO SHIMMER</h3>
          <div className="colors">
            <span>BOLD COLOURS</span> •
            <span>SILVER</span> •
            <span>METALLIC</span> •
            <span>SHIMMER</span>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6 }}>
            Bring your favourite bold colours<br />
            and pair them with silver, metallic or shimmer accents.<br />
            Let's fill the evening with colour, sparkle<br />
            and a little extra magic.
          </p>
        </motion.div>

        <motion.div
          className="content-block glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MapPin size={32} color="var(--color-silver)" style={{ marginBottom: '1rem' }} />
          <h3 className="text-shimmer" style={{ marginBottom: '1rem', letterSpacing: '2px' }}>LOCATION</h3>
          <p style={{ marginBottom: '1.5rem' }}>Brook Serene Resort</p>
          <button 
            className="action-btn"
            onClick={() => window.open('https://maps.app.goo.gl/yiBEQXLxoq6neGrT9', '_blank')}
          >
            View on Google Maps
          </button>
        </motion.div>

        <motion.div
          className="footer footer-compact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
            We can't wait to celebrate<br />
            this special beginning with you.
          </p>
          <h2 className="text-shimmer">ARATHI ♡ VIVEK</h2>
          <div className="date">31 • 10 • 2026</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainInvitation;
