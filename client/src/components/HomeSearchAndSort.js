function HomeSearchAndSort () {

    //need to move to a higher level
    const onSearchChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <h2>this is HomeSearchAndSort</h2>

            <div className="look-for-div">
                <p>Looking for:</p>
                <button>Press On</button>
                <button>Glue</button>
                <button>Hand Care</button>
            </div>

            <div className="search-div">
                <input id="search-bar" type="text" placeholder="Search..." 
                    onChange={(e)=>{onSearchChange(e.target.value)}}/>
                    
                </div>
                    <select name="SortBy" id="SortBy">
                        <option value="BestSelling">Best Selling</option>
                        <option value="PriceLowtoHigh">Price: Low to High</option>
                        <option value="PriceHightoLow">Price: High to Low</option>
                    </select>
                <div>

            </div>
        </div>
    )
  }
  
  export default HomeSearchAndSort;