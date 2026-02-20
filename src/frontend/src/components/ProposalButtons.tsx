import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ProposalButtonsProps {
  onYesClick: () => void;
}

function ProposalButtons({ onYesClick }: ProposalButtonsProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);

  // Initialize No button position to center
  useEffect(() => {
    setNoButtonPosition({ top: 0, left: 0 });
  }, []);

  const moveNoButton = () => {
    // Generate random position within safe bounds
    // Use viewport-relative positioning to ensure button stays visible
    const maxTop = 60; // percentage
    const maxLeft = 60; // percentage
    const minTop = -60;
    const minLeft = -60;

    const newTop = Math.random() * (maxTop - minTop) + minTop;
    const newLeft = Math.random() * (maxLeft - minLeft) + minLeft;

    setNoButtonPosition({ top: newTop, left: newLeft });
    setIsNoButtonMoving(true);

    // Reset moving state after animation
    setTimeout(() => setIsNoButtonMoving(false), 300);
  };

  const handleNoHover = () => {
    moveNoButton();
  };

  const handleNoTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center relative min-h-[120px]">
      {/* Yes Button - stationary */}
      <Button
        onClick={onYesClick}
        size="lg"
        className="bg-romantic-dark hover:bg-romantic-medium text-white font-bold text-xl sm:text-2xl px-12 sm:px-16 py-6 sm:py-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 min-w-[160px] sm:min-w-[200px]"
      >
        Yes! 💖
      </Button>

      {/* No Button - moves on hover/touch */}
      <div className="relative">
        <Button
          variant="outline"
          size="lg"
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoTouch}
          style={{
            position: isNoButtonMoving ? 'absolute' : 'relative',
            top: isNoButtonMoving ? `${noButtonPosition.top}%` : 'auto',
            left: isNoButtonMoving ? `${noButtonPosition.left}%` : 'auto',
            transition: 'all 0.3s ease-out',
          }}
          className="border-2 border-romantic-medium text-romantic-medium hover:bg-romantic-light/20 font-bold text-xl sm:text-2xl px-12 sm:px-16 py-6 sm:py-8 rounded-full shadow-lg min-w-[160px] sm:min-w-[200px] cursor-pointer touch-none"
        >
          No
        </Button>
      </div>
    </div>
  );
}

export default ProposalButtons;
