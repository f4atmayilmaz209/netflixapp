import "./sidebar.css"
import {List,PlayCircleOutline,Report ,WorkOutline ,ChatBubbleOutline ,DynamicFeed ,MailOutline ,BarChart ,AttachMoney ,Storefront ,LineStyle,Timeline,TrendingUp,PermIdentity} from "@material-ui/icons"
// import {Link} from "react-router-dom";
import {BrowserRouter as Router, Navigate, Link, Routes} from 'react-router-dom';
export default function Sidebar() {
  return (
    
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home

                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics

                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales

                    </li>
                </ul>
            </div>
             
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                
                    <li className="sidebarListItem active">
                        <PermIdentity className="sidebarIcon"/>
                        Users
                    </li>
                    
                 
                    <li className="sidebarListItem">
                        <PlayCircleOutline className="sidebarIcon"/>
                        Movies
                    </li>
   

                  
      
   

                    <li className="sidebarListItem">
                        <List  className="sidebarIcon"/>
                        Lists

                    </li>
                    <li className="sidebarListItem">
                        <BarChart  className="sidebarIcon"/>
                        Reports

                    </li>
                </ul>
            </div>
            
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutline  className="sidebarIcon"/>
                        Mail

                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed  className="sidebarIcon"/>
                        Feedback

                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline  className="sidebarIcon"/>
                        Messages

                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <WorkOutline  className="sidebarIcon"/>
                        Manage

                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics

                    </li>
                    <li className="sidebarListItem">
                        <Report  className="sidebarIcon"/>
                        Reports

                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}
