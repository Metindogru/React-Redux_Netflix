import { IoBookmarks } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { list } = useSelector((store) => store);
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.svg" alt="netflix-icon" className="max-w-[150px]" />
      </Link>
      <Link
        to="/watch-list"
        className="flex gap-5 items-center hover:text-gray-300 transition"
      >
        <div className="relative">
          <IoBookmarks className="text-xl" />
          <span className="absolute right-[-15px] top-[-13px] bg-red-500 size-6 rounded-full grid place-items-center text-sm font-semibold">
            {list.length}
          </span>
        </div>
        İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
