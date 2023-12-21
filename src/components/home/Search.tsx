import { useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const mainDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openSearch &&
        mainDivRef.current &&
        !mainDivRef.current.contains(event.target as Node)
      ) {
        setOpenSearch(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSearch]);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div>
      <button onClick={toggleSearch}>
        <IoSearch className="" />
      </button>
      {openSearch && (
        <div className="fixed inset-0 flex justify-center items-center !bg-[#120A44] bg-opacity-100 z-9999">
          <div className="p-4 rounded-md w-full flex justify-center items-center">
            <button
              onClick={toggleSearch}
              className="absolute top-3 right-3 cursor-pointer"
            >
              <FaTimes className="font-bold p-2 rounded-full border-2 border-white text-white text-4xl" />
            </button>
            <div ref={mainDivRef} className="w-1/2 p-3 rounded-lg mt-10">
              <form>
                <div className="flex relative flex-col lg:flex-row gap-2">
                  <div className="absolute bottom-0 right-0 pr-2 inset-y-0 left-0 flex  items-center pl-2 pointer-events-none">
                    <BiSearchAlt2 className="text-2xl" />
                  </div>
                  <input
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    type="search"
                    className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border-3 border-blue-500 rounded bg-gray-500"
                    placeholder="I am looking for..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white capitalize px-5 py-2 border-primary rounded bg-custom-gradient"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
