import PropTypes from "prop-types";
export default function Ellipsis({
  children,
  styles = {
    color: "blue",
    whiteSpace: "nowrap",
    // width: "200px",
    maxWidth: "100%",
    // height: "50px",
    textOverflow: "ellipsis",
    // overflowWrap: "break-word",
    overflow: "hidden",
    display: "inline-block",
  },
}) {
  return <div style={styles}>{children}</div>;
}

Ellipsis.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.number, // ideally not needed
  styles: PropTypes.object,
};
