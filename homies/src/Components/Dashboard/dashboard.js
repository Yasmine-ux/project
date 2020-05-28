import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

class Dashboard extends React.Component {
  // const classes = useStyles();
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }
  componentDidMount() {
    axios.get("https://localhost:5000/services").then((res) => {
      this.setState({
        services: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <p className="dashboard-phrase">
          List of Offered Services! You can add more services, delete or edit
          other services.
        </p>
        <div className="service-section">Services Cards go here</div>
        <button onClick={()=> console.log(this.state.services)}>Test</button>
        {/* <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip> */}
        <div style={{ display: "flex" }}>
          {this.state.services.map(
            (el, i) => (
              <div>
                <h1> Service name : {el.name} </h1>
                <h2> Description : {el.description} </h2>
                <h2> Category : {el.category}</h2>
                <h2> Service provider name : {el.providername}</h2>
              </div>
            )

            // return <ServiceItem services={el}/>
          )}
        </div>
        <Link to="/services/add">
          <Tooltip title="Add a Service" aria-label="add">
            <Fab
              color="primary"
              // className={classes.fab}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </Link>
      </div>
    );
  }
}
export default Dashboard;
