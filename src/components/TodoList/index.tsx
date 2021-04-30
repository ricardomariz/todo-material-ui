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

import "./styles.scss";

export function TodoList() {
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
            <TableRow>
              <TableCell> 10/04/1990</TableCell>
              <TableCell> Isso aqui é um todo mto grande viu</TableCell>
              <TableCell align="right">
                {" "}
                <Checkbox color="secondary" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell> 10/04/1990</TableCell>
              <TableCell> Isso aqui é um todo mto grande viu</TableCell>
              <TableCell align="right">
                {" "}
                <Checkbox color="secondary" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
