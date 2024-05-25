import { useState } from "react";
import {
  ListItem,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Create from "@mui/icons-material/Create";
import PropTypes from "prop-types";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <ListItem>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          placeholder="Enter the Task"
          value={text}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create task" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </ListItem>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
