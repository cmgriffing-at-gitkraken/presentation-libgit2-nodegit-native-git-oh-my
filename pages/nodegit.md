---
transition: fade-out
---

# Nodegit

---
transition: fade-out
---

# About Nodegit

Node Bindings to libgit2

---
transition: fade-out
---

# Example

```js
const Git = require("nodegit");

Git.Clone("https://github.com/nodegit/nodegit", "nodegit")
  .then(function(repository) {
    // Work with the repository object here.
  });
```

---
transition: slide-left
---

# Advanced Example

```js
const Git = require("nodegit");

Git.Repository.open("nodegit")
  .then(function getMostRecentCommit(repository) {
    return repository.getBranchCommit("master");
  })
  .then(function getCommitMessage(commit) {
    return commit.message();
  })
  .then(function(message) {
    console.log(message);
  });
```
