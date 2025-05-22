import { Posts } from "@models/posts.model";
import type { Context } from "hono";

import { renderToReadableStream } from "react-dom/server";

import IndexView from "@views/posts/index.tsx";

export default {
  async index() {
    const posts = await Posts.getAll();
    return new Response(
      await renderToReadableStream(<IndexView posts={posts} />),
      {
        headers: { "Content-Type": "text/html" },
      }
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
    return c.json(post);
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
