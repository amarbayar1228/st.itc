import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <section>
      <div className="bg-brand-50 w-full text-white text-base font-normal px-6 border-b-[6px] border-brand-100">
        <div className="py-4 flex justify-between items-center">
          <Link href={"/"} className="text-3xl uppercase cursor-pointer">
            <Image
              priority={true}
              className="h-12 w-52 "
              src={"/images/logo/logoWhiteText.png"}
              alt="ITC GOV"
              width={1000}
              height={1000}
            />
          </Link>
          <div className="flex items-center">
            <Link
              href={"/about"}
              className="p-4 border border-brand-50 bg-brand-50 hover:border-white mx-1"
            >
              Бидний тухай
            </Link>
            <Link
              href={"/human-resource"}
              className="p-4 border border-brand-50 bg-brand-50 hover:border-white mx-1"
            >
              Хүний нөөц
            </Link>
            <Link
              href={"/"}
              className="group border-4 bg-white border-brand-50 text-brand-50 mx-1 font-medium   flex justify-center items-center duration-300 hover:border-white"
            >
              <span className="py-2 px-3 border border-white group-hover:border-black">
                Нэвтрэх
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
