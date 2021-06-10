import {
    Radio,
    Select,
} from "antd";

import { Option } from "antd/lib/mentions";

export const Scheduler = () => {
    return (
        <div
            style={{
                margin: 20,
                padding: 10,
                display: "grid",
                columnGap: 10,
                gridTemplateColumns: '230px auto 190px',
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
        >
            <ScheduleSlot />
            <ScheduleDates />
            <TimeSlots />
        </div>
    );
};



//
const ScheduleSlot = () => (
    <div className='card-title'>
        <h3>Location</h3>
        <hr />
        <Select
            showSearch
            placeholder="City"
            optionFilterProp="children"
            style={{ marginTop: 20, width: 200 }}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="Pune">Pune</Option>
            <Option value="Banglore">Banglore</Option>
        </Select>
    </div>
);

//
const ScheduleDates = () => (
    <div className='card-title'>
        <h3>Time slot</h3>
        <hr />
        <div
            style={{
                display: "grid",
                gridAutoFlow: "column",
                marginTop: 40,
                gridTemplateColumns: "repeat(auto-fit, 75px)"
            }}
        >
            <ScheduleDateBlock label="Jun 09" value="117" />
            <ScheduleDateBlock label="Jun 10" value="120" />
            <ScheduleDateBlock label="Jun 11" value="12" />
            <ScheduleDateBlock label="Jun 12" value="60" />
        </div>
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
        <div className='card-title'>
            <h3>Choose time slot</h3>
            <hr />
            <Radio.Group>
                <div style={{ display: "grid", rowGap: 15, marginTop: 10 }}>
                    <Radio value={1}>
                        <TimeSlotInfo label="9:30-10:30" count={10} />
                    </Radio>
                    <Radio value={2}>
                        <TimeSlotInfo label="10:30-11:30" count={10} />
                    </Radio>
                    <Radio value={3}>
                        <TimeSlotInfo label="11:30-12:30" count={10} />
                    </Radio>
                    <Radio value={4}>
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