import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, upProduct } from '../JS/productSlice/productSlice';

const UpdateProduit = ({ produit, setShow,ping,setPing }) => {
  const dispatch = useDispatch()
  const [newproduit, setNewproduit] = useState({});

  const handleChange = (event) => {
    setNewproduit({ ...newproduit, [event.target.name]: event.target.value });
    event.preventDefault();
  };
  return (<div className='AddProduit-container'>
    <h1>Update Produit</h1>
    <div>
      <input defaultValue={produit?.name} name='name' type="text" placeholder='Type title...'
        onChange={handleChange} />
      <input defaultValue={produit?.prix} name='prix' type="text" placeholder='prix...'
        onChange={handleChange} />
      <input defaultValue={produit?.coleur} name='coleur' type="text" placeholder='coleur...'
        onChange={handleChange} />
      <input defaultValue={produit?.type} name='type' type="text" placeholder='Type rating...'
        onChange={handleChange} />
      <input defaultValue={produit?.image} name='image' type="text" placeholder='ipmage...'
        onChange={handleChange} />
      <button defaultValue={produit?.name} onClick={() => {dispatch(upProduct({id:produit._id,produit:newproduit}));setShow(false);setPing(!ping)}} > update </button>
    </div>

  </div>)


}
export default UpdateProduit