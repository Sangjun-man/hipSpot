export const getFilterList = async () => {
       const url = "/api/filter"
       const option = {
        method: "GET",
       };
    return await fetch(url, option).then(response => {
        return response.json();
    });
}
