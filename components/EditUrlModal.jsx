import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

export default class EditUrlModal extends React.Component {

  render() {
    return (
        <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="editModalLabel">Edit URL</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <Input
                      inputType="text"
                      inputPlaceHolder="https://current-url.com"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger modal-close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success modal-send-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
};
