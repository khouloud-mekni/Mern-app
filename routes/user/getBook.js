const Book = require("../../models/Book");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const book = await Book.findById(id).populate("author" , " -_id -email -password -isAuthor -isBanned -isVerified -createdAt -updatedAt")
    res.status(200).json({
      status: true,
      data: book,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};