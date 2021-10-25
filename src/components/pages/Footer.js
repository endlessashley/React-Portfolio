import React from 'react';

function Footer() {
    return (
<div className="row justify-content-center nav">

<div className="col-sm-4 col-xs-12 text-center">
  <a href="https://www.linkedin.com/in/ashley-marie-tate/" className="contact-icon"
    title="Connect with me on LinkedIn">
    <i className="fab fa-linkedin"></i></a>
</div>
<div className="col-sm-4 col-xs-12 text-center">
  <a href="mailto: ashley.m.tate@gmail.com" className="contact-icon" title="Code with me on Github">
    <i className="fab fa-github"></i></a>
</div>
<div className="col-sm-4 col-xs-12 text-center">
  <a href="mailto:ashley.m.tate@gmail.com" className="contact-icon" title="Shoot me an e-mail">
    <i className="fas fa-envelope"></i></a>
</div>
</div>
    )
}


export default Footer;
