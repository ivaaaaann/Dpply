import { usePostSolveSuggestionMutation } from "../../quries/suggestion/suggestion.query";

const useSolveSuggestion = () => {
  const postSolveMutation = usePostSolveSuggestionMutation();

  const solve = (id: number) => {
    if (!window.confirm("이 건의를 승인하시겠습니까?")) {
      return;
    }

    postSolveMutation.mutate(
      { id },
      {
        onSuccess: () => {
          window.alert("건의가 승인되었습니다.");
          window.location.reload();
        },
        onError: () => {
          window.alert("에러가 발생하였습니다.");
        },
      }
    );
  };

  return { solve };
};

export default useSolveSuggestion;
