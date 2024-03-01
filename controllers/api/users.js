const User = require('../../models/User');
const jwt = require('jsonwebtoken')
async function create(req, res) {
  try {
    // add the user to the database
    const user = await User.create(req.body)

    res.json(user)

  } catch (evt) {
    // 400 = Bad Request
    res.status(400).json(evt)
  }

}

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // uses res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (evt) {
    // 400 = Bad Request
    res.status(400).json(err);
  }
}
// helper function
function createJWT(user) {

  return jwt.sign(
    // user is the data payload
    { user },
    process.env.SECRET,
    { expiresIn: '360h' }
  )
}


module.exports = {
  create
  // ,
  // delete,
  // update,
  // login
};