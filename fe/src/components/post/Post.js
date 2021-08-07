import { Link } from "react-router-dom"
import "./post.css"

const Post = ({post}) => {
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" alt="lost" src={post.photo} />
            )}
            <div className="postInfo">
            <Link className="link" to={`/post/${post._id}`}>
                <span className="postTitle">{post.title}</span>
            </Link>
                <div className="postCats">
                {post.categories.map((c) => (
                   <Link className="link" key={c._id} to={`/?cat=${c}`}> <span className="postCat">{c.toUpperCase()}</span></Link> 
                ))}
                </div>
            <br />
            <span className="singlePostAuthor">Posted By: <b>{post.username.toUpperCase()}</b></span>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}

export default Post



