import { useState, useEffect } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import { Edit, Form, Input, Select, useForm } from '@pankod/refine-antd'
import estateServices from '../../services/estateServices'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IRenter, IEstate } from 'interfaces'

export const UnitEdit: React.FC<IResourceComponentsProps> = () => {
  const [estates, setEstates] = useState([])

  const t = useTranslate()

  const { formProps, saveButtonProps } = useForm<IRenter>()

  useEffect(() => {
    const getEstates = async () => {
      const { data } = await estateServices.getAll()
      const newEstates = data.map((estate: IEstate) => {
        return { label: estate.name, value: estate.id }
      })
      setEstates(newEstates)
    }
    getEstates()
  }, [estates])

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
          <Select options={estates} />
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
