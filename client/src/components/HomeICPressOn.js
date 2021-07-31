// react-router-dom Imports
import { Link } from 'react-router-dom';

//import css from material ui
import Grid from '@material-ui/core/Grid';

function HomeICPressOn() {
    return (
        <Grid item xs={6} sm={3} >
            <Link > 
                <div >
                    <img className="press-on-img-in-card" src="" />
                    <div className="press-on-info-container">
                        <h3 className="press-on-name">name</h3>
                        <p>Price</p>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </Link>
        </Grid>
    )
  }
  
  export default HomeICPressOn;