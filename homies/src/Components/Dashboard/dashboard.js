import './style.css'
import Navmenu from '../Navbar/navbar'
import Footer from '../footer/footer'
import ControlledOpenSelect from './selects'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
}));


export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <h4 className='hello-provider'>To post a service, Please fill out this form</h4>
            <ControlledOpenSelect />
            <form className={classes.root} noValidate autoComplete="off" className='formulaire' >
  <TextField id="standard-basic" label="Service Title" />
  <TextField id="filled-basic" label="Service Description"  />
  <TextField id="outlined-basic" label="Your Name"  />
</form>
<p className='edit'>To edit or delete a service, Please <a href='/'>click here</a> .</p>
<p className='booked'>To check the list of the booked services, Please <a href='/'>click here</a>.</p>
        </div>
    )
}
