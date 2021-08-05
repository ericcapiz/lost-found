import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homePage.css";

const HomePage = () => {
    return (
        <> 
            <Header/> 
                <div className ="home">
                    <Posts />
                    <Sidebar />
                </div>
        </>
        )
}

export default HomePage
