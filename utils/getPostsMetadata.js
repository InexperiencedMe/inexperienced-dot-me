import { readdirSync, readFileSync } from "node:fs";
import matter from "gray-matter";
import path from "node:path";

function getPostsMetadata() {
  const postsPath = path.join(process.cwd(), "/posts/");
  const files = readdirSync(postsPath);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const posts = markdownFiles
    .map((file) => {
      const fileContents = readFileSync(`${postsPath}${file}`, "utf-8");
      const metadata = matter(fileContents);
      const slug = file.replace(".md", "");

      return {
        title: metadata.data.title,
        subtitle: metadata.data.subtitle,
        date: metadata.data.date,
        thumbnail: metadata.data.thumbnail,
        filename: file,
        slug: slug};})
    .sort((a, b) => {
      const first = Date.parse(a.date);
      const second = Date.parse(b.date);
      return second - first;});

  return posts;
}

export default getPostsMetadata;