import { useMutation } from "react-query";
import { postAuthLoginParam } from "../../repository/auth/auth.param";
import authRepository from "../../repository/auth/auth.repository";

export const usePostAuthLogin = () => {
  const mutation = useMutation(({ code }: postAuthLoginParam) =>
    authRepository.postAuthLogin({ code })
  );

  return mutation;
};
