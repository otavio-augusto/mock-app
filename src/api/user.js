const host = "localhost"
const port = 3001

export async function getUser(query) {
  const request = await fetch(`http://${host}:${port}/${query}`);
  const response = await request.json();
  return response;
}

export function setUser(json) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: json,
    redirect: 'follow'
  };

  return fetch(`http://${host}:${port}/users`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export async function removeUser(id) {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

  return fetch(`http://${host}:${port}/users/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export async function patchUser(json, id) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'PATCH',
    headers: headers,
    body: json,
    redirect: 'follow'
  };
  try {
    const response = await fetch(`http://${host}:${port}/users/${id}`, requestOptions);
    const result_1 = await response.text();
    return console.log(result_1);
  } catch (error) {
    return console.log('error', error);
  }
}
