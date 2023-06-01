import Youtube from '../images/youtube_logo_icon_167938.png'
import Video from '../images/video_plus_icon_136058.png'
import Bel from '../images/alarm_alert_attention_bell_clock_notification_ring_icon_123203.png'



import '../styles/navbar.css'

function NavBar(){
    return (
        <div className="navbar">
            <div className="logo">
              <img width={130} src={Youtube} alt="" />
            </div>
            <div className="searchBar">
                <input  type="text" placeholder='search'/>
            </div>
            <div className="userOptions">
                <img  width={30} src={Video} alt="" />
                <img  width={40} src={Bel} alt="" />
                <h4>S</h4>
            </div>
        </div>
    )
}
export default NavBar;