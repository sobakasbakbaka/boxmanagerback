import Router from "express";
import BoxController from "./Controllers/BoxController.js";

const router = new Router();

const routersMap = {
  main: "/boxes",
  withId: "/boxes/:id",
};

router.post(routersMap.main, BoxController.create); // create box
router.get(routersMap.main, BoxController.getAll); // get all boxes
router.get(routersMap.withId, BoxController.getOne); // get current box
router.put(routersMap.main, BoxController.update); // update boxes
router.delete(routersMap.withId, BoxController.delete); // delete current box

export default router;
