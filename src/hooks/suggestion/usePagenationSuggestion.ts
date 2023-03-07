import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { useGetSuggestionsByPage } from "../../quries/suggestion/suggestion.query";
import SuggestionRepositoryImpl from "../../repository/suggestion/SuggestionRepositoryImpl";
import {
  adminPageAtom,
  adminPageHasMoreAtom,
} from "../../store/admin/admin.store";

export const usePagenationSuggestion = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useRecoilState(adminPageAtom);
  const [hasMore, setHasMore] = useRecoilState(adminPageHasMoreAtom);
  const [totalPage, setTotalPage] = useState(1);

  const { data: serverSuggestionsData, isPreviousData } =
    useGetSuggestionsByPage({
      page: page,
    });

  const increasePage = () => {
    setPage((prev) => (hasMore ? prev + 1 : prev));
  };

  const decreasePage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    setHasMore(
      page < (serverSuggestionsData ? serverSuggestionsData?.data.pageCount : 0)
    );
  }, [page, serverSuggestionsData, setHasMore]);

  useEffect(() => {
    if (serverSuggestionsData) {
      setTotalPage(serverSuggestionsData?.data.pageCount);
    }
  }, [serverSuggestionsData]);

  useEffect(() => {
    if (!isPreviousData && hasMore) {
      queryClient.prefetchQuery({
        queryKey: ["suggestion/getSuggestionByPage", page + 1],
        queryFn: () =>
          SuggestionRepositoryImpl.getSuggestionsByPage({ page: page + 1 }),
      });
    }
  }, [isPreviousData, hasMore, page, queryClient]);

  return { increasePage, decreasePage, totalPage };
};
