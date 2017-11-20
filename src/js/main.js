MainPage();
Logo();

function PopulateMainList(){

  var stories = [];
  var leadsRef = database.ref().child("Authors").limitToLast(5).once("value").then(function(authorSnapshot)
  {
    authorSnapshot.forEach(function(child) {
      stories.push({"Author": child.val().author,
                    "Title": child.val().title,
                    "URL": child.val().url,
                    "Score": Math.round(child.val().score, 0)});
      })
      for(var i = 0; i < 5; i++)
      {
        var template = `
        <tr>
        <td><span class="authorLink" onclick=AuthorPage("` + stories[i]["Author"] +`")>` + stories[i]["Author"] + `</span></td>
        <td><a href="` + stories[i]["URL"]+ `">` + stories[i]["Title"] + `</a></td>
        <td>` + stories[i]["Score"] + `</td>
        </tr>
        `
        $("#listResults").append(template);
      }
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
  var storyList = [];
  const view = document.getElementById('App');
  var table = document.getElementById("listResults");
  view.innerHTML = `<table id="listResults">
    <thead>
      <th>Author</th>
      <th>Title</th>
      <th>Score</th>
    </thead>
  </table>`;
  var storyRef = database.ref().child("Authors").once("value").then(function(authorSnapshot)
  {
        authorSnapshot.forEach(function(child) {
        storyList.push({"Author": child.val().author,
                      "Title": child.val().title,
                      "URL": child.val().url,
                      "Score": Math.round(child.val().score, 0)});
      })
      console.log(storyList);
      storyList.sort(compare);
      for(var i = 0; i < 10; i++)
      {
        var template = `
        <tr>
        <td><span class="authorLink" onclick=AuthorPage("` + storyList[i]["Author"] +`")>` + storyList[i]["Author"] + `</span></td>
        <td><a href="` + storyList[i]["URL"]+ `">` + storyList[i]["Title"] + `</a></td>
        <td>` + storyList[i]["Score"] + `</td>
        </tr>
        `
        $("#listResults").append(template);
      }
   });
}



function compare(a, b) {
  const storyA = a.Score;
  const storyB = b.Score;

  let comparison = 0;
  if (storyA < storyB) {
    comparison = 1;
  } else if (storyA > storyB) {
    comparison = -1;
  }
  return comparison;
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
          <td><span class="authorLink" onclick=AuthorPage("` + stories[selected].author +`")>` + stories[selected].author + `</span></td>
          <td><a href="` + stories[selected].url + `">` + stories[selected].title + `</a></td>
          <td>` + Math.round(stories[selected].score, 0) + `</td>
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

function AuthorPage(author){
  var storyList = [];
  const view = document.getElementById('App');
  var table = document.getElementById("listResults");
  view.innerHTML = `<table id="listResults">
    <thead>
      <th>Author</th>
      <th>Title</th>
      <th>Score</th>
    </thead>
  </table>`;
  var storyRef = database.ref().child("Authors").once("value").then(function(authorSnapshot)
  {
        authorSnapshot.forEach(function(child) {
        if(child.val().author == author){
          storyList.push({"Author": child.val().author,
                        "Title": child.val().title,
                        "URL": child.val().url,
                        "Score": Math.round(child.val().score, 0)});
        }

      })
      console.log(storyList);
      storyList.sort(compare);
      for(var i = 0; i < 10; i++)
      {
        var template = `
        <tr>
        <td><span class="authorLink" onclick=AuthorPage("` + storyList[i]["Author"] +`")>` + storyList[i]["Author"] + `</span></td>
        <td><a href="` + storyList[i]["URL"]+ `">` + storyList[i]["Title"] + `</a></td>
        <td>` + storyList[i]["Score"] + `</td>
        </tr>
        `
        $("#listResults").append(template);
      }
   });

}
