import { useState } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
} from '@pankod/refine-antd'

import ReactMarkdown from 'react-markdown'
import ReactMde from 'react-mde'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IRenter } from 'interfaces'

export const EstateCreate: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')

  const t = useTranslate()

  const { formProps, saveButtonProps } = useForm<IRenter>()

  // const { selectProps: categorySelectProps } = useSelect<ICategory>({
  //   resource: "categories",
  // });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          label="Type"
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
          label="Number of Floors"
          name="number_of_floors"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Units per Floor"
          name="units_per_floor"
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
    </Create>
  )
}
