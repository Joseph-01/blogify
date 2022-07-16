import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
// import Sidebar from './Sidebar'

const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Add new article",
        path: "/NewArticle",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Your articles",
        path: "/YourArticle",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Notifications",
        path: "/Notification",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Logout",
        path: "/Logout",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    }
]

export default SidebarData