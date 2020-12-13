import React from "react";
// import Button from "@material-ui/core/Button";
export default function SidebarItem({ name, active, handleClick }) {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
    // <Button variant="contained" color="primary" style={{margin:"3px"}}>
    //  {name}
    // </Button>
  );
}
