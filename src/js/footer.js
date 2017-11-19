Footer();
function Footer(){
  const view = document.getElementById('Footer');
  const template = `
  <div id="footer">
    <p>TheNoSleepers.com &copy 2017</p>
    <br />
    <p>Created by <a href="https://www.amazon.com/Doug-Hantke/e/B00PYUFUOW">Doug Hantke</a> (Suspense304 on NoSleep)</p>

  </div>
  `;
  view.innerHTML = template;
}
