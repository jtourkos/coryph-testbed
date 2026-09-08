# coryph-testbed

A throwaway repo for driving coryph's `/coryph` flow end to end against real GitHub.

Nothing here matters. It exists so an agent has somewhere safe to clone, edit, branch and open a
pull request, and so there is an issue thread to type commands into.

## How it is used

Comment on any issue here:

```
/coryph ada fix the greeting typo
```

The first word after `/coryph` is an agent's handle. If everything is wired, within a second or two
the comment gets an 👀 and a reply appears that keeps editing itself until the run finishes.

## What is in here

- `greeting.ts` — a two-line file with an obvious mistake, so a run has something real to change.

## Safety

Private, disposable, and owned by one person. The GitHub App installed here holds **write access**,
so nothing that matters should ever live in this repo. Delete it and make another whenever it gets
messy.
