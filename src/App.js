import "./App.scss";
import {
  Button,
  Descriptions,
  Dropdown,
  Menu,
  Radio,
  Select,
  Table,
} from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Option } from "antd/lib/mentions";

//
export const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
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
          <div style={{ display: "grid", justifyContent: "center" }}>
            <ScheduleSlot />
          </div>
          <ScheduleDates />
          <div
            style={{
              display: "grid",
              justifyContent: "center",
            }}
          >
            <TimeSlots />
          </div>
        </div>
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
      pagination={false}
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
    render: (t, r) => {
      return (
        <div style={{ display: "grid", gridAutoFlow: "column", columnGap: 10 }}>
          <Button type="primary" disabled={!r?.["bookedDate"]}>
            Reschedule
          </Button>
          <Button disabled={!r?.["bookedDate"]}>Cancel</Button>
        </div>
      );
    },
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
  {
    name: "Anchit Father",
    age: 45,
    dose1: "Yes",
    dose2: "No",
    bookedDate: "2021-06-09",
    slot: "9:30-10:30",
    location: "Pune",
  },
  {
    name: "Anchit Mother",
    age: 40,
    dose1: "Yes",
    dose2: "No",
    bookedDate: "",
    slot: "",
    location: "",
  },
];

//
const ScheduleSlot = () => (
  <>
    <h2 style={{ textAlign: "center" }}>Schedule slot</h2>
    <Select
      showSearch
      placeholder="City"
      optionFilterProp="children"
      style={{ width: 200 }}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Pune">Pune</Option>
      <Option value="Banglore">Banglore</Option>
    </Select>
  </>
);

//
const ScheduleDates = () => (
  <div
    style={{
      display: "grid",
      gridAutoFlow: "column",
      margin: "0px 50px",
      gridTemplateColumns: "repeat(auto-fit, 75px)",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ScheduleDateBlock label="Jun 09" value="117" />
    <ScheduleDateBlock label="Jun 10" value="120" />
    <ScheduleDateBlock label="Jun 11" value="12" />
    <ScheduleDateBlock label="Jun 12" value="60" />
  </div>
);

const ScheduleDateBlock = ({ label, value }) => (
  <div style={{ width: 100 }}>
    <div
      style={{
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {label}
    </div>
    <div
      style={{
        color: "white",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "5px 10px",
          backgroundColor: "#27A843",
          borderRadius: 5,
        }}
      >
        {value}
      </div>
    </div>
  </div>
);

//
const TimeSlots = () => {
  return (
    <div
      style={{
        borderRadius: 5,
        display: "grid",
        rowGap: 10,
        padding: "5px 10px",
        boxShadow:
          "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <h3 style={{ textAlign: "center", margin: 0 }}>Choose time slot</h3>
      <hr />
      <Radio.Group>
        <div style={{ display: "grid", rowGap: 15 }}>
          <Radio value={1}>
            <TimeSlotInfo label="9:30-10:30" count={10} />
          </Radio>
          <Radio value={1}>
            <TimeSlotInfo label="10:30-11:30" count={10} />
          </Radio>
          <Radio value={1}>
            <TimeSlotInfo label="11:30-12:30" count={10} />
          </Radio>
          <Radio value={1}>
            <TimeSlotInfo label="2:30-3:30" count={10} />
          </Radio>
        </div>
      </Radio.Group>
    </div>
  );
};
const TimeSlotInfo = ({ label, count }) => {
  return (
    <div style={{ display: "grid", gridAutoFlow: "column", columnGap: 10 }}>
      <div>{label}</div>
      <div
        style={{
          backgroundColor: "lightgreen",
          padding: "0px 5px",
          borderRadius: 5,
          color: "green",
          border: "1px solid green",
        }}
      >
        {count}
      </div>
    </div>
  );
};
