import { useDispatch, useSelector } from "react-redux";
import { toggleList } from "../../redux/actions";
import { GoBookmarkSlashFill } from "react-icons/go";
import { MdBookmarkAdd } from "react-icons/md";

const SaveButton = ({ movie }) => {
  const { list } = useSelector((store) => store);

  const dispatch = useDispatch();

  //* Prop olarak gelen film Store'da var mı?
  const isAdded = list.find((item) => item.id === movie.id);

  //* Eğer listede varsa kaldır yoksa ekle
  const handleClick = () => {
    dispatch(toggleList(movie, !isAdded));
  };
  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 bg-blue-600 rounded transition hover:bg-blue-700 flex items-center gap-2 justfiy-center min-w-[170px]"
    >
      {isAdded ? (
        <>
          <GoBookmarkSlashFill className="text-xl" /> Listeden kaldır
        </>
      ) : (
        <>
          <MdBookmarkAdd className="text-xl" /> Listeye Ekle
        </>
      )}
    </button>
  );
};

export default SaveButton;
