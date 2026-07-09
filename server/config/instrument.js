// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://94b523b4aecb2ead7601b3f7e8444572@o4511699054100480.ingest.us.sentry.io/4511699061178368",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
    
  },
  integrations: [Sentry.mongooseIntegration()],
});