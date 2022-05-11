import { useState } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import {
  Edit,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  DatePicker,
} from '@pankod/refine-antd'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'
import ReactMde from 'react-mde'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IContract } from 'interfaces'

export const ContractEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')

  const t = useTranslate()

  const { formProps, saveButtonProps, queryResult } = useForm<IContract>()

  // const { selectProps: categorySelectProps } = useSelect<IRenter>({
  //   resource: "categories",
  //   defaultValue: queryResult?.data?.data.category.id,
  // });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t('contracts.fields.beneficiary_name')}
          name="contract_holder_name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.type')}
          name="type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Rent',
                value: 'rent',
              },
              {
                label: 'Investment',
                value: 'investment',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.rent_cost')}
          name="rent_cost"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.rent_frequency')}
          name="rent_frequency"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Monthly',
                value: 'monthly',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.date_from')}
          name="date_from"
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : '',
          })}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.date_to')}
          name="date_to"
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : '',
          })}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.first_rent_due_date')}
          name="first_rent_due_date"
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : '',
          })}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.owner')}
          name="user"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('contracts.fields.unit')}
          name="unit"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          label={t("posts.fields.category.title")}
          name={["category", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item> */}
        <Form.Item label={t('contracts.fields.notes')} name="notes">
          <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
            }
          />
        </Form.Item>
      </Form>
    </Edit>
  )
}
