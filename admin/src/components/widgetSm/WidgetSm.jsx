import "./widgetsm.css"
import {Visibility} from "@material-ui/icons"
import {useState} from "react";
import { useEffect } from "react";
import axios from "axios";
export default function WidgetSm() {
  const [newUsers,setNewUsers]=useState([])

  useEffect(()=>{
    const getNewUsers=async()=>{
      try {
        const res=await axios.get("/users?new=true",{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE3MjMwYjgwMGY4M2EzNDJkNzgxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDY0OTE1NSwiZXhwIjoxNjc1MDgxMTU1fQ.julA7NspxDwRmfn_jmftmyEqqPIU5rR8hxYZHlkSEvE"
          }
        })
        setNewUsers(res.data);

        
      } catch (error) {
        console.log(error)
        
      }
      

    };
    getNewUsers()

  },[])
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
                  <li className="widgetSmListItem">
                  <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                    
                  </div>
                  <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
        
                  </button>
                </li>

        ))}


      </ul>
    </div>
  )
}
