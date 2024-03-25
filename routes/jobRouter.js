import { Router } from "express";
import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

const router = Router();

//router.get('/',getAllJobs)
//router.post('/',createJob)                    //this is one approach

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob); //this is another approach

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(getJob, validateIdParam)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
