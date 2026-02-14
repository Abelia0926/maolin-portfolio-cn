import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Navbar from './components/Navbar.jsx'; 
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <> 
      <Navbar />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory sm:snap-none md:snap-y md:snap-mandatory">
        {/* <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:200%_200%] animate-[gradient-x_8s_ease_infinite]"> */}
        <div className="bg-slate-100">
          <section id='home' className='snap-start min-h-screen'>
            <Header />
          </section>
          <section id='about' className='snap-start min-h-screen'>
            <About />
          </section>
          <section id='skills' className='snap-start min-h-screen'>
            <Skills />
          </section>
          <section id='experience' className='snap-start min-h-screen'>
            <Experience />
          </section>
          <section id='projects' className='snap-start min-h-screen'>
            <Projects />
          </section>
          <section id='contact' className='snap-start min-h-screen'>
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;