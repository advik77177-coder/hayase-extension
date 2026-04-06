export async function search(query) {
  return [
    {
      title: query,
      magnet: "magnet:?xt=urn:btih:EXAMPLE"
    }
  ];
}

export async function play(item) {
  return {
    url: item.magnet
  };
}