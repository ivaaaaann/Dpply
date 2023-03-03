import { ChangeEvent, FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostSuggestionCommentMutation } from "../../quries/suggestion/suggestion.query";

interface Props {
  id: number;
}

const usePostComment = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const postSuggestionCommentMutation = usePostSuggestionCommentMutation();

  const [comment, setComment] = useState("");

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setComment(value);
  };

  const onSubmitComment = (e: FormEvent) => {
    e.preventDefault();

    postSuggestionCommentMutation.mutate(
      { comment, id },
      {
        onSuccess: () => {
          window.alert("댓글이 게시되었습니다.");
          queryClient.invalidateQueries("suggestion/getSuggestionComments");
          setComment("");
        },
        onError: () => {
          window.alert("댓글 등록 실패");
        },
      }
    );
  };

  return { comment, onChangeComment, onSubmitComment };
};

export default usePostComment;
