import { customAxios } from "../../lib/axios/axios";
import { suggestionsResponse } from "../../types/suggestion/suggestion.type";
import { getSuggestionsByPageParam } from "./suggestioin.param";

class SuggestionRepository {
  public async getSuggestion() {}

  public async postSuggestion() {}

  public async patchSuggestion() {}

  public async deleteSuggestion() {}

  public async getSuggestionsByPage({
    page,
  }: getSuggestionsByPageParam): Promise<suggestionsResponse> {
    const { data } = await customAxios.get(`/suggesion?page=${page}`);
    return data;
  }

  public async getResolveSuggestions() {}

  public async getRefuseSuggestions() {}
}

export default new SuggestionRepository();
