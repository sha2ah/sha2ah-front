import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from '@pankod/refine-core'
import { Show, Typography, Tag, MarkdownField } from '@pankod/refine-antd'

import { IEstate } from 'interfaces'

const { Title, Text } = Typography

export const EstateShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { queryResult } = useShow<IEstate>()
  const { data, isLoading } = queryResult
  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{t('estates.fields.name')}</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>{t('estates.fields.estate_type.title')}</Title>
      <Text>
        <Tag>{record?.estate_type}</Tag>
      </Text>

      <Title level={5}>{t('estates.fields.number_of_floors')}</Title>
      <Text>{record?.number_of_floors}</Text>

      <Title level={5}>{t('estates.fields.units_per_floor')}</Title>
      <Text>{record?.units_per_floor}</Text>
    </Show>
  )
}
