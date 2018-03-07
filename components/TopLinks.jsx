import React from 'react';
import { Link } from 'react-router-dom';

import EditUrlModal from './EditUrlModal.jsx';

export default class TopLinks extends React.Component {

  render() {
    return (
      <table className="table toplinks-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Url</th>
            <th scope="col">Number of times visited</th>
            <th scope="col">Top country</th>
            <th scope="col">Action</th>                          
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>https://aurl.com/shut</td>
            <td>4</td>
            <td>Nigeria</td>
            <td><span className="fa fa-pencil" data-toggle="modal" data-target="#editModal"> </span> <span className="fa fa-trash"></span></td>
          </tr>
        </tbody>

        <EditUrlModal />
      </table>
    )
  }
};
