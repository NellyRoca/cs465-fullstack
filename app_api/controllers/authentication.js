const User = require('../models/user');

// REGISTER
module.exports.register = async (req, res) => {
  try {
    const user = new User();

    user.email = req.body.email;
    user.name = req.body.name;
    user.setPassword(req.body.password);

    await user.save();

    const token = user.generateJWT();

    res.json({
      message: "user registered",
      token
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !user.validPassword(req.body.password)) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const token = user.generateJWT();

    res.json({
      message: "login successful",
      token
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};