import { Router } from "express";
import {
  getApplicationStatus,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

//import { updateUser } from "../controllers/jobController";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-status", [
  authorizePermissions("admin"),
  getApplicationStatus,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;
