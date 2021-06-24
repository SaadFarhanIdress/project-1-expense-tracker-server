const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
})

const PostModel = new mongoose.model("posts", PostSchema)

module.exports.addPostToDB = (data) => {
    let model = new PostModel(data)

    return new Promise((resolve, reject) => {
        model.save((err, doc) => {
            if (err) {
                console.log('ERROR', err)
                return reject(err)
            }
            return resolve(doc)
        })
    })
}

module.exports.getPostsFromDB = () => {
    return new Promise((resolve, reject) => {
        PostModel.find({}, (err, docs) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(docs);
        })
    })
}