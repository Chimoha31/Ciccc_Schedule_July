import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", width: 150 },
  { field: "todo", headerName: "TODO", width: 800 },
];

const rows = [
  { id: 1, date: "4th July (Mon)", todo: "Decide all the project features you will have in the project." },
  { id: 2, date: "7th July (Thu)", todo: "Presentation ①for a overall project flow and ②followed by the last Monday presentations."},
  { id: 3, date: "7th July (Thu)", todo: "Add Prabh in GIT repo and private mode."},
  { id: 4, date: "11th July (Mon)", todo: "Presentation for Wireframe(design) and Data-Model(data)."},
  { id: 5, date: "11th July (Mon)", todo: "Presentation for your progress (It'll be I and not WE) / Tomas gives us feedback."},
  { id: 6, date: "14th July (Thu) ", todo: "Presentation ①for Mockups and ②followed by the last Monday presentations."},
  { id: 7, date: "18th July (Mon)", todo: "Presentation for your progress, and start to develop."},
];

export default function App() {
  return (
    <React.Fragment>
      <div>
        <h1>【Schedule】</h1>
      </div>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={rows}
          style={{fontSize: "1rem"}}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </React.Fragment>
  );
}
