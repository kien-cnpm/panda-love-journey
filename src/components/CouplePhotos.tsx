import { Card } from '@/components/ui/card';

const CouplePhotos = () => {
  return (
    <div className="min-h-screen bg-gradient-dreamy flex items-center justify-center p-4 relative">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-love-pink-light animate-float-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 15 + 20}px`,
            }}
          >
            {['🌸', '✨', '💕', '🦋'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-12 animate-fade-in-up">
          Những kỷ niệm đẹp của chúng ta 💕
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Photo placeholder 1 */}
          <Card className="p-8 shadow-romantic bg-card/90 backdrop-blur-sm border-love-pink-light animate-fade-in-up hover:scale-105 transition-all duration-300">
            <div className="aspect-square bg-gradient-romantic rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl animate-pulse-heart">📸</div>
            </div>
            <p className="text-lg font-medium text-foreground">
              Khoảnh khắc đầu tiên chúng ta bên nhau 💖
            </p>
          </Card>

          {/* Photo placeholder 2 */}
          <Card className="p-8 shadow-romantic bg-card/90 backdrop-blur-sm border-love-pink-light animate-fade-in-up hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-square bg-gradient-sunset rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl animate-pulse-heart">💑</div>
            </div>
            <p className="text-lg font-medium text-foreground">
              Những nụ cười hạnh phúc của chúng ta ✨
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 shadow-glow bg-card/95 backdrop-blur-sm border-love-pink-light animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-4xl mb-6 animate-pulse-heart">💐</div>
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Mỗi khoảnh khắc bên em đều đáng trân trọng
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Từ những buổi hẹn hò đầu tiên đến những giây phút ngọt ngào bên nhau, 
            anh luôn cảm thấy may mắn khi có em trong cuộc đời. 
            Em là điều tuyệt vời nhất đã đến với anh! 🌸💕
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CouplePhotos;