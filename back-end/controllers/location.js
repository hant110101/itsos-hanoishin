import { StatusCodes } from "http-status-codes";
import { Location } from "../models"; // Import model Location

const LocationController = {
  getLocationDetails: async (req, res) => {
    try {
      const { locationId } = req.params;
      const location = await Location.findByPk(locationId); // Lấy thông tin vị trí từ database

      if (!location) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Location not found" });
      }

      return res.status(StatusCodes.OK).json({ location });
    } catch (error) {
      console.error(error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal server error" });
    }
  },
};

export default LocationController;
