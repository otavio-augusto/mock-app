const host = "localhost"
const port = 3000

export async function getTheme(query = "1") {
  const request = await fetch(`http://${host}:${port}/themes/${query}`);
  const response = await request.json();
  return response;
}
