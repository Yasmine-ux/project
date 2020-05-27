import "./style.css";
import { Link } from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
  button: {
    display: "block",
    // marginTop: theme.spacing(2),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <h4 className="hello-provider">
        To post a service, Please fill out this form
      </h4>
      <div className="select-form">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Service Type
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={props.service.category}
            onChange={handleChange}
          >
            <MenuItem value={10}>Home Help</MenuItem>
            <MenuItem value={20}>Health and Beauty</MenuItem>
            <MenuItem value={30}>Garden and Outdoor</MenuItem>
            <MenuItem value={30}>Plumbing and Painting</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        {/* <ControlledOpenSelect /> */}
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          className="formulaire"
        >
          <TextField
            id="standard-basic"
            label="Service Title"
            onChange={props.handleChange}
            value={props.service.title}
          />
          <TextField
            id="filled-basic"
            label="Service Description"
            onChange={props.handleChange}
            value={props.service.description}
          />
          <TextField
            id="outlined-basic"
            label="Your Name"
            onChange={props.handleChange}
            value={props.service.providername}
          />
          <Link to="/servicelist">
            {" "}
            <input
              type="button"
              value={props.service.edit ? "edit" : "add"}
              onClick={props.handleAction}
            />
          </Link>
        </form>
        <p className="edit">
          To edit or delete a service, Please <a href="/">click here</a> .
        </p>
        <p className="booked">
          To check the list of the booked services, Please{" "}
          <a href="/">click here</a>.
        </p>
      </div>
    </div>
  );
}
