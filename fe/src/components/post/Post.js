import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./post.css"

const Post = ({post}) => {
    const {user} = useContext(Context);
    const PF = "http://localhost:5000/images/"
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" alt="lost" src={PF + post.photo} />
            )}
            <div className="postInfo">
            <Link className="link" to={`/post/${post._id}`}>
                <span className="postTitle">{post.title}</span>
            </Link>
                <div className="postCats">
                {post.categories.map((c) => (
                   <span key={c._id} className="postCat">Category:<Link className="link" key={c._id} to={`/?cat=${c}`}>  {c.toUpperCase()}</Link> </span>
                ))}
                </div>
            <br />
            <span className="singlePostAuthor">Posted By: <b>{user.username}</b></span>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}

export default Post



