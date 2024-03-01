// imports
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/user-service';

// Components
import NavBar from './components/Nav';


// Pages
import AuthPage from './pages/Auth/Auth';
import NewOrderPage from './pages/NewOrder/NewOrder';
import OrderHistoryPage from './pages/OrderHistory/OrderHistory';


function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user = {user} />

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
        <AuthPage setUser={setUser}/>
      }
    </main>
  )
}

export default App;
