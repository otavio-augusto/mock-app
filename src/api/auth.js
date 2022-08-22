export const getAuth = async (username, password) => {
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: `{"email":"${username}","password":"${password}"}`
  };

  const response = await fetch('http://localhost:3000/login', options)
  return response
}

export const clearAuth = async () => {
  const options = {
    method: 'GET',
    credentials: 'include'
  }
  const response = await fetch('http://localhost:3000/login/clear', options)
  return response
};
