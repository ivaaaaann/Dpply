import { customAxios } from "../../lib/axios/axios";
import {
  mySuggestionsResponse,
  suggestionsByPageResponse,
  suggestionsResponse,
} from "../../types/suggestion/suggestion.type";
import {
  getSuggestionsByPageParam,
  getSuggestionsParam,
} from "./suggestioin.param";

class SuggestionRepository {
  public async getSuggestions({
    type = "WAITING",
  }: getSuggestionsParam): Promise<suggestionsResponse> {
    const { data } = await customAxios.get(`/posting?type=${type}`);

    return data;
  }

  public async postSuggestion() {}

  public async patchSuggestion() {}

  public async deleteSuggestion() {}

  public async getMySuggestions({
    type = "WAITING",
  }: getSuggestionsParam): Promise<mySuggestionsResponse> {
    const { data } = await customAxios.get(`/posting/my?type=${type}`);
    return data;
  }

  public async getSuggestionsByPage({
    page,
  }: getSuggestionsByPageParam): Promise<suggestionsByPageResponse> {
    const { data } = await customAxios.get(`/suggesion?page=${page}`);
    return data;
  }

  public async getResolveSuggestions() {}

  public async getRefuseSuggestions() {}
}

export default new SuggestionRepository();
