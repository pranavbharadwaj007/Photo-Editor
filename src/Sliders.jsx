import React from "react";
// import PropTypes from "prop-types";

// import Slider from "@material-ui/core/Slider";
// import Typography from "@material-ui/core/Typography";
// import Tooltip from "@material-ui/core/Tooltip";
export default function Sliders({ min, max, value, handleChange }) {
  // const PrettoSlider = withStyles({
  //   root: {
  //     color: "#52af77",
  //     height: 8
  //   },
  //   thumb: {
  //     height: 24,
  //     width: 24,
  //     backgroundColor: "#fff",
  //     border: "2px solid green",
  //     marginTop: -8,
  //     marginLeft: -12,
  //     "&:focus, &:hover, &$active": {
  //       boxShadow: "inherit"
  //     }
  //   },
  //   active: {},
  //   valueLabel: {
  //     left: "calc(-50% + 4px)"
  //   },
  //   track: {
  //     height: 8,
  //     borderRadius: 4
  //   },
  //   rail: {
  //     height: 8,
  //     borderRadius: 4
  //   }
  // })(Slider);
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      {/* <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={value}
         onChange={handleChange}
      /> */}
    </div>
  );
}
