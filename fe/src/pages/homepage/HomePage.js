import { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homePage.css";

const HomePage = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get("/posts")
            setPosts(res.data)
        }
        fetchPosts()
    },[])
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
