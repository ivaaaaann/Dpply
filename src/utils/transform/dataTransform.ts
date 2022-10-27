import { SuggestionTag } from "../../types/suggestion/suggestion.type";

class DataTransform {
  public tagTransform(tag: SuggestionTag): string {
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
}

export default new DataTransform();
