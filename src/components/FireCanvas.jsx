import { useEffect, useRef } from 'react';

export default function FireCanvas({ className = '', intensity = 1, fixed = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w = 0;
    let h = 0;

    const resize = () => {
      if (fixed) {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      } else {
        const rect = canvas.parentElement.getBoundingClientRect();
        w = canvas.width = rect.width;
        h = canvas.height = rect.height;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const emberCount = Math.floor(46 * intensity);
    const flameCount = Math.floor(24 * intensity);

    const makeEmber = (randomY = false) => ({
      x: Math.random() * (w || 1200),
      y: randomY ? Math.random() * (h || 800) : (h || 800) + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -(0.6 + Math.random() * 1.45),
      size: 1.1 + Math.random() * 2.4,
      alpha: 0.25 + Math.random() * 0.65,
      flickerSpeed: 0.03 + Math.random() * 0.06,
      phase: Math.random() * Math.PI * 2,
      hue: 14 + Math.random() * 26,
    });

    const makeFlame = () => ({
      x: Math.random() * (w || 1200),
      y: (h || 800) + 20 + Math.random() * 40,
      vy: -(0.35 + Math.random() * 0.65),
      radius: 45 + Math.random() * 85,
      alpha: 0.035 + Math.random() * 0.075,
      life: Math.random(),
      decay: 0.003 + Math.random() * 0.004,
      sway: (Math.random() - 0.5) * 0.6,
    });

    const embers = Array.from({ length: emberCount }, () => makeEmber(true));
    const flames = Array.from({ length: flameCount }, () => makeFlame());

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'screen';

      // Resplandor cálido de brasa en la base de la pantalla
      const baseGlow = ctx.createLinearGradient(0, h, 0, h - Math.min(h * 0.4, 240));
      baseGlow.addColorStop(0, 'rgba(196, 65, 28, 0.20)');
      baseGlow.addColorStop(0.45, 'rgba(196, 85, 45, 0.06)');
      baseGlow.addColorStop(1, 'rgba(196, 85, 45, 0)');
      ctx.fillStyle = baseGlow;
      ctx.fillRect(0, 0, w, h);

      // Lenguas de fuego difusas en la parte baja
      for (let i = 0; i < flames.length; i++) {
        const f = flames[i];
        f.y += f.vy;
        f.x += Math.sin(f.life * 8) * f.sway;
        f.life += f.decay;

        if (f.life >= 1 || f.y < h * 0.45) {
          flames[i] = makeFlame();
          continue;
        }

        const fade = Math.sin(f.life * Math.PI);
        const r = f.radius * (1 - f.life * 0.35);
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r);
        g.addColorStop(0, `rgba(255, 145, 55, ${f.alpha * fade * 1.4})`);
        g.addColorStop(0.5, `rgba(196, 70, 28, ${f.alpha * fade})`);
        g.addColorStop(1, 'rgba(196, 70, 28, 0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(f.x, f.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Chispas y brasas vivas subiendo por la pantalla
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.phase += e.flickerSpeed;
        e.x += e.vx + Math.sin(e.phase * 0.7) * 0.28;
        e.y += e.vy;

        if (e.y < -20 || e.x < -20 || e.x > w + 20) {
          embers[i] = makeEmber(false);
          continue;
        }

        const heightRatio = Math.max(0, Math.min(1, e.y / (h || 1)));
        const flicker = 0.65 + Math.sin(e.phase) * 0.35;
        const a = e.alpha * flicker * heightRatio;

        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 5);
        glow.addColorStop(0, `hsla(${e.hue}, 95%, 62%, ${a})`);
        glow.addColorStop(0.4, `hsla(${e.hue - 6}, 90%, 48%, ${a * 0.45})`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${e.hue + 12}, 100%, 82%, ${Math.min(1, a * 1.3)})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * 0.85, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [intensity, fixed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${fixed ? 'fixed inset-0 z-20 h-screen w-screen' : 'absolute inset-0 h-full w-full'} ${className}`}
    />
  );
}
