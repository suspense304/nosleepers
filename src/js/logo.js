function Logo()
{
  const view = document.getElementById('Header');
  const template = `
  <div style="text-align: center;">
    <img id="logo" src="src/images/header.jpg" />
  </div>
  `;
  view.innerHTML = template;
}
