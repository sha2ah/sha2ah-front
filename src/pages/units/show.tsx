import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from '@pankod/refine-core'
import { Show, Typography, Tag, MarkdownField } from '@pankod/refine-antd'

import { IUnit } from 'interfaces'

const { Title, Text } = Typography

export const UnitShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { queryResult } = useShow<IUnit>()
  const { data, isLoading } = queryResult
  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Phone</Title>
      <Text>
        <Text>{record?.phone}</Text>
      </Text>

      <Title level={5}>Estate</Title>
      <Text>
        <Text>{record?.estate}</Text>
      </Text>

      <Title level={5}>Floor</Title>
      <Text>
        <Text>{record?.floor}</Text>
      </Text>

      <Title level={5}>Number</Title>
      <Text>
        <Text>{record?.number}</Text>
      </Text>
    </Show>
  )
}
