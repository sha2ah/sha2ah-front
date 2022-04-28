import {
  useTranslate,
  IResourceComponentsProps,
  useMany,
} from '@pankod/refine-core'
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  DateField,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  TagField,
  FilterDropdown,
  Select,
  ShowButton,
} from '@pankod/refine-antd'
import { IInvoice } from 'interfaces'

export const InvoiceList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { tableProps, sorter } = useTable<IInvoice>({
    initialSorter: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title={t('invoices.fields.id')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="status"
          key="status"
          title={t('invoices.fields.status')}
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('status', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="payment_method"
          key="payment_method"
          title={t('invoices.fields.payment_method')}
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('payment_method', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="issue_date"
          key="issue_date"
          title={t('invoices.fields.issue_date')}
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder('issue_date', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="total"
          key="total"
          title={t('invoices.fields.total')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('total', sorter)}
          sorter
        />

        <Table.Column<IInvoice>
          title={t('table.actions')}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  )
}
