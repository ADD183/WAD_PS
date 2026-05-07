# GitHub Repository and Push (Demo)

## Steps
1. Create a GitHub account and log in.
2. Create a new repository on GitHub (no README).
3. Initialize git locally:

```bash
git init
git add .
git commit -m "Initial commit"
```

4. Link remote and push:

```bash
git remote add origin https://github.com/<username>/<repo>.git
git branch -M main
git push -u origin main
```

## Notes
- Replace `<username>` and `<repo>`.
- Ensure you are authenticated (GitHub CLI or personal access token).
