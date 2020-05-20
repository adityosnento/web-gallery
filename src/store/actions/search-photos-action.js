import axios from "axios";

const searchPhotos = (search = { method: 0, text: "", tags: "", page: 1 }) => {
  const extras = "owner_name,tags,views,description,url_q,url_l";
  const per_page = 12;
  const sort = "relevance";
  const text = search.text || "";
  const tags = search.tags || "";
  const page = 1;

  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR",
      payload: []
    });
    axios
      .get(
        `http://localhost:4000/flickr?sort=${sort}&page=${page}&per_page=${per_page}&extras=${extras}&text=${text}&tags=${tags}&format=json&nojsoncallback=1&safe_search=3&safe=3`
      )
      .then(res => {
        console.log(res)
        dispatch({
          type: "RESULT",
          payload: res.data.data
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

export default searchPhotos;
