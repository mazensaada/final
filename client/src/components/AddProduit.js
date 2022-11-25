import React , {useState}from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../JS/productSlice/productSlice';

const AddProduit = ({ping,setPing}) => {
  const navigate=useNavigate()
    const dispatch =useDispatch()
    const [newproduit, setNewproduit]=  useState({
        name:'',
        prix:'',
        coleur:'',
        type:'',
        image:'',
     } );
     
    const handleChange = (event) => {
        setNewproduit({ ...newproduit, [event.target.name]: event.target.value });
        event.preventDefault();
    };
    return (<div className='AddProduit-container'>
    <h1>Add New Produit</h1>
  
<input name='name' type="text" placeholder='Type title...'
onChange={handleChange} />
<input name='prix' type="text" placeholder='prix...'
onChange={handleChange} />
<input name='coleur' type="text" placeholder='coleur...'
onChange={handleChange} />
<input name='type' type="text" placeholder='Type rating...'
onChange={handleChange} />
<input name='image' type="text" placeholder='ipmage...'
onChange={handleChange} />
  
<button onClick={()=>{dispatch(addProduct(newproduit));setPing(!ping) ; navigate('/')}} > Add Produit </button>
</div>

  )
    

}
export default AddProduit