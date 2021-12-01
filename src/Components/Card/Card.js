import React, { useState } from "react";
import "./Card.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateModel from "../Modal/UpdateModel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ViewModal from "../ViewModel/ViewModal";
function Card({ title, description, id, deltfunction, updateFunction }) {
  const [updateModel, setupdateModel] = useState(false);
  const [ViewModel, setViewModel] = useState(false);

  const updateItemFunction = (data) => {
    updateFunction({ id, data });
    setupdateModel(false);
  };
  return (
    <>
      <div className="notesCard">
        <h1>{title?.length > 50 ? `${title?.substring(0, 51)}...` : title}</h1>
        <p>
          {description?.length > 150
            ? `${description.substring(0, 150)}...`
            : description}
        </p>
        <div className="btnCont">
          <button
            onClick={() => {
              setViewModel(true);
            }}
          >
            <RemoveRedEyeIcon />
          </button>
          <button
            onClick={() => {
              setupdateModel(true);
            }}
          >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              deltfunction(id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      {updateModel && (
        <UpdateModel
          data={{ title, description }}
          onSubmitData={updateItemFunction}
          closeFunction={() => setupdateModel(false)}
        />
      )}
      {ViewModel && (
        <ViewModal
          data={{ title, description }}
          closeFunction={() => setViewModel(false)}
        />
      )}
    </>
  );
}

export default Card;
