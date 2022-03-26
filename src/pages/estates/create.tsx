import { useState, useEffect } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
} from '@pankod/refine-antd'
import estateServices from '../../services/estateServices'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IRenter } from 'interfaces'

export const EstateCreate: React.FC<IResourceComponentsProps> = () => {
  const [estateTypes, setEstateTypes] = useState([])

  const t = useTranslate()

  const { formProps, saveButtonProps } = useForm<IRenter>()

  // const { selectProps: categorySelectProps } = useSelect<ICategory>({
  //   resource: "categories",
  // });

  useEffect(() => {
    const getEstateTypes = async () => {
      const { data } = await estateServices.getEstateTypes()
      const newEstateTypes = data.map((type: { id: number; name: string }) => {
        return { label: type.name, value: type.id }
      })
      setEstateTypes(newEstateTypes)
    }
    getEstateTypes()
  }, [estateTypes])

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
          name="estate_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={estateTypes} />
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
