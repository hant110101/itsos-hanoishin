import { Router } from "express";
import LocationController from "../controllers/location";

const router = Router();

// GET {baseURL}/api/location/:locationId
router.get("/:locationId", LocationController.getLocationDetails);

export default router;
