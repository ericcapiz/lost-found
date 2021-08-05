import './postPage.css'
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

const postPage = () => {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default postPage
