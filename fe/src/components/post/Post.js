import { Link } from "react-router-dom"
import "./post.css"

const Post = () => {
    return (
        <div className="post">
            <Link className="link" to="/post/123">
            <img className="postImg" alt="lost" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2V5c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Keys</span>
                    <span className="postCat">Miscellaneous</span>
                </div>
                <span className="postTitle">Lost Keys</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                I lost my keys at the local park. There are 4 keys on the key ring along with the sports 
                team key holder thing. Please if anyone finds them, email me ASAP at lostkeys@gmail.com. 
                I can give a $100 reward. 
            </p>
            </Link>
        </div>
    )
}

export default Post



