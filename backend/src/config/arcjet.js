import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import { ENV } from "./env.js";

// initialize Arcjet with security rules
export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // shield protects your app from common attacks e.g. SQL injection, XSS, CSRF attacks
    shield({ mode: "LIVE" }),

    // bot detection - block all bots except search engines
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        // allow legitimate search engine bots
        // there are other categories too  you can see full list at https://arcjet.com/bot-list
      ],
    }),

    
    //what is rate limiting?
    //Rate limiting is the process of restricting how often a user or client can make requests to your API or server within a certain time window 
    //e.g 10req/min
    // rate limiting with token bucket algorithm
    tokenBucket({  //token
      mode: "LIVE",
      refillRate: 10, // tokens added per interval
      interval: 10, // interval in seconds (10 seconds)
      capacity: 15, // maximum tokens in bucket
    }),
  ],
});



//tokenBucket explaination 
/* 
A bucket is filled with tokens at a steady rate (e.g., 5 tokens/sec).

📩 Each request consumes 1 token from the bucket.

✅ If there are enough tokens → the request is allowed immediately.

💨 If the bucket is full, the user can send many requests quickly (burst).

🛑 If the bucket runs out of tokens, the user must wait for tokens to refill before making more requests.

Key Idea:
"You can send many requests quickly for a short time, but must wait when tokens run out."
*/