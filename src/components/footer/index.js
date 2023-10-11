import Image from "next/image";
import Arrow from "../assist/arrow";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-brand-50 border-t-[6px] mt-24  border-brand-100 text-white p-6">
      <div className="max-w-[1400px] mx-auto mt-4">
        <div className="flex flex-col">
          <div className="flex gap-4  items-center text-sm">
            <div className="border-r pr-4">
              <Image
                priority={true}
                className="transition duration-300 ease-in-out group-hover:scale-110 h-16 w-16 cursor-pointer bg-no-repeat max-md:w-full max-md:h-full"
                src={"/images/logo/logoWhite.png"}
                alt="ITC GOV"
                width={500}
                height={500}
              />
            </div>
            <div className="w-2/5 leading-4">
              {
                "Санхүүгийн салбарын мэдээллийн технологийг хөгжүүлэх, \n цахим засаглалыг бэхжүүлэх манлайлагч байгууллага болно."
              }
            </div>
          </div>
          <div className="flex justify-between mt-8 text-sm">
            <div className="flex gap-48 ">
              <div className="flex flex-col gap-2">
                <Link
                  href={"/about"}
                  className="flex items-center gap-6 group "
                >
                  <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                    <div className="group-hover:translate-x-3 duration-300">
                      <Arrow name={"white"} />
                    </div>
                    <div>Бидний тухай</div>
                  </div>
                </Link>
                <Link href={"/law"} className="flex items-center gap-6 group ">
                  <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                    <div className="group-hover:translate-x-3 duration-300">
                      <Arrow name={"white"} />
                    </div>
                    <div>Хууль, Эрх зүй</div>
                  </div>
                </Link>
                <Link
                  href={"/transparency"}
                  className="flex items-center gap-6 group "
                >
                  <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                    <div className="group-hover:translate-x-3 duration-300">
                      <Arrow name={"white"} />
                    </div>
                    <div>Ил тод байдал</div>
                  </div>
                </Link>
                <Link href={"/"} className="flex items-center gap-6 group ">
                  <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                    <div className="group-hover:translate-x-3 duration-300">
                      <Arrow name={"white"} />
                    </div>
                    <div>Шилэн данс</div>
                  </div>
                </Link>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <Link
                    className="flex items-center gap-6 group "
                    href="https://developer.itc.gov.mn"
                    passHref={true}
                    target="_blank"
                  >
                    <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                      <div className="group-hover:translate-x-3 duration-300">
                        <Arrow name={"white"} />
                      </div>
                      <div>https://developer.itc.gov.mn</div>
                    </div>
                  </Link>
                  <Link href={"/"} className="flex items-center gap-6 group ">
                    <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                      <div className="group-hover:translate-x-3 duration-300">
                        <Arrow name={"white"} />
                      </div>
                      <div>Холбоо барих </div>
                    </div>
                  </Link>
                  <Link href={"/"} className="flex items-center gap-6 group ">
                    <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                      <div className="group-hover:translate-x-3 duration-300">
                        <Arrow name={"white"} />
                      </div>
                      <div>Санал хүсэлт </div>
                    </div>
                  </Link>
                  <Link href={"/"} className="flex items-center gap-6 group ">
                    <div className="flex items-center gap-6 group-hover:bg-brand-150 py-1 pr-3">
                      <div className="group-hover:translate-x-3 duration-300">
                        <Arrow name={"white"} />
                      </div>
                      <div>Авлига мэдээлэх утас: +976 110</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-64 h-64">
              <iframe
                title="Itc"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4496.4988317111465!2d106.91224346458343!3d47.924114969801806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96934d73f1f4c5%3A0x9ee8d42e8754ef8a!2z0JPQotCh0JzQotCiINCj0q7Qkw!5e0!3m2!1sen!2sbd!4v1688541066149!5m2!1sen!2sbd"
                width="256"
                height="256"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border max-sm:w-full max-sm:h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-6 mt-8">
        <div className="max-w-[1400px] mx-auto flex justify-between">
          <div className="flex gap-10">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Youtube</div>
          </div>
          <div className="flex flex-col font-medium">
            <div>
              Гааль, Татвар, Санхүүгийн мэдээллийн технологийн төв Улсын
              үйлдвэрийн газар
            </div>
            <div className="text-right">ISO/IEC 27001:2013</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
