import React, { useState } from "react";
import "./Modal.scss";
import CloseIcon from "@mui/icons-material/Close";
function Modal({ onSubmitData, closeFunction }) {
  const [addData, setaddData] = useState(null);

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setaddData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
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
          placeholder="title"
          type="text"
          id="title"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          required
          onChange={handleChange}
        />
        <textarea
          placeholder="description"
          type="text"
          id="description"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          required
          onChange={handleChange}
        />
        <button type="submit">Add</button>
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

export default Modal;
