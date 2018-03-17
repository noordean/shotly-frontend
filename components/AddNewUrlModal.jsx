import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';
import ShortenedLink from './ShortenedLink.jsx';

const AddNewUrlModal = (props) => (
  <div className="modal fade" id="newUrlModal" tabIndex="-1" role="dialog" aria-labelledby="newUrlModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">Create URL</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <Input
                inputName="originalUserUrl"
                inputType="text"
                inputPlaceHolder="Enter url"
                inputValue={props.originalUserUrl}
                onChange={props.onChange}
              />
              {Object.keys(props.shortenedUrl).length !== 0 ? <ShortenedLink shortenedUrl={props.shortenedUrl.shortened_url} copyUrl={props.copyShortenedUrl} /> : ''}
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success modal-send-btn shorten-user-url" onClick={props.onClick}>Shorten</button>
          <button type="button" className="btn btn-danger modal-close-btn" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);

export default AddNewUrlModal;
