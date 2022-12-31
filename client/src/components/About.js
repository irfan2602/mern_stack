import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='container'>
        <form id='about_form'>
          <div className='row'>
            <div className='col-md-4' id='about_content'>
              <img src='' alt='' />
            </div>
            <div className='col-md-6'>
              <div className='profile_title'>
                <h5>Irfan</h5>
                <h6>Web Developer</h6>
                <p className='profile_rating'>RANKING : <span>1/10</span></p>
                <ul className="nav nav-pills" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id='profile_tab' data-bs-toggle="pill" role="tab" href="#">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id='timeline_tab'  data-bs-toggle="pill" role="tab" href="#">Timeline</a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <button type="button" className="btn btn-outline-primary btn-sm" id='edit_profile'>Edit Profile</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About