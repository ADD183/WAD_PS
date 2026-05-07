# Docker Container Environment

## Steps
1. Create a simple static site in the `site` folder (index.html).
2. Build the image:

```bash
docker build -t static-site .
```

3. Run the container:

```bash
docker run -p 8080:80 static-site
```

4. Visit `http://localhost:8080`.
