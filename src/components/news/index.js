import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <div className="bg-white max-w-[1400px] mx-auto mt-4 text-brand-50 text-lg font-semibold p-6">
      <div className="grid grid-cols-4 gap-6">
        <Link href={"/news"} className="flex flex-col group ">
          <div className="relative block overflow-hidden group bg-cover bg-no-repeat ">
            <Image
              priority={true}
              className="transition duration-300 ease-in-out group-hover:scale-110 cursor-pointer bg-no-repeat max-md:w-full max-md:h-full"
              src={"/images/news/news2.jpg"}
              alt="ITC GOV"
              width={500}
              height={500}
            />
          </div>
          <div className="text-left mt-4 group-hover:underline group-hover:underline-offset-4">
            Авлигын эсрэг нэгдье
          </div>
        </Link>
        <Link href={"/news"} className="flex flex-col group ">
          <div className="relative block overflow-hidden group bg-cover bg-no-repeat ">
            <Image
              priority={true}
              className="transition duration-300 ease-in-out group-hover:scale-110 cursor-pointer bg-no-repeat max-md:w-full max-md:h-full"
              src={"/images/news/news2.jpg"}
              alt="ITC GOV"
              width={500}
              height={500}
            />
          </div>
          <div className="text-left mt-4 group-hover:underline group-hover:underline-offset-4">
            Авлигын эсрэг нэгдье
          </div>
        </Link>
        <Link href={"/news"} className="flex flex-col group ">
          <div className="relative block overflow-hidden group bg-cover bg-no-repeat ">
            <Image
              priority={true}
              className="transition duration-300 ease-in-out group-hover:scale-110 cursor-pointer bg-no-repeat max-md:w-full max-md:h-full"
              src={"/images/news/news2.jpg"}
              alt="ITC GOV"
              width={500}
              height={500}
            />
          </div>
          <div className="text-left mt-4 group-hover:underline group-hover:underline-offset-4">
            Авлигын эсрэг нэгдье
          </div>
        </Link>
        <Link href={"/news"} className="flex flex-col group ">
          <div className="relative block overflow-hidden group bg-cover bg-no-repeat ">
            <Image
              priority={true}
              className="transition duration-300 ease-in-out group-hover:scale-110 cursor-pointer bg-no-repeat max-md:w-full max-md:h-full"
              src={"/images/news/news2.jpg"}
              alt="ITC GOV"
              width={500}
              height={500}
            />
          </div>
          <div className="text-left mt-4 group-hover:underline group-hover:underline-offset-4">
            Авлигын эсрэг нэгдье
          </div>
        </Link>
      </div>
    </div>
  );
};
export default News;
