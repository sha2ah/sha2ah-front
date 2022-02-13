import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from "@pankod/refine-core";
import { Show, Typography, Tag, MarkdownField } from "@pankod/refine-antd";

import { IEstate } from "interfaces";

const { Title, Text } = Typography;

export const EstateShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<IEstate>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Name</Title>
      <Text>{record?.name}</Text>

      <Title level={5}>Type</Title>
      <Text>
        <Tag>{record?.type}</Tag>
      </Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>Number of Floors</Title>
      <Text>{record?.floorsNum}</Text>

      <Title level={5}>Units per Floor</Title>
      <Text>{record?.unitsPerFloor}</Text>

      <Title level={5}>Details</Title>
      <MarkdownField value={record?.details} />
    </Show>
  );
};
