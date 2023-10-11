import Arrow from "@/components/assist/arrow";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Title from "@/components/title";
import { Collapse } from "antd";
import Head from "next/head";
import Link from "next/link";
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
const ProjectDetails = () => {
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
      <Breadcrumb
        title="Төсвийн орлого"
        name="Системийн нэр"
        router={"project"}
        routerId={"id"}
      />
      <div className="mt-4 max-w-[1400px] mx-auto p-6">
        <div className="flex gap-2">
          <div className="bg-white w-2/3 pb-20">
            <Title name={"Системийн нэр"} />
            <div className="px-14">asdasdasd</div>
            <div className="px-14">
              <Collapse
                style={{
                  background: "#fff",
                  borderRadius: "0px",
                  borderTop: "0px",
                  borderRight: "0px",
                  borderLeft: "0px",
                }}
                expandIconPosition="end"
                items={items}
                defaultActiveKey={["1"]}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="bg-white w-1/3">
            <div className="w-full bg-brand-50 p-6 text-white font-medium text-base ">
              Төсвийн орлого
            </div>
            <div>
              <div className="flex flex-col gap-2 p-6 text-brand-50 font-medium">
                <Link
                  href={"/"}
                  className="flex items-center gap-4 hover:translate-x-1 duration-300"
                >
                  <Arrow name={"black"} />
                  <div className="group-hover:underline group-hover:underline-offset-8 group-hover:text-brand-50">
                    Бидний тухай
                  </div>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-4 hover:translate-x-1 duration-300"
                >
                  <Arrow name={"black"} />
                  <div className="group-hover:underline group-hover:underline-offset-8 group-hover:text-brand-50">
                    Бидний тухай
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
