import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useGetSuggestionsByPage } from "../../quries/suggestion/suggestion.query";
import { getSuggestionsByPageResponse } from "../../repository/suggestion/SuggestionRepository";
import { adminPageAtom } from "../../store/admin/admin.store";
import { tagClassificationKeyword } from "../../store/tag/tag.store";
import {
  SuggestionAll,
  SuggestionPreview,
} from "../../types/suggestion/suggestion.type";

const useFilterSuggestion = () => {
  const tagKeyword = useRecoilValue(tagClassificationKeyword);
  const [suggestion, setSuggestion] = useState<SuggestionPreview[]>();
  const [page, setPage] = useRecoilState(adminPageAtom);

  const { data: serverSuggestionsData } = useGetSuggestionsByPage({
    page: page,
  });

  useEffect(() => {
    if (serverSuggestionsData?.data.posting) {
      handleSuggestion(tagKeyword);
    }
  }, [serverSuggestionsData?.data.posting, tagKeyword]);

  const loadAllSuggestion = () => {
    if (serverSuggestionsData) {
      setSuggestion(serverSuggestionsData.data.posting);
    }
  };

  const loadSchoolSuggestion = () => {
    setSuggestion(
      serverSuggestionsData?.data.posting.filter(
        (post) => post.tag === "SCHOOL"
      )!
    );
  };

  const loadCafeteriaSuggestion = () => {
    setSuggestion(
      serverSuggestionsData?.data.posting.filter(
        (post) => post.tag === "CAFETERIA"
      )!
    );
  };

  const loadDormitorySuggestion = () => {
    setSuggestion(
      serverSuggestionsData?.data.posting.filter(
        (post) => post.tag === "DORMITORY"
      )!
    );
  };

  const handleSuggestion = (tag: string) => {
    setSuggestion([]);

    switch (tag) {
      case "전체":
        loadAllSuggestion();
        break;

      case "급식실":
        loadCafeteriaSuggestion();
        break;

      case "학교":
        loadSchoolSuggestion();
        break;

      case "기숙사":
        loadDormitorySuggestion();
        break;

      default:
        loadAllSuggestion();
        break;
    }
  };

  return { suggestion };
};

export default useFilterSuggestion;
