import './singlePost.css';

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2V5c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="post" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lost Keys
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Posted By: <b>Eric</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">I lost my keys at the local park. There are 4 keys on the key ring along with the sports 
                team key holder thing. Please if anyone finds them, email me ASAP at lostkeys@gmail.com. 
                I can give a $100 reward.</p>
            </div>
        </div>
    )
}

export default SinglePost
