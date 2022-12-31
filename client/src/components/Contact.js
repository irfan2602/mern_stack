import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='contact_info_item d-flex justify-content-start align-items-center' id='contact_info'>
                {/* <i class="zmdi zmdi-smartphone-android"></i> */}
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Phone
                  </div>
                  <div className='contact_info_text'>
                    +917633929595
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='contact_info_item d-flex justify-content-start align-items-center' id='contact_info'>
                {/* <i class="zmdi zmdi-email"></i> */}
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Email
                  </div>
                  <div className='contact_info_text'>
                    meirfan18@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='contact_info_item d-flex justify-content-start align-items-center' id='contact_info'>
                {/* <i class="zmdi zmdi-home"></i> */}
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Address
                  </div>
                  <div className='contact_info_text'>
                    Ranchi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact_form' >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12' >
              <div className='contact_form_container' id='contact_form'>
                <div className='contact_form_title' id='contact_form_title'>
                  Get In Touch Please
                  <form>
                    <div className='contact_form_input' id='contact_form_input'>
                      <input type='text' id="name" placeholder="Name" required></input>
                      <input type='email' id="email" placeholder="Email" required></input>
                      <input type='number' id="phone" placeholder="Phone" required></input>
                    </div>
                    <div className='contact_form_msg' id='contact_form_msg'>
                      <textarea type="text" cols="110" id="textarea" rows="5" placeholder='Message...' ></textarea>
                    </div>
                    <div className='contact_form_btn' id='contact_form_btn'>
                      <button type='button' className='btn btn-primary' >Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact