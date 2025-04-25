import getPostsMetadata from "@/utils/getPostsMetadata";
import { getPostContent } from "@/utils/getPostContent";
import VideoEmbed from '@/components/VideoEmbed';
import Markdown from "markdown-to-jsx";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export async function generateMetadata(props) {
  const params = await props.params;
  const post = getPostContent(params.slug);
  return {
    title: post.data.title,
    subtitle: post.data.subtitle,
    openGraph: {
      images: [post.data.thumbnail],
    },
    twitter: {
      images: [post.data.thumbnail],
      card: "summary_large_image",
      title: post.data.title,
      subtitle: post.data.subtitle,
    },
    authors: [
      {
        name: "Inexperienced Me",
        url: "https://inexperienced.me/",
      },
    ],
  };
}

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function PostContent({ post }) {
  return (
    <article className={`p-2 py-8 prose prose-md md:prose-lg lg:prose-xl dark:prose-invert prose-img:rounded-lg
                         prose-p:text-justify prose-em:opacity-40 prose-img:w-full prose-a:text-cyan-500
                         prose-a:no-underline prose-a:hover:underline`}>
      <h1 className="!mb-0 text-center">{post.data.title}</h1>
      <h3 className="!mb-8 !mt-2 text-center">{post.data.subtitle}</h3>
      <Markdown options={{overrides: {VideoEmbed: VideoEmbed}}}>
        {post.content}
      </Markdown>
    </article>
  );
}

export default async function PostPage(props) {
  const params = await props.params;
  const post = getPostContent(params.slug);

  return (
    <div className="max-w-3xl mb-10 w-full relative bg-background rounded-md z-10 transition-all duration-500 ease-in-out">
      <PostContent post={post} />
      <NewsletterSignup />
    </div>
  );
}
