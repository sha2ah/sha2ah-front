import React from 'react'

export const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Pricing</h2>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-aos="zoom-im"
            data-aos-delay="100"
          >
            <div className="box">
              <h3>Free</h3>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="box featured">
              <h3>Basic</h3>
              <h4>
                <sup>$</sup>19<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="box">
              <h3>Premium</h3>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
