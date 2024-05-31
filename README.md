# MERA25 Profile Pic Maker

## Deployment

Deploy as Docker container:

   ```
   docker run -d \
     -e ENV_VAR_NAME=value \
     -p host_port:container_port \
     -v host_volume:container_volume \
     --name container_name \
     --network network_name \
     --restart always \
     image_name:tag
   ```

## License

This project is based on [profile-pic-maker](https://github.com/TechForPalestine/profile-pic-maker) by [TechForPalestine](https://github.com/TechForPalestine) is open source and available under the [MIT License](LICENSE).
