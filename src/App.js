import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* <Route index element={<Main />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
