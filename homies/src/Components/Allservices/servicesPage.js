import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SerCard from "../Allservices/cardservices";
import Dashboard from "../Dashboard/dashboard";
import { connect } from "react-redux";
import {
  getServices,
  addService,
  deleteService,
  putService,
} from "../../Redux/Actions/ServProviderActions";

class servicesPage extends Component {
  state = {
    title: "",
    description: "",
    providername: "",
    category: "",
    edit: false,
  };
  getService = (service) => {
    this.setState({
      title: service.title,
      description: service.description,
      providername: service.providername,
      category: service.category,
      edit: true,
    });
  };
  addSer = () => {
    this.reset();
    this.props.addService(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount = () => {
    this.props.getServices();
  };
  reset = () => {
    this.setState({
      title: "",
      description: "",
      category: "",
      edit: false,
      providername: "",
    });
  };
  putServ = () => {
    this.reset();
    this.props.putService(this.state.id, this.state);
  };
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/dashboard"
          render={() => (
            <Dashboard
              handleChange={this.handleChange}
              service={this.state}
              handleAction={this.state.edit ? this.putServ : this.addSer}
            />
          )}
        />
        <div>
          <Route
            path="/servicelist"
            render={() => (
              <div>
                {this.props.services.map((service) => (
                  <div>
                    <SerCard
                      service={service}
                      delete={this.props.deleteService}
                      getService={this.getService}
                    />
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  services: state.services,
});
export default connect(mapStateToProps, {
  getServices,
  addService,
  deleteService,
  putService,
})(servicesPage);
