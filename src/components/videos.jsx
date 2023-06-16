import { useState, useEffect } from "react";
// import { useState } from "react";


const Videos = () => {

    let [video, setVideo] = useState([])
    let [shorts, setShorts] = useState([])

    useEffect(() => {

        let apiFetch = async () => {
            let response = await fetch('http://localhost:4000/videos')
            let data = await response.json()
            setVideo(data)
            // setShorts(data.shorts)

            let response1 = await fetch('http://localhost:4000/shorts')
            let data1 = await response1.json()
            setShorts(data1)
        }
        apiFetch();
    })


    // javascript for removing the video
    
 
    let removeVideo = (id, name) => {

        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${name} video got removed`)
    }

        // let result = video.filter((x) => x.id !== id)
        // setVideo(result)
        // alert(`${name} video got removed`)
    




    return (
        <div className="videos">
            <h1>Featured Videos</h1>

            <div className="videoData">
                {video.map((data) => {
                    return (
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="vidoDetails">
                                <h3>{data.title}</h3>
                                <p> {data.channel} </p>
                                <p> {data.views} </p>
                                <a onClick={() => removeVideo(data.id, data.channel)}> Remove </a>
                            </div>
                        </div>
                    )
                })}
            </div>


            {/* shorts video  */}
            <div className="shorts">
                <h1>Shorts</h1>
                <div className="shortvideo">
                    {shorts.map((item) => {
                        return (
                            <div className="reels">
                                <img src={item.img} alt="" />
                                <div className="shortdetails">
                                    <h3>{item.title}</h3>
                                    <p> {item.views} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>




        </div>





    );

}



// import { useState } from "react";




export default Videos;