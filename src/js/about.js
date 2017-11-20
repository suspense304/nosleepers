
function About(){
  const view = document.getElementById('App');
  const template = `
  <div style="text-align: center;">
    <h1 style="color: #AA050A; text-align: center">What is the NoSleeperBot?</h1>
    <p style="margin-top: 5px; text-align: left">Without getting technical, the NoSleeperBot is a sentient robot that lives in the basement of its creator.
    The beast was connected to the creepiest place on reddit and began to read the horrors. It became obsessed with
    the stories of others but always wondered what it was missing.<br />
    Were there stories out there that it hadn't seen? Were there lost treasures buried within the heaps of "gold" that
    rose to the top?<br />
    This bot wanted to find out!<br />
    After months of posting to its own subreddit it has bought a domain and decided to catalog its findings for the world!</p>
  </div>
  <div>
  <br /><br />
  <h1 style="color: #AA050A; text-align: center">A bit more technical?</h1>
  <p style="margin-top: 5px; text-align: left">The bot was written in Python. It scrapes Reddit each day and pulls entries from the previous day. It then uses an algorithm
  to rate the stories and places them in a list ordered by score. It then sends a private message to each author to congratulate
  them on the highest honor possible on the internet. After that, it posts the stories to the subreddit for people who've missed them
  <br />
  This site has been generated using vanilla Javascript and jQuery. It pulls the data which has been stored on a Firebase database
  and shows it here.
  </p>
  </div>
  <br /><br />
  <h1 style="color: #AA050A; text-align: center">Score Algorithm</h1>
  <div style="background-color: #282828; width: 50%; margin: auto">
  <code style="color: #AA050A; padding: 1px; margin-top: 5px;">
    for post in posts:<br />
    liked = (post.upvote_ratio * 100)<br />
    score = post.score<br />
    if liked > 85 and score > 10 and score < 80:<br />
        top5.append((post.title, post.author.name, post.url, (post.upvote_ratio * 100) + post.score, post.id))<br />
        print(post.title, post.author.name, post.url, (post.upvote_ratio * 100) + post.score, post.id)</code>
  </p>
  </div>
  `;
  view.innerHTML = template;
}
