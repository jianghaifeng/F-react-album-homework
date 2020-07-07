import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { name, email, phone, website, company } = this.props.user;
    return (
      <aside className="UserInfo">
        <h2>{name}</h2>
        <label>Contact Me @</label>
        <table>
          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{website}</td>
          </tr>
          <tr>
            <th>Company</th>
            {company ? <td>{company.name}</td> : null}
          </tr>
        </table>
      </aside>
    );
  }
}

export default UserInfo;
