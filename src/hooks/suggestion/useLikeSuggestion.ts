import { useEffect, useState } from "react";
import { useGetMyMemberQuery } from "../../quries/member/member.query";
import {
  useGetSuggestionQuery,
  usePostLikeSuggestionMutation,
  usePostUnLikeSuggestionMutation,
} from "../../quries/suggestion/suggestion.query";

interface Props {
  id: number;
}

const useLikeSuggestion = ({ id }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data: serverMyMemberData } = useGetMyMemberQuery();
  const { data: serverSuggestionData } = useGetSuggestionQuery({ id });

  const postLikeSuggestionMutation = usePostLikeSuggestionMutation();
  const postUnLikeSuggestionMutation = usePostUnLikeSuggestionMutation();

  // useEffect(() => {
  //   console.log(isLike);
  // }, [isLike]);

  useEffect(() => {
    if (serverMyMemberData && serverSuggestionData) {
      setIsLike(
        serverSuggestionData.data.sympathyUser.find(
          (user) => user.user.uniqueId === serverMyMemberData.data.uniqueId
        )?.status === "YES"
      );
    }
  }, [serverMyMemberData, serverSuggestionData]);

  useEffect(() => {
    if (serverSuggestionData) {
      setLikeCount(serverSuggestionData.data.sympathyCount);
    }
  }, [serverSuggestionData]);

  const onToggleIsLike = () => {
    if (
      postLikeSuggestionMutation.isLoading ||
      postUnLikeSuggestionMutation.isLoading
    ) {
      return;
    }

    if (isLike) {
      unLike();
    } else {
      like();
    }
  };

  const like = () => {
    postLikeSuggestionMutation.mutate(
      { id },
      {
        onSuccess: () => {
          setIsLike(true);
          setLikeCount((prev) => prev + 1);
        },
      }
    );
  };

  const unLike = () => {
    postUnLikeSuggestionMutation.mutate(
      { id },
      {
        onSuccess: () => {
          setIsLike(false);
          setLikeCount((prev) => prev - 1);
        },
      }
    );
  };

  return {
    isLike,
    likeCount,
    onToggleIsLike,
  };
};

export default useLikeSuggestion;
