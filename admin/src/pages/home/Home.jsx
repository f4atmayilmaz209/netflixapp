import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/charts/Chart"
import {userData} from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import {useEffect, useState,useMemo} from "react";
import axios from "axios";


export default function Home() {
  const MONTHS=useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],[]);
  const [userStats,setUserStats]=useState([]);
  useEffect(()=>{
    const getStats=async ()=>{
      try {
        const res= await axios.get("/users/stats",{headers:{
          token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE3MjMwYjgwMGY4M2EzNDJkNzgxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDY0OTE1NSwiZXhwIjoxNjc1MDgxMTU1fQ.julA7NspxDwRmfn_jmftmyEqqPIU5rR8hxYZHlkSEvE"
  
        },})
        const statsList=res.data.sort(function(a,b){
          return a._id-b._id;
        })
        statsList.map((item)=>
          setUserStats((prev)=>[
            ...prev,
            {name:MONTHS[item._id-1],"New User":item.total}
          ])
        )

        
      } catch (error) {
        console.log(error)
        
      }

    }
    getStats()

  },[MONTHS])
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
