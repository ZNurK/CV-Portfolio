import React, { useRef, useEffect } from 'react';

const ParticleFlowBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  const PARTICLE_COUNT = 70;
  const PARTICLE_COLOR = 'rgba(255, 255, 255, 0.4)';
  const SPEED = 0.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const initParticles = () => {
      particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.5 + Math.random() * 2,
        vy: SPEED + Math.random() * 0.5,
      }));
    };

    const draw = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsl(${200 + Math.sin(time * 0.0005) * 30}, 70%, 30%)`);
      gradient.addColorStop(0.5, `hsl(${240 + Math.cos(time * 0.0007) * 30}, 80%, 25%)`);
      gradient.addColorStop(1, `hsl(${280 + Math.sin(time * 0.0006) * 30}, 60%, 35%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
      });
    };

    const update = () => {
      particles.current.forEach(p => {
        p.y += p.vy;
        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
      });
    };

    const animate = () => {
      time += 1;
      update();
      draw();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    setCanvasSize();
    initParticles();
    animate();

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'blur(12px)',
      }}
    />
  );
};

export default ParticleFlowBackground;
