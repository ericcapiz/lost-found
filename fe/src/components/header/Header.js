import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                {/* <span className="headerTitleSm"></span> */}
                <span className="headerTitleLg">Lost & Found</span>
            </div>
            <img
                className="headerImg"
                src="https://images.unsplash.com/photo-1574390353491-92705370c72e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1313&q=80"
                alt=""/>
        </div>
    )
}

export default Header
