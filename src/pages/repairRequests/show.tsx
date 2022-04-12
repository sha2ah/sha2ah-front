import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from '@pankod/refine-core'
import { Show, Typography, Tag, MarkdownField } from '@pankod/refine-antd'

import { IRepairRequest } from 'interfaces'

const { Title, Text } = Typography

export const RepairRequestShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { queryResult } = useShow<IRepairRequest>()
  const { data, isLoading } = queryResult
  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{t('repairRequests.fields.owner')}</Title>
      <Text>{record?.owner}</Text>

      <Title level={5}>{t('repairRequests.fields.unit')}</Title>
      <Text>
        <Tag>{record?.unit}</Tag>
      </Text>

      <Title level={5}>{t('repairRequests.fields.status')}</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>{t('repairRequests.fields.date')}</Title>
      <Text>{record?.date}</Text>

      <Title level={5}>{t('repairRequests.fields.details')}</Title>
      <MarkdownField value={record?.details} />

      <Title level={5}>{t('repairRequests.fields.notes')}</Title>
      <MarkdownField value={record?.notes} />
    </Show>
  )
}
