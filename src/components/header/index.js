import { Dropdown, Menu } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const menu = (
    <Menu theme="light">
        <Menu.Item>Help</Menu.Item>
        <Menu.Item>Logout</Menu.Item>
    </Menu>
);

export const Header = props => (
    <div
        style={{
            padding: "0px 10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid black",
        }}
    >
        <div
            style={{
                display: "grid",
                gridAutoFlow: "column",
                alignItems: "center",
            }}
        >
            <div
                className="logo"
                style={{
                    width: 100,
                    height: 31,
                    margin: "16px 24px 16px 0",
                    background: "grey",
                }}
            />
            <h2 style={{ color: "grey", margin: 0 }}>Vaccination Drive</h2>
        </div>
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
);