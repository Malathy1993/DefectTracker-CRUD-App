import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], name: null };
    this.state.projects = {
      id: this.props.match.params.id,
      projectDescription: "",
      projectName: ""
    };
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangedesc = this.handleChangedesc.bind(this);
    this.routeListProject = this.routeListProject.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/test/api/v1/project/" + this.props.match.params.id
      )
      
      .then(result => {
        console.table(result);
        console.log("id is "+this.props.match.params.id);
        this.setState({
          id: result.data.id,
          txtprojectdesc: result.data.projectDescription,
          txtprojectname: result.data.projectName
        });
      });
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
    //avoid refreshing browser
    e.preventDefault();
   // alert(this.state.txtprojectid);
    const update = {
      
      id: this.state.id,
      projectDescription: this.state.txtprojectdesc,
      projectName: this.state.txtprojectname
    };
    axios.put("http://localhost:8080/test/api/v1/project", update).then(res => {
      if (res.status === 200) {
        alert("Project update successfully.");
        window.location.reload();
      }
    });

    this.routeListProject();
  }

  //BACK BOOK LIST
  routeListProject() {
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="body">
        <div className="container">
          <br />
          <button
            className="button"
            type="submit"
            onClick={this.routeListProject}
          >
            <i className="fa fa-arrow-circle-left  "> Back</i>
          </button>
          <h3 align="center">EDIT-PROJECTS</h3>
        </div>

        <Formik>
          <Form className="container" onSubmit={this.onSubmit}>
          <fieldset>
              <label>Project Id</label>
              <Field
                className="form-control"
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChangeid}
                //placeholder="Project Id Here"
                //disabled
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
               // placeholder="Project Name Here"
              />
            </fieldset>
            {/* <fieldset className="form-group">
              <label> Project Description</label>
              <Field
                className="form-control"
                type="text"
                name="txtprojectdesc"
                value={this.state.txtprojectdesc}
                onChange={this.handleChangedesc}
                //placeholder="Project Desc Here"
              />
            </fieldset>  */}
            <fieldset className="form-group">
            <label> Project Description</label>
            <textarea 
            className="form-control" 
            name="txtprojectdesc"
            rows="5"
            cols = "600"
            value={this.state.txtprojectdesc}
            onChange={this.handleChangedesc}
           // placeholder="Project Desc Here"
              />
            </fieldset> 
            <button
              className="button green"
              value="Submit"
              type="submit"
              align="center"
            >
              <i className="fa fa-plus"> Update</i>
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

export default EditProject;
