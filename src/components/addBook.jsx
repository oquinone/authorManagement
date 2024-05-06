import React from "react";
import { useAddBookStore } from "../store/store";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import "../styling/addBook.scss";

const AddBook = (props) => {
  const { open, closeBook, addBook } = props;

  const isbn = useAddBookStore((state) => state.isbn);
  const bookName = useAddBookStore((state) => state.bookName);
  const copyrightDate = useAddBookStore((state) => state.copyrightDate);
  const publishedDate = useAddBookStore((state) => state.publishedDate);

  const setIsbn = useAddBookStore((state) => state.enterIsbn);
  const setBookName = useAddBookStore((state) => state.enterBookName);
  const setPublishedDate = useAddBookStore((state) => state.enterPublishedDate);
  const setCopyrightDate = useAddBookStore((state) => state.enterCopyRightDate);

  return (
    <div>
      <Dialog open={open} onClose={closeBook} fullWidth>
        <DialogTitle id="edit-book-title">{"Add Book"}</DialogTitle>
        <DialogContent id="edit-book-container">
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="ISBN"
              variant="outlined"
              size="small"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="Book Name"
              variant="outlined"
              size="small"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="Published Date"
              variant="outlined"
              size="small"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              fullWidth
            />
          </div>
          <div className="input-container">
            <TextField
              id="standard-size-normal"
              label="Copyright Date"
              variant="outlined"
              size="small"
              value={copyrightDate}
              onChange={(e) => setCopyrightDate(e.target.value)}
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeBook()}>Cancel</Button>
          <Button onClick={() => addBook()} autoFocus>
            Add Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddBook;
