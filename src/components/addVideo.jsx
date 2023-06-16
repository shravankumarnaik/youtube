

import { useRef } from "react";

import { useNavigate } from "react-router-dom";

const Addvideo = () => {

    let navigate = useNavigate()

    let upload = (e) =>{

        
        e.preventDefault() // prevent the page from reloading

        let data = {
            thumbnail:thumbnail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("video uploaded successfully")
        navigate('/')
    }

let thumbnail = useRef(null)
let title = useRef(null)
let channel = useRef(null)
let views = useRef(null)

    

    return ( 
        <div className="addVideo">
            <div className="image">
                <img src="https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="form" >
                <form action="" onSubmit={upload}>
                <h1>Add Video</h1> <br /> <br />
                <span>Thumbnail :</span>  <br /> <input ref={thumbnail} type="url" /> <br /> <br />
             <span>Title :</span>  <br /> <input ref={title} type="text" /> <br /> <br />
               <span>Channel : </span> <br /> <input ref={channel} type="text" /> <br /> <br />
               <span>Views :</span>  <br /> <input ref={views} type="text" />  <br /> <br />
               <button > Add </button>
               </form>
            </div>

        </div>
     );
}
 
export default Addvideo;