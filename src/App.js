import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
