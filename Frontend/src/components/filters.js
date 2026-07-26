export function filterNades(nades, filters) {
    return nades.filter(nade => {
        return (
            (!filters.map || nade.map === filters.map) &&
            (!filters.type || nade.type === filters.type)
        );
    });
}