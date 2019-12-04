import React from "react";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  dateInfo: {
    fontSize: "0.85rem",
    margin: 10,
    color: "gray"
  }
}));
function DayInfo(props) {
  const day = props.getDay();
  const ownClasses = useStyles();
  const { date } = props;
  return (
    <Typography variant="h5">
      {date}
      <span
        className={ownClasses.dateInfo}
      >{`${day.weekDay} ${day.date}, ${day.monthName}`}</span>
    </Typography>
  );
}

export default DayInfo;
