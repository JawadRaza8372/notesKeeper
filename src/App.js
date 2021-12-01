import "./App.scss";
import { useState, useEffect } from "react";
import Card from "./Components/Card/Card";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "./Components/Modal/Modal";
function App() {
  const [items, setitems] = useState([]);
  const [showAddModel, setshowAddModel] = useState(false);
  console.log(items);
  useEffect(() => {
    if (items?.length > 0) {
      localStorage.setItem("notesKeeper", JSON.stringify(items));
    }
  }, [items]);
  useEffect(() => {
    const finaldata = JSON.parse(localStorage.getItem("notesKeeper"));
    setitems(finaldata);
  }, []);
  const onSubmitData = (dta) => {
    if (items?.length > 0) {
      setitems((prevalue) => [...prevalue, dta]);
    } else {
      setitems([dta]);
    }
    setshowAddModel(false);
  };
  const controlModel = () => {
    setshowAddModel(!showAddModel);
  };
  const deleteItem = (itemid) => {
    const filtered = items?.filter((itm, index) => index !== itemid);
    localStorage.setItem("notesKeeper", JSON.stringify(filtered));
    setitems(filtered);
  };
  const updateItem = ({ id, data }) => {
    items[id] = data;
    let updatedList = items.map((item, index) => {
      if (index === id) {
        return { title: data.title, description: data.description };
      }
      return item;
    });
    console.log(updatedList);
    setitems(updatedList);
  };
  return (
    <>
      <section className="notesSection">
        <div className="notesNav">
          <h1>Notes Keeper</h1>
          <a href="https://jawadraza-c270f.web.app">About Me</a>
          <button onClick={controlModel}>
            <AddBoxIcon id="iconid" />
          </button>
        </div>
        <div
          className="contentContainer"
          style={
            items?.length > 0
              ? {}
              : {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
          }
        >
          {items?.length > 0 ? (
            <></>
          ) : (
            <h1 className="entryTitle">
              Your Notes Will be shown here.Click on + icon to add notes.
            </h1>
          )}
          {items &&
            items.map((dat, index) => (
              <Card
                key={index}
                title={dat?.title}
                description={dat?.description}
                id={index}
                deltfunction={deleteItem}
                updateFunction={updateItem}
              />
            ))}
        </div>
        {showAddModel && (
          <Modal onSubmitData={onSubmitData} closeFunction={controlModel} />
        )}
      </section>
    </>
  );
}

export default App;
