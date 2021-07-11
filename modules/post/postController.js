const PostModel = require('./postModel');

module.exports.getPost = (req, res) => {
    PostModel.getPostsFromDB()
        .then(docs => {
            res.send({ status: true, docs })
        })
        .catch(e => {
            res.send({ status: false, e })
        })
}

module.exports.addPost = (req, res) => {
    PostModel.addPostToDB(req.body)
        .then(resp => {
            res.send({ status: true })
        })
        .catch(e => {
            res.send({ status: false, e })
        })
}

module.exports.deletePost = (req, res) => {
        PostModel.deletePostFromDB(req.params.id)
        .then(resp => {
            res.send({ status: true })
        })
        .catch(e => {
            res.send({ status: false, e })
        })
}
