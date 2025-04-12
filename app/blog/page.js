import getPostsMetadata from "@/utils/getPostsMetadata";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Inexperienced Me blog",
  description: "Inexperienced Me blog",
};

const BlogPage = () => {
  const postMetadata = getPostsMetadata();
  const posts = postMetadata.map((post) => <PostCard key={post.filename} {...post} />);

  return (
      <div className="flex flex-col place-items-center justify-center gap-4 mb-20 max-w-full w-full md:max-w-2xl">
        {posts}
      </div>
  );
};

export default BlogPage;
