import HomeICItemCard from "./HomeICItemCard";

//import css from material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


function HomeICHandCareContainer({handCareOnDisplay, onAddToCartClick}) {

    //material ui thing
    const classes = useStyles();


        

    return (
        <div className={classes.root}>
            <h1 className="homeContainerTitle">Hand Care</h1>
            <Grid container spacing={3}>
                {handCareOnDisplay.map((handCareItem)=><HomeICItemCard key={handCareItem.id} 
                                                                        onAddToCartClick={onAddToCartClick}
                                                                        item={handCareItem}/>)}
            </Grid>
        </div>
    )
  }
  
  export default HomeICHandCareContainer;