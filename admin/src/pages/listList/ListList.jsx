import "./listList.css"
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import {DeleteOutline} from "@material-ui/icons";
import { ListContext } from "../../context/listContext/ListContext";
import { useContext } from "react";
import { useEffect } from "react";
import {deleteList, getLists} from "../../context/listContext/apiCalls"

export default function ListList() {
  const {lists,dispatch}=useContext(ListContext)

  useEffect(()=>{
    getLists(dispatch)

  },[dispatch])

  const handleDelete=(id)=>{
    deleteList(id,dispatch)
  

  }
  console.log(lists)
  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'title', headerName: 'Title', width: 120 },
    { field: 'type', headerName: 'Type', width: 120 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell:(params)=>{
        return(
          <>
            <Link to={{pathname:"/list/"+params.row._id}} state={{ list: params.row}}>
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
            rows={lists}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            checkboxSelection
            getRowId={(r)=>r._id}
        />
    </div>
  )
}
