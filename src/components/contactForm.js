// import React, {useEffect, useState } from 'react'

import React, {useState} from 'react';


const ContactForm = (props) => {
    const {name, setName} = useState('')
    const {email, setEmail} = useState('')
    const {subject, setSubject} = useState('')
    const {message, setMessage} = useState('')

  return (<>
  <section className="mb-4 safe" id="contactTop">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact</h2>

    <p className="text-center w-responsive mx-auto mb-5">Got questions? Great, Sam's got answers. They may not be correct answers, but he tries. </p>

        {/* <form id="contact-form" name="contact-form" action="mailto:info@samuelmckaig.com" method="POST" enctype="multipart/form-data">


          <div className="row">


              <div className="col-md-6">
                  <div className="md-form mb-0">
                      <input type="text" id="name" name="name" className="form-control"></input>
                      <label for="name" className="">Your name</label>
                  </div>
              </div> */}


              {/* <div className="col-md-6">
                  <div className="md-form mb-0">
                      <input onChange={ (event) => {
                          event.preventDefault()
                          this.target.value
                      }} type="text" id="email" name="email" className="form-control"></input>
                      <label for="email" className="">Your email</label>
                  </div>
              </div> */}


          {/* </div>

          <div className="row">
              <div className="col-md-12">
                  <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control"></input>
                      <label for="subject" className="">Subject</label>
                  </div>
              </div>
          </div> */}



          {/* <div className="row">


              <div className="col-md-12">

                  <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                      <label for="message">Your message</label>
                  </div>

              </div>
          </div> */}
          {/* <input type="submit" value="Submit"></input> */}

      {/* <div className="text-center text-md-left">
          <button type="submit" className="btn btn-primary" >Send</button>
      </div>
      <div className="status"></div>
      </form> */}

    </section>



</>)
}

export default ContactForm;
