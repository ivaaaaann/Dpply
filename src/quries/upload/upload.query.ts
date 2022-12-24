import { useMutation } from "react-query";
import { postUploadParam } from "../../repository/upload/upload.param";
import uploadRepository from "../../repository/upload/upload.repository";

export const usePostUpload = () => {
  const mutation = useMutation(({ formData }: postUploadParam) =>
    uploadRepository.postUpload({ formData })
  );

  return mutation;
};
