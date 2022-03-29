import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from '@pankod/refine-core'
import { Show, Typography, Tag, MarkdownField } from '@pankod/refine-antd'

import { IRenter } from 'interfaces'

const { Title, Text } = Typography

export const RenterShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { queryResult } = useShow<IRenter>()
  const { data, isLoading } = queryResult
  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Phone</Title>
      <Text>{record?.phone}</Text>

      {/* <Title level={5}>Email</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text> */}

      <Title level={5}>Details</Title>
      <MarkdownField value={record?.bio} />
    </Show>
  )
}
