import { useState, useEffect } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import {
  Edit,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from '@pankod/refine-antd'
import estateServices from '../../services/estateServices'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IEstate } from 'interfaces'

export const EstateEdit: React.FC<IResourceComponentsProps> = () => {
  const [estateTypes, setEstateTypes] = useState([])

  const t = useTranslate()

  const { formProps, saveButtonProps, queryResult } = useForm<IEstate>()

  // const { selectProps: categorySelectProps } = useSelect<IEstate>({
  //   resource: "categories",
  //   defaultValue: queryResult?.data?.data.category.id,
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
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t('estates.fields.name')}
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
          label={t('estates.fields.estate_type.title')}
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
          label={t('estates.fields.number_of_floors')}
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
          label={t('estates.fields.units_per_floor')}
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
