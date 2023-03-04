import { SuggestionTag } from "../../types/suggestion/suggestion.type";

class DataTransform {
  public tagTransformToKorean(tag: SuggestionTag): string {
    switch (tag) {
      case "SCHOOL":
        return "학교";

      case "DORMITORY":
        return "기숙사";

      case "CAFETERIA":
        return "급식실";

      default:
        return "학교";
    }
  }

  public tagTransformToEnglish(tag: string): SuggestionTag {
    switch (tag) {
      case "학교":
        return "SCHOOL";

      case "기숙사":
        return "DORMITORY";

      case "급식실":
        return "CAFETERIA";

      default:
        return "SCHOOL";
    }
  }
}

export default new DataTransform();
