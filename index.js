export async function search(query) {
  return [
    {
      title: query,
      id: "1",
      magnet: "magnet:?xt=urn:btih:EXAMPLE"
    }
  ];
}

export async function play(item) {
  return [
    {
      url: item.magnet,
      type: "torrent"
    }
  ];
}