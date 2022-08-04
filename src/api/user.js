const host = "localhost"
const port = 3001

export async function getUser(query) {
  console.log(query)
  const request = await fetch(`http://localhost:3001/${query}`);
  return await request.json()
}

export async function getAllUsers() {
  //const request = await fetch(`http://${host}:${port}/${query}`);
  const request = await fetch(`http://localhost:3001/users/`);
  return await request.json()
}

export async function setUser(json) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'PUT',
    headers: headers,
    body: json,
    redirect: 'follow'
  };

  await fetch(`http://localhost:3001/users/`, requestOptions)
}

export async function removeUser(id) {
  console.log("CALLED REMOVE")
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

  await fetch(`http://localhost:3001/users/${id}`, requestOptions)
  return true;
}

export async function patchUser(json, id) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: json,
    redirect: 'follow'
  };
  try {
    await fetch(`http://${host}:${port}/users`, requestOptions);
  } catch (error) {
    return console.log('error', error);
  }
}
