import { useState } from "react";
import { useSession } from "next-auth/react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";

export default function ArticleFavorite({ articleId }: { articleId: string }) {
  const { data: session } = useSession();
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    if (session) {
      setFavorite(!favorite);
    }
  };
  return (
    <button className="article__favorite" onClick={handleFavorite}>
      {favorite ? <ImStarFull /> : <ImStarEmpty />}
      <span className="article__like--badge">Favorite</span>
    </button>
  );
}
