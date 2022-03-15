import React from 'react'
import {
  LockOutlined,
  RiseOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons'

export function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>The leading platform for property management.</h1>
            <h2>Our platform is built with you in mind.</h2>
          </div>
        </div>
        <div className="text-center">
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>

        <div className="row icon-boxes">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <LockOutlined />
              </div>
              <h4 className="title">FAST AND SECURE COLLECTION</h4>
              <p className="description">
                Setup auto-reminders and collect rent online.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <DashboardOutlined />
              </div>
              <h4 className="title">EFFICIENT PROPERTY MANAGEMENT</h4>
              <p className="description">
                Efficient management of all your properties.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <RiseOutlined />
              </div>
              <h4 className="title">SMARTER INSIGHTS AND REPORTS</h4>
              <p className="description">
                Get reports about your tenants and properties.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="icon-box">
              <div className="icon">
                <FieldTimeOutlined />
              </div>
              <h4 className="title">Anytime, Anywhere</h4>
              <p className="description">
                You will be able to pay your rent whenever and wherever you
                choose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
