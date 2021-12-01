
exports.addBook = async (collection, dataObj) => {
    try {
        await collection.insertOne(dataObj)
    } catch (error) {
        console.log(error)
    }
}

exports.listBooks = async (collection) => {
    try {
        const listAll = await collection.find().toArray();
        console.log(listAll)
    } catch (error) {
        console.log(error)
    }
}

exports.updateBook = async (collection, dataObj) => {
    try {
        const updateOne = await collection.updateOne()
    } catch (error) {
        console.log(error)
    }
}

// exports.findBooks = async (collection, dataObj) => {
//     try {
//         const filteredBooks = await collection.find({  }).toArray();
//         console.log('Found documents filtered by {  } =>', filteredBooks);
//     } catch (error) {
//         console.log(error)
//     }
// }