import Arrow from "@/components/assist/arrow";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Title from "@/components/title";
import { Collapse, Modal, Upload, notification } from "antd";
import Head from "next/head";
import { PhoneOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
const text = `ГТСМТТ УҮГ нь ажилтанг сонгон шалгаруулахдаа НЭЭЛТТЭЙ бодлого баримталдаг бөгөөд ямагт шинийг эрэлхийлэгч, багаар ажиллах чадвартай, зөв хандлагатай хэн бүхэнд ажил олгохдоо бид таатай байдаг.
`;
const items = [
  {
    key: "1",
    label: <div className="font-medium text-lg">Гүйцэтгэх үндсэн үүрэг</div>,
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className="font-medium text-lg">
        Ажлын байранд тавигдах шаардлага
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: <div className="font-medium text-lg">Нэмэлт мэдээлэл</div>,
    children: <p>{text}</p>,
  },
];
const JobIds = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captcha, setCaptcha] = useState(true);
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    education: "",
    fileName: "",
    email: "",
  });
  const onChange = (key) => {
    console.log(key);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const propsPdf = {
    showUploadList: {
      showDownloadIcon: true,
      downloadIcon: <EyeOutlined />,
      showRemoveIcon: true,
      removeIcon: (
        <DeleteOutlined
          onClick={(e) => console.log(e, "custom removeIcon event")}
        />
      ),
    },
  };
  const uploadFile = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    // if (file.type !== "image/png" && file.type !== "image/jpeg") {
    //   message.error(` Заавал зураг оруулна уу`);
    //   setFileList([]);
    // } else {
    const fmData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      // onUploadProgress: (event) => {
      //   const percent = Math.floor((event.loaded / event.total) * 100);
      //   setProgress(percent);
      //   if (percent === 100) {
      //     setTimeout(() => setProgress(0), 1000);
      //   }
      //   onProgress({ percent: (event.loaded / event.total) * 100 });
      // },
    };
    fmData.append("file", file);
    // const res = await axios.post(`/api/upload`, fmData, config);
    // file.url = `/api/v1/getFile?file=${res.data}`;
    // if (res.status == 200) {
    //   // message.success("Амжилтай файл хууллаа");
    //   api.success({
    //     message: `Амжилттай`,
    //     description: <div>Амжилтай файл хууллаа.</div>,
    //   });
    // }
    // onSuccess("Ok");
    // setData({ ...data, fileName: res.data });
    // setImageName(res.data);
    // }
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
        name="Өгөгдлийн сангийн админ"
        router={"job-ads"}
        routerId={"id"}
      />
      <div className="mt-4 max-w-[1400px] mx-auto p-6">
        <div className="flex gap-4  ">
          <div className="bg-white w-2/3 pb-20 relative">
            <Title name={"Өгөгдлийн сангийн админ"} />
            <div className="px-14 text-justify leading-5">
              ГТСМТТ УҮГ нь ажилтанг сонгон шалгаруулахдаа НЭЭЛТТЭЙ бодлого
              баримталдаг бөгөөд ямагт шинийг эрэлхийлэгч, багаар ажиллах
              чадвартай, зөв хандлагатай хэн бүхэнд ажил олгохдоо бид таатай
              байдаг.
            </div>
            <div className="px-14 mt-4 text-2xl font-semibold text-brand-50">
              2,100,000 - 2,500,000 ₮ | Тохиролцоно
            </div>
            <div className="px-14 mt-2">
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
                // defaultActiveKey={["1"]}
                onChange={onChange}
              />
            </div>
            <div className="w-[161px] absolute bottom-6 right-10">
              <div
                href={"/"}
                onClick={() => setIsModalOpen(true)}
                className="group border-2   cursor-pointer   border-white text-white mx-1 font-medium   flex justify-center items-center duration-300 hover:border-brand-50"
              >
                <span className="py-2 bg-brand-50 px-3 border border-white group-hover:border-white flex gap-4">
                  <div className="group-hover:translate-x-2 duration-300">
                    <Arrow name={"white"} />
                  </div>
                  Анкет илгээх
                </span>
              </div>
            </div>
            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              width={800}
              className="!p-0 "
            >
              <div className="flex -my-5 -mx-6 bg-white max-sm:flex-col text-brand-50">
                <div className="w-1/2 p-12 max-sm:w-full max-sm:p-8">
                  <div className="w-full">
                    <label htmlFor="location" className="font-medium mb-3">
                      Овог
                    </label>
                    <input
                      placeholder=""
                      id="location"
                      value={data.lastName}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                      }
                      className="appearance-none  block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full mt-2">
                    <label htmlFor="location" className="font-medium mb-3">
                      Нэр
                    </label>
                    <input
                      placeholder=""
                      id="location"
                      value={data.firstName}
                      onChange={(e) =>
                        setData({ ...data, firstName: e.target.value })
                      }
                      className="appearance-none  block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full mt-2">
                    <label htmlFor="location" className="font-medium mb-3">
                      Утас
                    </label>
                    <input
                      value={data.phoneNumber}
                      onChange={(e) =>
                        setData({ ...data, phoneNumber: e.target.value })
                      }
                      placeholder=""
                      id="location"
                      className="appearance-none  block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full mt-2">
                    <label htmlFor="location" className="font-medium mb-3">
                      Цахим шуудан
                    </label>
                    <input
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      placeholder=""
                      id="location"
                      className="appearance-none  block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full mt-2">
                    <label htmlFor="location" className="font-medium mb-3">
                      Боловсролын зэрэг
                    </label>
                    <input
                      value={data.education}
                      onChange={(e) =>
                        setData({ ...data, education: e.target.value })
                      }
                      placeholder=""
                      id="location"
                      className="appearance-none  block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  {/* <div className="w-full mt-2">
                      <ReCAPTCHA
                        onErrored={errorCapt}
                        ref={recaptchaRef}
                        sitekey="6Ld-prciAAAAAOY-Md7hnxjnk4hD5wbh8bK4ld5t"
                        onChange={onChangeCaptcha}
                      />
                    </div> */}
                  <div className="flex justify-end mt-8">
                    <div className="">
                      <div
                        href={"/"}
                        className="group border-2   cursor-pointer   border-white text-white mx-1 font-medium   flex justify-center items-center duration-300 hover:border-brand-50"
                      >
                        <span className="py-2 bg-brand-50 px-3 border border-white group-hover:border-white flex gap-4">
                          <div className="group-hover:translate-x-2 duration-300">
                            <Arrow name={"white"} />
                          </div>
                          Илгээх
                        </span>
                      </div>
                    </div>
                    {/* <SendButton
                        name="Илгээх"
                        disable={captcha}
                        loading={loading}
                        data={send}
                      /> */}
                  </div>
                </div>
                <div className="w-1/2 bg-[#F0F2FF] flex flex-col items-center justify-center max-sm:w-full max-sm:h-80">
                  <Image
                    fill={false}
                    priority={true}
                    src={"/images/anket/cloud.png"}
                    width={709}
                    height={710}
                    alt="aaa"
                    className="w-24 h-24"
                  />
                  <Upload
                    {...propsPdf}
                    customRequest={uploadFile}
                    className="flex flex-col items-center justify-center"
                  >
                    <button className="border cursor-pointer border-blue-700 px-10 py-1 mt-9 bg-white focus:outline-none focus:ring focus:ring-blue-300">
                      CV Хавсаргах
                    </button>
                  </Upload>
                </div>
              </div>
            </Modal>
          </div>
          <div className="w-1/3">
            <div className="bg-white">
              <div className="w-full bg-brand-50 p-6 text-white font-medium text-base flex items-center justify-between">
                <div className="font-medium text-lg">Бусад</div>
                <div className="text-sm text-gray-200">2023.10.04 08:30</div>
              </div>
              <div>
                <div className="flex flex-col gap-2 p-6 text-brand-50 font-medium">
                  <div className="flex flex-col font-semibold">
                    <div>Байршил</div>
                    <div className="font-medium">
                      Улаанбаатар хот, Чингэлтэй дүүрэг
                    </div>
                  </div>
                  <div className="flex flex-col font-semibold">
                    <div>Түвшин</div>
                    <div className="font-medium">Мэргэжилтэн</div>
                  </div>
                  <div className="flex flex-col font-semibold">
                    <div>Төрөл</div>
                    <div className="font-medium">Бүтэн цагийн</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-50 mt-4 grid grid-cols-2 text-white p-2">
              <div className="w-full bg-brand-50 p-6 text-white font-medium text-base flex items-center justify-center border-r">
                <div className="font-medium text-5xl">
                  <PhoneOutlined rotate={95} />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 p-6  font-medium">
                  <div className="flex flex-col text-base font-medium">
                    <div>Холбоо барих:</div>
                    <div className="text-sm font-medium text-gray-200">
                      7012-1033
                    </div>
                  </div>
                  <div className="flex flex-col text-base font-medium">
                    <div>имэйл хаяг:</div>
                    <div className="text-sm font-medium text-gray-200">
                      hr@itc.gov.mn
                    </div>
                  </div>
                  <div className="flex flex-col text-base font-medium">
                    <div>Цагийн хуваарь</div>
                    <div className="text-sm font-medium text-gray-200">
                      08:30-17:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobIds;
