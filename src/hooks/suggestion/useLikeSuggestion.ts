import { useQueryClient } from "react-query";
import {
  usePostLikeSuggestionMutation,
  usePostUnLikeSuggestionMutation,
} from "../../quries/suggestion/suggestion.query";

interface Props {
  id: number;
}

const useLikeSuggestion = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const postLikeSuggestionMutation = usePostLikeSuggestionMutation();
  const postUnLikeSuggestionMutation = usePostUnLikeSuggestionMutation();

  const onToggleIsLike = (isLike: boolean) => {
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
          queryClient.invalidateQueries(["suggestion/getSuggestion", id]);
        },
      }
    );
  };

  const unLike = () => {
    postUnLikeSuggestionMutation.mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["suggestion/getSuggestion", id]);
        },
      }
    );
  };

  return {
    onToggleIsLike,
  };
};

export default useLikeSuggestion;
