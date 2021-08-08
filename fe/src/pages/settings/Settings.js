import { useContext, useState } from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import {Context} from "../../context/Context";
import axios from 'axios';
import "./settings.css";



const Settings = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const {user} = useContext(Context);

    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };

        if(file){
            const data = new FormData();
            const filename = Date.now() +file.name;
            data.append("name", filename);
            data.append("file",file);
            updatedUser.profilePic = filename;

            try {
                await axios.post("/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.put("/users/"+user._id, updatedUser);
            setSuccess(true)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit} >
                    <label>Update Profile Picture</label>
                    <div className="settingsPP">
                        <img src={ PF + user.profilePic} alt="profile" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)} />
                    <button className="settingsSubmitButton" type="submit">Save Changes</button>
                    {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile Updated Sucessfully! <br/>Please logout and log back for changes to take effect!</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
