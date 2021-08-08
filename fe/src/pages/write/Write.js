import {useContext, useState} from 'react';
import axios from 'axios';
import {Context} from '../../context/Context';
import './write.css'

const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState([]);
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories: cat,
        };



        if(file){
            const data = new FormData();
            const filename = Date.now() +file.name;
            data.append("name", filename);
            data.append("file",file);
            newPost.photo = filename;

            try {
                await axios.post("https://lost-my-stuff.herokuapp.com/api/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
          const res = await axios.post("https://lost-my-stuff.herokuapp.com/api/posts", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(cat)
    return (
        <div className="write">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="lost item" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                         
                    </label>
                    <input type="file" id="fileInput" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}} />
                    <input className="writeInput" autoFocus type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText"  onChange={e=>setDesc(e.target.value)} placeholder="Be detailed as posible. Click '+' to add picture..." text="text"></textarea>
                </div>
               
                <div className="writeFormGroup">
                    <input className="writeInput writeCat" onChange={e=>setCat(e.target.value.toLowerCase())} placeholder="Add 1 category type, i.e keys, wallet, electronic, miscellaneous, etc" text="text" />
                </div>
                <button className="writeSubmit" type="submit">Post Item</button>
            </form>
        </div>
    )
}

export default Write
