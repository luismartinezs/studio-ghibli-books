async function asyncCall(url) {
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      throw error;
    });
}

export { asyncCall };
