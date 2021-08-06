import HomeICItemCard from "./HomeICItemCard";


//import css from material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


function HomeICGlue({glueOnDisplay, onAddToCartClick}) {

  //material ui thing
  const classes = useStyles();




    return (
      <div className={classes.root}>
        <h1 className="homeContainerTitle">Glue</h1>
        <Grid container spacing={3}>
            {glueOnDisplay.map((glueItem)=><HomeICItemCard key={glueItem.id} 
                                                           onAddToCartClick={onAddToCartClick} 
                                                           item={glueItem}/>)}
        </Grid>
      </div>

    )
  }
  
  export default HomeICGlue;