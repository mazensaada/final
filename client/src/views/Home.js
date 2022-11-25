import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import "../App.css";
import { Link } from "react-router-dom";

const Home = ({ ping, setPing }) => {
  const produits = useSelector((state) => state.product.produits);
  return (
    <div style={{width:"100vw"}}>
      <Link className="addbtn" to="/add">ADD Product</Link>

      <div className="containerList">
        {produits?.map((el) => (
          <Card el={el} ping={ping} setPing={setPing} />
        ))}
      </div>
    </div>
  );
};

export default Home;
