import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
// import "react-s-alert/dist/s-alert-default.css";
// import "react-s-alert/dist/s-alert-css-effects/slide.css";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], name: null };
    this.state = { id: "", projectName: "", projectDescription: "" };
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangedesc = this.handleChangedesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.routeListProject = this.routeListProject.bind(this);
  }

  //GET ID METHOD
  handleChangeid(e) {
    this.setState({
      txtprojectid: e.target.value
    });
  }

  //GET DESC METHOD
  handleChangedesc(f) {
    this.setState({
      txtprojectdesc: f.target.value
    });
  }

  //GET NAME METHOD
  handleChangename(g) {
    this.setState({
      txtprojectname: g.target.value
    });
  }

    //ON SUBMIT FORM METHOD
    onSubmit(e) {
      e.preventDefault();
      const save = {
        id: this.state.txtprojectid,
        projectDescription: this.state.txtprojectdesc,
        projectName: this.state.txtprojectname
      };
      axios.post("http://localhost:8080/test/api/v1/project", save).then(res => {
        if (res.status === 200) {
          alert("Book Added successfully.!");
          window.location.reload();
        }
      });
  
      this.setState({
        id: "",
        projectDescription: "",
        bookNprojectNameame: ""
      });
  
      this.routeListProject();
    } 

  //BACK FUNCTION TO BOOK lIST
  routeListProject() {
    let path = `/`;
    this.props.history.push(path);
  }

  //RENDERING PATTERN
  render() {
    return (
      <div className="body">
        <div className="container">
          <br />
          <button
            className="button blue"
            type="submit"
            onClick={this.routeListProject}
          >
            <i className="fa fa-arrow-circle-left  "> Back</i>
          </button>
          <h3 align="center">CREATE-PROJECT</h3>
        </div>

        <Formik>
          <Form className="container" onSubmit={this.onSubmit}>
            <fieldset>
             <label>Project Id</label>
              <Field
                className="form-control"
                type="text"
                name="txtprojectid"
                value={this.state.txtprojectid}
                onChange={this.handleChangeid}
                placeholder="Project Id Here"
              />
             
            </fieldset>
            <fieldset className="form-group">
              <label> Project Name</label>
              <Field
                className="form-control"
                type="text"
                name="txtprojectname"
                value={this.state.txtprojectname}
                onChange={this.handleChangename}
                placeholder="Project Name Here"
              />
            </fieldset>
            {/* <fieldset className="form-group">
              <label> Project Description</label>
              <Field
                className="form-control"
                type="textarea"
                name="txtprojectdesc"
                value={this.state.txtprojectdesc}
                onChange={this.handleChangedesc}
                placeholder="Project Desc Here"
              />
             </fieldset> */}
            <fieldset className="form-group">
            <label> Project Description</label>
            <textarea 
            className="form-control" 
            name="txtprojectdesc"
            rows="5"
            cols = "600"
            value={this.state.txtprojectdesc}
            onChange={this.handleChangedesc}
            placeholder="Project Desc Here"
              />
            </fieldset>           
            <button
              className="button"
              value="Submit"
              type="submit"
              align="center"
            >
              <i className="fa fa-plus"> Add</i>
            </button>
            &nbsp;
            <button
              className="button red"
              type="reset"
              onClick={this.routeListProject}
              align="center"
            >
              <i className="fa fa-location-arrow"> cancel</i>
            </button>
            <br />
            &nbsp; &nbsp; &nbsp;
          </Form>
        </Formik>
      </div>
    );
  }
}

export default AddProject;

