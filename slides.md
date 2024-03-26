---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: LibGit2, NodeGit, Native Git, Oh my...
info: |
  There are a few ways you can interface with Git from an application's perspective. In this talk, I hope to inform you of what they are, how you can use them, and why we went through the effort to switch to the native git binary where we can. We will also dig into that process abit and how we approached the refactor.
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# libgit2, nodegit, native git

<h2>oh my...</h2>

---
src: ./pages/intro.md
layout: center
---

---
src: ./pages/implementations.md
layout: center
---

---
src: ./pages/libgit2.md
layout: center
---

---
src: ./pages/nodegit.md
layout: center
---

---
src: ./pages/our-use-case.md
layout: center
---

---
src: ./pages/why-we-migrated.md
layout: center
---

---
src: ./pages/how-we-migrated.md
layout: center
---

---
src: ./pages/outro.md
layout: center
---
