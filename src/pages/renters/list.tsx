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
import { IRenter } from 'interfaces'

export const RenterList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { tableProps, sorter } = useTable<IRenter>({
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
          title={t('renters.fields.id')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="name"
          key="name"
          title={t('renters.fields.name')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('name', sorter)}
          sorter
        />
        {/* <Table.Column
          dataIndex="status"
          key="status"
          title="Status"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder("status", sorter)}
          sorter
        /> */}
        <Table.Column
          dataIndex="phone"
          key="phone"
          title={t('renters.fields.phone')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('phone', sorter)}
          sorter
        />
        {/* <Table.Column
          dataIndex="createdAt"
          key="createdAt"
          title="Created At"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("createdAt", sorter)}
          sorter
        /> */}

        <Table.Column<IRenter>
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
