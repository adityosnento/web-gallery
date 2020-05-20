import axios from "axios";

const updateResultPage = (
  search = { method: 0, text: "", tags: "", page: 1 }
) => {
  const api_key = "f5ff73b3b7aca7f78ffb4ae8c2a39ccb";
  const methods = ["flickr.photos.getRecent", "flickr.photos.search"];
  const method = methods[search.method] || methods[0];
  const extras = "owner_name,tags,views,description,url_q,url_l";
  const per_page = 12;
  const sort = "relevance";
  const text = search.text || "";
  const tags = search.tags || "";
  search.page = search.page + 1 || 1;

  return (dispatch, getState) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=${method}&api_key=${api_key}&sort=${sort}&page=${
          search.page
        }&per_page=${per_page}&extras=${extras}&text=${text}&tags=${tags}&format=json&nojsoncallback=1&safe_search=3&safe=3`
      )
      .then(res => {
        dispatch({
          type: "UPDATE",
          payload: res.data.photos
        });
      })
      .catch(err =>
        dispatch({
          type: "CONNECTION_ERROR",
          payload: err
        })
      );
  };
};

export default updateResultPage;
