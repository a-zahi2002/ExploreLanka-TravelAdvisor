import { createContext, useState, ReactNode } from "react";

interface TileData {
  image: string;
  description: string;
  page: string;
}

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  tileData: TileData[];
  setTileData: (data: TileData[]) => void;
}

const defaultTileData: TileData[] = []; // Initialize with an empty array to avoid potential issues
const SearchContext = createContext<SearchContextProps>({
  searchQuery: "",
  setSearchQuery: () => {},
  tileData: defaultTileData,
  setTileData: () => {},
});

interface SearchProviderProps {
  children: ReactNode;
  initialTileData: TileData[];
}

const SearchProvider: React.FC<SearchProviderProps> = ({
  children,
  initialTileData,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tileData, setTileData] = useState<TileData[]>(initialTileData);

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, tileData, setTileData }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
