const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  token: "",
  useCdn: false,
});

export const query = {
  home: `*[_type=="post"]|order(created_at desc)
    {
      _id,
      title,
      teaser,
      created_at,
      "slug": slug.current,
      mtr,
      "author": author->name,
      "thumbnail": thumbnail.asset->url,
      "tags": tags[]->title
    }`,
  articleSlug: `*[_type=="post"]
    {
      "slug": slug.current,
    }`,
  articleDetail: `*[_type=="post" && slug.current == $slug]
    {
      title,
      content[]{
        ...,
        asset-> {
          ...,
        }
      },
      created_at,
      "thumbnail": thumbnail.asset->url,
      mtr,
      "author": author->name,
      "tags": tags[]->title
    }`,
};
