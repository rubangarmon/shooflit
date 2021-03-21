import React from "react";
import RandomList from '../components/RandomList'
import { Layout } from "antd";
const { Content } = Layout;

const Main = () => {
  return (
    <Content style={{ display: "flex", justifyContent: "center" }}>
      <RandomList />
    </Content>
  );
};

export default Main;
