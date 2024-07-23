import React, { Component } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Users",
  subtitle: "Users register: Creat, Read, Update, Delete!!",
};

const baseUrl = "http://localhost:3001/users";
const initialSatate = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  state = { ...initialSatate };

  clear() {
    this.setState({ use: initialSatate.user });
  }

  getUpdatesLits(user) {
    const list = this.state.list.filer(u => u.id !== user.id);
    list.unshift(user);
    return list;
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user)
        .then((resp) => {
            const list = this.getUpdatesLits(resp.data);
            this.setState({ user: initialSatate.user, list });
    });
  }

  updateFields(event) {
    const user = {
      ...this.state.user,
    }; /* Clona as informacoes no formulario */
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() { /* JSX */
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updateFields(e)}
                placeholder="Type your name..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                /* text */ className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updateFields(e)}
                placeholder="Type your e-mail..."
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={(e) => this.save(e)}>
              Save
            </button>
            <button
              className="btn btn-secundary ml-2"
              onClick={(e) => this.clear(e)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderTable() {}

  renderRow() {}

  render() {
    return (
    <Main {...headerProps}>
        {this.renderForm()}
    </Main>
    )
  }
}
