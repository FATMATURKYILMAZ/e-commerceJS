import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import PageContainers from './containers/PageContainers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
function App() {
  return (
    <div>
      <PageContainers>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
          </Routes>
        </Router>
      </PageContainers>
    </div>
  );
}

export default App;
