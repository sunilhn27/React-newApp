
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
          <Route exact path="/general" element={<News key="general" pageSize={8} country="in" category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSize={8} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News pageSize={8} key="health" country="in" category="health" />} />
          <Route exact path="/science" element={<News pageSize={8} key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={<News pageSize={8} key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News pageSize={8} key="technology" country="in" category="technology" />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}
//pageSize={8}

export default App;
