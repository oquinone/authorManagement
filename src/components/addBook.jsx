import { useAddBookHook } from "../hooks/hooks";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import "../styling/addBook.scss";

const AddBookComponent = (props) => {
  const { open, closeBook, addBook } = props;
  const {
    isbn,
    bookName,
    copyrightDate,
    publishedDate,
    setIsbn,
    setBookName,
    setPublishedDate,
    setCopyrightDate,
  } = useAddBookHook();

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
export default AddBookComponent;
