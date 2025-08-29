import { useEffect, useState } from 'react';

interface AnimatedCarProps {
  onAnimationComplete: () => void;
}

const AnimatedCar = ({ onAnimationComplete }: AnimatedCarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-dreamy flex items-center justify-center overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-love-pink-light text-2xl animate-float-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Car animation */}
      <div className="absolute bottom-1/3 w-full">
        <div className="animate-drive-car flex items-center">
          <div className="relative">
            <div className="text-8xl">🚗</div>
            <div className="absolute -top-4 left-4 text-5xl">🐼</div>
          </div>
        </div>
      </div>

      {/* Sweet message */}
      <div className="absolute top-1/4 text-center px-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
          Chúc em những chuyến đi thật tuyệt vời! 🌸
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Mỗi con đường em đi qua đều có anh đồng hành cùng em. 
          Hãy luôn mỉm cười và tự tin trong mọi hành trình nhé! ✨
        </p>
      </div>
    </div>
  );
};

export default AnimatedCar;