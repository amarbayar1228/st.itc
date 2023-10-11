import Arrow from "@/components/assist/arrow";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import ProjectComp from "@/components/project";
import Title from "@/components/title";
import Link from "next/link";

const JobAds = () => {
  return (
    <div>
      <Breadcrumb name="Нээлттэй ажлын байр" router={"/job-ads"} />
      <div className="bg-white max-w-[1400px] mx-auto mt-4">
        <Title name="Нээлттэй ажлын байр" />
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-brand-50">
          <Link
            href={"/job-ads/id"}
            className="p-6 border cursor-pointer hover:border-brand-50 group"
          >
            <div className="flex justify-between items-center text-lg font-semibold mb-2">
              <div>Өгөгдлийн сангийн админ</div>
              <div className="group-hover:translate-x-4 duration-300 flex items-center pr-6">
                <Arrow />
              </div>
            </div>
            <div className="text-sm text-justify px-6 leading-5 font-light">
              ГТСМТТ УҮГ нь ажилтанг сонгон шалгаруулахдаа НЭЭЛТТЭЙ бодлого
              баримталдаг бөгөөд ямагт шинийг эрэлхийлэгч, багаар ажиллах
              чадвартай, зөв хандлагатай хэн бүхэнд ажил олгохдоо бид таатай
              байдаг.
            </div>
          </Link>
          <Link
            href={"/job-ads"}
            className="p-6 border cursor-pointer hover:border-brand-50 group"
          >
            <div className="flex justify-between items-center text-lg font-semibold mb-2">
              <div>Өгөгдлийн сангийн админ</div>
              <div className="group-hover:translate-x-4 duration-300 flex items-center pr-6">
                <Arrow />
              </div>
            </div>
            <div className="text-sm text-justify px-6 leading-5 font-light">
              ГТСМТТ УҮГ нь ажилтанг сонгон шалгаруулахдаа НЭЭЛТТЭЙ бодлого
              баримталдаг бөгөөд ямагт шинийг эрэлхийлэгч, багаар ажиллах
              чадвартай, зөв хандлагатай хэн бүхэнд ажил олгохдоо бид таатай
              байдаг.
            </div>
          </Link>
          <Link
            href={"/job-ads"}
            className="p-6 border cursor-pointer hover:border-brand-50 group"
          >
            <div className="flex justify-between items-center text-lg font-semibold mb-2">
              <div>Өгөгдлийн сангийн админ</div>
              <div className="group-hover:translate-x-4 duration-300 flex items-center pr-6">
                <Arrow />
              </div>
            </div>
            <div className="text-sm text-justify px-6 leading-5 font-light">
              ГТСМТТ УҮГ нь ажилтанг сонгон шалгаруулахдаа НЭЭЛТТЭЙ бодлого
              баримталдаг бөгөөд ямагт шинийг эрэлхийлэгч, багаар ажиллах
              чадвартай, зөв хандлагатай хэн бүхэнд ажил олгохдоо бид таатай
              байдаг.
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default JobAds;
