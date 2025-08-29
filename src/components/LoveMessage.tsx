import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const LoveMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const loveMessages = [
    "Anh cũng yêu em rất nhiều! 💕",
    "Em là ánh sáng trong cuộc đời anh ✨",
    "Mỗi ngày bên em đều là món quà tuyệt vời 🎁",
    "Cảm ơn em đã đến bên anh 🌸",
    "Anh hứa sẽ luôn yêu thương và bảo vệ em 💖",
    "Em là người duy nhất anh muốn ở bên suốt đời 👫",
    "Tình yêu của chúng ta sẽ mãi mãi bền vững! 💑"
  ];

  return (
    <div className="min-h-screen bg-gradient-sunset flex items-center justify-center p-4 relative overflow-hidden">
      {/* Celebration hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 15}px`,
            }}
          >
            {['💖', '💕', '💗', '💝', '💘', '🌸', '✨', '🎉'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main celebration */}
        <div className="animate-fade-in-up mb-12">
          <div className="text-8xl mb-6 animate-pulse-heart">🎉</div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-8">
            Anh cũng yêu em! 💖
          </h1>
        </div>

        {/* Love messages grid */}
        <div className="grid gap-6 md:gap-8">
          {loveMessages.map((message, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 shadow-romantic bg-card/90 backdrop-blur-sm border-love-pink-light transition-all duration-500 hover:scale-105 hover:shadow-glow ${
                showMessage ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                {message}
              </p>
            </Card>
          ))}
        </div>

        {/* Final message */}
        <Card 
          className={`mt-12 p-8 md:p-12 shadow-glow bg-gradient-romantic border-0 text-white transition-all duration-500 ${
            showMessage ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: `${loveMessages.length * 0.3}s`,
          }}
        >
          <div className="text-4xl mb-4 animate-pulse-heart">💑</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Forever & Always
          </h2>
          <p className="text-lg md:text-xl">
            Tình yêu của chúng ta sẽ vượt qua mọi thử thách. 
            Anh yêu em từ hôm nay đến mãi mãi! 💕✨
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoveMessage;