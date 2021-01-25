import React from "react";
import { MemberListRick } from "./member-list-rick.vm";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import { Card } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { ThemeProviderComponent } from "../../../theme";

interface Props {
  memberListRick: MemberListRick[];
  onClickButtonEdit: (id: string) => void;
  onValueFilter: (valueFilter: string) => void;
}
export const MemberListRickComponent: React.FC<Props> = (props) => {
  const { memberListRick, onClickButtonEdit, onValueFilter } = props;

  const [valueFilter, setValueFilter] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <>
      <ThemeProviderComponent>
        <div>
          <h2 style={{ paddingTop: "32px" }}>Members Filter Rick and Morty</h2>
          <label>Filter Members </label>
          <input
            type="text"
            value={valueFilter}
            onChange={(e) => {
              setValueFilter(e.target.value), onValueFilter(e.target.value);
            }}
          />
        </div>
        <Card style={{ backgroundColor: "#d1f0f5" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Url</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {memberListRick
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <img src={row.image} style={{ width: "100px" }} />
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.url}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => onClickButtonEdit(row.id)}>
                          <AccountBoxIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[4, 8, 16]}
                    component="div"
                    count={memberListRick.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </ThemeProviderComponent>
    </>
  );
};
