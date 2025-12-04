import React, { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // To toggle between single and multi expandable accordian
  const [multiple, setMultiple] = useState([]); // It will store ids of multiple selected items

  function handleSingleClick(getCurrentId) {
    // Logic for single expandable accordian will go here
    console.log("Single Expandable Accordian " + getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiClick(getCurrentId) {
    // Logic for multi expandable accordian will go here
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={enableMultiSelection ? "enabled-btn" : "disabled-btn"}
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiClick(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
                className="item"
              >
                <div className="title">
                  <h2>{dataItem.question}</h2>
                  <span>+</span>
                </div>
                <div className="answers">
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="acc-content ">
                          <p>{dataItem.answer}</p>
                        </div>
                      )
                    : selected === dataItem.id && (
                        <div className="acc-content ">
                          <p>{dataItem.answer}</p>
                        </div>
                      )}
                </div>
              </div>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}

/**
 * Two types of Accordian:
 * 1. Single Expandable: Only one item can be expanded at a time.
 * 2. Multi Expandable: Multiple items can be expanded simultaneously.
 *
 */
