import getPostsMetadata from "@/utils/getPostsMetadata";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "blog",
  description: "Inexperienced Me blog",
};

const HomePage = () => {
  const postMetadata = getPostsMetadata();
  const posts = postMetadata.map((post) => <PostCard key={post.filename} {...post} />);

  return (
      <div className="flex flex-col place-items-center justify-center gap-4 mb-20">
        {posts}
      </div>
  );
};

export default HomePage;
