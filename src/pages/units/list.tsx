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
import { IUnit } from 'interfaces'

export const UnitList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { tableProps, sorter } = useTable<IUnit>({
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
          title={t('units.fields.id')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="name"
          key="name"
          title={t('units.fields.name')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('name', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="phone"
          key="phone"
          title={t('units.fields.phone')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('phone', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="estate"
          key="estate"
          title={t('units.fields.estate')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('estate', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="floor"
          key="floor"
          title={t('units.fields.floor')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('floor', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="number"
          key="number"
          title={t('units.fields.number')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('number', sorter)}
          sorter
        />

        <Table.Column<IUnit>
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
