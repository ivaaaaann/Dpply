import { usePagenationSuggestion } from "../../../hooks/suggestion/usePagenationSuggestion";
import { AdminMainListPagenationContainer } from "./style";

const AdminMainListPagenation = () => {
  //   console.log(
  //     Array(10)
  //       .fill(0)
  //       .map((_, i) => {
  //         const id = page * 10 + (i + 1);
  //         return {
  //           name: "Project " + id,
  //           id,
  //         };
  //       })
  //   );

  const { increasePage } = usePagenationSuggestion();

  return (
    <AdminMainListPagenationContainer>
      <button onClick={increasePage}></button>
    </AdminMainListPagenationContainer>
  );
};

export default AdminMainListPagenation;
