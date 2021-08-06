import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

import { useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, passToAddress, passToPayment, currentUser) {
  switch (step) {
    case 0:
      return <AddressForm passToAddress={passToAddress} 
      />;
    case 1:
      return <PaymentForm passToPayment={passToPayment}/>;
    case 2:
      return <Review currentUser={currentUser}
                    passToAddress={passToAddress}
      />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout({currentUser}) {
  // console.log(currentUser)
  const [fName, setFname] = useState(currentUser.first_name)
  const [lName, setLname] = useState(currentUser.last_name)
  const [address, setAddress] = useState(currentUser.address)
  const [city, setCity] = useState(currentUser.city)
  const [state, setState] = useState(currentUser.state)
  const [zipCode, setZipCode] = useState(currentUser.zip)
  const [country, setCountry] = useState(currentUser.country)
  const [saveAdd, setSaveAdd] = useState(true)
  const passToAddress = [fName, setFname, lName, setLname, address, setAddress, city, setCity, state, setState, zipCode, 
  setZipCode, country, setCountry, saveAdd, setSaveAdd] 

  const [nameOnCard, setNameOnCard] = useState("")
  const [cardNum, setCardNum] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const passToPayment = [nameOnCard, setNameOnCard, cardNum, setCardNum, expiry, setExpiry, cvv, setCvv]

  let subtotal = parseFloat(currentUser.shopping_cart.total_amount).toFixed(2)
  let tax = (parseFloat(currentUser.shopping_cart.total_amount) * 0.065).toFixed(2)
  let shipping = parseFloat(7.99)
  let total = parseFloat(subtotal) + parseFloat(tax) + parseFloat(shipping)

  const [invoiceNum, setInvoiceNum] = useState("")


  const [errors, setErrors] = useState([]);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  // 4) create a new current_cart instance to connect the newEmmptyShoppingCart and the currentUser
  async function createConnectingCurrentCart (emptyShoppingCart) {
    const res = await fetch(`http://localhost:3000/current_carts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user_id: currentUser.id, shopping_cart_id: emptyShoppingCart.id})
    });
    if (res.ok) {
      const connectingCurrentCart = await res.json();
      console.log('connecting current_cart instance', connectingCurrentCart)
    } else {
      const err = await res.json()
      setErrors(err.errors)
    };
  }

// console.log(currentUser)

  const handleNext = () => {
    // next btn for address form, PATCH ADD
    if (activeStep === 0) {
      // regardless if the box is check, PATCH shopping_cart_addressInfo
      const shippingInfo = {
        first_name: fName,
        last_name: lName, 
        address,
        city,
        state,
        zip: zipCode,
        country
      };
      async function updateShoppingCartShippingInfo () {
        const res = await fetch(`http://localhost:3000/shopping_carts/${currentUser.shopping_cart.id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shippingInfo)
        });
        if (res.ok) {
          const updatedShoppingCart = await res.json();
          console.log('address patched in shopping_cart', updatedShoppingCart)
          setActiveStep(activeStep + 1)
        } else {
          const err = await res.json()
          alert(err.errors)
        };
      }
      updateShoppingCartShippingInfo();
      //if box is check, PATCH user's shipping address
      if (saveAdd) {
        async function updateUserDefaltAddress () {
          const res = await fetch(`http://localhost:3000/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(shippingInfo),
          });
          if (res.ok) {
            const updatedUser = await res.json();
            console.log('address patched in user', updatedUser)
          } else {
            const err = await res.json()
            alert(err.errors)
          };
        }
        updateUserDefaltAddress();
      }
    }

    // Credit card btn : control the state of input
    else if (activeStep === 1) {
      // const passToPayment = [nameOnCard, setNameOnCard, cardNum, setCardNum, expiry, setExpiry, cvv, setCvv]
      if (nameOnCard.length === 0) {alert("Please enter your name on card") } 
      else if (cardNum.length !== 16 || isNaN(cardNum)) {alert("Please enter a 16 digits valid card number. xxxxxxxxxxxxxxxx") }
      else if (expiry.length !==5 ) {alert("Please enter valid expiration date. xx/xx")}
      else if (cvv.length !==3 ) {alert("Please enter valid cvv number. A 3 digit number")}
      else { setActiveStep(activeStep + 1) }
    }
    // PLACE ORDER BTN
    else if (activeStep === 2) {
      // 1) POST a new payment instance
      const newPayment = {
        user_id: currentUser.id,
        shopping_cart_id: currentUser.shopping_cart.id,
        total,
        subtotal,
        tax,
        shipping
      }
      async function createPayment () {
        const res = await fetch(`http://localhost:3000/payments`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPayment)
        });
        if (res.ok) {
          const payment = await res.json();
          console.log('new payment instance', payment)
          setInvoiceNum(payment.shopping_cart_id)
          setActiveStep(activeStep + 1)
        } else {
          const err = await res.json()
          setErrors(err.errors)
        };
      }
      createPayment();

      // 2) DELETE the current_cart instance
      async function deleteCurrentCart() {
        const res = await fetch(`http://localhost:3000/current_carts/${currentUser.current_cart.id}`, {
          method: 'DELETE'
        })
        if (res.ok) {
          console.log("deleted")
        }
      }
      deleteCurrentCart();

      //3) create a new shopping cart for the currentUser
      const newEmptyShoppingCart = {
        first_name: "n/a",
        last_name: "n/a",
        address: "n/a",
        city: "n/a", 
        state: "na", 
        zip: "00000", 
        country: "n/a"
      }
      async function createEmptyShoppingCart () {
        const res = await fetch(`http://localhost:3000/shopping_carts`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmptyShoppingCart)
        });
        if (res.ok) {
          const emptyShoppingCart = await res.json();
          console.log('new emptyShoppingCart ', emptyShoppingCart)
          createConnectingCurrentCart(emptyShoppingCart) 
        } else {
          const err = await res.json()
          setErrors(err.errors)
        };
      }
      createEmptyShoppingCart();

      //add setActiveStep 

    } else {
    setActiveStep(activeStep + 1)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #{invoiceNum}. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, passToAddress, passToPayment, currentUser)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
