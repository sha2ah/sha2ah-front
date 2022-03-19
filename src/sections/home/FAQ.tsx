import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

const data = [
  {
    id: 'q1',
    title: 'What is EasyRent?',
    description:
      'EasyRent is a cloud service designed for the real estate market, offering quick online rent payment and a property management platform.',
  },
  {
    id: 'q2',
    title: 'How does EasyRent assure a secure and faster collection?',
    description:
      'EasyRent allows property managers to accept online payments from their tenants. It makes rent collection easier, faster and more secure by avoiding the fraud and cash risks and allows property managers to keep track of tenant records and payments.',
  },
  {
    id: 'q3',
    title: 'How does EasyRent assure ease of property management?',
    description:
      'EasyRent increases on time rent payment with reduced admin work, by providing seamless collection channels with real time tracking of rent status as well as instant reports of properties status. EasyRent allows for direct communication between landlord and tenant through EasyRent Message Center.',
  },
  {
    id: 'q4',
    title:
      'What are the benefits for the tenants to use EasyRent to pay their rent?',
    description:
      'The tenants will be able to pay anywhere & anytime by receiving auto-reminders when the rent is due.',
  },
  {
    id: 'q5',
    title:
      'How can I encourage my landlord to accept my rent through EasyRent?',
    description: `To encourage your landlord to provide EasyRent's service for you kindly inform your landlord of your interest to pay online using EasyRent. Provide your landlord's name and contact information to EasyRent team to enable the service.`,
  },
]

export const FAQ = () => {
  const questions = data.map((question) => {
    return (
      <Panel header={question.title} key={question.id}>
        <p>{question.description}</p>
      </Panel>
    )
  })

  return (
    <section id="faq" className="faq section-bg section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <Collapse defaultActiveKey={['q1']}>{questions}</Collapse>
      </div>
    </section>
  )
}

export default FAQ
