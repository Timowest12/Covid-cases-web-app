import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import { getAllData } from './API';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store';
import InfoPage from './pages/InfoPage';
import Navbar from './components/Navbar';


function App() {
  
  
  return (
    <div className="App">
       <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Main /></>}>
          <Route index element={<Navbar />} />

        </Route>
        <Route path="/infopage/:country" element={<InfoPage />}>
          {/* <Route index element={<Main />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
