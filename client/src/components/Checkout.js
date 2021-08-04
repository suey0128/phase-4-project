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
  const [address, setAddress] = useState(currentUser.shipping_address.split(', ')[0])
  const [city, setCity] = useState(currentUser.shipping_address.split(', ')[1])
  const [state, setState] = useState(currentUser.shipping_address.split(', ')[2])
  const [zipCode, setZipCode] = useState(currentUser.shipping_address.split(', ')[3])
  const [country, setCountry] = useState(currentUser.shipping_address.split(', ')[4])
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


  const [errors, setErrors] = useState([]);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  //POST a new payment instance connect (add new attr)
  async function createPayment (createdPurchase) {
    const res = await fetch(`payments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        shopping_cart_id: createdPurchase.id,
        total: total,
        subtotal: subtotal,
        tax: tax,
        shipping: shipping
      }),
    });
    if (res.ok) {
      const createdPayment = await res.json();
      console.log('createdPayment', createdPayment)
    } else {
      const err = await res.json()
      setErrors(err.errors)
    };
  }

  const handleNext = () => {
    if (activeStep === 2) {
      //if box is check, PATCH user's shipping address
      if (saveAdd) {
        const updateUser = {
          first_name: fName,
          last_name: lName, 
          shipping_address: `${address}, ${city}, ${state} ${zipCode}, ${country}`
        };
        async function updateShipping () {
          const res = await fetch(`users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUser),
          });
          if (res.ok) {
            const updatedUser = await res.json();
            console.log('address patched', updatedUser)
          } else {
            const err = await res.json()
            setErrors(err.errors)
          };
        }
        updateShipping();
      }

      //POST a new shopping_cart instance (as purchase)
      // const newPurchase = {
      //   user_id: currentUser.id,
      //   paid: true,
      //   first_name: fName,
      //   last_name: fName,
      //   shipping_address: `${address}, ${city}, ${state} ${zipCode}, ${country}`
      // }
      // async function createPurchase () {
      //   const res = await fetch(`shopping_carts`, {
      //     method: 'POST',
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(newPurchase),
      //   });
      //   if (res.ok) {
      //     const createdPurchase = await res.json();
      //     console.log('createdPurchase', createdPurchase)
      //     //POST a new payment instance connect (add new attr) and associate with this purchase 
      //     createPayment(createdPurchase)
      //   } else {
      //     const err = await res.json()
      //     setErrors(err.errors)
      //   };
      // }
      // createPurchase();

      //clear out the current shopping cart instance by
      //figure out a way to change all the cartItem's shopping_cart_id to new purchase 
      //add setActiveStep 

    } else {
    setActiveStep(activeStep + 1)
    }
  };



  // console.log(`${address}, ${city}, ${state} ${zipCode}, ${country}`)

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
                  Your order number is #2001539. We have emailed your order confirmation, and will
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
