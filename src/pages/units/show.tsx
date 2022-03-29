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
      <Title level={5}>{t('units.fields.name')}</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>{t('units.fields.phone')}</Title>
      <Text>
        <Text>{record?.phone}</Text>
      </Text>

      <Title level={5}>{t('units.fields.estate')}</Title>
      <Text>
        <Text>{record?.estate}</Text>
      </Text>

      <Title level={5}>{t('units.fields.floor')}</Title>
      <Text>
        <Text>{record?.floor}</Text>
      </Text>

      <Title level={5}>{t('units.fields.number')}</Title>
      <Text>
        <Text>{record?.number}</Text>
      </Text>
    </Show>
  )
}
