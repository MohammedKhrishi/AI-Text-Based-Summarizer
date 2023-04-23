import HeroSection from "./components/HeroSection";
import DemoSection from "./components/DemoSection";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <HeroSection />
        <DemoSection />
      </div>
    </main>
  );
};

export default App;
