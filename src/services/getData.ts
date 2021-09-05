export const getDataPromise = fetch(
  process.env.PUBLIC_URL + '/data/faq.json'
).then((response) => response.json());
