import axios from "axios";

const getProfile = (id = 0) => {
  const api_key = "f5ff73b3b7aca7f78ffb4ae8c2a39ccb";
  const method = "flickr.profile.getProfile";
  const user_id = id;
  const extras = "owner_name,tags,views,description,url_q,url_l";
  return dispatch => {
    dispatch({
      type: "CLEAR",
      payload: []
    });
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=${method}&api_key=${api_key}&user_id=${user_id}&extras=${extras}&format=json&nojsoncallback=1&safe_search=3&safe=3`
      )
      .then(res => {
        dispatch({
          type: "PROFILE",
          payload: res.data
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

export default getProfile;
