import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
import generateId from "./../utils/generator";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    padding: 10,
    margin: "0px 0px",
    alignItems: "center",
    borderBottom: "1px solid lightgrey !important"
  },
  dragIcon: {
    position: "absolute",
    top: "50%",
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translate(-100%, -50%)",
    opacity: 0.6,
    cursor: "pointer"
  },
  icon: {
    opacity: 0.6
  },
  circle: {
    width: 20,

    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: 20,
    background: "transparent",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.type === "light" ? "black" : "#D3D3D3"}`,
    transition: "0.3s",
    marginRight: 15,
    cursor: "pointer",
    "&:hover": {
      background: "rgba(211,211,211,0.3)"
    },
    "& svg": {
      width: "50%",
      height: "50%"
    }
  }
}));

function Task({ task, index }) {
  const classes = useStyles();
  const [displayDone, toggleIcon] = React.useState(false);
  console.log(index, task.title);
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <div
            className={classes.container}
            style={{
              background: snapshot.isDragging ? "white" : "transparent",
              border: snapshot.isDragging ? "1px solid lightgrey" : "none",

              boxShadow: snapshot.isDragging
                ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
                : "none",
              borderRadius: snapshot.isDragging ? "4px" : "0px"
            }}
          >
            <div className={classes.dragIcon} {...provided.dragHandleProps}>
              <DragIndicatorIcon />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                className={classes.circle}
                onMouseOver={e => toggleIcon(true)}
                onMouseLeave={e => toggleIcon(false)}
              >
                <DoneIcon
                  style={{ transition: "0.3s", opacity: displayDone ? 1 : 0 }}
                />
              </span>
              <Typography variant="body1">{task.title}</Typography>
            </div>
            <div>
              <ErrorOutlineIcon className={classes.icon}></ErrorOutlineIcon>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
