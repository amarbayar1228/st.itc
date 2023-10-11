import Link from "next/link";

const Breadcrumb = ({ name, router, routerId, title }) => {
  return (
    <div className="w-full py-4 text-brand-50 px-6 bg-white">
      <div className="flex items-center gap-4">
        <Link
          href={`/`}
          className="font-medium hover:underline hover:underline-offset-4"
        >
          Үндсэн цэс
        </Link>
        {title ? (
          <>
            <div className="inline-block w-2 h-2 border-t-[1px] border-r-[1px] rotate-45 border-brand-50"></div>
            <Link
              href={`/${router}`}
              className="text-brand-50 hover:underline hover:underline-offset-4"
            >
              {title}
            </Link>
          </>
        ) : null}

        <div className="inline-block w-2 h-2 border-t-[1px] border-r-[1px] rotate-45 border-brand-50"></div>
        <Link
          href={routerId ? `/${router + "/" + routerId}` : `/${router}`}
          className="text-brand-150 hover:underline hover:underline-offset-4"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};
export default Breadcrumb;
