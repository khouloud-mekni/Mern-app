const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const reviews = await Review.find({ book: id })
    .populate("user" , " -_id -email -password -isAuthor -isAdmin -isBanned -isVerified -createdAt -updatedAt")
    // .populate("book" ,"-_id -email -desc -author -password -isAuthor -isBanned -isVerified -createdAt -updatedAt");
    res.status(200).json({
      status: true,
      data: reviews,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};