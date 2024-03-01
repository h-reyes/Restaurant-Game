import { useState, useEffect, useRef } from "react";
// import * as itemsAPI from "../../utilities/items-api";
// import * as ordersAPI from "../../utilities/orders-api";
import styles from "./Clicker.module.css";
import { Link, useNavigate } from "react-router-dom";
// components
import Logo from "../../components/Logo/Logo";
// import MenuList from "../../components/MenuList/MenuList";
// import CategoryList from "../../components/CategoryList/CategoryList";
// import OrderDetail from "../../components/OrderDetail/OrderDetail";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";

const Clicker = () => {
  const [points, setPoints] = useState(0);

  const increasePoints = () => {
    setPoints(points + 1);
  };
// remove reset no one wants to lose points
//   const resetPoints = () => {
//     setPoints(0);
//   };

  return (
    <div >
      <h1>Earn Points</h1>
      <p>Points: {points}</p>
      <button onClick={increasePoints}
      style={{
        backgroundImage: "../../../public/pixil-frame-0.png",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        height: '50px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      >Earn Points</button>

      <aside className={styles.aside}>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <Link to="/orders" className="button btn-sm">
          PREVIOUS ORDERS
        </Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>

    </div>
  );
};

export default Clicker;
