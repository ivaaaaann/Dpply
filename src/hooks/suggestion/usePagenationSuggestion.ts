import { useState } from "react";
import { useGetSuggestionsByPage } from "../../quries/suggestion/suggestion.query";

export const usePagenationSuggestion = () => {
  const [page, setPage] = useState(0);

  const { data, isPreviousData } = useGetSuggestionsByPage({
    page: page,
    limit: 11,
  });

  const increasePage = () => {
    if (page <= 0) {
      return;
    }

    console.log("ss");
  };

  const decreasePage = () => {
    if (isPreviousData && data?.isLast) {
      return;
    }
  };

  return { increasePage, decreasePage };
};
