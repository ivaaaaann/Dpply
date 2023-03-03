import { useState } from "react";
import {
  usePostLikeSuggestionMutation,
  usePostUnLikeSuggestionMutation,
} from "../../quries/suggestion/suggestion.query";

interface Props {
  id: number;
  prevIsLike: boolean;
  prevLikeCount: number;
}

const useLikeSuggestion = ({ id, prevIsLike, prevLikeCount }: Props) => {
  const [isLike, setIsLike] = useState(prevIsLike);
  const [likeCount, setLikeCount] = useState(prevLikeCount);

  const postLikeSuggestionMutation = usePostLikeSuggestionMutation();
  const postUnLikeSuggestionMutation = usePostUnLikeSuggestionMutation();

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
