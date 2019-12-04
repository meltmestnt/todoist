import React from "react";
import Container from "@material-ui/core/Container";
import WeekDayContainerTask from "./WeekDayContainerTask";
import { getWeek } from "./../utils/date";
import Typography from "@material-ui/core/Typography";
function WeekContent(props) {
  const { classes } = props;
  console.log(getWeek());
  const [dayTask, toggleDayTask] = React.useState(null);
  const week = getWeek();
  return (
    <Container className={classes.content}>
      <Typography variant="h5" style={{ margin: "20px 0px 10px 0px" }}>
        Следующие 7 дней
      </Typography>
      {week.map(d => {
        return (
          <div style={{ margin: "20px 0px", width: "100%" }}>
            <WeekDayContainerTask
              dayTask={dayTask}
              toggleDayTask={toggleDayTask}
              day={d}
            ></WeekDayContainerTask>
          </div>
        );
      })}
    </Container>
  );
}

export default WeekContent;
