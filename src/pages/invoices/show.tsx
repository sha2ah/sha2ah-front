import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from '@pankod/refine-core'
import { Show, Typography, Tag, MarkdownField } from '@pankod/refine-antd'

import { IInvoice } from 'interfaces'

const { Title, Text } = Typography

export const InvoiceShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { queryResult } = useShow<IInvoice>()
  const { data, isLoading } = queryResult
  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{t('invoices.fields.total')}</Title>
      <Text>{record?.total}</Text>

      <Title level={5}>{t('invoices.fields.issue_date')}</Title>
      <Text>
        <Tag>{record?.issue_date}</Tag>
      </Text>

      <Title level={5}>{t('invoices.fields.due_date')}</Title>
      <Text>
        <Tag>{record?.due_date}</Tag>
      </Text>

      <Title level={5}>{t('invoices.fields.due_date')}</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>{t('invoices.fields.payment_method')}</Title>
      <Text>{record?.payment_method}</Text>

      <Title level={5}>{t('invoices.fields.unit')}</Title>
      <Text>{record?.unit}</Text>
    </Show>
  )
}
