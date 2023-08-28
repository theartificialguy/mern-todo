import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register a user
// route    POST /api/users/regiser
// @access  Public
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(401);
      throw new Error("Invalid argmuents received");
    }

    const userExists = await User.find({ email });

    if (userExists.length > 0) {
      // userExists: []
      res.status(401);
      throw new Error("User already exists");
    }

    const user = await User.create({ name, email, password });

    if (user) {
      generateToken(res, user._id);

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Login a user/set user token
// route    POST /api/users/login
// @access  Public
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401);
      throw new Error("Please provide user credentials");
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(401);
      throw new Error("User does not exists");
    }

    const passwordValidation = await user.matchPassword(password);

    if (!passwordValidation) {
      res.status(401);
      throw new Error("Invalid user credentials");
    }

    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Logout a user
// route    POST /api/users/logout
// @access  Public
const logoutUser = async (req, res, next) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0), // will expire right away
    });

    res.status(200).json({ message: "User logged out" });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res, next) => {
  try {
    const user = {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    };

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// route    PUT /api/users/udpate
// @access  Private
const updateUserProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.status(200).json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }

    res.status(200).json({ message: "Update user profile" });
  } catch (error) {
    next(error);
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
