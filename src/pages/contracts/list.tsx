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
          title={t('contracts.fields.id')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('id')}
        />
        <Table.Column
          dataIndex="contract_holder_name"
          key="contract_holder_name"
          title={t('contracts.fields.beneficiary_name')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('contract_holder_name')}
        />
        <Table.Column
          dataIndex="type"
          key="type"
          title={t('contracts.fields.type')}
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder('type')}
        />
        <Table.Column
          dataIndex="rent_cost"
          key="rent_cost"
          title={t('contracts.fields.rent_cost')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('rent_cost')}
        />
        <Table.Column
          dataIndex="rent_frequency"
          key="rent_frequency"
          title={t('contracts.fields.rent_frequency')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('rent_frequency')}
        />
        <Table.Column
          dataIndex="user"
          key="user"
          title={t('contracts.fields.owner')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('user')}
        />
        <Table.Column
          dataIndex="unit"
          key="unit"
          title={t('contracts.fields.unit')}
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder('unit')}
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
