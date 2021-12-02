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
// End of working functions

// start of functions being worked on : 

exports.updateBook = async (collection, dataObj) => {
    // console.log(dataObj)
    try {
        const findAmendOne = await collection.updateOne({ author: dataObj.author }, {$set: dataObj})
        // const findAmendOne = await collection.updateOne({ _id: ObjectId(dataObj._id) }, {$set: dataObj})
    } catch (error) {
        console.log(error)
    }
}

// const filteredDocs = await collection.find({rating: {$gt: "4/10"}, {title}}).toArray();



