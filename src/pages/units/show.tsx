import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from "@pankod/refine-core";
import { Show, Typography, Tag, MarkdownField } from "@pankod/refine-antd";

import { IUnit } from "interfaces";

const { Title, Text } = Typography;

export const UnitShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<IUnit>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Code</Title>
      <Text>{record?.code}</Text>

      <Title level={5}>Type</Title>
      <Text>
        <Tag>{record?.type}</Tag>
      </Text>

      <Title level={5}>Status</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>Details</Title>
      <MarkdownField value={record?.details} />
    </Show>
  );
};
