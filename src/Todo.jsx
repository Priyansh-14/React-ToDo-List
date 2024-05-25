import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PropTypes from "prop-types";

export default function Todo({ todo, handleCross, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="close" onClick={handleCross}>
          <CloseIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggle}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`${todo.text}`} />
      </ListItemButton>
    </ListItem>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCross: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};
