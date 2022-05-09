import React from 'react'
import { RightOutlined } from '@ant-design/icons'

export const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-top text-center">
        <div className="container">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
          EasyRent
        </div>
      </div>
    </footer>
  )
}
