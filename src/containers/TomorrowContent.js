import React from "react";
import Container from "@material-ui/core/Container";
import { getTomorrowDate } from "./../utils/date";
import { getTomorrow } from "./../utils/date";
import CreateTask from "./CreateTask";
import ToAddTaskButton from "./../components/ToAddTaskButton";
import DayInfo from "./../components/DayInfo";
function TodayContent(props) {
  const { classes } = props;
  const [isCreating, toggleTabs] = React.useState(false);
  return (
    <Container className={classes.content}>
      {isCreating ? (
        <CreateTask
          date={getTomorrowDate()}
          cancel={() => toggleTabs(false)}
        ></CreateTask>
      ) : (
        <>
          <DayInfo getDay={getTomorrow} date="Завтра"></DayInfo>
          <ToAddTaskButton
            date={"Завтра"}
            toggleTabs={toggleTabs}
          ></ToAddTaskButton>
        </>
      )}
    </Container>
  );
}

export default TodayContent;
