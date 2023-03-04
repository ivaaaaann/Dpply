import React from "react";
import { useLocation } from "react-router-dom";
import { useGetMySuggestionQuery } from "../../../quries/suggestion/suggestion.query";
import { queryStringParser } from "../../../utils/queryStringParser";
import dataTransform from "../../../utils/transform/dataTransform";
import ProfileListItem from "../ProfileListItem/ProfileListItem";
import ProfileSectionTitle from "../ProfileSectionTitle/ProfileSectionTitle";
import { ProfilePendingListContainer, ProfilePendingListWrap } from "./style";

const ProfilePendingList = () => {
  const { search } = useLocation();
  const tag = decodeURI(queryStringParser(search).tag);

  const { data: serverMySuggestionsData } = useGetMySuggestionQuery({
    type: "WAITING",
    tag: tag === "전체조회" ? tag : dataTransform.tagTransformToEnglish(tag),
  });

  return (
    <ProfilePendingListContainer>
      <ProfileSectionTitle
        title={"신청한 건의글"}
        listLength={serverMySuggestionsData?.data.length || 0}
      />
      <ProfilePendingListWrap>
        {serverMySuggestionsData?.data.map((item) => (
          <ProfileListItem data={item} />
        ))}
      </ProfilePendingListWrap>
    </ProfilePendingListContainer>
  );
};

export default React.memo(ProfilePendingList);
