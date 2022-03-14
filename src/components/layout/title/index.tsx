import React from "react";
import routerProvider from "@pankod/refine-react-router";
import { TitleProps } from "@pankod/refine-core";

const { Link } = routerProvider;

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
  <Link to="/">
    {collapsed ? (
      <img
        src={"/refine-collapsed.svg"}
        alt="Refine"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      />
    ) : (
      <img
        src={"/refine.svg"}
        alt="Refine"
        style={{
          width: "200px",
        }}
      />
    )}
  </Link>
);
