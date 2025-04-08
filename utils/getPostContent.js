import { readFileSync } from "node:fs";
import matter from "gray-matter";
import path from "node:path";

export const getPostContent = (slug) => {
  const postsPath = path.join(process.cwd(), "/posts/");
  const file = `${postsPath}${slug}.md`;
  const content = readFileSync(file, "utf-8");
  const post = matter(content);

  return {
    ...post
  };
};