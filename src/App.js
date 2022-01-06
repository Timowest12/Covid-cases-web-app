import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './pages/Main';
import store from './redux/store';
import InfoPage from './pages/InfoPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Navbar page="World data" />
                  <Main />
                </>
)}
            >
              <Route index element={<Navbar />} />

            </Route>
            <Route
              path="/infopage/:country"
              element={(
                <>
                  <Navbar page="Country data" />
                  <InfoPage />
                </>
)}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
