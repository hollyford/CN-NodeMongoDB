const { ObjectId } = require("bson");

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
    // console.log(dataObj)
    try {
        const findAmendOne = await collection.updateMany({ _id: ObjectId(dataObj._id) }, {$set: {dataObj}})
        
        // console.log(findAmendOne)
        // const amendOne = await collection.updateOne(dataObj)
        // console.log(`The book selected was: ${findAmendOne}`)
        // console.log(`The book has been amended to: ${amendOne}`)
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

