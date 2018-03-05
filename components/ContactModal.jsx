import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

export default class Contact extends React.Component {

  render() {
    return (
        <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="contactModalLabel">Contact us</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <Input
                      inputType="text"
                      inputPlaceHolder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" placeholder="Enter your message"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-danger modal-close-btn" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-success modal-send-btn">Send</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
};
