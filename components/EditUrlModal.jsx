import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

const EditUrlModal = (props) => (
  <div className="modal" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
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
                  inputName="urlToEdit"
                  inputType="text"
                  inputPlaceHolder={props.selectedUrlChars}
                  inputValue={props.urlToEdit}
                  onChange={props.onChange}
              />
              </div>
          </form>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-success modal-send-btn update-user-url" onClick={props.editUrl}>Save</button>
          <button type="button" className="btn btn-danger modal-close-btn" data-dismiss="modal">Close</button>
          </div>
      </div>
      </div>
  </div>
);

export default EditUrlModal;
