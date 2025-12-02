import { useRef, useEffect, useMemo } from 'react';
import './ShapeBlur.css';

const ShapeBlur = ({
  variation = 0,
  shapeSize = 0.5,
  roundness = 0.5,
  borderSize = 0.05,
  circleSize = 0.5,
  circleEdge = 1,
  colors = ['#6366f1', '#a855f7', '#ec4899', '#10b981'],
  blur = 100,
  className = '',
}) => {
  const canvasRef = useRef(null);

  const shapes = useMemo(() => {
    return colors.map((color, i) => ({
      color,
      x: 0.2 + (i * 0.2),
      y: 0.3 + (i % 2 === 0 ? 0.2 : 0),
      size: shapeSize * (0.8 + Math.random() * 0.4),
      speed: 0.0005 + Math.random() * 0.001,
      offset: i * Math.PI * 0.5,
    }));
  }, [colors, shapeSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      shapes.forEach((shape) => {
        const x = width * (shape.x + Math.sin(time * shape.speed + shape.offset) * 0.1);
        const y = height * (shape.y + Math.cos(time * shape.speed * 0.7 + shape.offset) * 0.1);
        const size = Math.min(width, height) * shape.size;

        // Create gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, shape.color);
        gradient.addColorStop(0.5, shape.color + '80');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        if (roundness > 0.5) {
          ctx.arc(x, y, size, 0, Math.PI * 2);
        } else {
          // Blob shape
          ctx.moveTo(x + size, y);
          for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
            const r = size * (1 + Math.sin(angle * 3 + time * 0.001) * (1 - roundness) * 0.3);
            ctx.lineTo(
              x + Math.cos(angle) * r,
              y + Math.sin(angle) * r
            );
          }
        }
        
        ctx.closePath();
        ctx.fill();
      });

      time++;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [shapes, roundness]);

  return (
    <div className={`shape-blur-container ${className}`}>
      <canvas
        ref={canvasRef}
        className="shape-blur-canvas"
        style={{ filter: `blur(${blur}px)` }}
      />
    </div>
  );
};

export default ShapeBlur;

