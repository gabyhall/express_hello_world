exports.helloWorld = (req, res) => {
    console.log(req.body.name);
    res.send({ message: "Look, a response "});
};