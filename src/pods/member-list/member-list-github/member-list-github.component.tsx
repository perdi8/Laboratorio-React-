import React from "react";
import { MemberListGithub } from "./member-list-github.vm";
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
import { MyContext } from "../../../common-app/context/member-list-github-context";
import { ThemeProviderComponent } from "../../../theme";

interface Props {
  memberListGithub: MemberListGithub[];
  filterCompany: string;
  onClickButtonFilter: (filter: string) => void;
  onClickButtonEdit: (id) => void;
}
export const MemberListGithubComponent: React.FC<Props> = (props) => {
  const { filterValueContext } = React.useContext(MyContext);
  const { memberListGithub, onClickButtonFilter, onClickButtonEdit } = props;

  const [valueFilter, setValueFilter] = React.useState(filterValueContext);
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
          <h2 style={{ paddingTop: "32px" }}>Members filter Github</h2>
          <label>Filter Company </label>
          <input
            type="text"
            value={valueFilter}
            onChange={(e) => setValueFilter(e.target.value)}
          />
          <button
            onClick={() => onClickButtonFilter(valueFilter)}
            style={{ marginLeft: "5px" }}
          >
            Find
          </button>
        </div>
        <Card style={{ backgroundColor: "#f5efd1" }}>
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
                {memberListGithub
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <img src={row.avatar_url} style={{ width: "100px" }} />
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.login}</TableCell>
                      <TableCell>{row.url}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => onClickButtonEdit(row.login)}
                        >
                          <AccountBoxIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[4, 8, 16]}
                    component="div"
                    count={memberListGithub.length}
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
