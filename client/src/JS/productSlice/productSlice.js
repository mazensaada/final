import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


export const addProduct = createAsyncThunk("produit/add", async (produit) => {
    try {
        let reponse = await axios.post(
            "http://localhost:5000/produit/add",
            produit
        );
        return await reponse;


    } catch (error) {
        console.log(error);
    }
});
//get
export const getProduct = createAsyncThunk("produit/getall", async (produit) => {
    try {
        let reponse = await axios.get( "http://localhost:5000/produit/all" );
        return await reponse.data;
    } catch (error) {
        console.log(error);
    }
});
//delete
export const delProduct = createAsyncThunk("produit/delete/:id", async ({id}) => {
    try {
        let reponse = await axios.delete( `http://localhost:5000/produit/delete/${id}` );
        return await reponse.data;
    } catch (error) {
        console.log(error);
    }
});
export const upProduct = createAsyncThunk("produit/update/:id", async ({id,produit}) => {
    try {
        let reponse = await axios.put( `http://localhost:5000/produit/update/${id}`,produit );
        return await reponse.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    produit: null,
    status: null,
    produits:[]
};

export const productSlice = createSlice({
    name: "produit",
    initialState,
    reducers: {},
    extraReducers: {
        [addProduct.pending]: (state) => {
            state.status = "pending";
        },
        [addProduct.fulfilled]: (state, action) => {
            state.status = "succes";
            state.produit = action.payload.data.result;
            

        },
        [addProduct.rejected]: (state) => {
            state.status = "fail";
        },
        [getProduct.pending]: (state) => {
            state.status = "pending";
        },
        [getProduct.fulfilled]: (state, action) => {
            state.status = "succes";
            state.produits = action.payload.result;
            

        },
        [getProduct.rejected]: (state) => {
            state.status = "fail";
        },
        [delProduct.pending]: (state) => {
            state.status = "pending";
        },
        [delProduct.fulfilled]: (state, action) => {
            state.status = "succes";
            state.produit = action.payload.result;
            

        },
        [delProduct.rejected]: (state) => {
            state.status = "fail";
        },
        [upProduct.pending]: (state) => {
            state.status = "pending";
        },
        [upProduct.fulfilled]: (state, action) => {
            state.status = "succes";
            state.produit = action.payload.result;
            

        },
        [upProduct.rejected]: (state) => {
            state.status = "fail";
        },



    }})

    export default productSlice.reducer