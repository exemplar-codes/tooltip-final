import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Wrapping a component with this creates a tooltip around it
 */
export default function Tooltip({
  children,
  tooltipText,
  classes,
  styles = {
    color: "white",
    backgroundColor: "lightgray",
    border: "1px solid gray",
    borderRadius: "8px",
    padding: "4px 8px",
  },
}) {
  const [isHovering, setIsHovering] = useState(false);

  // TODO: what if children is div/span/Fragment
  // TODO: what about if child has index, or display: block kind of style
  // TODO: handle ViewPort hitting show-forced-away case (like Windows)
  return (
    <span
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      style={{ position: "relative" }}
    >
      {children}
      {isHovering ? (
        <span
          className={classes}
          style={{ ...styles, position: "absolute", top: -20, right: -20 }}
        >
          {tooltipText}
        </span>
      ) : null}
    </span>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node,
  tooltipText: PropTypes.string,
  classes: PropTypes.string,
  styles: PropTypes.object,
};
