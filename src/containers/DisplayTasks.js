import React from "react";
import Task from "./../components/Task";
import { Droppable } from "react-beautiful-dnd";
import generateId from "./../utils/generator";
import { sortTasks } from "./../redux/actions";
import WithDragAndDrop from "./WithDragAndDrop";
function DisplayTasks({ tasks }) {
  return (
    <WithDragAndDrop listProp={tasks} action={sortTasks}>
      {() => (
        <Droppable droppableId={generateId(10)}>
          {(provided, snapshot) => (
            <div
              style={{ padding: 15 }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((t, i) => (
                <Task key={t.id} index={i} task={t}></Task>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </WithDragAndDrop>
  );
}

export default DisplayTasks;
