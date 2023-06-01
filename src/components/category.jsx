

const Categories = () => {
    let categories = [
        {links : "All"},
        {links : "Sports"},
        {links : "Comdey"},
        {links : "Fashion"},
        {links : "Vlogs"},
        {links : "Movies"},
        {links : "Travel"},
        {links : "Food"},
        {links : "Bollywood"},
        {links : "Kids"},
        {links : "Recently Uploaded"}
        
        
    ]
    return ( 
        <div className="categories">
          <ul>
            {categories.map((data) => {
                return(
                    <li><a href="">{data.links}</a></li>
                )
            })}
          </ul>
        </div>
     );
}
 
export default Categories;