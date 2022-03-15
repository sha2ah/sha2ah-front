import { useTranslate } from '@pankod/refine-core'
import { AntdLayout, Button } from '@pankod/refine-antd'

import { useAuth0 } from '@auth0/auth0-react'
import { EstateList } from './estates'

export const Home: React.FC = () => {
  const t = useTranslate()
  window.location.href = "/estates";
  return <EstateList></EstateList>
}
