/* eslint-disable no-restricted-globals */
export const Get = (url, params, headers, encodeURI, skipHandleResponse) => {
  headers = headers || {
    "Content-Type": "text/plain"
  };
  encodeURI = encodeURI === false ? false : true;

  let options = {
    method: "GET",
    headers: headers
  };

  if (params) {
    let esc = encodeURIComponent,
      queryString = Object.keys(params)
        .map(k => encodeURI ? (esc(k) + '=' + esc(params[k])) : (k + '=' + params[k]))
        .join('&');

    url = url + '?' + queryString;
  }

  if (skipHandleResponse)
    return fetch(url, options);
  else
    return fetch(url, options).then(handleResponse);
};

export const Post = (url, params, headers, skipStringify) => {
  headers = headers || {
    'Accept': 'application/json',
    "Content-Type": "application/json"
  };

  let options = {
    method: "POST",
    headers: headers,
    body: skipStringify ? params : JSON.stringify(params)
  };

  return fetch(url, options);
};

export const FilePost = (url, params) => {
  let options = {
    method: "POST",
    body: params
  };

  return fetch(url, options);
};

export const Put = (url, params) => {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  };

  return fetch(url, options);
};

export const Patch = (url, params) => {
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  };

  return fetch(url, options);
};

export const Delete = (url, params) => {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  };

  return fetch(url, options);
};

const handleResponse = (response) => {
  if (!response.ok) {
    let message = undefined;
    switch (response.status) {
      case 504:
        message = 'Services are down at the moment, Please contact admin and try again.';
        alert(message);
        location.reload();
        break;
      case 401:
        message = 'Your session has been timed out. Please login again.';
        alert(message);
        location.reload();
        break;
      case 403:
        message = 'You do not have access to view this resource, Please contact admin and try again.';
        alert(message);
        location.reload();
        break;
      default:
        break;
    }
  }
  return response;
};