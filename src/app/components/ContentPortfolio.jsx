import Image from "next/image";
import Button from "./Button";

function ContentPortfolio({ data, activetab }) {
  return (
    activetab === data.title && (
      <article className="p-8 lg:grid grid-cols-[1fr_2fr] gap-8 animate-slideup translate-y-[100%]">
        <div className="lg:content-end">
          <div className="lg:mt-4">
            <h3 className="text-3xl font-bold mb-1">{data.heading}</h3>
            <p className="font-thin">{data.description}</p>
          </div>
          <div className="flex gap-4 flex-wrap my-4 lg:my-0 lg:mt-4">
            <Button linkPath={data.gitlink}>Github</Button>
            <Button linkPath={data.sitelink}>Se site</Button>
          </div>
        </div>
        <Image src={data.imagepath} width="1920" height="1080" alt="Image of the site" />
      </article>
    )
  );
}

export default ContentPortfolio;
