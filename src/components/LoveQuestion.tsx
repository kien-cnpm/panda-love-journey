import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface LoveQuestionProps {
  onYesClick: () => void;
}

const LoveQuestion = ({ onYesClick }: LoveQuestionProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const messages = [
    "Thật sự không? 🥺",
    "Anh buồn quá... 😢",
    "Em nghĩ lại đi! 💔",
    "Anh sẽ khóc đấy! 😭",
    "Lần cuối nha em! 🙏"
  ];

  const handleNoClick = () => {
    setNoButtonClicks(prev => prev + 1);
    
    // Move button to random position
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 50;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen bg-gradient-romantic flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-love-pink animate-float-hearts text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Main question card */}
      <Card className="relative z-10 p-8 md:p-12 max-w-md mx-auto text-center shadow-romantic bg-card/95 backdrop-blur-sm border-love-pink-light">
        <div className="animate-pulse-heart text-6xl mb-6">❤️</div>
        
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Em có yêu anh không?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Hãy trả lời thật lòng nhé! 💕
        </p>

        {noButtonClicks > 0 && (
          <p className="text-love-pink-dark font-medium mb-4 animate-fade-in-up">
            {messages[Math.min(noButtonClicks - 1, messages.length - 1)]}
          </p>
        )}

        <div className="flex gap-4 justify-center">
          <Button
            onClick={onYesClick}
            className="bg-love-pink hover:bg-love-pink-dark text-white px-8 py-3 text-lg font-medium rounded-full shadow-soft transition-all duration-300 hover:scale-105"
          >
            Có ❤️
          </Button>
        </div>
      </Card>

      {/* Moving "No" button */}
      <Button
        ref={noButtonRef}
        onClick={handleNoClick}
        className="fixed bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 text-lg font-medium rounded-full shadow-soft transition-all duration-300 hover:scale-105 animate-bounce-away z-20"
        style={{
          left: noButtonPosition.x || '50%',
          top: noButtonPosition.y || '60%',
          transform: noButtonPosition.x === 0 ? 'translateX(-50%)' : 'none',
        }}
      >
        Không 💔
      </Button>
    </div>
  );
};

export default LoveQuestion;