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
      <Title level={5}>{t('contracts.fields.beneficiary_name')}</Title>
      <Text>{record?.contract_holder_name}</Text>

      <Title level={5}>{t('contracts.fields.type')}</Title>
      <Text>
        <Tag>{record?.type}</Tag>
      </Text>

      <Title level={5}>{t('contracts.fields.rent_cost')}</Title>
      <Text>
        <Tag>{record?.rent_cost}</Tag>
      </Text>

      <Title level={5}>{t('contracts.fields.rent_frequency')}</Title>
      <Text>
        <Tag>{record?.rent_frequency}</Tag>
      </Text>

      <Title level={5}>{t('contracts.fields.date_from')}</Title>
      <Text>
        <Tag>{record?.date_from}</Tag>
      </Text>

      <Title level={5}>{t('contracts.fields.date_to')}</Title>
      <Text>
        <Tag>{record?.date_to}</Tag>
      </Text>

      <Title level={5}>{t('contracts.fields.first_rent_due_date')}</Title>
      <Text>
        <Tag>{record?.first_rent_due_date}</Tag>
      </Text>

      <Title level={5}>{t('contracts.fields.owner')}</Title>
      <Text>{record?.user}</Text>

      <Title level={5}>{t('contracts.fields.unit')}</Title>
      <Text>{record?.unit}</Text>

      <Title level={5}>{t('contracts.fields.notes')}</Title>
      <MarkdownField value={record?.notes} />
    </Show>
  )
}
