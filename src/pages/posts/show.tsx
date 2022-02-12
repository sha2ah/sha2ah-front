import {
  useTranslate,
  IResourceComponentsProps,
  useOne,
  useShow,
} from "@pankod/refine-core";
import { Show, Typography, Tag, MarkdownField } from "@pankod/refine-antd";

import { IPost, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const PostShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<IPost>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: categoryData } = useOne<ICategory>({
    resource: "categories",
    id: record?.category.id ?? "",
    queryOptions: {
      enabled: !!record?.category.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{t("posts.fields.title")}</Title>
      <Text>{record?.title}</Text>

      <Title level={5}>{t("posts.fields.status.title")}</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>

      <Title level={5}>{t("posts.fields.category.title")}</Title>
      <Text>{categoryData?.data.title}</Text>

      <Title level={5}>{t("posts.fields.content")}</Title>
      <MarkdownField value={record?.content} />
    </Show>
  );
};
