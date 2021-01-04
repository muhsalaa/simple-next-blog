import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className="mt-5 md:mt-10 mb-7 md:mb-20 flex items-center">
      <div className="h-28 w-28 md:w-48 md:h-48 mr-4 md:mr-8">
        <Image
          width="500"
          height="500"
          src="/foto.jpg"
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="text-xl md:text-4xl font-bold font-serif">
          Javed Arsyakar
        </h1>
        <p className="text-sm md:text-xl text-gray-900">Senior Procastinator</p>
        <div className="flex items-center mt-1 text-gray-800">
          <Link href="/">
            <a
              className={clsx(
                "text-sm md:text-xl font-semibold font-sans",
                router.asPath === "/" && "underline"
              )}
            >
              Home
            </a>
          </Link>
          <span className="mx-2"> &#8729; </span>
          <Link href="/about">
            <a
              className={clsx(
                "text-sm md:text-xl font-semibold font-sans",
                router.asPath === "/about" && "underline"
              )}
            >
              About
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
