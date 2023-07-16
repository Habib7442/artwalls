import bollywood from "../../../models/bollywood"
import connectDB from "../../../middleware/mongoose"

const handler = async (req, res) => {
    let bollywoodData = await bollywood.find()
    res.status(200).json({ bollywoodData })
}
export default connectDB(handler);
  