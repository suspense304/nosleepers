function AddStory(author, title, score, url, certified, date){
  if(author == "" || title == "" || score == "" || url == "" ||
     certified == "" || date == "")
  {
     alert("Not every field has been entered!");
  } else
  {
    CheckDupes(url, author, title, score, url, certified, date);
  }
}

function ClearBoxes(){
  var author = document.getElementById('author');
  var title = document.getElementById('title');
  var score = document.getElementById('score');
  var url = document.getElementById('url');

  author.value = '';
  title.value = '';
  score.value = '';
  url.value = '';
}

function CheckDupes(newUrl, author, title, score, url, certified, date){
  var stories = [];
  var duped = "false";
  var leadsRef = database.ref().child("Authors").once("value").then(function(authorSnapshot)
  {
    authorSnapshot.forEach(function(child) {
        stories.push(child.val());
      });
      for(var i = 0; i < stories.length; i++)
      {
        if(stories[i].url == newUrl)
        {
          duped = "true";
          alert("Story Exists!");
          ClearBoxes();
          return;
          break;
        }
      }
      if(duped == "false")
      {
        firebase.database().ref('Authors/').push({
          author: author,
          title: title,
          score: score,
          url: url,
          certified: certified,
          date: date
        });
        ClearBoxes();
        alert("Story has been added!");
      }
  });



}
