"use client";

import "../../styles/table.css";
import Table from "@/components/genericTable";
//ok and then the title needs to save on enter.

export default function TablePage() {
  let tables = [
    {
      title: "Table 1",
      columns: [
        { name: "column1", accessor: "access1", type: "text", index: 0 },
        { name: "column2", accessor: "access2", type: "text", index: 1 },
      ],
      rows: [
        { index: 0, data: { access1: "value1", access2: "value2" } },
        { index: 1, data: { access1: "value3", access2: "value4" } },
      ],
      comments: [
        { col: 0, row: 0, value: "comment1" },
        { col: 1, row: 1, value: "comment2" },
      ],
      num_rows: 2,
    },
    {
      title: "Table 2",
      columns: [
        { name: "column1", accessor: "access1", type: "text", index: 0 },
        { name: "column2", accessor: "access2", type: "text", index: 1 },
      ],
      rows: [
        { index: 0, data: { access1: "value1", access2: "value2" } },
        { index: 1, data: { access1: "value3", access2: "value4" } },
      ],
      comments: [
        { col: 0, row: 0, value: "comment1" },
        { col: 1, row: 1, value: "comment2" },
      ],
      num_rows: 2,
    },
    {
      title: "Table 3",
      columns: [
        { name: "column1", accessor: "access1", type: "text", index: 0 },
        { name: "column2", accessor: "access2", type: "text", index: 1 },
      ],
      rows: [
        { index: 0, data: { access1: "value1", access2: "value2" } },
        { index: 1, data: { access1: "value3", access2: "value4" } },
      ],
      comments: [
        { col: 0, row: 0, value: "comment1" },
        { col: 1, row: 1, value: "comment2" },
      ],
      num_rows: 2,
    },
  ];
  return (
    <>
      <div className="content-center">
        <h4>Title</h4>

        <div className="input-container">
          <input
            type="text"
            className="title-input"
            placeholder="Enter your title here..."
          />
        </div>
        <Table table={tables[1]} />
      </div>
    </>
  );
}
