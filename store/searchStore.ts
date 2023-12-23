import { proxy } from "valtio";

interface ISearchProps {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
}

export const searchStore = proxy<ISearchProps>({
  searchQuery: "",
  setSearchQuery(text) {
    this.searchQuery = text;
  },
});
