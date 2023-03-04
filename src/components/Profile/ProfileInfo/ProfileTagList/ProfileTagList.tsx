import { useLocation, useNavigate } from "react-router-dom";
import { WRITE_TAG_ITEMS } from "../../../../constants/write/write.constant";
import { queryStringParser } from "../../../../utils/queryStringParser";
import {
  ProfileTagListContainer,
  ProfileTagListText,
  ProfileTagListTitle,
  ProfileTagListWrap,
} from "./style";

const ProfileTagList = () => {
  const { search } = useLocation();

  const currentTag = decodeURI(
    queryStringParser(search === "" ? "?tag=전체조회" : search).tag
  );
  const navigate = useNavigate();

  return (
    <ProfileTagListContainer>
      <ProfileTagListTitle>태그 목록</ProfileTagListTitle>
      <ProfileTagListWrap>
        <ProfileTagListText
          isSelect={currentTag === "전체조회"}
          onClick={() => navigate(`/profile?tag=전체조회`)}
        >
          전체조회
        </ProfileTagListText>
        {WRITE_TAG_ITEMS.map((item) => (
          <ProfileTagListText
            isSelect={item.title === currentTag}
            onClick={() => navigate(`/profile?tag=${item.title}`)}
          >
            {item.title}
          </ProfileTagListText>
        ))}
      </ProfileTagListWrap>
    </ProfileTagListContainer>
  );
};

export default ProfileTagList;
