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

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Profile</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Timeline</button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div><label>User Id: <span>12345</span></label></div>
                    <div><label>Name: <span>Irfan Ahmad</span></label></div>
                    <div><label>Work: <span>Web Developer</span></label></div>
                    <div><label>Location: <span>Ranchi</span></label></div>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div><label>Last Active: <span>10 Hours Ago</span></label></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-2'>
              <button type="button" className="btn btn-outline-primary btn-sm" id='edit_profile'>Edit Profile</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile_work' id='work'>
                <p>Work Link</p>
                <a href='https://www.youtube.com/' target="_blank" id='social_link'>YouTube</a><br />
                <a href='https://www.facebook.com/' target="_blank" id='social_link'>Facebook</a><br />
              </div>
            </div>
            {/* <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='tab-content' id='myTabContent'>
                    
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </>
  )
}

export default About