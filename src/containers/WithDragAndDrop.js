import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

function WithDragAndDrop({ listProp, secondDroppable, children, action }) {
  const [list, setList] = React.useState(listProp);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setList(listProp);
  }, [listProp]);
  const sort = ({ destination, source, reason }) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    const listCopy = Array.from(list);
    const listItem = list[source.index];
    listCopy.splice(source.index, 1);
    listCopy.splice(destination.index, 0, listItem);
    console.log(list, listCopy, listItem);
    dispatch(action(listCopy));
  };
  return <DragDropContext onDragEnd={sort}>{children(list)}</DragDropContext>;
}

export default WithDragAndDrop;
