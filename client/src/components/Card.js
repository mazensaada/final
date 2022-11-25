import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delProduct } from "../JS/productSlice/productSlice";
import "./Card.css";
import UpdateProduit from "./Update";

const Card = ({ el,ping,setPing }) => {
  const dispatch = useDispatch();
  const user=useSelector(state=>state.user?.user)
  const [show, setShow] = useState(false)
  return (
    show ? <UpdateProduit produit={el} setShow={setShow} ping={ping} setPing={setPing}/> :
    <div className="Card">
      <div className="card_image ">
        <img src={el?.image} alt=""></img>
      </div>
      <div className="card_details">
        <h1>{el?.name}</h1>
        <h3>{el?.prix}</h3>
        <h3>{el?.coleur}</h3>
        <h3>{el?.type}</h3>
        {user?.isAdmin && <>
          <button
          onClick={(e) => {
            dispatch(delProduct({ id: el?._id }));
            setPing(!ping)
          }}
        >
          delete
        </button>
        <button onClick={()=>setShow(true)}>update</button>
        </>}
      </div>
      
    </div>
  );
};

export default Card;
{
  /* <div className="voyage"> */
}
{
  /* <div className="voyageimage ">
      <img src={voyage?.photos} ></img>
       </div>
          <div className='containerVoyage'>
            <h2> {voyage?.name}</h2>
            <ReactStars
    count={voyage?.nb_etoile}
    size={24}
    activeColor="#ffd700"
  />
  <p> {voyage?.type}</p>
          </div>
          <div className='btn-price'>
            <h3>{voyage?.prix}</h3>
             
            <Link to={`/details/${voyage?.name}`} state={{ voyage }}>
            <button> 
              voir offre</button>
              </Link>
          </div>
    </div> */
}
