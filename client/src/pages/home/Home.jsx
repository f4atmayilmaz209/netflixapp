import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect,useState } from "react"
import axios from "axios"
const Home = ({type}) => {

  const [lists,setLists]=useState([]);
  const [genre,setGenre]=useState(null);

  useEffect(()=>{
    const getRandomLists=async()=>{
      try {
        const res=await axios.get(`lists${type ? "?type=" + type:""}&${genre ? "&genre=" + genre :""}`,
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE3MjMwYjgwMGY4M2EzNDJkNzgxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDkyNjk4MSwiZXhwIjoxNjc1MzU4OTgxfQ.ZNYto_rBX61MBS71bOIbckP-BoELgQZjcBhRzk8Yezc",
          },
        }
        )
        console.log(res)
        setLists(res.data);
      } catch (error) {
        console.log(error)
        
      }
    };
    getRandomLists()
  },[type,genre])



  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} setGenre={setGenre}/>
      {lists.map((list)=>(
         <List list={list}/>

      ))}
     

    </div>
  )
}

export default Home