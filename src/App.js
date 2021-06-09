import "./App.scss";
import { Button, Descriptions, Dropdown, Menu, Table } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";

//
export const App = () => {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          padding: 10,
          display: "grid",
          rowGap: 20,
          margin: 20,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <EmployeeInfo />
        <DependentList />
      </div>
      <div>Footer</div>
    </div>
  );
};

//
const Header = () => (
  <div
    style={{
      padding: "0px 25px",
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
);

//
const menu = (
  <Menu theme="light">
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <Menu.Item>3rd menu item</Menu.Item>
  </Menu>
);

//
const EmployeeInfo = () => (
  <Descriptions size="small" title={false} layout="vertical" bordered>
    <Descriptions.Item label="Employee name">Anchit Mulye</Descriptions.Item>
    <Descriptions.Item label="Employee ID">26347</Descriptions.Item>
    <Descriptions.Item label="Employee grade">9A</Descriptions.Item>
  </Descriptions>
);

//
const DependentList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  //
  return (
    <Table
      size="small"
      columns={DependentListColumns}
      dataSource={DependentListData}
      rowSelection={{
        selectedRowKeys: selectedRowKeys,
        onChange: (srk) => setSelectedRowKeys(srk),
      }}
    />
  );
};
const DependentListColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Dose 1",
    dataIndex: "dose1",
    key: "dose1",
  },
  {
    title: "Dose 2",
    dataIndex: "dose2",
    key: "dose2",
  },
  {
    title: "Booked date",
    dataIndex: "bookedDate",
    key: "bookedDate",
  },
  {
    title: "Slot",
    dataIndex: "slot",
    key: "slot",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <div style={{ display: "grid", gridAutoFlow: "column", columnGap: 10 }}>
        <Button type="primary">Reschedule</Button>
        <Button>Cancel</Button>
      </div>
    ),
  },
];
const DependentListData = [
  {
    name: "Anchit",
    age: 20,
    dose1: "Yes",
    dose2: "No",
    bookedDate: "2021-06-09",
    slot: "9:30-10:30",
    location: "Pune",
  },
];
