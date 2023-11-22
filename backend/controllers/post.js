import database from "../database.js";

export const getPost = async (req, res) => {
    const query = "SELECT * FROM books";
    database.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    })
}

export const createPost = async (req, res) => {
    const query = "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?)";
    const values = [req.body.title, req.body.description, req.body.price, req.body.cover];
    database.query(query, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Books has been created Successfully.")
    })
}

export const deletePost = async (req, res) => {
    const bookId = req.params.id;
    const query = "DELETE FROM books WHERE id = ?";
    database.query(query, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Books has been deleted Successfully.")
    })
}

export const updatePost = async (req, res) => {
    const bookId = req.params.id;
    const query = "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ?  WHERE id = ?";
    const values = [req.body.title, req.body.description, req.body.price, req.body.cover];
    database.query(query, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Books has been Updated Successfully.")
    })
}