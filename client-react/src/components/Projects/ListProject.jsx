import React from "react";
import axios from "axios";
import "./ListProject.css"
// import "@fortawesome/fontawesome-free/css/all.min.css";

class ListProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], name: null, query: "" };
    this.deleteProject = this.deleteProject.bind(this);
    this.refreshProject = this.refreshProject.bind(this);
    this.routeAddProject = this.routeAddProject.bind(this);
  }

  //REDIRECT PAGE
  routeAddProject() {
    let path = `/AddProject`;
    this.props.history.push(path);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/test/api/v1/project").then(response => {
      this.setState({ projects: response.data });
      console.table(response.data);
      console.warn("Project Service is working");
    });

    // CALLING REFRESH Project METHOD
  //  this.refreshProject();
  }

  //REFRESH Project METHOD
  refreshProject() {
    axios.get("http://localhost:8080/test/api/v1/project").then(response => {
      console.warn("Refresh Service is working");
      this.setState({ projects: response.data });
    });
  }
  /*END OF REFRESH METHOD */

  //Route Edit Project
  routeEditProject(id) {

    this.props.history.push(`/EditProject/${id}`);
    console.warn("Edit Service is routing with id="+{id});
  }

  //DELETE-METHOD 01
  deleteProject(id) {
    axios
      .delete("http://localhost:8080/test/api/v1/project/" + id)
      .then(response => {
        console.warn("Delete Service is working");
        this.refreshProject(response);

        alert(" Project deleted successfully");
      });
  }
  /*END OF DELETE METHOD = 1*/

  render() {
    return (
      <div className="body">
        <br />

        <h3 align="center">LIST-PROJECTS</h3>
        <br />
        <div className="container" onLoad={this.refreshProject}>
          <button
            className="btn btn-success"
            type="submit"
            onClick={this.routeAddProject}
          >
            <i className="button"> Add</i>
          </button>
          <br />

          <br />

          <table id="table">
            <thead>
              <tr>
                <th>Project Id</th>
                <th>Project Name</th>
                <th>project Description</th>
                <th> &nbsp; &nbsp; &nbsp; &nbsp;ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.projectName}</td>
                  <td>{project.projectDescription}</td>
                  <td>
                    <button className="button green" type="submit">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.routeEditProject(project.id)}
                      >
                        Edit
                      </i>
                    </button>
                    &nbsp;
                    <button
                      className="button red"
                      //NORMAL CALL
                      // onClick={() => this.deleteProject(project.id)}

                      //CALL WITH CONFIRM MESSAGE
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this Project? "
                        ) && this.deleteProject(project.id)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListProject;
