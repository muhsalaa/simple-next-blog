import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

import { shortDateFormat } from "../../helpers/date";
import Tags from "./Tags";

export function ArticleCard({ post }) {
  const {
    thumbnail,
    tags,
    title,
    author,
    teaser,
    mtr,
    created_at,
    slug,
  } = post;

  return (
    <div className="w-full bg-gray-50 h-full rounded-lg overflow-hidden shadow-lg flex flex-col justify-between p-4">
      <div>
        <img
          src={thumbnail}
          alt="blog image"
          className="object-cover w-full h-56 mb-4 rounded-lg"
        />
        <div className="flex flex-col">
          <Tags tags={tags} />
          <h1 className="font-semibold capitalize text-gray-800 leading-5 mb-0.5">
            {title}
          </h1>
          <div className="text-gray-500 text-sm underline mb-2">{author}</div>
          <p className="break-three text-sm text-gray-700">{teaser}</p>
        </div>
      </div>
      <div className="flex items-center mt-4 tracking-tighter">
        <div className="flex items-center text-xs text-gray-500 mr-3">
          <FiClock className="mr-1.5" /> {mtr} min
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <FiCalendar className="mr-1.5" /> {shortDateFormat(created_at)}
        </div>
        <Link href={`/articles/${slug}`}>
          <button className="flex items-center text-xs text-gray-50 bg-gray-700 py-1 px-2 rounded-full ml-auto focus:outline-none">
            Read article
            <FiArrowRight className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
