import React from "react";
import "./ViewModal.scss";
import CloseIcon from "@mui/icons-material/Close";

function ViewModal({ data, closeFunction }) {
  return (
    <div className="viewModal">
      <button className="closbutton" onClick={closeFunction}>
        <CloseIcon id="cross" />
      </button>
      <div className="modal">
        <h1>{data?.title}</h1>

        <p>{data?.description}</p>
      </div>
    </div>
  );
}

export default ViewModal;
