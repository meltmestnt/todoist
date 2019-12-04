import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

function ExpandedList(props) {
  const {
    icon: Icon,
    classes,
    fallbackTitle,
    subitems,
    toggle,
    toggleList,
    title,
    openModal,
    tagIcon
  } = props;

  return (
    <>
      <div style={{ display: "flex" }}>
        <ListItem
          style={{ padding: "5px", margin: "5px 0px 0px 0px" }}
          onClick={e => toggleList(!toggle)}
          button
        >
          <ListItemIcon className={classes.itemIcon}>
            <Icon></Icon>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1" className={classes.typo}>
                {title}
              </Typography>
            }
          ></ListItemText>
          {toggle ? <ExpandLess></ExpandLess> : <ExpandMore></ExpandMore>}
        </ListItem>
        <Button
          color="secondary"
          onClick={openModal}
          style={{ minWidth: "auto" }}
        >
          <AddIcon></AddIcon>
        </Button>
      </div>
      <Collapse timeout="auto" unmountOnExit in={toggle}>
        <List>
          {subitems && subitems.length > 0 ? (
            subitems.map(item => (
              <ListItem style={{ padding: "10px" }}>
                {tagIcon(item)}
                <ListItemText>
                  <Typography variant="body1" className={classes.typo}>
                    {item.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))
          ) : (
            <Typography
              style={{ padding: "10px 0px 10px 20px" }}
              variant="body1"
            >
              {fallbackTitle}
            </Typography>
          )}
        </List>
      </Collapse>
    </>
  );
}

export default ExpandedList;
