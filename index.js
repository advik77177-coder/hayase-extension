export default {
  async search(query) {
    return [
      {
        id: "1",
        title: query
      }
    ];
  },

  async streams(id) {
    return [
      {
        url: "magnet:?xt=urn:btih:EXAMPLE",
        type: "torrent"
      }
    ];
  }
};