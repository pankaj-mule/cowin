import "./index.scss";
import {
    Button,
    Descriptions,
    Table,
} from "antd";
import { useState } from "react";

import { DependentListData } from './data'
import { Header } from "../header";
import { Scheduler } from "./scheduler";

export const EmployeeInfo = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

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
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <Descriptions size="small" title={false} layout="vertical" bordered>
                        <Descriptions.Item label="Employee name">Anchit Mulye</Descriptions.Item>
                        <Descriptions.Item label="Employee ID">26347</Descriptions.Item>
                        <Descriptions.Item label="Employee grade">9A</Descriptions.Item>
                    </Descriptions>
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
                </div>
                <Scheduler />
            </div>
        </div>
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
