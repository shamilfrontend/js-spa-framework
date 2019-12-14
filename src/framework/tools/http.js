class Http {
  get(url) {
    return sendRequest('GET', url);
  }

  post(url, data) {
    return sendRequest('POST', url, data)
  }
}

function sendRequest(method, url, data = {}) {
  const METHODS_FOR_CHANGING_DATA = ['POST', 'PUT', 'DELETE'];

  const params = {
    method,
  };

  if (METHODS_FOR_CHANGING_DATA.includes(method)) {
    params.body = data
  }

  return fetch(
    url,
    params
  )
    .then(response => response.json());
}

export const http = new Http();
