import { useRef, useEffect, useState } from 'react';
import './GlassSurface.css';

const GlassSurface = ({
  children,
  width = '100%',
  height = 'auto',
  borderRadius = 16,
  className = '',
  displace = 10,
  distortionScale = -100,
  brightness = 50,
  opacity = 0.9,
  blur = 8,
  style = {},
}) => {
  const glassRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    if (!glassRef.current) return;
    const rect = glassRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0.5, y: 0.5 });
  };

  return (
    <div
      ref={glassRef}
      className={`glass-surface ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glass layers */}
      <div 
        className="glass-backdrop"
        style={{
          backdropFilter: `blur(${blur}px) brightness(${brightness}%)`,
          WebkitBackdropFilter: `blur(${blur}px) brightness(${brightness}%)`,
        }}
      />
      
      {/* Refraction effect */}
      <div 
        className="glass-refraction"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)`,
          opacity: opacity,
        }}
      />
      
      {/* Border glow */}
      <div className="glass-border" />
      
      {/* Shine effect */}
      <div 
        className="glass-shine"
        style={{
          background: `linear-gradient(${135 + (mousePos.x - 0.5) * 30}deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)`,
        }}
      />
      
      {/* Content */}
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;

