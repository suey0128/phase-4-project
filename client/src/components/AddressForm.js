import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm({passToAddress}) {



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={passToAddress[0]}
            onChange={(e)=> {passToAddress[1](e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={passToAddress[2]}
            onChange={(e)=> {passToAddress[3](e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address"
            value={passToAddress[4]}
            onChange={(e)=> {passToAddress[5](e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={passToAddress[6]}
            onChange={(e)=> {passToAddress[7](e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" 
            name="state" 
            label="State/Province/Region" 
            fullWidth 
            value={passToAddress[8]}
            onChange={(e)=> {passToAddress[9](e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={passToAddress[10]}
            onChange={(e)=> {passToAddress[11](e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            value={passToAddress[12]}
            onChange={(e)=> {passToAddress[13](e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" 
                                    name="saveAddress" 
                                    value="yes" 
                                    checked={passToAddress[14]} 
                                    onChange={()=>{passToAddress[15](!passToAddress[14])}}/>}
                label="Save as default address"
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
