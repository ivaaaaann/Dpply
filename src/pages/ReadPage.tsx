import Read from "../components/Read/Read";
import { Suggestion } from "../types/suggestion/suggestion.type";

const TEST: Suggestion = {
  id: 1,
  image: "",
  title: "이거 고쳐주세요",
  name: "최희건",
  created_at: "20221012",
  tags: ["zz", "zzz", "zzzz"],
  content:
    "이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;; 이거 진짜 심각한 문제인데 이걸 안고치네;;",
  like_count: 10,
  comments: ["Asdada", "Asdad", "SAda"],
  watch_count: 10,
};

const ReadPage = () => {
  return <Read data={TEST} />;
};

export default ReadPage;
