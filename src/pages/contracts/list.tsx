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
import { IContract } from 'interfaces'

export const ContractList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { tableProps, sorter } = useTable<IContract>({
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
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="title"
          key="title"
          title="Title"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('title', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="type"
          key="type"
          title="Type"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('type', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="status"
          key="status"
          title="Status"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('status', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="validity"
          key="validity"
          title="Validity"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('validity', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="date"
          key="date"
          title="Date"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder('date', sorter)}
          sorter
        />

        <Table.Column<IContract>
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
