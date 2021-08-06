import {Link} from "react-router-dom";

function HomeSearchAndSort ({onSearchChange, onSortBarChange, setShowItemPage}) {
   ;
    return (
        <div>
            
            <div className="look-for-div">
                <p className="sText">Search For ...</p>
                <button  className="homePageButton" onClick={()=>{setShowItemPage("pressOn")}}>Press On</button>
                <button  className="homePageButton" onClick={()=>{setShowItemPage("glue")}}>Glue</button>
                <button  className="homePageButton"  onClick={()=>{setShowItemPage("handCare")}}>Hand Care</button>
            </div>
            


            <div className="search-div">
                <input id="search-bar" type="text" placeholder="Search..." 
                    onChange={(e)=>{onSearchChange(e.target.value)}}/>
                    
                </div>
                    <select name="SortBy" id="SortBy" onChange={(e)=>{onSortBarChange(e.target.value)}}>
                        <option value="sortBy">Sort by</option>
                        {/* <option value="bestSelling">Best Selling</option> */}
                        <option value="priceLowtoHigh">Price: Low to High</option>
                        <option value="priceHightoLow">Price: High to Low</option>
                    </select>
                <div>
                <br></br>
            </div>


        </div>
    )
  }
  
  export default HomeSearchAndSort;