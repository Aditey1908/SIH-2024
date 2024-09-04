const admin = require('../utils/firebaseConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register User
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Create user in Firebase Authentication
    const user = await admin.auth().createUser({
      email,
      password,
    });
    res.json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Get user by email
    const userRecord = await admin.auth().getUserByEmail(email);

    // Check the password using bcrypt (assuming passwords were stored securely)
    const isMatch = await bcrypt.compare(password, userRecord.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ uid: userRecord.uid }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};
