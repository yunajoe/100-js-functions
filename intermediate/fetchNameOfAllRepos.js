async function fetchNamesOfAllPublicRepos(username) {
  try {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("[FETCH 실패]");
    }
    const jsonData = await response.json();
    return jsonData.map((item) => item.name);
  } catch (error) {
    return [];
  }
}
fetchNamesOfAllPublicRepos("sdfsdfsdfsdf");
