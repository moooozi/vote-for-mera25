# MERA25 Profile Pic Maker

## Deployment

Deploy as Docker container:

1. Copy the project directory to the desired location (e.g. `/path/to/project/vote-for-mera25`)

2. Deploy the container.
```
docker run -d \
  -v /path/to/project/vote-for-mera25:/usr/src/app \
  -w /usr/src/app \
  -p 3000:3000 \
  --name vote-for-mera25 \
  node:22-alpine \
  sh -c "npm ci && npm run dev"
```

Replace `/path/to/project/vote-for-mera25` with the actual path of the project.

## License

This project is based on [profile-pic-maker](https://github.com/TechForPalestine/profile-pic-maker) by [TechForPalestine](https://github.com/TechForPalestine) is open source and available under the [MIT License](LICENSE).
