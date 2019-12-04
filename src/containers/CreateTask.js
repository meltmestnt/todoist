import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "./../components/DatePicker";
import Button from "@material-ui/core/Button";
import ArrowTooltip from "./../components/ArrowTooltip";
import ProjectsSuggest from "./../components/ProjectsSuggest";
import MarksSuggest from "./../components/MarksSuggest";
import PrioritySuggest from "./../components/PrioritySuggest";
import ChipInput from "./../components/ChipInput";
import { useDispatch } from "react-redux";
import { createTask } from "./../redux/actions";
import generateId from "./../utils/generator";
const useStyles = makeStyles(theme => ({
  upperContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  lowerContainer: {
    display: "flex",
    width: "100%",
    marginTop: 15,
    alignItems: "center"
  },
  inputDate: {
    maxWidth: "40%",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%"
    }
  },
  inputMain: {
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  addButton: {
    marginLeft: 10,
    textTransform: "inherit",
    padding: "5px 10px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 5px"
    }
  },
  cancelButton: {
    textTransform: "inherit",
    marginLeft: 5
  },
  icon: {
    cursor: "pointer",
    margin: "0px 5px"
  },
  button: {
    padding: 5,
    minWidth: "auto"
  }
}));
function CreateTask(props) {
  const date = props.date || new Date();
  const classes = useStyles();
  const [projects, setProjects] = React.useState([]);
  const [input, setInput] = React.useState("");

  const [marks, setMarks] = React.useState([]);
  const [priority, setPriority] = React.useState([]);
  const { cancel } = props;
  const dispatch = useDispatch();
  const addTask = () => {
    if (input.length <= 0) {
      return;
    }
    const task = {
      projects: projects || [],
      title: input,
      marks: marks || [],
      priority: priority,
      date: date,
      id: generateId(10)
    };
    dispatch(createTask(task));
    cancel();
  };
  return (
    <div>
      <div className={classes.upperContainer}>
        <ChipInput
          classes={classes}
          input={input}
          setInput={setInput}
          setProjects={setProjects}
          setMarks={setMarks}
          chips={[
            ...projects.map(p => {
              p.type = "project";
              return p;
            }),
            ...marks.map(m => {
              m.type = "mark";
              return m;
            })
          ]}
        ></ChipInput>
        <div className={classes.inputDate}>
          <DatePicker date={date}></DatePicker>
        </div>
      </div>
      <div className={classes.lowerContainer}>
        <Button
          className={classes.addButton}
          variant="contained"
          color="primary"
          onClick={addTask}
        >
          Добавить задачу
        </Button>
        <Button onClick={cancel} className={classes.cancelButton}>
          Отмена
        </Button>
        <ProjectsSuggest
          setProjects={setProjects}
          projects={projects}
          classes={classes}
        ></ProjectsSuggest>

        <MarksSuggest
          setMarks={setMarks}
          marks={marks}
          classes={classes}
        ></MarksSuggest>
        <PrioritySuggest
          setPriority={setPriority}
          priority={priority}
          classes={classes}
        ></PrioritySuggest>
      </div>
    </div>
  );
}

export default CreateTask;
