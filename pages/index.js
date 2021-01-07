import { ArticleCard, Layout } from "../components";
import { client, query } from "../config";

export async function getStaticProps() {
  const post = await client.fetch(query.home);

  return {
    props: { data: post },
    revalidate: 1,
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
