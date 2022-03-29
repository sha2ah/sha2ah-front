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

import { IUnit, IEstate } from 'interfaces'

export const UnitCreate: React.FC<IResourceComponentsProps> = () => {
  const [estates, setEstates] = useState([])

  const t = useTranslate()

  const { formProps, saveButtonProps } = useForm<IUnit>()

  // const { selectProps: categorySelectProps } = useSelect<ICategory>({
  //   resource: "categories",
  // });

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
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t('units.fields.name')}
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
          label={t('units.fields.phone')}
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
          label={t('units.fields.estate')}
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
          label={t('units.fields.floor')}
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
          label={t('units.fields.number')}
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
    </Create>
  )
}
