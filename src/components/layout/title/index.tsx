import React from 'react'
import routerProvider from '@pankod/refine-react-router'
import { TitleProps } from '@pankod/refine-core'

import './styles.scss'

const { Link } = routerProvider

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
  <Link to="/renters">
    {collapsed ? (
      <img
        src={'/EASY RENT logo white.png'}
        alt="EASY RENT LOGO"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '100px',
        }}
      />
    ) : (
      <img
        src={'/EASY RENT logo white.png'}
        alt="EASY RENT LOGO"
        style={{
          width: '150px',
        }}
      />
    )}
  </Link>
)
