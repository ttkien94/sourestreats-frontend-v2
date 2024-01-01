import { Button } from "@mui/material";
import PropTypes from "prop-types";

function LoadingButtom({
  onClick,
  disabled,
  value,
  className,
  fullWidth,
  loading,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={onClick}
        fullWidth={fullWidth}
        variant="contained"
        className={className}
        disabled={disabled}
      >
        {value}
        {loading && <div className="loader"></div>}
      </Button>
    </div>
  );
}

LoadingButtom.propTypes = {
  value: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default LoadingButtom;
