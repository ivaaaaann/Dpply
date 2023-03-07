import { useQueryClient } from "react-query";
import { useDeleteSuggestionMutation } from "../../quries/suggestion/suggestion.query";

const useRemoveSuggestion = () => {
  const deleteSuggestionMutation = useDeleteSuggestionMutation();
  const queryClient = useQueryClient();

  const onRemove = (id: number) => {
    if (deleteSuggestionMutation.isLoading) {
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    deleteSuggestionMutation.mutate(
      { id },
      {
        onSuccess: () => {
          window.alert("건의가 삭제되었습니다.");
          queryClient.invalidateQueries("suggestion/getMySuggestions");
        },
        onError: () => {
          window.alert("건의를 삭제하는데 실패했습니다.");
        },
      }
    );
  };

  return { onRemove };
};

export default useRemoveSuggestion;
