import type { Post } from "../../../generated/prisma";

export default function PostsView({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
      <form method="POST" action="/posts" className="form">
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="content" placeholder="Content" required></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
