import {useContext, useEffect,useState} from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import {Context} from '../../context/Context';
import './singlePost.css';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPosts] = useState({})
    const PF = "https://lost-my-stuff.herokuapp.com/images/"
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("https://lost-my-stuff.herokuapp.com/api/posts/" + path);
            setPosts(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost()
    },[path])

    const handleDelete = async () =>{
        try {
            await axios.delete(`https://lost-my-stuff.herokuapp.com/api/posts/${post._id}`, {data: {username:user.username}})
            window.location.replace("/")
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async()=>{
        try {
            await axios.put(`https://lost-my-stuff.herokuapp.com/api/posts/${post._id}`,  {username:user.username, title, desc})
            setUpdateMode(false);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img className="singlePostImg" src={PF + post.photo} alt="post" />
                    )}
                    {
                        updateMode ? <input type="text" className="singlePostTitleInput" value={title} onChange={(e)=>setTitle(e.target.value)} /> : (

                       
                <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fas fa-edit" onClick={()=>setUpdateMode(true)} ></i>
                            <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete} ></i>
                        </div>
                    )}
                </h1>
                 )
                }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Posted By: <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? ( <textarea value={desc}  className="singlePostDescInput" onChange={(e)=>setDesc(e.target.value)} /> 
                ):(
                    
                    <p className="singlePostDesc">{desc}</p>
                
                    )}
                    {updateMode && (
                        <button className="singlePostButton" onClick={handleUpdate} >Update Changes</button>
                    )}
            </div>
        </div>
    )
}

export default SinglePost
