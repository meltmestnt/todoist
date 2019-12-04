import React from "react";
import { useSelector } from "react-redux";
export default date => {
  return (
    useSelector(state =>
      state.tasks.tasks.filter(
        t => new Date(t.date).getDate() === date.getDate()
      )
    ) || []
  );
};
