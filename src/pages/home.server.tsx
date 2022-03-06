import { useTranslate } from "@pankod/refine-core";
import { AntdLayout, Button } from "@pankod/refine-antd";

import { useAuth0 } from "@auth0/auth0-react";

export const Home: React.FC = () => {
  

  const t = useTranslate();

  return (
      <h1>Hello World</h1>
  );
};
