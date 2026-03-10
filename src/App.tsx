import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Footer from './components/Footer';
import MembershipForm from './components/MembersipForm';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Pricing />
      <Trainers />
      <MembershipForm/>
      <Footer />
      
    </div>
  );
}

export default App;
