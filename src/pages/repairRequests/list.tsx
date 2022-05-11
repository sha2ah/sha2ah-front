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
import { IRepairRequest } from 'interfaces'

export const RepairRequestList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate()

  const { tableProps, sorter } = useTable<IRepairRequest>({
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
          title={t('repairRequests.fields.id')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="user"
          key="user"
          title={t('repairRequests.fields.owner')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('user', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="unit"
          key="unit"
          title={t('repairRequests.fields.unit')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('unit', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="status"
          key="status"
          title={t('repairRequests.fields.status')}
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('status', sorter)}
          sorter
        />
        <Table.Column
          dataIndex="date"
          key="date"
          title={t('repairRequests.fields.date')}
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder('date', sorter)}
          sorter
        />

        <Table.Column<IRepairRequest>
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
