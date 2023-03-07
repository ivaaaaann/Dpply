import { usePostRefuseSuggestionMutation } from "../../quries/suggestion/suggestion.query";

const useRefuseSuggestion = () => {
  const postRefuseMutation = usePostRefuseSuggestionMutation();

  const refuse = (id: number) => {
    if (!window.confirm("이 건의를 거절하시겠습니까?")) {
      return;
    }

    postRefuseMutation.mutate(
      { id },
      {
        onSuccess: () => {
          window.alert("건의가 거절되었습니다.");
          window.location.reload();
        },
        onError: () => {
          window.alert("에러가 발생하였습니다.");
        },
      }
    );
  };

  return { refuse };
};

export default useRefuseSuggestion;
