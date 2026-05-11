import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Cpu, 
  Binary, 
  Layers, 
  BrainCircuit, 
  Gamepad2, 
  Type, 
  Mic2, 
  Languages, 
  ChevronRight 
} from 'lucide-react';

const Programs = () => {
  const allPrograms = [
    { icon: <Calculator size={32} />, title: "Abacus – Junior & Senior", meta: ["Age: 5–14", "8 Levels", "1 Year/Level"], desc: "Develop lightning-fast mental arithmetic and concentration skills using the ancient Japanese Soroban abacus method." },
    { icon: <Cpu size={32} />, title: "Robotics & STEM", meta: ["Age: 7–16", "6 Levels", "6 Months/Level"], desc: "Hands-on learning with sensors, motors and programming to build real-world robots and solve engineering challenges." },
    { icon: <Binary size={32} />, title: "Vedic Mathematics", meta: ["Age: 8–16", "4 Levels", "6 Months/Level"], desc: "Ancient Indian mathematical techniques to solve complex problems in seconds. Build speed and accuracy." },
    { icon: <Layers size={32} />, title: "Rubik's Cube Mastery", meta: ["Age: 6–18", "50+ Cubes", "5 Days/Cube"], desc: "From beginner to speed cubing champion! Learn algorithms, spatial reasoning and problem-solving through this cognitive sport." },
    { icon: <BrainCircuit size={32} />, title: "Super Brain Program", meta: ["Age: 5–15", "3 Levels", "5 Months/Level"], desc: "Unlock the full potential of both brain hemispheres through proven techniques that enhance memory and sensory perception." },
    { icon: <Gamepad2 size={32} />, title: "Chess Training", meta: ["Age: 6–18", "6 Levels", "3 Months/Level"], desc: "Build strategic thinking, patience, and decision-making through structured chess training from basics up." },
    { icon: <Type size={32} />, title: "Phonics & Handwriting", meta: ["Age: 4–10", "3 Levels", "3 Months/Level"], desc: "Build strong reading foundations with systematic phonics instruction and beautiful handwriting development." },
    { icon: <Mic2 size={32} />, title: "Communication & Public Speaking", meta: ["Age: 8–18", "4 Levels", "3 Months/Level"], desc: "Transform shy learners into confident speakers. Master presentation, debate, storytelling, and leadership skills." },
    { icon: <Languages size={32} />, title: "Hindi Writing & Speaking", meta: ["Age: 6–16", "5 Levels", "6 Months/Level"], desc: "Comprehensive Hindi language program covering reading, writing, and conversation for all learners." },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="programs-page" style={{ marginTop: '70px' }}>
      <section className="programs" id="programs">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Curriculum</span>
          <h2 className="section-title">Professional Skill Programs</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '.5rem', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
            Empowering young minds with 21st-century cognitive skills, language mastery, and technical innovation.
          </p>
        </motion.div>
        
        <motion.div 
          className="programs-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {allPrograms.map((prog, index) => (
            <motion.div key={index} variants={item}>
              <ProgramCard 
                icon={prog.icon} 
                title={prog.title} 
                meta={prog.meta} 
                desc={prog.desc} 
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style jsx>{`
        .programs { padding: 100px 5%; background: white; min-height: 80vh; }
        .programs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2.5rem; }
        
        .prog-card { 
          background: #fff; 
          border-radius: var(--radius); 
          padding: 2.5rem; 
          border: 1px solid rgba(139, 28, 61, 0.06); 
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .prog-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 30px 60px rgba(139, 28, 61, 0.12);
          border-color: rgba(139, 28, 61, 0.15);
        }
        .prog-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 0;
          background: var(--maroon);
          transition: height 0.4s ease;
        }
        .prog-card:hover::before { height: 100%; }
        
        .prog-icon { color: var(--maroon); margin-bottom: 1.5rem; display: inline-flex; }
        .prog-card h4 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--maroon); margin-bottom: 1rem; }
        .prog-meta { display: flex; flex-wrap: wrap; gap: .6rem; margin-bottom: 1.2rem; }
        .prog-tag { 
          background: rgba(245,180,0,0.1); 
          color: #9a7200; 
          padding: .25rem .8rem; 
          border-radius: 50px; 
          font-size: .75rem; 
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .prog-desc { font-size: 0.95rem; color: var(--text-light); lineHeight: 1.7; margin-bottom: 2rem; flex-grow: 1; }
        .prog-enroll { 
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--maroon); 
          text-decoration: none; 
          font-weight: 800;
          font-size: 0.9rem;
          transition: 0.3s;
        }
        .prog-enroll span { border-bottom: 2px solid transparent; transition: 0.3s; }
        .prog-card:hover .prog-enroll span { border-color: var(--maroon); }
        .prog-enroll:hover { gap: 0.8rem; }
      `}</style>
    </div>
  );
};

const ProgramCard = ({ icon, title, meta, desc }) => (
  <div className="prog-card">
    <div className="prog-icon">{icon}</div>
    <h4>{title}</h4>
    <div className="prog-meta">
      {meta.map(m => <span key={m} className="prog-tag">{m}</span>)}
    </div>
    <p className="prog-desc">{desc}</p>
    <Link to="/contact" className="prog-enroll">
      <span>Enroll & Schedule Demo</span>
      <ChevronRight size={18} />
    </Link>
  </div>
);

export default Programs;