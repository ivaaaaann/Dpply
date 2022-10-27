import Read from "../components/Read/Read";
import { Suggestion } from "../types/suggestion/suggestion.type";

const TEST: Suggestion = {
  id: 1,
  imageUrl: "",
  title: "이거 고쳐주세요",
  user: {
    email: "ldh165163@gmail.com",
    grade: 1,
    name: "임동현",
    number: 2,
    profileImage: "",
    role: "STUDENT",
    room: 1,
    uniqueId: "1",
  },
  createAt: "20221012",
  tag: ["SCHOOL"],
  text: "이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;;",
  sympathyCount: 10,
  updateAt: "20221013",
  status: "REFUSE",
};

const ReadPage = () => {
  return <Read data={TEST} />;
};

export default ReadPage;
