import Link from "next/link";
import { LinkOutlined } from "@ant-design/icons";
import Footer from "@/components/footer";
import Head from "next/head";
import Title from "@/components/title";
const Transparency = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Ил тод байдал</title>
        <meta name={"Ил тод байдал"} content={"Ил тод байдал"} key="desc" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/images/brand/itc.svg" />
      </Head>
      <div className="max-w-[1400px] mx-auto mt-4 bg-white">
        <Title name={"Ил тод байдал"} />
        <div className="grid  grid-cols-1 px-14 pb-40">
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium text-brand-50 hover:bg-gray-100 px-1 py-1 border"
          >
            <LinkOutlined />
            <div className="underline underline-offset-2">
              Монгол улсын үндэс хууль
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium text-brand-50 hover:bg-gray-100 px-1 py-1 border-b border-r border-l"
          >
            <LinkOutlined />
            <div className="underline underline-offset-2">
              Монгол улсын үндэс хууль
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium text-brand-50 hover:bg-gray-100 px-1 py-1 border-b border-r border-l"
          >
            <LinkOutlined />
            <div className="underline underline-offset-2">
              Монгол улсын үндэс хууль
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium text-brand-50 hover:bg-gray-100 px-1 py-1 border-b border-r border-l"
          >
            <LinkOutlined />
            <div className="underline underline-offset-2">
              Монгол улсын үндэс хууль
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium text-brand-50 hover:bg-gray-100 px-1 py-1 border-b border-r border-l"
          >
            <LinkOutlined />
            <div className="underline underline-offset-2">
              Монгол улсын үндэс хууль
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-medium text-brand-50 hover:bg-gray-100 px-1 py-1 border-b border-r border-l"
          >
            <LinkOutlined />
            <div className="underline underline-offset-2 ">
              Монгол улсын үндэс хууль
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Transparency;
