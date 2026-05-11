import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Brain, 
  Star, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import mainImg from '../assets/img_founder_student.jpeg';
import float1Img from '../assets/img_girl_hoop.jpeg';
import float2Img from '../assets/img_blindfold_cube.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="floating-icons">
        <motion.div className="f-icon" animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}><Brain size={40} /></motion.div>
        <motion.div className="f-icon" animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}><Trophy size={32} /></motion.div>
        <motion.div className="f-icon" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }}><Star size={24} fill="currentColor" /></motion.div>
        <motion.div className="f-icon" animate={{ x: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity }}><GraduationCap size={36} /></motion.div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <ShieldCheck size={16} className="badge-icon" />
            <span>ISO 9001:2015 Certified Academy</span>
          </div>
          <h1>Building<br /><span>Future-Ready</span><br />Young Minds</h1>
          <p className="hero-sub">India’s leading academy for cognitive excellence, skill innovation, and world-record training. Transforming potential into performance.</p>
          
          <div className="hero-btns">
            <Link to="/programs" className="btn-primary">
              <span>Explore Programs</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary">Partner With Us</Link>
          </div>

          <div className="hero-stats">
            <StatItem num="10K+" label="Students" />
            <StatItem num="10+" label="Schools" />
            <StatItem num="200+" label="World Records" />
          </div>
        </motion.div>

        <motion.div 
          className="hero-images"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="img-stack">
            <img src={mainImg} alt="Founder with Student" className="img-main" />
            <motion.img 
              src={float1Img} 
              alt="Student Achievement" 
              className="img-float-1" 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img 
              src={float2Img} 
              alt="Competition Winner" 
              className="img-float-2" 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <div className="experience-tag">
              <Sparkles size={20} className="text-gold" />
              <div>
                <strong>Excellence</strong>
                <span>Certified Training</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero { 
          min-height: 100vh; 
          background: linear-gradient(135deg, #fdfaf7 0%, #fff 100%); 
          position: relative; 
          overflow: hidden;
          padding: 140px 5% 80px;
          display: flex;
          align-items: center;
        }
        .floating-icons { position: absolute; inset: 0; pointer-events: none; opacity: 0.05; color: var(--maroon); }
        .f-icon { position: absolute; }
        .f-icon:nth-child(1) { top: 15%; left: 10%; }
        .f-icon:nth-child(2) { top: 65%; right: 15%; }
        .f-icon:nth-child(3) { bottom: 15%; left: 25%; }
        .f-icon:nth-child(4) { top: 25%; right: 35%; }

        .hero-container { 
          max-width: 1400px; 
          margin: 0 auto; 
          display: grid; 
          grid-template-columns: 1.1fr 0.9fr; 
          gap: 5rem; 
          align-items: center; 
          width: 100%;
        }

        .hero-badge { 
          display: inline-flex; align-items: center; gap: 0.8rem; 
          background: rgba(139,28,61,0.06); border: 1px solid rgba(139,28,61,0.12); 
          padding: 0.6rem 1.2rem; border-radius: 50px; font-size: 0.85rem; 
          font-weight: 800; color: var(--maroon); margin-bottom: 2rem; 
        }
        .badge-icon { color: var(--gold); }

        .hero-content h1 { 
          font-family: 'Playfair Display', serif; 
          font-size: clamp(2.8rem, 6vw, 4.8rem); 
          font-weight: 900; line-height: 1.05; 
          color: var(--maroon); margin-bottom: 1.5rem; 
        }
        .hero-content h1 span { color: var(--gold); font-style: italic; }
        .hero-sub { font-size: 1.15rem; color: var(--text-light); line-height: 1.7; margin-bottom: 3rem; max-width: 520px; font-weight: 500; }
        
        .hero-btns { display: flex; gap: 1.5rem; margin-bottom: 4rem; flex-wrap: wrap; }
        .btn-primary { 
          background: linear-gradient(135deg, var(--maroon), var(--maroon-light)); 
          color: white; padding: 1.1rem 2.2rem; border-radius: 50px; 
          text-decoration: none; font-weight: 800; font-size: 1rem; 
          display: flex; align-items: center; gap: 1rem; 
          box-shadow: 0 10px 30px rgba(139,28,61,0.3); transition: 0.4s;
        }
        .btn-primary:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(139,28,61,0.45); }
        .btn-secondary { 
          background: white; color: var(--maroon); padding: 1.1rem 2.2rem; 
          border-radius: 50px; text-decoration: none; font-weight: 800; 
          font-size: 1rem; border: 2.5px solid var(--maroon); transition: 0.4s;
        }
        .btn-secondary:hover { background: var(--maroon); color: white; transform: translateY(-5px); }

        .hero-stats { display: flex; gap: 4rem; border-top: 1px solid rgba(0,0,0,0.06); padding-top: 2.5rem; }
        .stat-item { display: flex; flex-direction: column; }
        .stat-item strong { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--maroon); font-weight: 900; }
        .stat-item span { font-size: 0.75rem; color: var(--text-light); text-transform: uppercase; font-weight: 750; letter-spacing: 1px; }

        .img-stack { position: relative; height: 620px; }
        .img-main { width: 85%; height: 90%; object-fit: cover; border-radius: 32px; box-shadow: 0 40px 80px rgba(0,0,0,0.15); display: block; margin-left: auto; }
        .img-float-1 { position: absolute; left: 0; top: 15%; width: 45%; height: 50%; object-fit: cover; border-radius: 24px; border: 6px solid white; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .img-float-2 { position: absolute; left: 8%; bottom: 0; width: 40%; height: 42%; object-fit: cover; border-radius: 24px; border: 6px solid white; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        
        .experience-tag { 
          position: absolute; right: -20px; bottom: 80px; 
          background: white; padding: 1.2rem 1.8rem; border-radius: 20px; 
          box-shadow: 0 15px 40px rgba(0,0,0,0.08); 
          display: flex; align-items: center; gap: 1.2rem;
          border-left: 5px solid var(--gold);
        }
        .experience-tag div { display: flex; flex-direction: column; }
        .experience-tag strong { font-size: 1rem; color: var(--maroon); font-weight: 800; }
        .experience-tag span { font-size: 0.75rem; color: var(--text-light); font-weight: 600; }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .hero-sub, .hero-btns, .hero-stats { margin-left: auto; margin-right: auto; justify-content: center; }
          .img-stack { height: 480px; }
          .hero-content h1 { font-size: 3.5rem; }
          .experience-tag { right: 20px; }
        }
        @media (max-width: 600px) {
          .hero-content h1 { font-size: 2.8rem; }
          .hero-stats { gap: 2rem; }
          .img-stack { height: 350px; }
        }
      `}</style>
    </section>
  );
};

const StatItem = ({ num, label }) => (
  <div className="stat-item">
    <strong>{num}</strong>
    <span>{label}</span>
  </div>
);

export default Hero;
