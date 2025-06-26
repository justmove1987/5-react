// App.tsx
import React, { useState } from 'react';
import Card from './Card';

interface TutorialStep {
  title: string;
  description: string;
  bgColor: string;
  image: string;
}

const App: React.FC = () => {
  // Pas 3: Definir les dades
  const tutorialData: TutorialStep[] = [
    {
      title: "Benvingut!",
      description: "Aquesta és la primera pantalla del teu onboarding.",
      bgColor: "#f0f0f0",
      image: "../src/assets/meditation.svg"
    },
    {
      title: "Funcionalitats",
      description: "Aquí aprendràs les funcionalitats clau.",
      bgColor: "#e0e0e0",
      image: "../src/assets/programming.svg"
    },
    {
      title: "Comencem!",
      description: "Ja pots començar a utilitzar l'aplicació.",
      bgColor: "#d0d0d0",
      image: "../src/assets/tine_managment.svg"
    }
  ];

  // Pas 4: Estat
  const [step, setStep] = useState<number>(0);

  // Pas 5: Dades actuals
  const currentCardData = tutorialData[step];

  return (
    <div>
      {/* Pas 2 i 6 */}
      <Card 
        title={currentCardData.title}
        description={currentCardData.description}
        image={currentCardData.image}
      />
    </div>
  );
};

export default App;
