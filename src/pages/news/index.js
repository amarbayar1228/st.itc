import Arrow from "@/components/assist/arrow";
import ArrowL from "@/components/assist/arrowL";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Title from "@/components/title";
import { Collapse } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ClockCircleOutlined } from "@ant-design/icons";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: <div className="font-medium text-lg">This is panel header 1</div>,
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: <div className="font-medium text-lg">This is panel header 2</div>,
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: <div className="font-medium text-lg">This is panel header 3</div>,
    children: <p>{text}</p>,
  },
];
const News = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Head>
        <title>ГТСМТТ</title>
        <meta name="page" content="Тавтай морилно уу." key="desc" />
        <link rel="icon" href="/images/brand/itc.svg" />
      </Head>
      <Breadcrumb name="Мэдээ мэдээлэл" router={"news"} />
      <div className="mt-4 max-w-[1400px] mx-auto p-6">
        <div className="flex gap-4">
          <div className="w-2/3">
            <div>
              <Image
                priority={true}
                className="h-full object-none"
                src={"/images/background/background3.png"}
                alt="ITC GOV"
                width={2000}
                height={2000}
              />
            </div>
            <div className="bg-white pb-28">
              <div className="flex items-center justify-between">
                <Title name={"Авлигын эсрэг нэгдье"} />
                <div className="bg-brand-50 px-3 py-2 text-gray-100 flex items-center text-sm">
                  <div className="flex items-center pr-2">
                    <ClockCircleOutlined />
                  </div>
                  <div className="flex items-center">2023.10.04 08:30</div>
                </div>
              </div>
              <div className="px-14 text-justify">
                2023 оны 05 дугаар сарын 29-ний өдөр улсын хэмжээнд нээлтээ
                хийж, 1 сарын хугацаанд үргэлжилнэ. Энэхүү аяны хүрээнд авлига,
                ашиг сонирхлын зөрчлөөс урьдчилан сэргийлэх, хүнд суртал
                чирэгдэлгүй, үйл ажиллагааны ил тод нээлттэй байдлыг хангаж
                ажиллахыг уриалж байна. "Шүгэл" ажиллагааны хүрээнд зохион
                байгуулж байгаа НЭГДЬЕ аянд Та ч бас нэгдээрэй.
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-white">
              <div className="w-full bg-brand-50 p-6 text-white font-medium text-base ">
                Бусад мэдээ
              </div>
              <div>
                <div className="flex flex-col gap-2 p-6 text-brand-50 font-medium">
                  <Link
                    href={"/news/id"}
                    className="flex items-center gap-4 hover:translate-x-2 duration-300 group"
                  >
                    <Arrow name={"black"} />
                    <div className="group-hover:underline group-hover:underline-offset-8 group-hover:text-brand-50 leading-5">
                      Авлигын эсрэг нэгдье
                    </div>
                  </Link>
                  <Link
                    href={"/news/id"}
                    className="flex items-center gap-4 hover:translate-x-2 duration-300 group"
                  >
                    <Arrow name={"black"} />
                    <div className="group-hover:underline group-hover:underline-offset-8 group-hover:text-brand-50 leading-5">
                      Эцсийн хэрэглээнд гарсан баримтыг буцаах
                    </div>
                  </Link>
                  <Link
                    href={"/news/id"}
                    className="flex items-center gap-4 hover:translate-x-2 duration-300 group"
                  >
                    <Arrow name={"black"} />
                    <div className="group-hover:underline group-hover:underline-offset-8 group-hover:text-brand-50 leading-5">
                      Ebarimt системд хэрхэн нэвтрэх нэр нууц үгээ сэргээх вэ
                    </div>
                  </Link>
                  <Link
                    href={"/news/id"}
                    className="flex items-center gap-4 hover:translate-x-2 duration-300 group"
                  >
                    <Arrow name={"black"} />
                    <div className="group-hover:underline group-hover:underline-offset-8 group-hover:text-brand-50 leading-5">
                      Авто зам ашигласны төлбөрөө хурдан шуурхай төлөөрэй.
                    </div>
                  </Link>
                  <Link
                    href={"/news/id"}
                    className="flex items-center gap-4 hover:translate-x-2 duration-300 group"
                  >
                    <Arrow name={"black"} />
                    <div className="group-hover:underline group-hover:underline-offset-8 group-hover:text-brand-50 leading-5">
                      Авто зам ашигласны төлбөрөө хурдан шуурхай төлөөрэй.
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white group">
              <Link href={"/news/id"}>
                <div className="flex justify-between">
                  <Title name={"Онцлох мэдээ"} size="small" />
                  <div className="group-hover:translate-x-4 duration-300 flex items-center pr-12">
                    <Arrow />
                  </div>
                </div>
                <div className="text-justify px-14 pb-16 text-sm leading-5">
                  2023 оны 05 дугаар сарын 29-ний өдөр улсын хэмжээнд нээлтээ
                  хийж, 1 сарын хугацаанд үргэлжилнэ. Энэхүү аяны хүрээнд
                  авлига, ашиг сонирхлын зөрчлөөс урьдчилан сэргийлэх, хүнд
                  суртал чирэгдэлгүй.
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default News;
