import { useState } from 'react';
import AnimatedCar from '@/components/AnimatedCar';
import CouplePhotos from '@/components/CouplePhotos';
import LoveQuestion from '@/components/LoveQuestion';
import LoveMessage from '@/components/LoveMessage';

type Stage = 'car' | 'photos' | 'question' | 'message';

const Index = () => {
  const [currentStage, setCurrentStage] = useState<Stage>('car');

  const handleCarComplete = () => {
    setCurrentStage('photos');
    setTimeout(() => setCurrentStage('question'), 4000);
  };

  const handleYesClick = () => {
    setCurrentStage('message');
  };

  const renderCurrentStage = () => {
    switch (currentStage) {
      case 'car':
        return <AnimatedCar onAnimationComplete={handleCarComplete} />;
      case 'photos':
        return <CouplePhotos />;
      case 'question':
        return <LoveQuestion onYesClick={handleYesClick} />;
      case 'message':
        return <LoveMessage />;
      default:
        return <AnimatedCar onAnimationComplete={handleCarComplete} />;
    }
  };

  return (
    <div className="relative">
      {renderCurrentStage()}
    </div>
  );
};

export default Index;
