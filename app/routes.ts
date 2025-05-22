import { Hono } from "hono";

import PostsController from "@controllers/posts.controller.tsx";

const router = new Hono();

router.get("/posts", PostsController.index);
router.get("/posts/:id", PostsController.show);
router.post("/posts", PostsController.create);

export default router;
