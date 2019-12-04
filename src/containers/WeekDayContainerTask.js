import React from "react";
import DayInfo from "./../components/DayInfo";
import ToAddTaskButton from "./../components/ToAddTaskButton";
import CreateTask from "./CreateTask";
import Divider from "@material-ui/core/Divider";
import DisplayTasks from "./../containers/DisplayTasks";
import useTaskFilter from "./../utils/taskFilter";

function WeekDayContainerTask(props) {
  const [tab, toggleTabs] = React.useState(false);
  const { day, dayTask, toggleDayTask } = props;
  const date = new Date().getDate();
  const weekDay =
    date === parseInt(day.date)
      ? "Сегодня"
      : day.date - date === 1
      ? "Завтра"
      : day.weekDay;
  const triggerCurrentDay = () => {
    toggleDayTask(day);
    toggleTabs(true);
  };
  const tasks = useTaskFilter(new Date(day.getTime));
  return (
    <>
      <DayInfo getDay={() => day} date={weekDay}></DayInfo>
      <DisplayTasks tasks={tasks} />
      <Divider style={{ margin: "10px 0px 10px 0px" }}></Divider>
      {tab && day.date === dayTask.date ? (
        <CreateTask
          date={
            new Date(new Date().getFullYear(), new Date().getMonth(), day.date)
          }
          cancel={() => toggleTabs(false)}
        ></CreateTask>
      ) : (
        <ToAddTaskButton toggleTabs={triggerCurrentDay}></ToAddTaskButton>
      )}
    </>
  );
}

export default WeekDayContainerTask;
