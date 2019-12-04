import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { getToday } from "./../utils/date";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GradeIcon from "@material-ui/icons/Grade";
import MainImage from "./../components/MainImage";
import ArrowTooltip from "./../components/ArrowTooltip";
import CreateTask from "./CreateTask";
import ToAddTaskButton from "./../components/ToAddTaskButton";
import DayInfo from "./../components/DayInfo";
import { useSelector } from "react-redux";
import DisplayTasks from "./DisplayTasks";
import useTaskFilter from "./../utils/taskFilter";
const useStyles = makeStyles(theme => ({
  secondaryButton: {
    border: "1px solid gray",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    padding: "5px 10px",
    margin: "10px 0px",
    textTransform: "inherit",
    color: `${theme.palette.type === "dark" ? "#fff" : "#000000"} !important`
  }
}));
function TodayContent(props) {
  const { classes } = props;
  const ownClasses = useStyles();
  const [isCreating, toggleTabs] = React.useState(false);
  const tasks = useTaskFilter(new Date());
  const tooltipButton = (
    <button
      variant="outlined"
      className={ownClasses.secondaryButton}
      color="secondary"
    >
      <GradeIcon style={{ margin: "5px 10px" }} color="secondary"></GradeIcon>
      Заведите привычку на день
    </button>
  );
  const mainContent = (
    <>
      <DayInfo getDay={getToday} date="Сегодня"></DayInfo>

      <ToAddTaskButton toggleTabs={toggleTabs}></ToAddTaskButton>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "25px 0px",
          flexGrow: "1"
        }}
      >
        <MainImage></MainImage>
        <Typography variant="subtitle1" style={{ margin: "15px 0px 5px 0px" }}>
          Чёткое видение грядущего дня
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "gray",
            textAlign: "center",
            margin: "5px 0px",
            fontSize: "0.8rem"
          }}
        >
          Все ваши задачи на сегодня отображаются здесь.
        </Typography>
        <Button
          variant="contained"
          style={{ margin: "10px 0px", textTransform: "inherit" }}
          color="primary"
          onClick={e => toggleTabs(true)}
        >
          Добавить задачу
        </Button>

        <ArrowTooltip
          button={tooltipButton}
          title={
            <>
              <GradeIcon color="secondary" />
              <Typography style={{ fontSize: "1rem", margin: "0px 10px" }}>
                Заведите привычку на день
              </Typography>
            </>
          }
          body={
            <Typography style={{ fontSize: "0.8rem" }}>
              Каждое утро выделяйте 10 минут на то, чтобы прояснить свой ум и
              спланировать день.
            </Typography>
          }
        ></ArrowTooltip>
      </Container>
    </>
  );
  const withoutTasks = isCreating ? (
    <CreateTask cancel={() => toggleTabs(false)}></CreateTask>
  ) : (
    mainContent
  );
  const withTasks = (
    <>
      <DayInfo getDay={getToday} date="Сегодня"></DayInfo>
      <DisplayTasks tasks={tasks} />
      {isCreating ? (
        <CreateTask cancel={() => toggleTabs(false)}></CreateTask>
      ) : (
        <ToAddTaskButton toggleTabs={toggleTabs}></ToAddTaskButton>
      )}
    </>
  );
  return (
    <Container className={classes.content}>
      {tasks.length > 0 ? withTasks : withoutTasks}
    </Container>
  );
}

export default TodayContent;
