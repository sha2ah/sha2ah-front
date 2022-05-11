import { useState, useEffect } from 'react'
import { useTranslate, IResourceComponentsProps } from '@pankod/refine-core'
import {
  Edit,
  Form,
  Input,
  Select,
  useForm,
  DatePicker,
  useSelect,
} from '@pankod/refine-antd'
import ReactMarkdown from 'react-markdown'
import ReactMde from 'react-mde'

import dayjs from 'dayjs'

import 'react-mde/lib/styles/css/react-mde-all.css'

import { IInvoice, IUnit } from 'interfaces'
import categoryServices from '../../services/categoryServices'
import unitServices from '../../services/unitServices'

export const InvoiceEdit: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write')
  const [statusTypes, setStatusTypes] = useState([])
  const [units, setUnits] = useState([])

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      label: 'Fawry',
      value: 'fawry',
    },
  ])

  const t = useTranslate()

  const { formProps, saveButtonProps, queryResult } = useForm<IInvoice>()

  // const { selectProps: categorySelectProps } = useSelect<IRenter>({
  //   resource: "categories",
  //   defaultValue: queryResult?.data?.data.category.id,
  // });

  useEffect(() => {
    const getStatusTypes = async () => {
      const { data } = await categoryServices.getStatusTypes()
      const newStatusTypes = data.map((type: { id: number; name: string }) => {
        return { label: type.name, value: type.id }
      })
      setStatusTypes(newStatusTypes)
    }
    getStatusTypes()
  }, [statusTypes])

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
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t('invoices.fields.total')}
          name="total"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t('invoices.fields.issue_date')}
          name="issue_date"
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
          label={t('invoices.fields.due_date')}
          name="due_date"
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
          label={t('invoices.fields.status')}
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={statusTypes} />
        </Form.Item>
        <Form.Item
          label={t('invoices.fields.payment_method')}
          name="payment_method"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={paymentMethods} />
        </Form.Item>
        <Form.Item
          label={t('invoices.fields.unit')}
          name="unit"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={units} />
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
        {/* <Form.Item label="Details" name="details">
        <ReactMde
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={(markdown) =>
            Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
          }
        />
      </Form.Item> */}
      </Form>
    </Edit>
  )
}
