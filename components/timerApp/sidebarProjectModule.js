import Link from "next/link";

function SidebarProjectModule({ href, project, meta, customer, id }) {
  return (
    <div className="cursor-pointer">
      <Link href={`/project/${id}`}>
        <div className="project bg-white border-gray-100 border-2 rounded-2xl px-6 py-5 mx-4 shadow-md flex flex-row items-center my-4">
          {/* CUSTOMER IMG */}
          <div className="customer w-3/12">
            <img
              className="inline-block h-14 w-16 rounded-full ring-2 ring-white"
              src={href}
              alt=""
            />
          </div>
          {/* PROJECT TXT */}
          <div className="w-6/12 text-lg text-gray-800 leading-5">
            <h3>{project}</h3>
            <p className="text-gray-400 text-base">{customer}</p>
          </div>
          {/* META */}
          <div className="w-3/12 text-base italic text-blue-500 leading-5">{meta}</div>
        </div>
      </Link>
    </div>
  );
}

export default SidebarProjectModule;
