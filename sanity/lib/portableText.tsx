import { PortableText } from "next-sanity";
import Link from "next/link";
import ReactPlayer from "react-player";
import Image from "next/image";

export const portableTextComponents = {
  types: {
    image: (props: any) => {
      return (
        <div className="relative aspect-video w-full bg-gray-200 rounded-md overflow-hidden">
          <Image
            src={props.value.asset.url}
            alt="United Texperience"
            fill
            className="object-contain"
          />
        </div>
      );
    },
    slug: (props: any) => (
      <div className="youtube-embed">
        <ReactPlayer url={props.value.current} />
      </div>
    ),
    quote: (props: any) => {
      return (
        <figure>
          <blockquote className="bg-gray-200 p-6 rounded-md text-xl leading-relaxed italic">
            <PortableText value={props.value.text} />{" "}
          </blockquote>
        </figure>
      );
    },
  },
  marks: {
    externalLink: ({ value, children }: any) => {
      const href = `${value.url}`;
      return (
        <Link href={href} target="_blank">
          {children}
        </Link>
      );
    },
  },
};
