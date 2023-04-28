import React from 'react'

export default function Footer(props) {
  return (
    <>    
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <footer style={{position:"relative",bottom:"0px"}} className={`text-center text-lg-start mt-4 bg-${props.mode} ${props.mode === "light"?"text-dark":"text-light"}`}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://wa.me/9625809384" className="me-4 text-reset">
              <i className="fa fa-whatsapp fa-1x"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013005587099&mibextid=ZbWKwL" className="me-4 text-reset">
              <i className="fa fa-facebook-f fa-1x"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fa fa-twitter fa-1x"></i>
            </a>
            <a href="mailto:rahulchauhah50@gmail.com" className="me-4 text-reset">
              <i className="fa fa-envelope fa-1x"></i>
            </a>
            <a href="https://www.linkedin.com/in/rahul-chauhan-939102208" className="me-4 text-reset">
              <i className="fa fa-linkedin fa-1x"></i>
            </a>
            <a href="https://github.com/Rahulchauhan50" className="me-4 text-reset">
              <i className="fa fa-github fa-1x"></i>
            </a>
            <a href="sms:+91 9625809384" className="me-4 text-reset">
            <strong className="fa fa-comments-o fa-1x"></strong>
            </a>
            <a href="tel:+91 9625809384" className="me-4 text-reset">
            <strong className="fa fa-phone fa-1x"></strong>
            </a>
          </div>
        </section>
      
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fa fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
      
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>
      
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
      
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fa fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  Rahulchauhah50@gmail.com
                </p>
                <p><i className="fa fa-phone me-3"></i> + 91 96258 09384</p>
                <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
      
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
  </>
  )
}
