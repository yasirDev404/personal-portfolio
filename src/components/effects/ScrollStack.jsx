import { useRef, useEffect, useState, Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, className = '', style = {} }) => {
  return (
    <div className={`scroll-stack-item ${className}`} style={style}>
      {children}
    </div>
  );
};

const ScrollStack = ({ 
  children, 
  className = '',
  itemHeight = 400,
  gap = 20,
  sticky = true,
}) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const items = Children.toArray(children);
  const itemCount = items.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    // Calculate total scroll height needed
    const height = itemCount * itemHeight + (itemCount - 1) * gap + window.innerHeight;
    setContainerHeight(height);
  }, [itemCount, itemHeight, gap]);

  return (
    <div 
      ref={containerRef}
      className={`scroll-stack-container ${className}`}
      style={{ height: containerHeight }}
    >
      <div className={`scroll-stack-sticky ${sticky ? 'is-sticky' : ''}`}>
        {items.map((child, index) => (
          <ScrollStackCard
            key={index}
            index={index}
            totalItems={itemCount}
            scrollProgress={scrollYProgress}
            itemHeight={itemHeight}
          >
            {child}
          </ScrollStackCard>
        ))}
      </div>
    </div>
  );
};

const ScrollStackCard = ({ 
  children, 
  index, 
  totalItems, 
  scrollProgress, 
  itemHeight,
}) => {
  const startProgress = index / totalItems;
  const endProgress = (index + 1) / totalItems;
  
  const y = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [100 + index * 30, 0]
  );

  const scale = useTransform(
    scrollProgress,
    [startProgress, endProgress, endProgress + 0.1],
    [0.9, 1, 0.95]
  );

  const opacity = useTransform(
    scrollProgress,
    [startProgress - 0.1, startProgress, endProgress, endProgress + 0.15],
    [0, 1, 1, 0.3]
  );

  const rotateX = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [15, 0]
  );

  return (
    <motion.div
      className="scroll-stack-card"
      style={{
        y,
        scale,
        opacity,
        rotateX,
        zIndex: totalItems - index,
        height: itemHeight,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollStack;

