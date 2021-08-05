import './write.css'

const Write = () => {
    return (
        <div className="write">
            <img className="writeImg" src="https://images.unsplash.com/photo-1603812079345-2fec46ae21b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5vJTIwd29ycmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="lost item" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                         
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input className="writeInput" autoFocus type="text" placeholder="Title" />
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" placeholder="Be detailed as posible. Click '+' to add picture..." text="text"></textarea>
                </div>
                <button className="writeSubmit">Post Item</button>
            </form>
        </div>
    )
}

export default Write
