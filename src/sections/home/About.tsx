import { RightOutlined } from '@ant-design/icons'
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
              simple rent payments. Ajar gives you the tools and insights to
              satisfy your tenants and increase your revenue.
            </p>
            <ul>
              <li>
                <RightOutlined /> Ullamco laboris nisi ut aliquip ex ea commodo
                consequat
              </li>
              <li>
                <RightOutlined /> Duis aute irure dolor in reprehenderit in
                voluptate velit
              </li>
              <li>
                <RightOutlined /> Ullamco laboris nisi ut aliquip ex ea commodo
                consequat
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              You deserve simple property management. Your tenants deserve
              simple rent payments. EasyRent gives you the tools and insights to
              satisfy your tenants and increase your revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
