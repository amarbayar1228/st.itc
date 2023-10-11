import Arrow from "@/components/assist/arrow";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import ProjectComp from "@/components/project";
import Title from "@/components/title";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>ГТСМТТ</title>
        <meta name="page" content="Тавтай морилно уу." key="desc" />
        <link rel="icon" href="/images/brand/itc.svg" />
      </Head>
      <Breadcrumb name={"Бидний тухай"} router={"about"} />
      <div className="max-w-[1400px] mx-auto mt-4 bg-white text-brand-50">
        <Title name={"Танилцуулга"} />
        <div className="text-justify px-14">
          Монгол Улсын Засгийн Газрын 2016 оны 02 дугаар сарын 22-ны өдрийн 120
          дугаар тогтоолоор "Гааль, татвар, санхүүгийн мэдээллийн технологийн
          төв" Улсын Үйлдвэрийн Газар нь Гааль, Татварын бүртгэл, мэдээллийн
          нэгдсэн системийг нэвтрүүлэх, түүний үйл ажиллагааны аюулгүй байдлыг
          хангах, техник, технологийн хэвийн үйл ажиллагааг хариуцах чиг
          үүрэгтэй байгуулагдан төсвийн орлого, зарлагын хяналтыг сайжруулах,
          үйл ажиллагааг цахимжуулах ажлын хүрээнд 6 яам, 6 агентлагийн 30 гаруй
          цахим системийг хариуцан хөгжүүлэлт, тасралтгүй, найдвартай ажиллагааг
          ханган ажиллаж байна. 2021 онд PMBOK төслийн удирдлагын тогтолцоо,
          мэдээллийн аюулгүй байдлын удирдлагын тогтолцоог /ISO27001:2013/олон
          улсын байгуулагаар аудит хийлгэн үйл ажиллагаандаа нэвтрүүлэн ажиллаж
          байна
        </div>
        <div className="flex border-t mt-8">
          <div className="w-1/2 flex items-center justify-center  py-10">
            <div className="w-16 h-16 bg-gray-300 rounded mr-10"></div>
            <div className="w-2/3">
              <div className="text-lg font-semibold">Алсын хараа</div>
              <div className="leading-5 mt-2">
                Ажлын байрны шаардлагыг хангасан ажил горилогчтой холбогдон
                ярилцлагад урих
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center py-10 border-l">
            <div className="w-16 h-16 bg-gray-300 rounded mr-10"></div>
            <div className="w-2/3">
              <div className="text-lg font-semibold">Эрхэм зорилго</div>
              <div className="leading-5 mt-2">
                Ажлын байрны шаардлагыг хангасан ажил горилогчтой холбогдон
                ярилцлагад урих
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-4 bg-white">
        <Title name={"Байгууллагын үндсэн чиг үүрэг"} />
        <div className="border-t h-[168.5px] bg-white">
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-brand-50">
            <div className="relative">
              <div
                href={"/project"}
                className="px-6 py-3 border z-30 bg-white cursor-pointer hover:shadow-shadowRB absolute group w-full transition-all h-14 duration-300 hover:h-48 hover:absolute hover:w-full hover:bg-white"
              >
                <div className="flex justify-between items-center text-lg font-semibold ">
                  <div>Бодлог, даалгавар</div>
                  <div className="transition duration-300 ease-in-out group-hover:rotate-90 flex items-center">
                    <Arrow />
                  </div>
                </div>

                <div className="hidden duration-300 animate-fadeIn h-10 group-hover:h-32 transition-all group-hover:block text-sm text-justify pr-10 pl-6 leading-5 font-light bg-white mt-4">
                  Гааль, татвар, санхүүгийн мэдээллийн нэгдсэн системийн
                  программ хангамжийг холбогдох байгууллагын бодлого, даалгаврын
                  дагуу хөгжүүлэх.
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                href={"/project"}
                className="px-6 py-3 border z-30 bg-white cursor-pointer hover:shadow-shadowRB absolute group w-full transition-all h-14 duration-300 hover:h-48 hover:absolute hover:w-full hover:bg-white"
              >
                <div className="flex justify-between items-center text-lg font-semibold ">
                  <div>Хяналт</div>
                  <div className="transition duration-300 ease-in-out group-hover:rotate-90 flex items-center">
                    <Arrow />
                  </div>
                </div>

                <div className="hidden duration-300 animate-fadeIn h-10 group-hover:h-32 transition-all group-hover:block text-sm text-justify pr-10 pl-6 leading-5 font-light bg-white mt-4">
                  Гааль, татвар, санхүүгийн мэдээллийн нэгдсэн системийн
                  программ хангамжийг холбогдох байгууллагын бодлого, даалгаврын
                  дагуу хөгжүүлэх
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                href={"/project"}
                className="px-6 py-3 border z-30 bg-white cursor-pointer hover:shadow-shadowRB absolute group w-full transition-all h-14 duration-300 hover:h-48 hover:absolute hover:w-full hover:bg-white"
              >
                <div className="flex justify-between items-center text-lg font-semibold ">
                  <div>Өгөгдлийн сан</div>
                  <div className="transition duration-300 ease-in-out group-hover:rotate-90 flex items-center">
                    <Arrow />
                  </div>
                </div>

                <div className="hidden duration-300 animate-fadeIn h-10 group-hover:h-32 transition-all group-hover:block text-sm text-justify pr-10 pl-6 leading-5 font-light bg-white mt-4">
                  Гааль, татвар, санхүүгийн мэдээллийн нэгдсэн системийн
                  программ хангамжийг холбогдох байгууллагын бодлого, даалгаврын
                  дагуу хөгжүүлэх
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                href={"/project"}
                className="px-6 py-3 top-14  border z-20 bg-white cursor-pointer hover:shadow-shadowRB absolute group w-full transition-all h-14 duration-300 hover:h-48 hover:absolute hover:w-full hover:bg-white"
              >
                <div className="flex justify-between items-center text-lg font-semibold ">
                  <div>Технологи</div>
                  <div className="transition duration-300 ease-in-out group-hover:rotate-90 flex items-center">
                    <Arrow />
                  </div>
                </div>

                <div className="hidden duration-300 animate-fadeIn h-10 group-hover:h-32 transition-all group-hover:block text-sm text-justify pr-10 pl-6 leading-5 font-light bg-white mt-4">
                  Гааль, татвар, санхүүгийн мэдээллийн нэгдсэн системийн
                  программ хангамжийг холбогдох байгууллагын бодлого, даалгаврын
                  дагуу хөгжүүлэх
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                href={"/project"}
                className="px-6 py-3 top-14  border z-20 bg-white cursor-pointer hover:shadow-shadowRB absolute group w-full transition-all h-14 duration-300 hover:h-48 hover:absolute hover:w-full hover:bg-white"
              >
                <div className="flex justify-between items-center text-lg font-semibold ">
                  <div>Ситемийн уялдаа</div>
                  <div className="transition duration-300 ease-in-out group-hover:rotate-90 flex items-center">
                    <Arrow />
                  </div>
                </div>

                <div className="hidden duration-300 animate-fadeIn h-10 group-hover:h-32 transition-all group-hover:block text-sm text-justify pr-10 pl-6 leading-5 font-light bg-white mt-4">
                  Гааль, татвар, санхүүгийн мэдээллийн нэгдсэн системийн
                  программ хангамжийг холбогдох байгууллагын бодлого, даалгаврын
                  дагуу хөгжүүлэх
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                href={"/project"}
                className="px-6 py-3 top-14  border z-20 bg-white cursor-pointer hover:shadow-shadowRB absolute group w-full transition-all h-14 duration-300 hover:h-48 hover:absolute hover:w-full hover:bg-white"
              >
                <div className="flex justify-between items-center text-lg font-semibold ">
                  <div>Зөвлөх</div>
                  <div className="transition duration-300 ease-in-out group-hover:rotate-90 flex items-center">
                    <Arrow />
                  </div>
                </div>

                <div className="hidden duration-300 animate-fadeIn h-10 group-hover:h-32 transition-all group-hover:block text-sm text-justify pr-10 pl-6 leading-5 font-light bg-white mt-4">
                  Гааль, татвар, санхүүгийн мэдээллийн нэгдсэн системийн
                  программ хангамжийг холбогдох байгууллагын бодлого, даалгаврын
                  дагуу хөгжүүлэх
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                href={"/project"}
                className="px-6 py-3 top-28  border z-10 bg-white cursor-pointer hover:shadow-shadowRB absolute group w-full transition-all h-14 duration-300 hover:h-48 hover:absolute hover:w-full hover:bg-white"
              >
                <div className="flex justify-between items-center text-lg font-semibold ">
                  <div>Аюулгүй байдал</div>
                  <div className="transition duration-300 ease-in-out group-hover:rotate-90 flex items-center">
                    <Arrow />
                  </div>
                </div>

                <div className="hidden duration-300 animate-fadeIn h-10 group-hover:h-32 transition-all group-hover:block text-sm text-justify pr-10 pl-6 leading-5 font-light bg-white mt-4">
                  Гааль, татвар, санхүүгийн мэдээллийн нэгдсэн системийн
                  программ хангамжийг холбогдох байгууллагын бодлого, даалгаврын
                  дагуу хөгжүүлэх
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <ProjectComp />
      </div>
      <Footer />
    </div>
  );
};
export default About;
