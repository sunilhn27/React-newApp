
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/general" key="general" element={<News pageSize={5} country="in" category="general" />} />
          <Route exact path="/business" key="business" element={<News pageSize={8} country="in" category="business" />} />
          <Route exact path="/entertainment" key="entertainment" element={<News pageSize={5} country="in" category="entertainment" />} />
          <Route exact path="/health" key="health" element={<News pageSize={5} country="in" category="health" />} />
          <Route exact path="/science" key="science" element={<News pageSize={5} country="in" category="science" />} />
          <Route exact path="/sports" key="sports" element={<News pageSize={5} country="in" category="sports" />} />
          <Route exact path="/technology" key="technology" element={<News pageSize={5} country="in" category="technology" />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}
//pageSize={5}

export default App;
