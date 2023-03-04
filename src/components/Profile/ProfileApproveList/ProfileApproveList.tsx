import React from "react";
import { useLocation } from "react-router-dom";
import { useGetMySuggestionQuery } from "../../../quries/suggestion/suggestion.query";
import { queryStringParser } from "../../../utils/queryStringParser";
import dataTransform from "../../../utils/transform/dataTransform";
import ProfileListItem from "../ProfileListItem/ProfileListItem";
import ProfileSectionTitle from "../ProfileSectionTitle/ProfileSectionTitle";
import { ProfileApprovalListContainer, ProfileApprovalListWrap } from "./style";

const ProfileApproveList = () => {
  const { search } = useLocation();
  const tag = decodeURI(queryStringParser(search).tag);

  const { data: serverMySuggestionsData } = useGetMySuggestionQuery({
    type: "SOLVED",
    tag: tag === "전체조회" ? tag : dataTransform.tagTransformToEnglish(tag),
  });

  return (
    <ProfileApprovalListContainer>
      <ProfileSectionTitle
        title={"승인된 건의글"}
        listLength={serverMySuggestionsData?.data.length || 0}
      />
      <ProfileApprovalListWrap>
        {serverMySuggestionsData?.data.map((item) => (
          <ProfileListItem data={item} />
        ))}
      </ProfileApprovalListWrap>
    </ProfileApprovalListContainer>
  );
};

export default React.memo(ProfileApproveList);
