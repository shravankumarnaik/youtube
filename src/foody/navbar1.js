
import '../styles2/home.css'

const Navbar1 = () => {
    let data = [
        {links:"Home"},
        {links:"About"},
        {links:"Menu"},
        {links:"Events"},
        {links:"Chefs"},
        {links:"Gallery"},
        {links:"Dropdown"},
        {links:"Contact"}
    ]
    return ( 
        <div className="navbar1">
        <div className="logo">
            <h1>Yummy <span>.</span></h1>
        </div>
        <div className="navlinks">
        <ul>
        {data.map((value) => {
                return(
                    <li><a href="">{value.links}</a></li>
                )
            })}
         </ul>
        </div>
        <div className="btn">
            <button id='btn'>Book a Table</button>
        </div>
        </div>
     );
}
 
export default Navbar1;