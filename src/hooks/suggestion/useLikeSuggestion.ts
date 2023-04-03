import { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useGetMyMemberQuery } from "../../quries/member/member.query";
import {
  useGetSuggestionQuery,
  usePostLikeSuggestionMutation,
  usePostUnLikeSuggestionMutation,
} from "../../quries/suggestion/suggestion.query";
import useDebounce from "../common/useDebounce";

interface Props {
  id: number;
}

const useLikeSuggestion = ({ id }: Props) => {
  const { data: serverSuggestionData } = useGetSuggestionQuery({
    id: Number(id),
  });

  const { data: serverMyMemberData } = useGetMyMemberQuery();

  const [isLike, setIsLike] = useState(false);
  const [prevIsLike, setPrevIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const debounceLike = () => {
    if (prevIsLike === isLike) {
      return;
    }

    if (isLike) {
      postLikeSuggestionMutation.mutate({ id });
    } else {
      postUnLikeSuggestionMutation.mutate({ id });
    }
    setPrevIsLike(isLike);
  };

  const debouncelikeClick = useDebounce({ callback: debounceLike, wait: 3000 });

  useEffect(() => {
    if (serverSuggestionData && serverMyMemberData) {
      const isLike =
        serverSuggestionData.data.sympathyUser.find(
          (user) => user.user.uniqueId === serverMyMemberData.data.uniqueId
        )?.status === "YES";

      setIsLike(isLike);
      setPrevIsLike(isLike);
    }
  }, [serverSuggestionData, serverMyMemberData]);

  useEffect(() => {
    if (serverSuggestionData) {
      setLikeCount(serverSuggestionData.data.sympathyCount);
    }
  }, [serverSuggestionData]);

  const postLikeSuggestionMutation = usePostLikeSuggestionMutation();
  const postUnLikeSuggestionMutation = usePostUnLikeSuggestionMutation();

  useEffect(() => {
    debouncelikeClick();
  }, [isLike]);

  const onToggleIsLike = () => {
    if (
      postLikeSuggestionMutation.isLoading ||
      postUnLikeSuggestionMutation.isLoading
    ) {
      return;
    }

    if (isLike) {
      setIsLike(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLike(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return {
    onToggleIsLike,
    isLike,
    likeCount,
  };
};

export default useLikeSuggestion;
