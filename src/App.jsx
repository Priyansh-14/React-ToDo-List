import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  );
}

export default App;
