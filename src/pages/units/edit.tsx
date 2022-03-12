import { useState } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import {
  Edit,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from '@pankod/refine-antd'
import ReactMarkdown from 'react-markdown'
import ReactMde from 'react-mde'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IRenter } from 'interfaces'

export const UnitEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')

  const t = useTranslate()

  const { formProps, saveButtonProps, queryResult } = useForm<IRenter>()

  // const { selectProps: categorySelectProps } = useSelect<IRenter>({
  //   resource: "categories",
  //   defaultValue: queryResult?.data?.data.category.id,
  // });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Estate"
          name="estate"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Active',
                value: 'active',
              },
              {
                label: 'Draft',
                value: 'draft',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Floor"
          name="floor"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Number"
          name="number"
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
      </Form>
    </Edit>
  )
}
