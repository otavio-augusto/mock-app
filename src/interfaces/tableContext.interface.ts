export interface ITableContext {
    forceUpdate: React.Dispatch<React.SetStateAction<boolean>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}
