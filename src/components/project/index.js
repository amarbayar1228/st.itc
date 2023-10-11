import Link from "next/link";
import Arrow from "../assist/arrow";
import Title from "../title";

const ProjectComp = () => {
  return (
    <div className="bg-white max-w-[1400px] mx-auto mt-4">
      <Title name="Хэрэгжүүлж буй төслүүд" />
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-brand-50">
        <Link
          href={"/project/id"}
          className="p-6 border cursor-pointer hover:border-brand-50 group"
        >
          <div className="flex justify-between items-center text-lg font-semibold mb-2">
            <div>Төсвийн орлог</div>
            <div className="group-hover:translate-x-4 duration-300 flex items-center pr-6">
              <Arrow />
            </div>
          </div>
          <div className="text-sm text-justify px-6 leading-5 font-light">
            Сангийн сайдын 2019 оны 177 тоот тушаалаар Цахим тайлангийн систем -
            ийн 4.0 хувилбарыг хөгжүүлж 2020 оны 01 дүгээр сарын 01-ний өдрөөс
            эхлэн нэвтрүүлсэн.
          </div>
        </Link>
        <Link
          href={"/project"}
          className="p-6 border cursor-pointer hover:border-brand-50 group"
        >
          <div className="flex justify-between items-center text-lg font-semibold mb-2">
            <div>Төсвийн орлог</div>
            <div className="group-hover:translate-x-4 duration-300 flex items-center pr-6">
              <Arrow />
            </div>
          </div>
          <div className="text-sm text-justify px-6 leading-5 font-light">
            Сангийн сайдын 2019 оны 177 тоот тушаалаар Цахим тайлангийн систем -
            ийн 4.0 хувилбарыг хөгжүүлж 2020 оны 01 дүгээр сарын 01-ний өдрөөс
            эхлэн нэвтрүүлсэн.
          </div>
        </Link>
        <Link
          href={"/project"}
          className="p-6 border cursor-pointer hover:border-brand-50 group"
        >
          <div className="flex justify-between items-center text-lg font-semibold mb-2">
            <div>Төсвийн орлог</div>
            <div className="group-hover:translate-x-4 duration-300 flex items-center pr-6">
              <Arrow />
            </div>
          </div>
          <div className="text-sm text-justify px-6 leading-5 font-light">
            Сангийн сайдын 2019 оны 177 тоот тушаалаар Цахим тайлангийн систем -
            ийн 4.0 хувилбарыг хөгжүүлж 2020 оны 01 дүгээр сарын 01-ний өдрөөс
            эхлэн нэвтрүүлсэн.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectComp;
