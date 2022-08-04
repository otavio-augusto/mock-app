export interface IPageContext {
    forceUpdate: () => void;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>
}
