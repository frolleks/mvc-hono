import { Posts } from "@models/posts.model";
import type { Context } from "hono";

import PostsView from "@views/posts/index.tsx";
import PostView from "@views/posts/show";

import { renderComponentWithLayout } from "../../lib/renderComponentWithLayout";

export default {
  async index(c: Context) {
    const posts = await Posts.getAll();
    return c.body(
      await renderComponentWithLayout(<PostsView posts={posts} />),
      200,
      { "Content-Type": "text/html" }
    );
  },
  async show(c: Context) {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) {
      return c.json({ error: "Invalid ID" }, 400);
    }
    const post = await Posts.getById(id);
    if (!post) {
      return c.json({ error: "Post not found" }, 404);
    }
    return c.body(
      await renderComponentWithLayout(<PostView post={post} />),
      200,
      {
        "Content-Type": "text/html",
      }
    );
  },
  async create(c: Context) {
    const data = await c.req.json();
    if (!data.title || !data.content) {
      return c.json({ error: "Title and content are required" }, 400);
    }
    const post = await Posts.create(data);
    return c.json(post, 201);
  },
};
