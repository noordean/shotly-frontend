import React from 'react';
import { Link } from 'react-router-dom';

import EditUrlModal from './EditUrlModal.jsx';

const TopLinks = (props) => (
  <table className="table toplinks-table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Url</th>
        <th scope="col">Number of times visited</th>
        <th scope="col">Action</th>                          
      </tr>
    </thead>
    <tbody>
      {
        props.userUrls.map((userUrl, index) => (
          <tr key={userUrl.id} id={userUrl.id}>
            <th scope="row">{index + 1}</th>
            <td><a href={userUrl.shortened_url} target="_blank" className="url-anchor">{userUrl.shortened_url}</a></td>
            <td>{userUrl.number_of_click}</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal" onClick={props.getSelectedUrl}> </span> <span className="fa fa-trash" onClick={props.deleteUrlHandler}></span></td>
          </tr>
        ))
      }
    </tbody>

    <EditUrlModal
      editUrl={props.editUrl}
      onChange={props.onChange}
      urlToEdit={props.urlToEdit}
      selectedUrlChars={props.selectedUrlChars}
    />
  </table>
);

export default TopLinks;
