---
transition: fade-out
---

# How We Migrated

---
transition: fade-out
---

# Function by Function

As of August 14, 2023

- Refresh commits commit info displayed in the graph
- Verify commit gpg signature
- Commit
- Fetch
- Branch ahead/behind count (e.g. from pull request panel)
- Merge base calculation (e.g. from right clicking a local branch in the left panel)
- Branch rename
- Branch delete (local branch only)
- Remote branch delete

---
transition: fade-out
---

# Function by Function (contd.)

- Tag delete (local and remote)
- SSH commit signing support
    - Actions that do not currently use the Git Executable (like rebasing) will still use GPG for signing
- SSH strict host key checking support
- Push
- Support for streaming Git hooks output
- Sign tags with SSH

---
transition: slide-left
---

# What's left?

non-exhaustive list

- x509 commit signing
- Delete local tag
- Stash (in progress)
- Partial stash
- Interactive rebase (in progress)
- Reword commit
- Amend commit
- Patch
- Local branch actions
- Remote branch actions
- Blame