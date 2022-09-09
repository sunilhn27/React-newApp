
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
         <News/>
         <Footer/>
       
      </header>
    </div>
  );
}

export default App;
