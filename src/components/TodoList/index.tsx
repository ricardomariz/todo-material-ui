import {
  Checkbox,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useTodos } from "../../hooks/useTodos";

import "./styles.scss";

export function TodoList() {
  const { todos } = useTodos();

  return (
    <Container maxWidth="md" className="todolist-container">
      <h2>My todos</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <b>Date</b>
              </TableCell>
              <TableCell>
                {" "}
                <b>Todo</b>
              </TableCell>
              <TableCell align="right">
                {" "}
                <b>Done</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell> {todo.date}</TableCell>
                  <TableCell> {todo.text}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <Checkbox color="secondary" value={todo.isCompleted} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
