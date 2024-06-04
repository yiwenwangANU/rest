exports.getPosts = (req, res, next) => {
    res.status(200).json({ // 200 indicate success
        posts: [{
            _id: '1',
            title: 'First Post',
            content: 'This is the first post!',
            imageUrl: 'images/book.js',
            creator: {
                name: 'Max'
            },
            createdAt: new Date()
        }]
    });
}

exports.createPost = (req, res, next) => {
    const { title, content } = req.body;
    // Create post in db
    res.status(201).json({ //201 indicate success and a resource was created
        message: 'Post create successfully!',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    })
}
