import "../styling/authorList.scss";
import NavbarComponent from "./navbar";
import AddBookComponent from "./addBook";
import DeleteAuthorComponent from "./deleteAuthor";
import EditAuthorComponent from "./editAuthor";

import EditNoteIcon from "@mui/icons-material/EditNote";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {
  Tooltip,
  IconButton,
  CircularProgress,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Collapse,
  styled,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useAuthorListHook, useTableHook } from "../hooks/hooks";

const AuthorList = () => {
  const {
    editAuthor,
    book,
    authors,
    loading,
    deleteAuthor,
    cancelBtnToDeleteAuthor,
    callDeleteAuthor,
    setSelectedIndex,
    setDeleteAuthor,
    openModalToEditAuthor,
    closeEditAuthorModal,
    callUpdateAuthor,
    openBookModal,
    closeBook,
    callAddBook,
    callDeleteBook,
  } = useAuthorListHook();

  if (loading) {
    return (
      <div id="spinner">
        <Typography>
          Server is starting, this might take a few minutes <CircularProgress />
        </Typography>
      </div>
    );
  }

  return (
    <div id="author-list-container">
      <NavbarComponent />
      <DeleteAuthorComponent
        open={deleteAuthor}
        cancel={cancelBtnToDeleteAuthor}
        callDelete={callDeleteAuthor}
      />
      <EditAuthorComponent
        open={editAuthor}
        closeDialog={closeEditAuthorModal}
        updateAuthor={callUpdateAuthor}
      />
      <AddBookComponent
        open={book}
        closeBook={closeBook}
        addBook={callAddBook}
      />
      <br />
      <br />

      {/* Adding Table  */}
      <TableContainer
        component={Paper}
        style={{ width: "90%", margin: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" />
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Located</TableCell>
              <TableCell align="left">Phone #</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((item, index) => {
              return (
                <TableDataComponent
                  item={item}
                  index={index}
                  openEditDialog={openModalToEditAuthor}
                  setSelectedIndex={setSelectedIndex}
                  setDeleteAuthor={setDeleteAuthor}
                  openBookModal={openBookModal}
                  removeBook={callDeleteBook}
                  key={`${item.firstName}_${item.lastName}_${item.phoneNumber}_${item.id}`}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const TableDataComponent = (props) => {
  const {
    item,
    index,
    openEditDialog,
    setSelectedIndex,
    setDeleteAuthor,
    removeBook,
    openBookModal,
  } = props;
  const { openCollapse, setCollapse } = useTableHook();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <StyledTableRow key={`${item.firstName}_${item.lastName}`}>
        <StyledTableCell index={index}>
          {item.books.length === 0 ? null : (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setCollapse(!openCollapse)}
            >
              {openCollapse ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          )}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" align="left">
          {`${item.firstName} ${item.lastName}`}
        </StyledTableCell>
        <StyledTableCell align="left">{`${
          item.located === null ? "" : item.located
        }`}</StyledTableCell>
        <StyledTableCell align="left">{`${
          item.phoneNumber === null ? "" : item.phoneNumber
        }`}</StyledTableCell>
        <StyledTableCell align="left">
          <Tooltip title="Edit Author" placement="top" arrow>
            <IconButton
              onClick={() => {
                openEditDialog(item.id, index);
              }}
            >
              <EditNoteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Author" placement="top" arrow>
            <IconButton
              onClick={() => {
                setSelectedIndex({ id: item.id, index });
                setDeleteAuthor(true);
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add Book" placement="top" arrow>
            <IconButton
              onClick={() => {
                openBookModal(item.id, index);
              }}
            >
              <LibraryAddIcon />
            </IconButton>
          </Tooltip>
        </StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: 100,
            paddingRight: 100,
          }}
          colSpan={6}
        >
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Books
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Book Name</TableCell>
                    <TableCell>Published</TableCell>
                    <TableCell>Copyrighted</TableCell>
                    <TableCell>Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.books.map((bookData) => (
                    <TableRow key={bookData.bookName}>
                      <TableCell component="th" scope="row">
                        {bookData.bookName}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {bookData.publishedDate}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {bookData.copyrightDate}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Tooltip title="Delete Book" placement="right" arrow>
                          <IconButton
                            onClick={() => {
                              setSelectedIndex({ id: item.id, index });
                              const book = {
                                isbn: bookData.isbn,
                                bookName: bookData.bookName,
                                copyrightDate: bookData.copyrightDate,
                                publishedDate: bookData.publishedDate,
                                author: {
                                  firstName: item.firstName,
                                  lastName: item.lastName,
                                  located: item.located,
                                  phoneNumber: item.phoneNumber,
                                  id: item.id,
                                },
                              };
                              setCollapse(
                                item.books.length === 1 ? false : true
                              );
                              removeBook(item.id, book);
                            }}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default AuthorList;
