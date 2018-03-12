import React from 'react';

const ShortenedLink = (props) => (
  <div className="row shortened-link">
    <div className="col-sm-10" id="shortened-url">{props.shortenedUrl}</div>
    <div className="col-sm-2 copy" onClick={props.copyUrl}>Copy</div>
  </div>
);

export default ShortenedLink;
