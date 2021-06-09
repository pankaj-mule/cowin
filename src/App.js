import "./App.scss";
import { Dropdown, Menu } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

//
export const App = () => {
  return (
    <div className="App">
      <div
        style={{
          padding: "0px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            columnGap: 10,
            alignItems: "center",
          }}
        >
          <div
            className="logo"
            style={{
              width: 120,
              height: 31,
              margin: "16px 24px 16px 0",
              background: "grey",
            }}
          />
          <h2 style={{ color: "grey", margin: 0 }}>Vaccination Drive</h2>
        </div>
        <div>
          <Dropdown overlay={menu}>
            <div
              style={{
                cursor: "pointer",
                display: "grid",
                gridAutoFlow: "column",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <UserOutlined />
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
      <div>content</div>
      <div>Footer</div>
    </div>
  );
};

//
const menu = (
  <Menu theme="light">
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);
