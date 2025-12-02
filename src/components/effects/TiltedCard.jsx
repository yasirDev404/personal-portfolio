import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './TiltedCard.css';

const TiltedCard = ({
  imageSrc,
  altText = "Card image",
  captionText,
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 12,
  scaleOnHover = 1.1,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent,
  children,
  className = '',
}) => {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateY = ((mouseX - width / 2) / width) * rotateAmplitude;
    const rotateX = ((height / 2 - mouseY) / height) * rotateAmplitude;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`tilted-card-container ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: isHovering ? scaleOnHover : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="tilted-card-inner">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={altText}
            className="tilted-card-image"
            style={{ width: imageWidth, height: imageHeight }}
          />
        ) : (
          <div className="tilted-card-content" style={{ width: imageWidth, height: imageHeight }}>
            {children}
          </div>
        )}
        
        {displayOverlayContent && overlayContent && (
          <div className="tilted-card-overlay">
            {overlayContent}
          </div>
        )}
        
        {showTooltip && captionText && isHovering && (
          <motion.div
            className="tilted-card-tooltip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {captionText}
          </motion.div>
        )}
        
        {/* Shine effect */}
        <div 
          className="tilted-card-shine"
          style={{
            background: `linear-gradient(${105 + rotate.y * 2}deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default TiltedCard;

