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

import { IEstate } from 'interfaces'

export const EstateEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')

  const t = useTranslate()

  const { formProps, saveButtonProps, queryResult } = useForm<IEstate>()

  // const { selectProps: categorySelectProps } = useSelect<IEstate>({
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
          label="Type"
          name="estate_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Residential',
                value: 1,
              },
              {
                label: 'Commercial',
                value: 2,
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
    </Edit>
  )
}
