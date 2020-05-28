import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      providername: "",
    };
  }

  handleState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addService = () => {
    axios.post("https://localhost:5000/services/add", {
      title: this.state.title,
      description: this.state.description,
      id_category: this.state.category,
      id_serviceProvider: this.state.providername,
    })
    .then (res => res.data)
    .catch(err => console.error (err));
  };

  render() {
    return (
      <div className="add-service-container">
        <h1> Add Service Page </h1>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label> Service Name </label>
          <input
            className="add-modal"
            name="title"
            onChange={this.handleState}
          />

          <label> Description </label>
          <input
            className="add-modal"
            name="description"
            onChange={this.handleState}
          />

          <label>Category </label>
          <input
            className="add-modal"
            name="category"
            onChange={this.handleState}
          />
          <label> Service provider name </label>
          <input
            className="add-modal"
            name="providername"
            onChange={this.handleState}
          />
          {/* <Link to="/services"> */}
            <input
              type="button"
              value="Add service"
              className="modal-btn"
              onClick={() => this.addService()}
            />
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

export default AddService;
