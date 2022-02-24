import { BiChevronDown } from "react-icons/bi";
import * as S from "./style";
const PlaceInfoCard = () => {
  const dummyImage =
    "https://images.unsplash.com/photo-1563019880-9b2ea5d89a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60";

  return (
    <S.placeInfo>
      <S.cardImage src={dummyImage} />
      <S.title>제목</S.title>
      <S.description> 아녕하십니까아녕하십니까</S.description>

      <BiChevronDown />
    </S.placeInfo>
  );
};

export default PlaceInfoCard;
