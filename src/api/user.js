const host = "localhost"
const port = 3000

export async function getUser(query) {
  const request = await fetch(`http://localhost:${port}/api/${query}`, {
    credentials: 'include'
  });
  return await request.json()
}

export async function getAllUsers() {
  const request = await fetch(`http://localhost:${port}/api/users/`, {
    credentials: 'include'
  });
  return await request.json()
}

export async function setUser(json) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'PUT',
    headers: headers,
    body: json,
    credentials: 'include',
    redirect: 'follow'
  };
  console.log(json)
  await fetch(`http://localhost:${port}/api/users/`, requestOptions)
}

export async function removeUser(id) {
  console.log("CALLED REMOVE")
  var requestOptions = {
    method: 'DELETE',
    credentials: 'include',
    redirect: 'follow'
  };

  return await fetch(`http://localhost:${port}/api/users/${id}`, requestOptions)
}

export async function patchUser(json, id) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: json,
    credentials: 'include',
    redirect: 'follow'
  };
  try {
    await fetch(`http://${host}:${port}/api/users`, requestOptions);
  } catch (error) {
    return console.log('error', error);
  }
}

export async function unsafeSetUser(json) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: json,
    credentials: 'include',
    redirect: 'follow'
  };

  console.log("SEND: FETCH")
  await fetch(`http://localhost:${port}/signup`, requestOptions)
}
