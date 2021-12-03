const { ObjectId } = require("bson");
// Working functions :
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

exports.deleteBook = async (collection, dataObj) => {
    try {
        const deleteOne = await collection.deleteOne({ _id: ObjectId(dataObj._id) })
        console.log("Book deleted")
    } catch (error) {
        console.log(error)
    }
}

exports.byTitle = async (collection, dataObj) => {
    console.log(dataObj)
    try {
        const listTitle = await collection.collection('books').findAll({title: dataObj}).toArray();
        console.log(listTitle)
    } catch (error) {
        console.log(error)
    }
}

exports.byAuthor = async (collection, dataObj) => {
    try {
        const listAuthor = await collection.find(dataObj.author).toArray();
        console.log(listAuthor)
    } catch (error) {
        console.log(error)
    }
}

// End of working functions
// start of functions being worked on : 

exports.updateBook = async (collection, dataObj) => {
    try {
        const findAmendOne = await collection.updateOne({ title: dataObj.title }, {$set: dataObj})
        console.log()
    } catch (error) {
        console.log(error)
    }
}



// const filteredDocs = await collection.find({rating: {$gt: "4/10"}, {title}}).toArray();



