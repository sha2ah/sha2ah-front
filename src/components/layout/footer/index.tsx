import React from 'react'
import { RightOutlined } from '@ant-design/icons'

export const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>EasyRent</h3>
              <p>
                October 6 University
                <br />
                Giza
                <br />
                Egypt <br />
                <br />
                <strong>Phone:</strong> +20 102 585 61
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <RightOutlined /> <a href="#">Home</a>
                </li>
                <li>
                  <RightOutlined /> <a href="#">About us</a>
                </li>
                <li>
                  <RightOutlined /> <a href="#">Contact us</a>
                </li>
                <li>
                  <RightOutlined />
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <RightOutlined />
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <RightOutlined /> <a href="#">Landloards</a>
                </li>
                <li>
                  <RightOutlined />
                  <a href="#">Tenants</a>
                </li>
                <li>
                  <RightOutlined />
                  <a href="#">Support</a>
                </li>
                <li>
                  <RightOutlined /> <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
