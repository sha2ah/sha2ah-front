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
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  TagField,
  FilterDropdown,
  Select,
  ShowButton,
} from '@pankod/refine-antd'
import { IEstate } from 'interfaces'

export const EstateList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { tableProps } = useTable<IEstate>({
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
          defaultSortOrder={getDefaultSortOrder('id')}
        />
        <Table.Column
          dataIndex="name"
          key="name"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('name')}
        />
        <Table.Column
          dataIndex="estate_type"
          key="estate_type"
          title="Type"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('estate_type')}
        />
        <Table.Column
          dataIndex="number_of_floors"
          key="number_of_floors"
          title="Number of Floors"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('number_of_floors')}
        />
        <Table.Column
          dataIndex="units_per_floor"
          key="units_per_floor"
          title="Units per Floor"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('units_per_floor')}
        />

        <Table.Column<IEstate>
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
