import {useEffect,useState} from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './singlePost.css';
import React from 'react';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPosts] = useState({})
    const PF = "http://localhost:5000/images/"

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/" + path)
            setPosts(res.data)
        }
        getPost()
    },[path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img className="singlePostImg" src={PF + post.photo} alt="post" />
                    )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Posted By: <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}

export default SinglePost
