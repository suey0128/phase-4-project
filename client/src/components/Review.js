import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({currentUser, passToAddress}) {
  const classes = useStyles();

  const checkoutItems = currentUser.shopping_cart.all_items_in_cart
  // console.log(currentUser.shopping_cart)
  let subtotal = parseFloat(currentUser.shopping_cart.total_amount).toFixed(2)
  let tax = (parseFloat(currentUser.shopping_cart.total_amount) * 0.065).toFixed(2)
  let shipping = parseFloat(7.99)
  let total = parseFloat(subtotal) + parseFloat(tax) + parseFloat(shipping)
  total =total.toFixed(2)



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkoutItems.map((product) => (
          <ListItem className={classes.listItem} key={product.cart_item_id}>
            <ListItemText primary={product.item.name} secondary={product.item.description} />
            <Typography variant="body2">{product.quantity}x     ${product.item_total}</Typography>
          </ListItem>
        ))}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $ {total}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Subtotal" />
          <Typography variant="subtitle2" className={classes.total}>
            $ {subtotal}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Tax" />
          <Typography variant="subtitle2" className={classes.total}>
            $ {tax}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" className={classes.total}>
            $ {shipping}
          </Typography>
        </ListItem>



      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${passToAddress[0]} ${passToAddress[2]}`}</Typography>
          <Typography gutterBottom>{`${passToAddress[4]}, ${passToAddress[6]}, ${passToAddress[8]} ${passToAddress[10]}, ${passToAddress[12]}`}</Typography>
        </Grid>
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
       
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Holder</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>???</Typography>
                </Grid>
              </React.Fragment>
           
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}