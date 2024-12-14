import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact">
        <div className="heading-container">
          <h1>Contact Me</h1>
        </div>
        <div className="container">
        <div className="contact-info">
            <div><i className="fas fa-phone-alt"></i> +92 3343103502</div>
            <div><i className="fas fa-envelope"></i> business.ashirnaeem@gmail.com</div>
            <div><i className="fas fa-map-marker-alt"></i>Gulshan-e-Iqbal, Karachi, Pakistan</div>
        </div>
        <div className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <div style={{display: "flex", flexWrap: "wrap"}} />
                <input type="tel" placeholder="Phone Number" />
                <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
            </div>
        </div>
    </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
