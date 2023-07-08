"use client";

import "../../styles/table.css";
import Table from "@/components/handsontable";
import Background from "@/components/Background";
//ok and then the title needs to save on enter.
export default function TablePage() {
  return (
    <>
      <Background>
        <h4>Title</h4>

        <div class="input-container">
          <input
            type="text"
            class="title-input"
            placeholder="Enter your title here..."
          />
        </div>
        <Table />
      </Background>
    </>
  );
}
