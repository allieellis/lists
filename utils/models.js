import { Schema, model, models } from "mongoose";

const ColumnSchema = new Schema({
  name: { type: String, default: "" },
  accessor: String,
  type: { type: String, default: "text" },
  index: Number,
});

const RowSchema = new Schema({
  index: Number,
  data: Map,
});

const CommentSchema = new Schema({
  col: Number,
  row: Number,
  value: String,
});

const TableSchema = new Schema({
  title: { type: String, default: "" },
  columns: [ColumnSchema],
  rows: [RowSchema],
  comments: [CommentSchema],
  checks: { type: Boolean, default: false },
});

const Table_ = models.Table || model("Table", TableSchema);

export default Table_;
