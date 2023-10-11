import Image from "next/image";
import Arrow from "../assist/arrow";
import Link from "next/link";

const Iso = () => {
  return (
    <div className="bg-white max-w-[1400px] mx-auto mt-4 text-brand-50">
      <Link
        href={"/iso"}
        className="flex group hover:border hover:border-brand-50 border "
      >
        <div className="flex items-center w-2/4 py-6">
          <div className="group-hover:translate-x-4 duration-300 flex items-center pl-6 pr-2">
            <Arrow />
          </div>
          <div className="flex flex-col ml-6 w-11/12 ">
            <div className=" text-lg font-semibold">ISO/IEC 27001:2013</div>
            <div className="leading-5 mt-1 text-base">
              ГТСМТТ УҮГ нь мэдээллийн технологын чиглэлээр олон улсын
              стандартыг хангассан төрийн анхны байгууллага боллоо.
            </div>
          </div>
        </div>
        <div className="flex justify-center w-2/4 bg-brand-50 py-6">
          <div className="px-6 flex items-center">
            <Image
              priority={true}
              className="h-15 w-60 "
              src={"/images/logo/logoWhiteText.png"}
              alt="ITC GOV"
              width={1000}
              height={1000}
            />
          </div>
          <div className="border-l-2 px-6 ">
            <Image
              priority={true}
              className="h-20 w-20"
              src={"/images/logo/logoWhite.png"}
              alt="ITC GOV"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Iso;
