import Image from "next/image";
import Link from "next/link";
import { Card } from "./Card";

const PostCard = (props) => {
  return (
    <Link href={`/blog/${props.slug}`} className="sm:w-[640px] min-w-[250px] w-fit relative">
      <Card>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4 w-fit">
          <div className="grow min-w-[230px] w-[80vw] sm:w-[300px] aspect-video relative">
            <Image
              src={props.thumbnail}
              alt={props.title}
              fill={true}
              className="rounded-md"
              priority={true}
            />
          </div>

          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-bold ">{props.title}</h1>
            <p className="text-xl text-foreground-secondary">{props.subtitle}</p>
            <p className="text-sm text-foreground-secondary">{props.date}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PostCard;
