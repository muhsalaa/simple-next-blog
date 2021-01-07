import Image from "next/image";
import { FiCalendar, FiClock, FiLoader } from "react-icons/fi";
import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";

import { client, query } from "../../config";
import { Layout } from "../../components";
import { shortDateFormat } from "../../helpers/date";

export async function getStaticPaths() {
  const post = await client.fetch(query.articleSlug);

  const paths = post.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const article = await client.fetch(query.articleDetail, {
    slug: params.slug,
  });

  return {
    props: {
      article: article[0],
    },
    revalidate: 1,
  };
}

export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <div className="w-full h-96 flex items-center justify-center">
          <FiLoader className="text-5xl text-black animate-spin" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="font-bold text-xl md:text-2xl">{article.title}</h1>
      <div className="flex items-center tracking-tighter mb-2 text-sm md:text-lg text-gray-700">
        <p className="underline mr-3">{article.author}</p>
        <div className="flex items-center mr-3">
          <FiClock className="mr-1.5" /> {article.mtr} min
        </div>
        <div className="flex items-center">
          <FiCalendar className="mr-1.5" />{" "}
          {shortDateFormat(article.created_at)}
        </div>
      </div>
      <div className="prose md:prose-lg prose-blue max-w-none font-body">
        <div className="my-2 md:my-4">
          <Image
            src={article.thumbnail}
            width="640"
            height="320"
            alt="blog-photos"
            layout="responsive"
          />
        </div>
        <BlockContent blocks={article.content} />
      </div>
    </Layout>
  );
}
