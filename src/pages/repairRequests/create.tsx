import { useState, useEffect } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  DatePicker,
  useForm,
} from '@pankod/refine-antd'
import unitServices from '../../services/unitServices'

import ReactMarkdown from 'react-markdown'
import ReactMde from 'react-mde'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IRepairRequest, IUnit } from 'interfaces'

export const RepairRequestCreate: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')
  const [units, setUnits] = useState([])

  const t = useTranslate()

  const { formProps, saveButtonProps } = useForm<IRepairRequest>()

  // const { selectProps: categorySelectProps } = useSelect<ICategory>({
  //   resource: "categories",
  // });

  useEffect(() => {
    const getUnits = async () => {
      const { data } = await unitServices.getAll()
      const newUnits = data.map((unit: IUnit) => {
        return { label: unit.name, value: unit.id }
      })
      setUnits(newUnits)
    }
    getUnits()
  }, [units])

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t('repairRequests.fields.owner')}
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
          label={t('repairRequests.fields.unit')}
          name="unit"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={units} />
        </Form.Item>
        <Form.Item
          label={t('repairRequests.fields.status')}
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Closed',
                value: 'closed',
              },
              {
                label: 'Pending',
                value: 'pending',
              },
              {
                label: 'Cancelled',
                value: 'cancelled',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label={t('repairRequests.fields.date')}
          name="date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} format="MM/DD/YYYY" />
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
        <Form.Item label={t('repairRequests.fields.details')} name="details">
          <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
            }
          />
        </Form.Item>
        <Form.Item label={t('repairRequests.fields.notes')} name="notes">
          <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
            }
          />
        </Form.Item>
      </Form>
    </Create>
  )
}
