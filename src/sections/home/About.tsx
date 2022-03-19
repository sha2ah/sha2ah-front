import { CheckOutlined } from '@ant-design/icons'

export function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Why Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              You deserve simple property management. Your tenants deserve
              simple rent payments. EasyRent gives you the tools and insights to
              satisfy your tenants and increase your revenue.
            </p>
            <b>Landloard</b>
            <ul>
              <li>
                <CheckOutlined /> Add your properties and tenants with ease
                consequat.
              </li>
              <li>
                <CheckOutlined /> Customize and auto send invoices.
              </li>
              <li>
                <CheckOutlined /> Access all your tenants and leases in one
                place.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              With EasyRent you have the freedom to collect payments online and
              offline. Tenants have the freedom to pay their rent and other
              bills through any of our accepted payment methods.
            </p>
            <b>Tenant</b>
            <ul>
              <li>
                <CheckOutlined /> Receive SMS and email alerts for due payments.
              </li>
              <li>
                <CheckOutlined /> Choose how, when, and from where to pay.
              </li>
              <li>
                <CheckOutlined /> Send requests to your landlord directly.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
