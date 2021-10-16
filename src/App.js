import React, { useState } from "react";
import "./styles.css";
import Sliders from "./Sliders";
import SidebarItem from "./SidebarItem";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import defaultop from "./data";
import Button from "@material-ui/core/Button";
import CachedIcon from "@material-ui/icons/Cached";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

function App() {
  const [imagef, setImagef] = useState(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(defaultop);
  const selectedOption = options[selectedOptionIndex];

  function imageUpload(e) {
    const objectURL = URL.createObjectURL(e.target.files[0]);
    setImagef(objectURL);
  }
  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }
  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" "), backgroundImage: `url(${imagef})` };
  }

  const downloadImagef = () => {
    if (imagef) {
      htmlToImage.toPng(document.getElementById("image")).then((dataUrl) => {
        download(dataUrl, `${Date.now()}.png`);
      });
    } else {
      alert("Image not found");
    }
  };

  const newImg = () => {
    setImagef(null);
  };
  return (
    <div className="container">
      {imagef ? (
        <div className="main-img" id="image" style={getImageStyle()}></div>
      ) : (
        <div className="Upload-img">
          {/* <h1>Photo editor</h1>
          <input
            type="file"
            accept="image/*"
            className="range-style"
            onChange={imageUpload}
          /> */}
          <img
            src="https://user-images.githubusercontent.com/55646472/102017732-b79b7100-3d8e-11eb-93a4-7bc209701bcd.PNG"
			alt="PhotoEditor"
            style={{ height: "270px" }}
			
          />
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={imageUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload <PhotoCameraIcon style={{ marginLeft: "4px" }} />
            </Button>
          </label>
        </div>
      )}

      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          );
        })}
        <Button
          variant="contained"
          onClick={downloadImagef}
          style={{ marginTop: "9px" }}
        >
          Download
        </Button>
        <Button
          variant="contained"
          onClick={newImg}
          style={{ marginTop: "9px" }}
        >
          Reupload
          <CachedIcon />
        </Button>
      </div>

      <Sliders
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  );
}
export default App;
