// react-router-dom Imports
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';


function HomeICItemCard({item}) {

    // console.log(pressOnItem)
    return (
 
        <Grid item xs={6} sm={3}>
                <div >
                    <Link to="/"> 
                        <img className="img-in-card" src={item.image} />
                    </Link>
                    <div className="info-container">
                        <h3 className="item-name">{item.name}</h3>
                        <p>$ {item.price}</p>
                    </div>
                    <button>Add to Cart</button>
                </div>
        </Grid>

    )
  }
  
  export default HomeICItemCard;