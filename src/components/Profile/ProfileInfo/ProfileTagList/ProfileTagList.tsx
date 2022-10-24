import { useLocation, useNavigate } from "react-router-dom";
import { queryStringParser } from "../../../../utils/queryStringParser";
import {
  ProfileTagListContainer,
  ProfileTagLisTextNumber,
  ProfileTagListText,
  ProfileTagListTitle,
  ProfileTagListWrap,
} from "./style";

const TEST: any[] = [
  { title: "전체조회", count: 11 },
  { title: "기숙사", count: 4 },
  { title: "급식", count: 4 },
  { title: "교실", count: 3 },
];

const ProfileTagList = () => {
  const { search } = useLocation();
  const currentTag = decodeURI(queryStringParser(search).tag);
  const navigate = useNavigate();

  return (
    <ProfileTagListContainer>
      <ProfileTagListTitle>태그 목록</ProfileTagListTitle>
      <ProfileTagListWrap>
        {TEST.map((item) => (
          <ProfileTagListText
            isSelect={item.title === currentTag}
            onClick={() => navigate(`/profile?tag=${item.title}`)}
          >
            {item.title}
            <ProfileTagLisTextNumber>({item.count})</ProfileTagLisTextNumber>
          </ProfileTagListText>
        ))}
      </ProfileTagListWrap>
    </ProfileTagListContainer>
  );
};

export default ProfileTagList;
