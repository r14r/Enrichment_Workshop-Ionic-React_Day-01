import React from "react";
import Button from "./Button";
import "./ExploreContainer.css";

const Display: React.FC  = () => {
  return (
    <div className="display">
      Display
      <Button name="Button 1">Content for Butteon: 1</Button>
      <Button name="Button 2">Content for Butteon: 1</Button>
      <Button name="Button 3">Content for Butteon: 1</Button>
      <Button name="Button 4">Content for Butteon: 1</Button>
      <Button name="Button 5">Content for Butteon: 1</Button>
    </div>
  );
};

export default Display;
