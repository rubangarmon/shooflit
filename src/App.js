import Main from "./containers/Main";
import "./styles/styles.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>Random List</Menu.Item>
        </Menu>
      </Header>
      <Main />
    </Layout>
  );
}

export default App;
