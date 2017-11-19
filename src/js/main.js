MainPage();

function PopulateMainList(){
  var table = document.getElementById("listResults");
  var stories = [];
  var leadsRef = database.ref().child("Authors").limitToLast(10).once("value").then(function(authorSnapshot)
  {
    authorSnapshot.forEach(function(child) {
        var template = `
        <tr>
        <td>` + child.val().author + `</td>
        <td><a href="` + child.val().url + `">` + child.val().title + `</a></td>
        <td>` + child.val().score + `</td>
        </tr>
        `
        $("#listResults").append(template);
      })
   });
}

function TopSleepers(){
  const view = document.getElementById('App');
  const template = `<h2>Coming Soon!</h2><br />
  <div>
    <p>
      This section will list stories that have been verified by staff to be truly overlooked.<br />
    </p>
  </div>
  `;
  view.innerHTML = template;
}

function BotTopSleepers(){
  const view = document.getElementById('App');
  const template = `<h2>Coming Soon!</h2><br />
  <div>
    <p>
      The bot doesn't discriminate. Stories that have received the highest scores from the bot will appear here.<br />

    </p>
  </div>`;
  view.innerHTML = template;
}

function TopAuthors(){
  const view = document.getElementById('App');
  const template = `<h2>Coming Soon!</h2><br />
  <div>
    <p>
      Every story that is featured on NoSleepers will be stored along with the authors name and score. This will allow users to search the database for all stories from an author they find here.
    </p>
  </div>`;
  view.innerHTML = template;
}

function Search(){
  const view = document.getElementById('App');
  const template = `<h2>Coming Soon!</h2>`;
  view.innerHTML = template;
}

function RandomCorner(){
  const view = document.getElementById('App');
  var table = document.getElementById("listResults");
  view.innerHTML = `<table id="listResults">
    <thead>
      <th>Author</th>
      <th>Title</th>
      <th>Score</th>
    </thead>
  </table>`;
  var leadsRef = database.ref().child("Authors").once("value").then(function(authorSnapshot)
  {
    var count = 0;
    var stories = [];
    authorSnapshot.forEach(function(child) {
        count++;
        stories.push(child.val());
      });
    var selected = Math.floor(Math.random() * count);
          var template = `
          <tr>
          <td>` + stories[selected].author + `</td>
          <td><a href="` + stories[selected].url + `">` + stories[selected].title + `</a></td>
          <td>` + stories[selected].score + `</td>
          </tr>
          `
          $("#listResults").append(template);
   });
}

function MainPage(){
  const view = document.getElementById('App');
  const template = `<table id="listResults">
    <thead>
      <th>Author</th>
      <th>Title</th>
      <th>Score</th>
    </thead>
  </table>`
  view.innerHTML = template;
  PopulateMainList();
}
