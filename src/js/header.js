Header();
function Header(){
  const view = document.getElementById('navBar');
  const template = `
  <img src="src/images/header.jpg" width="100%" />
  <div style="text-align: center;">
    <h1 style="color: white;">TheNoSleepers.com</h1>
    <ul style="text-align: center; width: 100%;">
      <li><a onclick="MainPage()">Home</a></li>
      <li><a onclick="TopSleepers()">Certified Sleepers</a></li>
      <li><a onclick="BotTopSleepers()">Bot's Picks</a></li>
      <li><a onclick="TopAuthors()">Top Authors</a></li>
      <li><a onclick="RandomCorner()">Random Story</a></li>
      <li><a onclick="Search()">Search</a></li>
      <li><a onclick="About()">About</a></li>
    </ul>
  </div>
  `;
  view.innerHTML = template;
}
