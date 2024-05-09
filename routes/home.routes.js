import { Router } from "express";
import {mapScrapper} from "../controllers/home.controller.js"


const router = Router()

router.route("/datascrape").post(mapScrapper)

export default router;