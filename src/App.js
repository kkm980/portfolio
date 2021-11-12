import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import ParticleAnimation from 'react-particle-animation'

import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';



function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
       <ParticleAnimation 
          style={{ height: '96vh'}}
          background={{ r: 21, g: 22, b: 23, a: 1 }}
          particleSpeed={0.2}
          particleRadius={1}
          color={{ r: 158, g: 217, b: 200, a: 255 }}
        />
      
      { 
        // 
        // <Header />
        // 
        // 
    //   <ParticleAnimation 
    //   style={{ height: '96vh'}}
    //   background={{ r: 21, g: 22, b: 23, a: 1 }}
    //   particleSpeed={1}
    //   particleRadius={2}
    //   color={{ r: 158, g: 217, b: 249, a: 255 }}
    // />
      }
     
     <Technologies />
     <Portfolio />
     <ContactMe />
      
     
      
      
      
    </div>
  );
}

export default App;