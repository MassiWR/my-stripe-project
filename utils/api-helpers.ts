export async function fetchGetJson(url: string) {
  try {
    const data = await fetch(url).then((res) => res.json);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
}

export async function fetchPostJson(url: string, data?: {}) {
  try {
    // default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE etc...
      mode: "cors", // no-cors, *cors. same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-refferer, *client
      body: JSON.stringify(data || {}),
    });
    return await response.json(); // parses JSON response into native JavaScript Objects
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
}
