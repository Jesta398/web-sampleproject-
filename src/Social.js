import React from "react";
import "./Styles.css";

const Social = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="container pt-5 pb-2 ">
          <div className="row">
            <div className="col-md-2 col-4 mb-5 text-center">
              <i className="fas fa-basketball-ball fa-2x "></i>
            </div>
            <div className="col-md-2 col-4 mb-5 text-center">
            <i class="fab fa-facebook-f fa-2x"></i>
            </div>
            <div className="col-md-2 col-4 mb-5 text-center">
            <i class="fab fa-twitter fa-2x"></i>
            </div>
            <div className="col-md-2 col-4 mb-5 text-center">
            <i class="fab fa-linkedin-in fa-2x"></i>
            </div>
            <div className="col-md-2 col-4 mb-5 text-center">
            <i class="fab fa-instagram fa-2x"></i>
            </div>
            <div className="col-md-2 col-4 mb-5 text-center">
            <i class="fab fa-twitter fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex flex-column align-items-center justify-content-center">
        <p className='copyText'>&copy; copyright <span className='first'>Instant</span> All Rights Reserved </p>
        <p className='copyText'>Created with Instant Template by <span className='temp'>TemplateMag</span></p>
      </div>
    </div>
  );
};

export default Social;

