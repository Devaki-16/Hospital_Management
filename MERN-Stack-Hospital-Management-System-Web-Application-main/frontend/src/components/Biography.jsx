import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
             We are committed to redefining healthcare management by providing a comprehensive,
            efficient, and user-friendly hospital management system. Our platform is designed
            to streamline hospital operations, enhance patient care, and empower medical
            professionals with innovative digital solutions. With a focus on accuracy, security,
            and ease of use, we aim to be your trusted partner in delivering exceptional healthcare services.
          </p>
          <p>We are all in 2026!</p>
          
          <p>
             We are a dedicated team committed to transforming healthcare management through innovative 
             technology. Our hospital management system is designed to streamline clinical and administrative 
             processes, improve patient care, and support medical professionals with reliable, secure, and 
             easy-to-use digital solutions. With a focus on excellence and efficiency, we strive to be your 
             trusted partner in delivering exceptional healthcare services.
          </p>
          <p>This is who we are</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
