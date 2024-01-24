import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";
const styled = {
  detailsDescription: {
    width: "100%",
    backgroundColor: "#282C38",
    borderRadius: "26px",
    color: "white",
    padding: "25px 45px",
  },
  rightContent: {
    display: "flex",
    justifyContent: "end",
  },
};

function DetailsDescription(props) {
  const { name, level, released, student, star, rating } = props.data;

  return (
    <div style={styled.detailsDescription}>
      <div className="row space-between">
        <p className="font-size24">{name}</p>
        <div>
          <p style={styled.rightContent}>
            {[...Array(5)].map((e, i) => {
              return i <= star - 1 ? (
                <StarIcon style={{ color: "yellow" }} key={i} />
              ) : (
                <StarOutlineIcon style={{ color: "yellow" }} key={i} />
              );
            })}
          </p>
          <p style={styled.rightContent} className="font-size12">
            ({rating} Ratings)
          </p>
        </div>
      </div>
      <div className="row mt-3 space-between">
        <p>Cấp bậc</p>
        <p>{level}</p>
      </div>
      <div className="row mt-2  space-between">
        <p>Ngày xuất bản</p>
        <p>{released}</p>
      </div>
      <div className="row mt-2 space-between">
        <p>Học viên</p>
        <p>{student}</p>
      </div>
      {/* <div className="row " style={styled.rightContent}>
        <Button className="mt-3 py-2" variant="contained" fullWidth>
          {props.buttonFree}
        </Button>
      </div> */}
    </div>
  );
}

export default DetailsDescription;
