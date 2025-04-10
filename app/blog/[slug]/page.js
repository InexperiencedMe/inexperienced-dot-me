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
    <article className={`p-2 py-8 prose prose-md md:prose-lg lg:prose-xl dark:prose-invert prose-img:rounded-lg prose-p:text-justify prose-em:opacity-40 prose-img:w-full
                         prose-a:text-cyan-500 prose-a:no-underline prose-a:hover:underline`}>
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
    <div className="max-w-2xl mb-10 w-full relative">
      <PostContent post={post} />
    </div>
  );
}
