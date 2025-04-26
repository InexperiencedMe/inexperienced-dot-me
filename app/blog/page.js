import getPostsMetadata from "@/utils/getPostsMetadata";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Inexperienced Me | Blog",
  description: "Inexperienced Me | Blog",
};

const BlogPage = () => {
  const postMetadata = getPostsMetadata();
  const posts = postMetadata.map((post) => <PostCard key={post.filename} {...post} />);

  return (
      <div className="flex flex-col place-items-center justify-center gap-4 w-full md:max-w-2xl
                      bg-background rounded-md">
        {posts}
      </div>
  );
};

export default BlogPage;
