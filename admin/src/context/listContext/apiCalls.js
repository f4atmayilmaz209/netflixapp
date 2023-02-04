import {createListFailure,createListStart,createListSuccess,deleteListFailure,deleteListSuccess,deleteListStart,getListsStart,getListsSuccess,getListsFailure} from "./ListActions";
import axios from "axios";
export const getLists=async(dispatch)=>{
    dispatch(getListsStart());
    try {
        const res=await axios.get("/lists",{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken},})
        dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFailure())
    }

}

export const deleteList=async(id,dispatch)=>{
    dispatch(deleteListStart());
    try {
        await axios.delete("/lists/"+id,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken},})
        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFailure())
    }

}

export const createList=async(list,dispatch)=>{
    dispatch(createListStart());
    try {
        const res= await axios.post("/lists",list,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken},})
        dispatch(createListSuccess(res.data))
    } catch (error) {
        dispatch(createListFailure())
    }

}