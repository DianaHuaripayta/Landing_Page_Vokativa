import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <div className="glitch-window">
          <div className="glitch" data-text="Página no encontrada">Página no encontrada</div>
        </div>
        <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <div className="not-found-actions">
          <button onClick={() => navigate('/')} className="primary-button">
            Ir al inicio
          </button>
          <button onClick={() => navigate(-1)} className="secondary-button">
            Volver atrás
          </button>
        </div>
      </div>

      <style jsx>{`
        .not-found-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          color: white;
          font-family: 'Arial', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .not-found-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 35%, rgba(110, 95, 248, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 75% 65%, rgba(205, 95, 248, 0.15) 0%, transparent 25%);
        }

        .not-found-content {
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          z-index: 10;
        }

        h1 {
          font-size: 8rem;
          margin: 0;
          background: linear-gradient(to right, #6e5ff8, #cd5ff8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 800;
          letter-spacing: -5px;
          text-shadow: 3px 3px 10px rgba(206, 95, 248, 0.3);
        }

        .glitch-window {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
        }

        .glitch {
          font-size: 2rem;
          font-weight: bold;
          text-transform: uppercase;
          position: relative;
          animation: glitch 1s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #cd5ff8;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #6e5ff8;
          clip: rect(24px, 450px, 36px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(16px, 9999px, 84px, 0);
          }
          20% {
            clip: rect(33px, 9999px, 144px, 0);
          }
          40% {
            clip: rect(20px, 9999px, 22px, 0);
          }
          60% {
            clip: rect(62px, 9999px, 78px, 0);
          }
          80% {
            clip: rect(15px, 9999px, 34px, 0);
          }
          100% {
            clip: rect(24px, 9999px, 96px, 0);
          }
        }

        @keyframes glitch-anim2 {
          0% {
            clip: rect(82px, 9999px, 39px, 0);
          }
          20% {
            clip: rect(54px, 9999px, 63px, 0);
          }
          40% {
            clip: rect(41px, 9999px, 80px, 0);
          }
          60% {
            clip: rect(17px, 9999px, 27px, 0);
          }
          80% {
            clip: rect(76px, 9999px, 85px, 0);
          }
          100% {
            clip: rect(21px, 9999px, 49px, 0);
          }
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          opacity: 0.8;
        }

        .not-found-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .primary-button, .secondary-button {
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-button {
          background: linear-gradient(to right, #6e5ff8, #cd5ff8);
          color: white;
          box-shadow: 0 4px 15px rgba(110, 95, 248, 0.4);
        }

        .secondary-button {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(110, 95, 248, 0.6);
        }

        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 6rem;
          }

          .glitch {
            font-size: 1.5rem;
          }

          p {
            font-size: 1rem;
          }

          .not-found-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .primary-button, .secondary-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;