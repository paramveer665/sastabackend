require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 41673;

app.use(cors());

const data = {
  login: "paramveer665",
  id: 128416031,
  node_id: "U_kgDOB6d5Hw",
  avatar_url: "https://avatars.githubusercontent.com/u/128416031?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/paramveer665",
  html_url: "https://github.com/paramveer665",
  followers_url: "https://api.github.com/users/paramveer665/followers",
  following_url:
    "https://api.github.com/users/paramveer665/following{/other_user}",
  gists_url: "https://api.github.com/users/paramveer665/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/paramveer665/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/paramveer665/subscriptions",
  organizations_url: "https://api.github.com/users/paramveer665/orgs",
  repos_url: "https://api.github.com/users/paramveer665/repos",
  events_url: "https://api.github.com/users/paramveer665/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/paramveer665/received_events",
  type: "User",
  site_admin: false,
  name: "Paramveer Chauhan",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 1,
  following: 12,
  created_at: "2023-03-20T18:19:52Z",
  updated_at: "2024-09-29T17:20:35Z",
};

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/login", (req, res) => {
  res.send("<h1>Bhai kaam shuru ho gya hai</h1>");
});

app.get("/git", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`app is listening on port ${process.env.port}`);
});
