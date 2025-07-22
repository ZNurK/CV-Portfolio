import React, { useRef, useEffect } from 'react';

const ParticleFlowBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const shootingStars = useRef([]);
  const animationFrameId = useRef(null);

  const PARTICLE_COUNT = 400;
  const PARTICLE_COLOR = 'white';
  const SPEED = 0.3;

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
        radius: 0.7 + Math.random() * 1.2,
        vy: SPEED + Math.random() * 0.5,
      }));
    };

    const createShootingStar = () => {
      shootingStars.current.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: 100 + Math.random() * 60, // daha kısa
        speed: 12 + Math.random() * 6,    // daha hızlı
        angle: Math.PI / 3,
        alpha: 1,
      });
    };

    const draw = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsl(${200 + Math.sin(time * 0.0005) * 30}, 70%, 30%)`);
      gradient.addColorStop(0.5, `hsl(${240 + Math.cos(time * 0.0007) * 30}, 80%, 25%)`);
      gradient.addColorStop(1, `hsl(${280 + Math.sin(time * 0.0006) * 30}, 60%, 35%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Parçacıklar (yıldızlar)
      particles.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Kayan yıldızlar
      shootingStars.current.forEach((s, index) => {
        const dx = Math.cos(s.angle) * s.length;
        const dy = Math.sin(s.angle) * s.length;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + dx, s.y + dy);
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.05; // daha kısa ömür

        if (s.alpha <= 0 || s.x > width || s.y > height) {
          shootingStars.current.splice(index, 1);
        }
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

    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        createShootingStar();
      }
    }, 2000); // daha sık (her 2 saniyede bir olasılıkla)

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      clearInterval(shootingStarInterval);
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
        filter: 'blur(1px)',
      }}
    />
  );
};

export default ParticleFlowBackground;
