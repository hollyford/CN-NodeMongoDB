const connection = require("./db/connection");
const { addBook, listBooks, updateBook, deleteBook } = require("./utils")


const command = process.argv[2];

const app = async () => {
    if (command === "add") {
        const newBook = {
            author: process.argv[3],
            title: process.argv[4],
            genre: process.argv[5]
        }
        await connection(addBook, newBook)
    } else if (command === "list") {
        await connection(listBooks);
    } else if (command === "amend") {
        const editedBook = {
            // _id: process.argv[3],
            author: process.argv[3],
            title: process.argv[4],
            genre: process.argv[5]
        }
        await connection(updateBook, editedBook);
    } else if (command === "delete") {
        await connection(deleteBook, {_id:process.argv[3]});
    }else {
        console.log("Incorrect Input")
    }
}

app();