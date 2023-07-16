import bollywood from "../../../models/bollywood";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let newBollywood = new bollywood({
        name: req.body[i].name,
        image: req.body[i].image,
        category: req.body[i].category,
      });
      await newBollywood.save();
    }
    res.status(200).json({ message: "Success" });

  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};
export default connectDB(handler);
