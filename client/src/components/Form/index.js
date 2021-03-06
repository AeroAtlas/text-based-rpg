import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group inputClass">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function StartBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-danger">
      {props.children}
    </button>
  );
}
