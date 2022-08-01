const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ message: "You are not authorized to do this" });
        return;
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.jwtPrivateKey, (err, verifiedJwt) => {
        if (err) {
            return next(err);
        }

        next();
    })
}

module.exports = verifyToken;