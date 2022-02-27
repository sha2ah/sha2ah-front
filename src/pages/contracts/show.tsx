import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from '@pankod/refine-core'
import { Show, Typography, Tag, MarkdownField } from '@pankod/refine-antd'

import { IContract } from 'interfaces'

const { Title, Text } = Typography

export const ContractShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { queryResult } = useShow<IContract>()
  const { data, isLoading } = queryResult
  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Title</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>Type</Title>
      <Text>
        <Tag>{record?.type}</Tag>
      </Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>Validity</Title>
      <Text>
        <Tag>{record?.validity}</Tag>
      </Text>

      <Title level={5}>Date</Title>
      <Text>{record?.date}</Text>

      <Title level={5}>Details</Title>
      <MarkdownField value={record?.details} />
    </Show>
  )
}
