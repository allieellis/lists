"use client";
import { useRef, useEffect } from "react";
import "pikaday/css/pikaday.css";
import "./styles.css";
import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import Table_ from "@/utils/models.js"

registerAllModules();

import {
  drawCheckboxInRowHeaders,
  addClassesToRows,
  changeCheckboxCell,
  alignHeaders,
} from "./hooksCallbacks";

import "handsontable/dist/handsontable.min.css";
import { ModelTrainingSharp } from "@mui/icons-material";

const Table = ({ table }) => {
  //   const [output, setOutput] = useState('Click "Load" to load data from server');
  //   const [isAutosave, setIsAutosave] = useState(false);

  let loadClickCallback;
  const hotRef = useRef(null);
  const saveClickCallback = useRef();
  useEffect(() => {
    const hot = hotRef.current.hotInstance;

    saveClickCallback.current = () => {
      // save all cell's data
      let rows = hot.getData();
      console.log("rows", rows);
      let headers = hot.getColHeader();
      console.log("headers", headers);
      // add blank header if checkbox
      var comments = hot
        .getCellsMeta()
        .filter(function (meta) {
          return meta.comment !== void 0;
        })
        .map(function (meta) {
          return {
            row: meta.row,
            col: meta.col,
            comment: meta.comment,
          };
        });

      console.log(comments);
    };
  }, []);

  let rows = table.rows;
  console.log("rows", rows);
  let data = [];
  for (let i = 0; i < rows.length; i++) {
    data.push(rows[i].data);
  }
  console.log("data", data);

  let unsorted = table.columns;
  let cols = [];
  for (let i = 0; i < unsorted.length; i++) {
    let col = unsorted[i];
    cols.push({ title: col.name, type: col.type, data: col.accessor });
  }
  console.log("cols", cols);
  const addFlag = async () => {

  return (
    <div>
      <HotTable
        data={data}
        ref={hotRef}
        comments={true}
        height={450}
        columns={cols}
        dropdownMenu={true}
        hiddenColumns={{
          indicators: true,
        }}
        contextMenu={true}
        multiColumnSorting={true}
        filters={true}
        rowHeaders={true}
        afterGetColHeader={alignHeaders}
        beforeRenderer={addClassesToRows}
        afterGetRowHeader={drawCheckboxInRowHeaders}
        afterOnCellMouseDown={changeCheckboxCell}
        manualRowMove={true}
        licenseKey="non-commercial-and-evaluation"
      ></HotTable>
      <button
        id="save"
        className="button button--primary button--blue"
        onClick={(...args) =>
          saveClickCallback.current && saveClickCallback.current(...args)
        }
      >
        Save data
      </button>
    </div>
  );
};

export default Table;
