import {
  useTranslate,
  IResourceComponentsProps,
  useMany,
} from "@pankod/refine-core";
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
} from "@pankod/refine-antd";
import { IUnit } from "interfaces";

export const UnitList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { tableProps, sorter } = useTable<IUnit>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="code"
          key="code"
          title="Code"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("code", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="type"
          key="type"
          title="Type"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder("type", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="status"
          key="status"
          title="Status"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder("status", sorter)}
          sorter
        />

        <Table.Column<IUnit>
          title={t("table.actions")}
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
  );
};
