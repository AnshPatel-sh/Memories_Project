import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
    console.log("User created and data sent");
  } catch (error) {
    console.error("Error in signUp:", error);
    res.status(500).json({ message: "Something went wrong.", error });
  }
};

// export const signUp = async (req, res) => {
//   const { email, password, firstName, lastName } = req.body;
//   console.log(`Code reached to signup backend`)
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists." });

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const result = await User.create({
//       email,
//       password: hashedPassword,
//       firstName,
//       lastName,
//     });

//     console.log(`User successfully createed`)
//     const token = jwt.sign({ email: result.email, id: result._id }, "test", {
//       expiresIn: "1h",
//     });
//     console.log(`Token made`)
//     res.status(200).json({ result, token });
//     console.log(`Res from backend sent `)
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong." });
//   }
// };