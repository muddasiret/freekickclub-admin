module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"), // DigitalOcean Access Key
        secret: env("DO_SPACE_SECRET_KEY"), // DigitalOcean Secret Key
        endpoint: env("DO_SPACE_ENDPOINT"), // DigitalOcean Space endpoint, e.g. 'nyc3.digitaloceanspaces.com'
        space: env("DO_SPACE_BUCKET"), // Name of the DigitalOcean Space (bucket)
        // directory: env("DO_SPACE_DIRECTORY", ""), // Optional: Directory within the space
        // cdn: env("DO_SPACE_CDN", ""), // Optional: CDN URL (if used)
      },
    },
  },
});
