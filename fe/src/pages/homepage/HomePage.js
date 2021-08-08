import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homePage.css";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get("https://lost-my-stuff.herokuapp.com/api/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    },[search])
    return (
        <> 
            <Header/> 
                <div className ="home">
                    <Posts posts={posts} />
                    <Sidebar />
                </div>
        </>
        )
}

export default HomePage
