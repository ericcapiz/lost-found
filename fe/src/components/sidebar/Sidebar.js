import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Us</span>
                <img alt="lost" src="https://images.unsplash.com/photo-1554048109-2b3c9a6d877b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bG9zdCUyMGFuZCUyMGZvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
                <p>Welcome to the community lost & found. Lost something incredibly valuable? Fear not, people are always willingly to report items that have been found. Please create a post describing in detail, the item, and upload an image of the item if you have one. If not, upload an image that closely resembles the lost item. Please include a way of contact, email would be just fine. </p>
                <p>If you found an item, create a post and a way for someone to contact you. Preferably an email.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                   <li className="sidebarListItem"><i className="fas fa-paw">Pets</i></li> 
                   <li className="sidebarListItem">&nbsp;<i className="fas fa-gem">Jewlery</i></li> 
                   <li className="sidebarListItem">&nbsp;<i className="fas fa-wallet">Wallet/Purses</i></li> 
                   <li className="sidebarListItem">&nbsp;<i className="fas fa-key">Keys</i></li> 
                   <li className="sidebarListItem">&nbsp;<i className="fas fa-laptop-medical">Electronics</i></li>
                   <li className="sidebarListItem">&nbsp;<i className="fas fa-random">Miscellaneous</i></li> 
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
