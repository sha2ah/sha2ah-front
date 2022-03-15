import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export const FAQ = () => {
  return (
    <section id="faq" className="faq section-bg section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <Collapse defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 4" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 5" key="5">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </section>
  )
}

export default FAQ
