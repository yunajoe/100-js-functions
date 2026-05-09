async function fetchGitHubName(username) {
  const api = `https://api.github.com/users/${username}`;
  const result = await fetch(api);
  if (result.status !== 200) return null;
  const jsonData = await result.json();
  return jsonData.name;
}

export { fetchGitHubName };
