import type { Post } from "../../../generated/prisma";

export default function PostView({ post }: { post: Post }) {
  return (
    <div>
      <h1>Post</h1>
      <ul>
        <li>
          <strong>ID:</strong> {post.id}
        </li>
        <li>
          <strong>Title:</strong> {post.title}
        </li>
        <li>
          <strong>Content:</strong> {post.content}
        </li>
      </ul>
    </div>
  );
}
