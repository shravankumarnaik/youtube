import { useState } from "react";
// import { useState } from "react";


const Videos = () => {

    let [video, setVideo] = useState([
        {
            thumbnail: "https://i.ytimg.com/vi/GXWfue9VhTY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF6BIxDFNsUust9AnuIsoLK5M-XQ",
            title: "Ram Siya Ram (Hindi) Adipurush | Prabhas | Sachet-Parampara, Manoj Muntashir S | Om Raut | Bhushan K",
            channel: "T-Series",
            views: "57M views",
            id : 1
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/miH3Q-lXeVo/hq720.jpg?sqp=-…RhlIFkoTjAP&rs=AOn4CLCuWp-a3L-E0j6Hq8LG_Ig89V_20g",
            title: "MUNIBA MAZARI | Best Motivation Speech | Be Inspired",
            channel: "Creative Inspiration59",
            views: "64 views",
            id : 2
        },
        {
            thumbnail: "https://i.ytimg.com/vi/8EPJiFfWRfw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDpvqoOVAWsC9Z5bFU0M-w7PZsJrg",
            title: "SatyaPrem Ki Katha|Official Trailer|Kartik|Kiara|Sameer V|Sajid Nadiadwala| Namah Pictures|29th June",
            channel: "NadiadwalaGrandson",
            views: "4.7M views",
            id : 3
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/Ir0lVg8hIc0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBq5RTdaufXE66-_Bc9LdhOzLhKog",
            title: "Shivam Dube gives the Knights a mighty scare in the final over",
            channel: "T20 Mumbai",
            views: "21M views",
            id : 4
        },
        {
            thumbnail: "https://i.ytimg.com/vi/DgQjF4ui4D4/hq720.jpg?sqp=-…Rg1IFQocjAP&rs=AOn4CLACdGzVJFZUoqviaclxGdmc5vACqQ",
            title: "Na Roja Nuvve | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Hesham Abdul Wahab | Lyrical",
            channel: "DUMMY THOUGHTS",
            views: "2.1M views",
            id : 5
        },
        {
            thumbnail: "https://i.ytimg.com/vi/oge3BfIoG-c/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCMfVamZGRNbIhKYigT1gACzqPSkQ",
            title: "#Martin - Teaser [4K] | Dhruva Sarja | AP Arjun | Uday K Mehta",
            channel: "Lahari Music - TSeries",
            views: "85M views",
            id : 6
        },
        {
            thumbnail: "https://i.ytimg.com/vi/5Eqb_-j3FDA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmqHUqxnAhhIsNCS7l2xBvSY6ZXA",
            title: "Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill",
            channel: "Coke Studio",
            views: "584M views",
            id : 7
        },
        {
            thumbnail: "https://i.ytimg.com/vi/GXWfue9VhTY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF6BIxDFNsUust9AnuIsoLK5M-XQ",
            title: "Ram Siya Ram (Hindi) Adipurush | Prabhas | Sachet-Parampara, Manoj Muntashir S | Om Raut | Bhushan K",
            channel: "T-Series",
            views: "57M views",
            id : 8
        },
        {
            thumbnail: "	https://i.ytimg.com/vi/miH3Q-lXeVo/hq720.jpg?sqp=-…RhlIFkoTjAP&rs=AOn4CLCuWp-a3L-E0j6Hq8LG_Ig89V_20g",
            title: "MUNIBA MAZARI | Best Motivation Speech | Be Inspired",
            channel: "Creative Inspiration59",
            views: "64 views",
            id : 9
        },
        {
            thumbnail: "https://i.ytimg.com/vi/8EPJiFfWRfw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDpvqoOVAWsC9Z5bFU0M-w7PZsJrg",
            title: "SatyaPrem Ki Katha|Official Trailer|Kartik|Kiara|Sameer V|Sajid Nadiadwala| Namah Pictures|29th June",
            channel: "NadiadwalaGrandson",
            views: "4.7M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/DgQjF4ui4D4/hq720.jpg?sqp=-…Rg1IFQocjAP&rs=AOn4CLACdGzVJFZUoqviaclxGdmc5vACqQ",
            title: "Na Roja Nuvve | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Hesham Abdul Wahab | Lyrical",
            channel: "DUMMY THOUGHTS",
            views: "2.1M views",
            id : 10
        },
        {
            thumbnail: "https://i.ytimg.com/vi/oge3BfIoG-c/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCMfVamZGRNbIhKYigT1gACzqPSkQ",
            title: "#Martin - Teaser [4K] | Dhruva Sarja | AP Arjun | Uday K Mehta",
            channel: "Lahari Music - TSeries",
            views: "85M views",
            id : 11
        },


    ])
     let removeVideo = (id,name) =>{
        let result = video.filter((x) => x.id !== id)
        setVideo(result)
        alert(`${name} video got removed`)
     }

    // const [shorts, setShorts] = useState([
    //     {
    //         img: "	https://i.ytimg.com/vi/MjxSslUQCss/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLBQcQJbnUeIXHke29ttc_-pNttpmQ",
    //         title: "Wait for Dhoni #shorts #ytshorts",
    //         views: "9.8M views"
    //     },
    //     {
    //         img: "https://i.ytimg.com/vi/yUUnq6CTYOY/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLC4SlVpqV8uTP-gRLaD-kC1vTvXbQ",
    //         title: "rashmika mandanna tamanna ipl opening ceremony 2023 || #tamanna #rashmika @TamannaahSpeaks #IPL #ipl",
    //         views: "71M views"
    //     },
    //     {
    //         img: "https://i.ytimg.com/vi/mU1sGtF05Io/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAnisAECAId1Sw2ErPoAJX7_mcj_g",
    //         title: "This Was Such A Beautiful Scene 💧🍃🏴‍☠️ | Jack Sparrow | Pirates Of The Caribbean",
    //         views: "20M views"
    //     },
    //     {
    //         img: "	https://i.ytimg.com/vi/MjxSslUQCss/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLBQcQJbnUeIXHke29ttc_-pNttpmQ",
    //         title: "Wait for Dhoni #shorts #ytshorts",
    //         views: "9.8M views"
    //     },
    //     {
    //         img: "https://i.ytimg.com/vi/yUUnq6CTYOY/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLC4SlVpqV8uTP-gRLaD-kC1vTvXbQ",
    //         title: "rashmika mandanna tamanna ipl opening ceremony 2023 || #tamanna #rashmika @TamannaahSpeaks #IPL #ipl",
    //         views: "71M views"
    //     },
    //     {
    //         img: "https://i.ytimg.com/vi/mU1sGtF05Io/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAnisAECAId1Sw2ErPoAJX7_mcj_g",
    //         title: "This Was Such A Beautiful Scene 💧🍃🏴‍☠️ | Jack Sparrow | Pirates Of The Caribbean",
    //         views: "20M views"
    //     },

    // ])
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
                                <a  onClick={()=> removeVideo(data.id,data.channel)}>Remove</a>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>


    
      

    );

}

// import { useState } from "react";


   

export default Videos;