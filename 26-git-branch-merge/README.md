# Git Push, Pull, Branch, and Merge (Demo)

## Initialize and Push
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/<repo>.git
git branch -M main
git push -u origin main
```

## Create Branch and Work
```bash
git checkout -b feature/ui
# edit files
git add .
git commit -m "Add UI updates"
```

## Push Branch
```bash
git push -u origin feature/ui
```

## Merge to Main
```bash
git checkout main
git pull origin main
git merge feature/ui
git push origin main
```

## Notes
- Replace `<username>` and `<repo>`.
- Resolve conflicts if any during merge.
