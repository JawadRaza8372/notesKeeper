import React, { useState } from "react";
import "./Modal.scss";
import CloseIcon from "@mui/icons-material/Close";
function UpdateModel({ data, onSubmitData, closeFunction }) {
  const [addData, setaddData] = useState({
    title: data?.title ? data.title : "",
    description: data?.description ? data.description : "",
  });

  return (
    <div className="modalContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitData(addData);
        }}
        className="modal"
      >
        <input
          value={addData.title}
          placeholder="title"
          type="text"
          id="title"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          required
          onChange={(e) => {
            setaddData((prevalue) => {
              return {
                ...prevalue,
                title: e.target.value,
              };
            });
          }}
        />
        <textarea
          value={addData.description}
          placeholder="description"
          type="text"
          id="description"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          required
          onChange={(e) => {
            setaddData((prevalue) => {
              return {
                ...prevalue,
                description: e.target.value,
              };
            });
          }}
        />
        <button type="submit">Update</button>
      </form>
      <button
        onClick={() => {
          closeFunction();
        }}
        className="closbutton"
      >
        <CloseIcon id="cross" />
      </button>
    </div>
  );
}

export default UpdateModel;
