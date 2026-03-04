// Arquivo: src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';

import arco from './assets/arco.png';
import boneco from './assets/boneco.png';
import fundo from './assets/fundo.png';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <LogoAnimado />

        <img
          src={fundo}
          alt="Imagem institucional"
          style={styles.fundo}
        />
      </div>
    </div>
  );
}

const LogoAnimado = () => {

  // 1️⃣ ARCO GIRANDO + FADE IN
  const spinTransition = {
    hidden: {
      rotate: -180,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // 2️⃣ BONECO FADE IN
  const fadeTransition = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
        delay: 1.0
      }
    }
  };

  return (
    <div style={styles.logoContainer}>
      
      {/* ARCO COLORIDO (GIRA) */}
      <motion.img
        src={arco}
        alt="Arco giratório"
        initial="hidden"
        animate="visible"
        variants={spinTransition}
        style={styles.arco}
      />

      {/* BONECO CENTRAL (FADE IN) */}
      <motion.img
        src={boneco}
        alt="Boneco"
        initial="hidden"
        animate="visible"
        variants={fadeTransition}
        style={styles.boneco}
      />     

    </div>
    
  );
};

// ESTILOS
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    margin: 0
  },

  contentWrapper: {
    width: '300px', // mesma largura do logo
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px'
  },

  fundo: {
    width: '100%',
    objectFit: 'contain',
    opacity: 0.85
  },

  logoContainer: {
    position: 'relative',
    width: '300px',
    height: '300px'
  },

  arco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },

  boneco: {
    position: 'absolute',
    width: '42%',
    height: '42%',
    top: '27%',
    left: '28%',
    objectFit: 'contain'
  }
};

export default App;