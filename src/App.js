// imports
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import NavBar from './components/Nav';


// Pages
import AuthPage from './pages/Auth/Auth';
import NewOrderPage from './pages/NewOrder/NewOrder';
import OrderHistoryPage from './pages/OrderHistory/OrderHistory';


function App() {
  const [user, setUser] = useState({})

  return (
    <main className="App">
      {user ?
        <>
          <NavBar />

          <Routes>
            <Route
              path="/orders/new"
              element={<NewOrderPage />}
            />
            <Route
              path="/orders"
              element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  )
}

export default App;
