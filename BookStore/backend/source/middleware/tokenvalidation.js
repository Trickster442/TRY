import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export default function validateToken(req, res, next) {
    const token = req.headers.token; 

    if (token) {
        try {

            jwt.verify(token, SECRET_KEY);
            next();
        } catch (e) {
            console.error('Failed to verify or decode token', e);
            return res.sendStatus(403); // Forbidden if token is invalid or decoding fails
        }
    } else {
        return res.sendStatus(401); // Unauthorized if no token is provided
    }
}
