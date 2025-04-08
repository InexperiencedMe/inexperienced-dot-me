import getPostsMetadata from "@/utils/getPostsMetadata";
import { getPostContent } from "@/utils/getPostContent";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function PostContent({ post }) {
  return (
    <article
      className={
        "z-[10] max-w-2xl rounded-xl p-2 py-8 prose prose-lg dark:prose-invert prose-foreground prose-img:rounded-xl prose-p:text-justify"
      }
    >
      <h1 className="mb-2 text-center">{post.data.title}</h1>
      <h3 className="mb-6 mt-0 text-center">{post.data.subtitle}</h3>
      <Markdown>
        {post.content}
      </Markdown>
    </article>
  );
}

export default async function PostPage(props) {
  const params = await props.params;
  const post = getPostContent(params.slug);

  return (
    <div className="max-w-2xl w-full relative mb-10">
      <PostContent post={post} />
    </div>
  );
}
