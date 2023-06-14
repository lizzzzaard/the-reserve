import React from "react";
import "./Footer.css";

function Footer() {
    const footerStyle = {
        width: 60,
        height: 2,
        backgroundColor: 'blue',

    }

    //component for footer on home page, rendered in App.js
    return (
        <div className="Footer">
            <div className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on our socials:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-google"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                        <i className="fa-brands fa-yelp"></i>
                        </a>
                    </div>
                </section>
                
                <section className=''>
                    <div className='container text-center text-md-start mt-5'> 
                        <div className='row mt-3'>
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">The Reserve</h6>
                                <hr className='mb-4 mt-0 d-inline-block mx-auto'
                                    style={footerStyle}
                                    />
                                <p>Coffee. Tea.</p>
                                <p>Simple recipes with bold flavors.</p>
                            </div>
                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold'>Shop</h6>
                                <hr className='mb-4 mt-0 d-inline-block mx-auto'
                                    style={footerStyle}
                                    />
                                <p>
                                    <a href='' className=''>Order Ahead</a>
                                </p>
                                <p>
                                    <a href='' className=''>Merch</a>
                                </p>
                                <p>
                                    <a href='' className=''>Collaborations</a>
                                </p>
                            </div>
                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className="text-uppercase fw-bold">Helpful Links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={footerStyle}
                                    />
                                <p>
                                    <a href='' className=''>Account</a>
                                </p>
                                <p>
                                    <a href='' className=''>Collab with Us</a>
                                </p>
                                <p>
                                    <a href='' className=''>Help</a>
                                </p>
                            </div>
                            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold'>Contact</h6>
                                <hr className='mb-4 mt-0 d-inline-block mx-auto'
                                    style={footerStyle}
                                    />
                                <p>San Diego, CA 92116, US</p>
                                <p>info@thereserve.com</p>
                                <p>+ 888-888-8888</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
       </div>
    )
}

export default Footer;