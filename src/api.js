export function getNewsList(url) {
  return fetch(url)
    .then(response => {
      console.log('url, response', url, response);
      if (response.status === 200) {
        return response.json();
      } else {
        return {};
      }
    })
    .catch(error => {
      return {};
    });
}
