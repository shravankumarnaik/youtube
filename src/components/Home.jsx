import Categories from "./category";

import Banner from "./banner";
import Videos from "./videos";
import '../styles/Categories.css'
import '../styles/video.css'

const Home = () => {
    return ( 
    <div className="home">

        <Categories />
        <Banner />
        <Videos />
        
    </div> 
 );
}
 
export default Home;