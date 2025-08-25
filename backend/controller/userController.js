import User from "../model/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    let userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    let user = await User.findById(userId).select("-password"); 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching user",
      error: error.message,
    });
  }
};
