import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Update Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                    <label>Email</label>
                    <input type="email" placeholder="username@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmitButton">Save Changes</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
