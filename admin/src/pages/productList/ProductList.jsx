import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import {useState} from "react";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import {DeleteOutline, PinDropSharp} from "@material-ui/icons";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useContext } from "react";
import { useEffect } from "react";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";


export default function ProductList() {
  const {movies,dispatch}=useContext(MovieContext)

  useEffect(()=>{
    getMovies(dispatch)

  },[dispatch])

  const handleDelete=(id)=>{
    deleteMovie(id,dispatch)

  }
  console.log(movies)
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    { field: 'movie', headerName: 'Movie', width: 200,renderCell:(params)=>{
      return(
       <div className="productListItem">
        <img className="productListImg" src={params.row.img} alt="" />
        {params.row.title}
       </div> 
      )
    }},
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'year', width: 120 },
    { field: 'limit', headerName: 'limit', width: 120 },
    { field: 'isSeries', headerName: 'isSeries', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
            <Link to={{pathname:"/product/"+params.row._id}} state={{ movie: params.row}}>
              <button className="productListEdit" >Edit</button>
            </Link>
            <DeleteOutline onClick={()=>handleDelete(params.row._id)} className="productListDelete"/>
          </>

        )
      }
    },

  ];
  return (
    <div className="productList">
        <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            checkboxSelection
            getRowId={(r)=>r._id}
        />
    </div>
  )
}
