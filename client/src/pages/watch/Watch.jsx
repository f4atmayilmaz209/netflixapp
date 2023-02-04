import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'
import {useLocation,Link} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
export default function Watch() {
  const location=useLocation();
  const path=location.pathname.split("/")[2]
  const [movie, setMovie] = useState({});

  useEffect(()=>{
     const getMovie=async()=>{
      try {
        const res=await axios.get("/movies/find/"+path,
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE3MjMwYjgwMGY4M2EzNDJkNzgxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDkyNjk4MSwiZXhwIjoxNjc1MzU4OTgxfQ.ZNYto_rBX61MBS71bOIbckP-BoELgQZjcBhRzk8Yezc",
          },
        })
        setMovie(res.data);
        console.log("movieeeee")
        console.log(res.data)
      } catch (error) {
        console.log(error)
        
      }
     }
     getMovie();


  },[])
  
    return (
        <div className="watch">
            <Link>
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>

            <video
                className="video"
                autoPlay
                progress
                controls
                //src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                src={movie.video}
            />
            
        </div>
    )
}
