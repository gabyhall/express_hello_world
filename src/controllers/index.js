exports.helloWorld = (req, res) => {
    console.log(req.body.name);
    res.send({ message: "Look, here is a response "});
};