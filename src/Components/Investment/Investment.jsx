import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaGraduationCap, FaVideo, FaMoneyBillWave, FaEthereum, FaEnvelope, FaTelegramPlane, FaWhatsapp, FaRocket } from 'react-icons/fa';
import './InvestmentPage.css';

const InvestmentPage = () => {
  return (
    <div className="investment-page">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="title"
      >
        Edubuk | Investment Opportunities
      </motion.h1>

      <motion.p
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Welcome to the official Investment Page of Edubuk — a globally awarded,
        blockchain-powered platform revolutionizing academic and professional credentials verification
        and emerging technologies education.
        <br /><br />
        Join us in building the future of education, identity, and employment.
      </motion.p>

      <section className="section about-section">
  <h2><FaGlobe /> About Edubuk</h2>
  <p className="about-intro">
    Edubuk is a one-stop platform for credential verification, skills development,
    and job-matching — powered by Blockchain + AI.
  </p>
  <div className="about-grid">
    <div className="about-card">
      <FaGraduationCap size={24} />
      <h4>CETA Program</h4>
      <p>Certified Emerging Technologies Analyst Program: Learn AI, Blockchain, Data Analytics, IoT, Cloud & more.</p>
    </div>
    <div className="about-card">
      <FaGraduationCap size={24} />
      <h4>eSeal & eVerify</h4>
      <p>Blockchain-based academic & professional certificates that are time-stamped and tamper-proof.</p>
    </div>
    <div className="about-card">
      <FaGraduationCap size={24} />
      <h4>CV-on-Chain</h4>
      <p>Blockchain-verified CVs and resumes, powered with AI job-matching for recruiters worldwide.</p>
    </div>
    <div className="about-card">
      <FaGraduationCap size={24} />
      <h4>AI Olympiad</h4>
      <p>Global competition testing skills in AI, Blockchain, Data Science, Robotics, and more.</p>
    </div>
  </div>
</section>


      <section className="section video-section">
        <h2><FaVideo /> Watch Edubuk in Action</h2>
        <div className="video-container">
          <iframe width="360" height="215" src="https://www.youtube.com/embed/5Cb6g7EEzAk?si=ILTH6o_E9nirqOr3&autoplay=1&mute=1" title="Video 1" frameBorder="0" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/CsrP58BXpTA?si=bfbQrsQAl51VJKPd&autoplay=1&mute=1" title="Video 2" frameBorder="0" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/fL4GB7rie54?si=lArzvbR6h4vLfQcg&autoplay=1&mute=1" title="Video 2" frameBorder="0" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/-EEe8-ogkwY?si=axYMLWozjH0ntv51&autoplay=1&mute=1" title="Video 2" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>

      <section className="section">
        <h2><FaMoneyBillWave /> Investment Options</h2>
        <div className="investment-option">
          <h3>Option 1: Invest in Equity</h3>
          <ul>
            <li>✅ For accredited investors or VCs</li>
            <li>💼 Back Edubuk as a startup in the EdTech x Blockchain space</li>
            <li>💵 Min Investment: $50,000</li>
            <li>💵 Max Investment: $150,000</li>
            <li>📄 Equity Terms, Deck & Docs shared upon registration</li>
          </ul>
          <a href="#" className="cta-button">👉 Click here to Invest in Equity</a>
        </div>

        <div className="investment-option">
          <h3>Option 2: Invest in EBUK Tokens <FaEthereum /></h3>
          <ul>
            <li>✅ For crypto investors and blockchain backers</li>
            <li>🔗 Native token powering the Edubuk dApp ecosystem</li>
            <li>💰 Min Investment: $2,000</li>
            <li>💰 Max Investment: $50,000</li>
            <li>📈 Tokenomics & whitepaper available post sign-up</li>
          </ul>
          <a href="https://ebukpresale.com" target='_blank' rel="noreferrer" className="cta-button">👉 Click here to Invest in Tokens (EBUK)</a>
        </div>

        <p className="dual-option">
          🔄 Want to invest in both?<br />
          You’re welcome to register for both independently.
          <br /><br />
          👉 <a href="#">Equity Link: iCapital tenant website</a><br />
          👉 <a href="https://ebukpresale.com">Token Link : https://ebukpresale.com</a>
        </p>
      </section>

      <section className="section">
        <h2>📧 Questions? Reach out.</h2>
        <p>
          <FaEnvelope /> investment@edubukeseal.org<br />
          <FaWhatsapp /> +91-9250411261<br />
          <FaTelegramPlane /> @edubukofficial
        </p>
      </section>

      <motion.div
        className="join"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <FaRocket /> Join the revolution.
        <p>Be part of a verified, borderless future of skills and credentials.</p>
      </motion.div>
    </div>
  );
};

export default InvestmentPage;
