import { posts } from "../dummy";
import { ArticleCard, Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
