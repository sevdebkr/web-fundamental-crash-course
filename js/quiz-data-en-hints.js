const QUIZ_QUESTIONS_EN = [
  {
    "id": "q1",
    "topic": "Web Fundamentals",
    "question": "What is the fundamental difference between the Internet and the Web?",
    "options": [
      "The Internet is exclusively for websites, while the Web handles email protocols.",
      "The Web serves as the hardware layer, and the Internet acts as the software layer.",
      "The Internet is the underlying physical network, while the Web is an application.",
      "They are identical infrastructure concepts that are used interchangeably today."
    ],
    "answer": 2,
    "hint": "Think of one as the physical roads of a city, and the other as the buildings sitting on those roads."
  },
  {
    "id": "q2",
    "topic": "Web Fundamentals",
    "question": "In the full lifecycle of a web request, what is the very first step before a TCP connection can be established?",
    "options": [
      "TLS Handshake",
      "Server Processing",
      "DNS Resolution",
      "DOM Rendering"
    ],
    "answer": 2,
    "hint": "The browser needs to know the IP address of the domain name (like example.com) before it can connect."
  },
  {
    "id": "q3",
    "topic": "Web Fundamentals",
    "question": "Which rendering strategy builds the HTML page on the server per request, making it highly suitable for SEO-sensitive pages that need personalization?",
    "options": [
      "Client-Side Rendering (CSR)",
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Single Page Application (SPA)"
    ],
    "answer": 1,
    "hint": "It happens on the \"Server\" side dynamically for every single request, unlike SSG."
  },
  {
    "id": "q4",
    "topic": "Web Fundamentals",
    "question": "Why is Semantic HTML critical for a website?",
    "options": [
      "It significantly decreases the loading time of websites on mobile devices.",
      "It automatically applies visual styling to the page without requiring CSS.",
      "It provides meaning and structure for screen readers and search engines.",
      "It prevents common security vulnerabilities like Cross-Site Scripting (XSS)."
    ],
    "answer": 2,
    "hint": "Think about how a blind user's screen reader or a Google bot knows what a <nav> or <header> is compared to a plain <div>."
  },
  {
    "id": "q5",
    "topic": "Client�Server Communication",
    "question": "According to the restaurant analogy, if the user is the customer and the browser is the ordering tablet, what does the server represent?",
    "options": [
      "The menu",
      "The kitchen",
      "The meal",
      "The waiter"
    ],
    "answer": 1,
    "hint": "It's the place where the requested order (request) is processed and the meal (response) is prepared."
  },
  {
    "id": "q6",
    "topic": "Client�Server Communication",
    "question": "What is a key characteristic of a \"Thick Client\"?",
    "options": [
      "It executes minimal local logic and strictly displays server-rendered views.",
      "It manages significant logic locally and communicates via external APIs.",
      "It operates entirely on the backend server with no local UI processing.",
      "It supports only static HTML pages and explicitly disables JavaScript."
    ],
    "answer": 1,
    "hint": "A React Single Page Application (SPA) or a native mobile app is \"thick\" because it does a lot of the heavy lifting on the user's device."
  },
  {
    "id": "q7",
    "topic": "Client�Server Communication",
    "question": "Why is \"statelessness\" an important architectural concept for backend servers?",
    "options": [
      "It allows servers to scale horizontally by processing independent requests.",
      "It forces the server infrastructure to remember every user indefinitely.",
      "It completely eliminates the architectural need for any database storage.",
      "It practically guarantees that the server hardware never experiences crashes."
    ],
    "answer": 0,
    "hint": "If a server doesn't have to \"remember\" client state in its own memory, you can easily add 10 more identical servers behind a load balancer."
  },
  {
    "id": "q8",
    "topic": "HTTP Communication",
    "question": "What does it mean for an HTTP method to be \"idempotent\"?",
    "options": [
      "Making the request once or multiple times produces the identical server state.",
      "The request automatically triggers a background retry if it encounters an error.",
      "The method can only be successfully executed by authenticated administrators.",
      "The method is fully encrypted and secured against unauthorized network access."
    ],
    "answer": 0,
    "hint": "If you hit a DELETE endpoint 5 times, the resource is still gone, just like hitting it once. The end state doesn't change after the first time."
  },
  {
    "id": "q9",
    "topic": "HTTP Communication",
    "question": "Which HTTP method is specifically used to modify or update ONLY a specific part of existing data?",
    "options": [
      "PUT",
      "POST",
      "PATCH",
      "GET"
    ],
    "answer": 2,
    "hint": "You use this when you just want to \"patch up\" a small detail, like fixing a single typo in a bio, rather than replacing the whole thing."
  },
  {
    "id": "q10",
    "topic": "HTTP Communication",
    "question": "What was a major improvement introduced in HTTP/2 compared to HTTP/1.1?",
    "options": [
      "Implementing multiplexing to share one TCP connection for many requests.",
      "Transitioning from a TCP-based architecture to a faster UDP-based protocol.",
      "Removing the fundamental requirement for HTTP headers to reduce payload size.",
      "Replacing JSON with XML as the primary format for all strict data transfers."
    ],
    "answer": 0,
    "hint": "Instead of opening multiple parallel connections per domain, HTTP/2 sends many streams over just one connection at the same time."
  },
  {
    "id": "q11",
    "topic": "HTTP Communication",
    "question": "If a client sends a malformed or incomplete request, which HTTP status code category should the server return?",
    "options": [
      "2xx",
      "3xx",
      "4xx",
      "5xx"
    ],
    "answer": 2,
    "hint": "Errors caused by the user or browser (like bad syntax or unauthorized access) fall into the four-hundreds range."
  },
  {
    "id": "q12",
    "topic": "HTTP Communication",
    "question": "What is the difference between a 401 and a 403 HTTP status code?",
    "options": [
      "401 indicates \"Not Found\" on the server, while 403 indicates a \"Bad Request\".",
      "401 indicates API rate limiting, while 403 indicates a completely crashed server.",
      "401 represents a general client error, while 403 represents a critical server error.",
      "401 indicates missing authentication, while 403 indicates insufficient permissions."
    ],
    "answer": 3,
    "hint": "401 is when the bouncer doesn't know who you are. 403 is when the bouncer knows who you are, but you still aren't on the VIP list."
  },
  {
    "id": "q13",
    "topic": "HTTP Communication",
    "question": "What is the primary purpose of the \"User-Agent\" request header?",
    "options": [
      "To securely identify the requesting user's verified personal email address.",
      "To identify the specific browser, operating system, and device making the request.",
      "To strictly inform the server about the specific data formats the client prefers.",
      "To securely transmit the active user's encoded authentication token to the API."
    ],
    "answer": 1,
    "hint": "It tells the server if you are visiting from Chrome on Windows, or Safari on an iPhone."
  },
  {
    "id": "q14",
    "topic": "HTTP Communication",
    "question": "When should a developer choose Server-Sent Events (SSE) over WebSockets?",
    "options": [
      "When building a fast-paced, interactive multiplayer online gaming experience.",
      "When the frontend web application specifically requires robust offline synchronization.",
      "When the client needs to frequently transmit real-time telemetry back to the server.",
      "When data only needs to flow continuously in one direction from server to client."
    ],
    "answer": 3,
    "hint": "SSE is a one-way street (pushing notifications to a dashboard), while WebSockets are a two-way street."
  },
  {
    "id": "q15",
    "topic": "APIs and Data Exchange",
    "question": "Why do teams use an API Gateway in a microservices architecture?",
    "options": [
      "To consolidate all distinct backend application business logic into a single codebase.",
      "To effectively bypass restrictive Cross-Origin Resource Sharing (CORS) security rules.",
      "To seamlessly convert relational SQL queries into NoSQL document transactions.",
      "To centralize generic cross-cutting concerns like authentication and rate limiting."
    ],
    "answer": 3,
    "hint": "Instead of every small service implementing its own security and rate limits, a \"Gateway\" handles it at the front door."
  },
  {
    "id": "q16",
    "topic": "APIs and Data Exchange",
    "question": "Which API style is characterized by having a single endpoint where the client specifies exactly which fields it needs in the response?",
    "options": [
      "REST",
      "gRPC",
      "GraphQL",
      "Webhooks"
    ],
    "answer": 2,
    "hint": "It was created by Facebook to let frontends ask for exactly the data they need, no more and no less."
  },
  {
    "id": "q17",
    "topic": "APIs and Data Exchange",
    "question": "What is \"Serialization\" in the context of data exchange?",
    "options": [
      "Sorting raw database records alphabetically based on a specifically defined index.",
      "Validating a user's inputted password against a securely hashed database record.",
      "Encrypting sensitive application state data before sending it over a public network.",
      "Converting a complex in-memory object into a flat string format for transmission."
    ],
    "answer": 3,
    "hint": "It's the act of packaging complex memory objects into a flat string format (like JSON) so it can travel across the web."
  },
  {
    "id": "q18",
    "topic": "Authentication",
    "question": "How does \"Authorization\" differ from \"Authentication\"?",
    "options": [
      "Authentication verifies permissions, Authorization verifies identity.",
      "Authentication is \"Who are you?\", Authorization is \"What are you allowed to do?\".",
      "They are two words for the exact same process.",
      "Authentication happens after Authorization."
    ],
    "answer": 1,
    "hint": "Showing your ID card is Authentication. The keycard only opening your specific hotel room is Authorization."
  },
  {
    "id": "q19",
    "topic": "Authentication",
    "question": "Which authorization model computes permissions dynamically from attributes of the user, resource, and context (e.g., 'only during business hours')?",
    "options": [
      "Role-Based Access Control (RBAC)",
      "JSON Web Tokens (JWT)",
      "Attribute-Based Access Control (ABAC)",
      "Single Sign-On (SSO)"
    ],
    "answer": 2,
    "hint": "It uses \"Attributes\" rather than fixed \"Roles\" to make complex, situational decisions."
  },
  {
    "id": "q20",
    "topic": "Authentication",
    "question": "What does the \"HttpOnly\" flag do when set on a cookie?",
    "options": [
      "It prevents client-side JavaScript from accessing the cookie, mitigating XSS risks.",
      "It explicitly forces the targeted cookie to only be transmitted over secure HTTPS.",
      "It strictly prohibits the browser from sending the cookie to cross-origin domains.",
      "It permanently configures the browser session to ensure the cookie never expires."
    ],
    "answer": 0,
    "hint": "It makes the cookie strictly for HTTP transport, hiding it from document.cookie in client-side scripts."
  },
  {
    "id": "q21",
    "topic": "Authentication",
    "question": "Why do production systems commonly split tokens into an \"Access Token\" and a \"Refresh Token\"?",
    "options": [
      "To significantly reduce the overall storage space required in the primary database.",
      "To limit the risk of leaked access tokens while keeping user sessions uninterrupted.",
      "Because standard JSON Web Tokens structurally enforce a strict maximum size limit.",
      "To definitively eliminate Cross-Origin Resource Sharing (CORS) preflight blockages."
    ],
    "answer": 1,
    "hint": "If a hacker steals an Access Token, it becomes useless in 15 minutes. The Refresh Token is kept much safer and gets new Access Tokens."
  },
  {
    "id": "q22",
    "topic": "Authentication",
    "question": "In a JSON Web Token (JWT), what guarantees that the token hasn't been tampered with by the client?",
    "options": [
      "The Header",
      "The Payload",
      "The Signature",
      "The Encryption"
    ],
    "answer": 2,
    "hint": "The server uses a secret key to sign the token. If the payload is altered, this part will no longer match."
  },
  {
    "id": "q23",
    "topic": "Security and Performance",
    "question": "What triggers a CORS \"Preflight\" (OPTIONS) request?",
    "options": [
      "Any standard GET request executed by the browser rendering engine to load an image.",
      "A localized network failure that occurs when standard DNS resolution suddenly fails.",
      "A completely standard HTTP API request executed entirely within the same domain.",
      "A non-simple cross-origin request, such as those utilizing PUT or custom headers."
    ],
    "answer": 3,
    "hint": "The browser checks with the server (\"Is this allowed?\") before sending complex or potentially dangerous cross-origin requests."
  },
  {
    "id": "q24",
    "topic": "Security and Performance",
    "question": "In caching, what is the role of an ETag?",
    "options": [
      "It accurately dictates the precise expiration time (TTL) for a specific cache entry.",
      "It acts as a content fingerprint to allow servers to return a \"304 Not Modified\".",
      "It strongly encrypts the cached response data locally within the user's web browser.",
      "It explicitly commands the Content Delivery Network not to store static file assets."
    ],
    "answer": 1,
    "hint": "The client sends this fingerprint back to the server. If it matches the server's current version, the server doesn't resend the heavy payload."
  },
  {
    "id": "q25",
    "topic": "Security and Performance",
    "question": "Which Core Web Vital measures how long it takes for the page to respond after a user clicks, taps, or presses a key?",
    "options": [
      "Largest Contentful Paint (LCP)",
      "Cumulative Layout Shift (CLS)",
      "Interaction to Next Paint (INP)",
      "Time to First Byte (TTFB)"
    ],
    "answer": 2,
    "hint": "It tracks the delay between the user's \"Interaction\" and the browser's next visual update."
  },
  {
    "id": "q26",
    "topic": "Security and Performance",
    "question": "During a TLS (HTTPS) handshake, what proves to the client that the server is actually the domain it claims to be?",
    "options": [
      "The IP address matching the DNS record.",
      "A digital certificate issued by a trusted Certificate Authority (CA).",
      "The presence of the \"Strict-Transport-Security\" header.",
      "The user's stored session cookie."
    ],
    "answer": 1,
    "hint": "Just like a passport proves your identity, a trusted third party (CA) issues this document to the server."
  },
  {
    "id": "q27",
    "topic": "Security and Performance",
    "question": "Which rate limiting algorithm gives each user a \"bucket\" that refills at a steady rate, allowing short bursts of traffic while enforcing a long-term average?",
    "options": [
      "Fixed Window",
      "Sliding Window",
      "Token Bucket",
      "Preflight Limiting"
    ],
    "answer": 2,
    "hint": "The algorithm's name literally contains the word \"bucket\" where \"tokens\" represent permission to make a request."
  },
  {
    "id": "q28",
    "topic": "Data Storage",
    "question": "What is the primary purpose of a database \"Index\"?",
    "options": [
      "To significantly speed up queries by allowing direct access to matching row locations.",
      "To actively duplicate stored database records across multiple servers for redundancy.",
      "To securely encrypt and obfuscate highly sensitive columns within a relational table.",
      "To strictly enforce structural referential integrity and valid relationships between tables."
    ],
    "answer": 0,
    "hint": "It works exactly like the index at the back of a textbook, telling you exactly which page to flip to."
  },
  {
    "id": "q29",
    "topic": "Data Storage",
    "question": "Why is Server-Side Validation mandatory, even if you have excellent Client-Side Validation?",
    "options": [
      "Client-side validation generally slows down modern browser rendering engines excessively.",
      "Client-side validation can be easily bypassed via direct API calls by malicious users.",
      "Server-side validation is explicitly required to maintain HTTP/2 protocol compliance.",
      "Client-side validation relies on outdated APIs that are incompatible with mobile devices."
    ],
    "answer": 1,
    "hint": "A malicious user can just use a tool like Postman to send requests directly to the backend, skipping your frontend forms entirely."
  },
  {
    "id": "q30",
    "topic": "Data Storage",
    "question": "What is a major drawback of \"Offset-based\" pagination on large datasets or fast-changing feeds?",
    "options": [
      "It makes it completely impossible for end users to jump directly to a specific page number.",
      "It inherently forces the backend application server to load all database records into memory.",
      "It strictly mandates that the underlying backend database operates as a NoSQL document store.",
      "It becomes slower on large offsets and can duplicate items if new data is dynamically added."
    ],
    "answer": 3,
    "hint": "If you ask for \"items 20-30\", but 5 new items were just inserted at the top, items that used to be 15-20 shift down and you see them twice."
  },
  {
    "id": "q31",
    "topic": "Background Processing",
    "question": "How does a Webhook differ from a standard REST API request?",
    "options": [
      "Webhooks strictly utilize XML format, while REST APIs predominantly enforce JSON payloads.",
      "Webhooks are designed to function locally without requiring any active internet connection.",
      "REST requires active polling, while Webhooks automatically push data on predefined events.",
      "Webhooks are restricted by browsers so they can only be consumed by frontend applications."
    ],
    "answer": 2,
    "hint": "A REST API is you calling the restaurant to ask if the food is ready. A Webhook is the restaurant calling you the moment the food is ready."
  },
  {
    "id": "q32",
    "topic": "Background Processing",
    "question": "Why should heavy processing NOT be done directly inside a webhook handler endpoint?",
    "options": [
      "Webhooks only accept basic GET requests, which cannot carry complex data payload bodies.",
      "Background worker jobs and messaging queues cannot be initialized from active webhook routes.",
      "Senders expect a fast 200 OK response; delays might trigger unnecessary system retries.",
      "Webhook endpoint processes are strictly constrained to utilize only 1 kilobyte of system memory."
    ],
    "answer": 2,
    "hint": "If you take 30 seconds to process a payment webhook, Stripe will think your server crashed and will hit you with the same event again."
  },
  {
    "id": "q33",
    "topic": "Background Processing",
    "question": "In message broker architectures, what is the \"Pub/Sub\" pattern?",
    "options": [
      "Each message is processed by exactly one worker in a work queue.",
      "Each message is delivered to every interested subscriber independently.",
      "The message is stored in the database instead of a queue.",
      "The server publishes an HTML page and the user subscribes to the RSS feed."
    ],
    "answer": 1,
    "hint": "When an \"order placed\" event is Published, the email service, analytics service, and inventory service all Subscribe and react to it simultaneously."
  },
  {
    "id": "q34",
    "topic": "Background Processing",
    "question": "Why is \"Structured Logging\" (writing logs as JSON) preferred in modern backend systems?",
    "options": [
      "It predictably reduces the overall physical disk space utilized by logging by approximately 90%.",
      "It allows centralized logging platforms to easily parse, index, search, and filter records.",
      "It automatically applies strong cryptographic encryption to all sensitive server error outputs.",
      "It comprehensively prevents sensitive personal user data from ever being written to log files."
    ],
    "answer": 1,
    "hint": "Searching through millions of free-text sentences is hard. Searching for {\"user_id\": 123, \"level\": \"ERROR\"} is instantaneous."
  },
  {
    "id": "q35",
    "topic": "Testing",
    "question": "According to the Testing Pyramid, which type of tests should you have the MOST of, because they are fast and cheap?",
    "options": [
      "End-to-End (E2E) Tests",
      "Integration Tests",
      "Unit Tests",
      "Manual UI Tests"
    ],
    "answer": 2,
    "hint": "These tests isolate one small piece of logic (a single function) and don't require external databases or running browsers."
  },
  {
    "id": "q36",
    "topic": "Testing",
    "question": "In Test-Driven Development (TDD), what is the correct order of the \"Red-Green-Refactor\" cycle?",
    "options": [
      "Write a failing test (Red), write simple code to pass it (Green), clean up the code (Refactor).",
      "Write functional code (Green), write a failing test (Red), optimize the codebase (Refactor).",
      "Clean up existing code (Refactor), write a new failing test (Red), complete the feature (Green).",
      "Write a passing test (Green), optimize the code (Refactor), intentionally break the logic (Red)."
    ],
    "answer": 0,
    "hint": "You must prove the test can fail before you write the code to make it pass, then you tidy things up."
  },
  {
    "id": "q37",
    "topic": "Testing",
    "question": "What is a \"Mock\" in the context of automated testing?",
    "options": [
      "A specialized automated utility strictly designed to generate randomized and invalid user inputs.",
      "A fake replacement for a real external dependency to ensure tests run fast and stay isolated.",
      "A terminal script plugin that outputs humorous or sarcastic error messages when test suites fail.",
      "A complete, read-only local copy of the live production database explicitly used for unit testing."
    ],
    "answer": 1,
    "hint": "Instead of actually charging a credit card in a test, you use a \"fake\" object that just pretends to succeed."
  },
  {
    "id": "q38",
    "topic": "Deployment and Infrastructure",
    "question": "In deployment strategies, what is a \"Canary Deployment\"?",
    "options": [
      "Releasing the version to a small subset of users to monitor errors before rolling it out fully.",
      "Running two identical staging environments and immediately switching all active user traffic.",
      "Releasing the newly compiled application version to 100% of active users simultaneously.",
      "Manually transferring compiled production deployment files to a live web server via secure FTP."
    ],
    "answer": 0,
    "hint": "Named after the birds used in coal mines, this strategy sends a small group of users ahead to detect danger before committing fully."
  },
  {
    "id": "q39",
    "topic": "Deployment and Infrastructure",
    "question": "Why are \"Environment Variables\" essential for modern web applications?",
    "options": [
      "They automatically configure and optimize the end-user's local browser rendering preferences.",
      "They completely eliminate common DNS propagation delays during continuous production deployments.",
      "They keep secrets out of the codebase and allow distinct configurations per deployment stage.",
      "They significantly speed up complex JavaScript execution tasks within the server's render engine."
    ],
    "answer": 2,
    "hint": "You never want to hardcode a production password into a file that gets committed to Git. Instead, the server provides it at runtime."
  },
  {
    "id": "q40",
    "topic": "Collaboration and Version Control",
    "question": "In Git Branching Strategies, what is the defining feature of \"Trunk-Based Development\"?",
    "options": [
      "Developers work on feature branches that last for months before merging.",
      "Everyone commits small, frequent changes directly to (or via very short-lived branches into) a single main branch.",
      "Code is sent via email patches instead of pull requests.",
      "There is no main branch, only individual developer repositories."
    ],
    "answer": 1,
    "hint": "The \"trunk\" (main branch) is the single source of truth, and developers merge their tiny updates into it multiple times a day."
  },
  {
    "id": "q41",
    "topic": "Web Fundamentals",
    "question": "What is the main difference between static and dynamic content on the web?",
    "options": [
      "Static content is only for mobile phones; dynamic is for desktops.",
      "Static content serves the exact same HTML/CSS/JS to every visitor, while dynamic content is built by the server per request.",
      "Dynamic content doesn't require a backend server.",
      "Static content uses WebSockets, while dynamic uses plain HTTP."
    ],
    "answer": 1,
    "hint": "A plain landing page is static, while your personalized Instagram feed is built dynamically just for you."
  },
  {
    "id": "q42",
    "topic": "Web Fundamentals",
    "question": "What is a Multi Page Application (MP",
    "options": [
      "An application architecture inherently designed to open multiple browser tabs concurrently.",
      "An application that is constructed entirely without relying on any form of client-side JavaScript.",
      "An application where each navigation fetches a completely new HTML page from the backend server.",
      "An application where view navigation is seamlessly and entirely handled by client-side JavaScript."
    ],
    "answer": 2,
    "hint": "Every time you click a link, you see the browser's loading spinner because it's asking the server for a brand new page."
  },
  {
    "id": "q43",
    "topic": "Web Fundamentals",
    "question": "When building accessible websites, when should you use ARIA attributes?",
    "options": [
      "On every single standard HTML element to guarantee perfect WCAG compliance and accessibility.",
      "Exclusively on structural container <div> elements, and never on interactive <button> elements.",
      "As a direct functional replacement for standard CSS to visually style elements for screen readers.",
      "Only when native semantic HTML tags cannot adequately express complex accessibility information."
    ],
    "answer": 3,
    "hint": "If a native <nav> tag does the job, use it. You only bring in ARIA when the standard tags aren't enough."
  },
  {
    "id": "q44",
    "topic": "Web Fundamentals",
    "question": "Why can a long-running script freeze an entire web page (\"the page is unresponsive\")?",
    "options": [
      "The backend API server explicitly stops transmitting HTML content until the local client script finishes.",
      "The browser permanently consumes all available RAM and subsequently crashes the local operating system.",
      "The intensive processing script automatically disconnects the active user's current internet connection.",
      "The browser's single-threaded JavaScript engine can strictly only process one primary task at a time."
    ],
    "answer": 3,
    "hint": "Because it's \"single-threaded,\" if a heavy calculation is running, clicking a button has to wait in line until it's done."
  },
  {
    "id": "q45",
    "topic": "Security and Performance",
    "question": "What does a \"persistent connection\" (Connection: keep-alive) achieve in HTTP?",
    "options": [
      "It securely and permanently saves the user's encrypted authentication credentials in the web browser.",
      "It effectively prevents the backend application server from ever manually timing out idle connections.",
      "It reuses a TCP connection for multiple requests to avoid repeated initial network handshake overhead.",
      "It automatically upgrades standard stateless HTTP requests into active full-duplex WebSocket streams."
    ],
    "answer": 2,
    "hint": "Instead of saying \"Hello\" and \"Goodbye\" for every single image on a webpage, you say \"Hello\" once and download them all."
  },
  {
    "id": "q46",
    "topic": "Security and Performance",
    "question": "What is the purpose of the Strict-Transport-Security (HSTS) header?",
    "options": [
      "It actively prevents unauthorized remote Cross-Origin Resource Sharing (CORS) network requests.",
      "It forces the browser to exclusively contact the site over encrypted and secure HTTPS connections.",
      "It strictly blocks all inline and external asynchronous JavaScript execution on the rendered web page.",
      "It securely validates the returned ETag payload for precise browser-level local resource caching."
    ],
    "answer": 1,
    "hint": "It ensures that no one can accidentally connect to your site over an insecure, unencrypted connection."
  },
  {
    "id": "q47",
    "topic": "Security and Performance",
    "question": "Which HTTP header restricts which scripts, styles, and resources a page is allowed to load, drastically reducing the risk of XSS attacks?",
    "options": [
      "Access-Control-Allow-Origin",
      "Content-Security-Policy (CSP)",
      "X-Request-ID",
      "Cache-Control"
    ],
    "answer": 1,
    "hint": "Think of it as a \"Policy\" that defines the \"Security\" of the \"Content\" allowed on the page."
  },
  {
    "id": "q48",
    "topic": "Security and Performance",
    "question": "What is the standard defense against a \"session fixation\" attack?",
    "options": [
      "Generating a completely new randomized session ID immediately after a successful user login event.",
      "Securely encrypting the user's plain-text password before persistently storing it in the database.",
      "Utilizing a highly optimized and secure offset-based pagination strategy for all authentication tables.",
      "Disabling session cookies entirely across the application and relying exclusively on local storage."
    ],
    "answer": 0,
    "hint": "If an attacker gives you a specific session ID to use, the server should throw it away and hand you a fresh one the moment you prove who you are."
  },
  {
    "id": "q49",
    "topic": "Data Storage",
    "question": "In database design, what is \"Normalization\"?",
    "options": [
      "Proactively caching frequent and heavy database query results in an external in-memory store like Redis.",
      "The highly automated internal process of migrating NoSQL document schemas into standard SQL tables.",
      "Structuring relational data efficiently to systematically avoid duplicating information across multiple tables.",
      "Reverting a corrupted or unstable database instance back to a previously verified and stable backup state."
    ],
    "answer": 2,
    "hint": "Instead of writing the user's home address into every single order they place, you store it once and reference it by ID."
  },
  {
    "id": "q50",
    "topic": "Collaboration and Version Control",
    "question": "What does the git revert command do?",
    "options": [
      "It completely and permanently erases a specified previous commit from the active project's Git history.",
      "It undoes a commit by creating a new, opposite commit without destructively altering the past history.",
      "It seamlessly moves actively modified files from the current working directory back to the staging area.",
      "It forcefully deletes the current active development branch and automatically switches the project to main."
    ],
    "answer": 1,
    "hint": "It safely rolls back a mistake by adding a \"fix\" commit on top, rather than dangerously rewriting the past."
  },
  {
    "id": "q51",
    "topic": "What Is the Web and Why Does It Matter?",
    "question": "A user opens a website using its domain name. What does DNS help the browser find?",
    "options": [
      "The certificate used to verify the website’s identity.",
      "The route used to forward packets across the network.",
      "The IP address associated with the requested hostname.",
      "The HTML document displayed at the requested location."
    ],
    "answer": 2,
    "hint": "Think about what the browser needs before it can contact the destination server."
  },
  {
    "id": "q52",
    "topic": "Security & Performance",
    "question": "Which change would make a request cross-origin compared with `https://example.com`?",
    "options": [
      "Sending the request to `https://api.example.com`.",
      "Sending the request to `https://example.com/help`.",
      "Sending the request to `https://example.com?lang=en`.",
      "Sending the request to `https://example.com/#contact`."
    ],
    "answer": 0,
    "hint": "An origin is defined by the scheme, hostname, and port."
  },
  {
    "id": "q53",
    "topic": "APIs and Data Exchange",
    "question": "A profile page requests account data from an API. What does `await fetch(url)` return when the request succeeds?",
    "options": [
      "A JavaScript object containing the parsed response body.",
      "An HTML element containing the returned server content.",
      "A string containing the response headers and body.",
      "A Response object with methods for reading the body."
    ],
    "answer": 3,
    "hint": "Think about why code often calls `.json()` after awaiting `fetch()`."
  },
  {
    "id": "q54",
    "topic": "HTTP Communication",
    "question": "An API returns HTTP 404 to a `fetch()` call. How should the application detect this HTTP error?",
    "options": [
      "Check whether the returned response body is empty.",
      "Check `response.ok` or the response’s status code.",
      "Check whether the returned Content-Type is JSON.",
      "Check the exception raised automatically by `fetch()`."
    ],
    "answer": 1,
    "hint": "Receiving an HTTP error response is different from failing to reach the server."
  },
  {
    "id": "q55",
    "topic": "Data Storage",
    "question": "An API needs to return a large list of products. Why might it use pagination?",
    "options": [
      "To reuse earlier results without querying the database.",
      "To distribute each request across several database servers.",
      "To return a limited portion of the results per request.",
      "To send the results in a compressed transfer format."
    ],
    "answer": 2,
    "hint": "Consider how much data a client needs to display one page of results."
  },
  {
    "id": "q56",
    "topic": "Security & Performance",
    "question": "A search endpoint builds SQL by joining user input directly into a query string. Which change best reduces SQL injection risk?",
    "options": [
      "Use parameterized queries to pass input separately from SQL.",
      "Use browser validation to reject punctuation before submission.",
      "Use HTTPS to encrypt the input sent to the server.",
      "Use JSON to encode the input before building SQL."
    ],
    "answer": 0,
    "hint": "The database needs to distinguish query instructions from user-provided values."
  },
  {
    "id": "q57",
    "topic": "Data Storage",
    "question": "Two database updates belong to one bank transfer. What is the main benefit of wrapping them in a transaction?",
    "options": [
      "Other requests can read the changes before they are committed.",
      "Repeating the transfer request leaves the balances unchanged.",
      "Both updates are scheduled to execute at the same time.",
      "Both updates commit together or are rolled back together."
    ],
    "answer": 3,
    "hint": "Consider what should happen if the second update fails."
  },
  {
    "id": "q58",
    "topic": "HTTP Communication",
    "question": "A server returns HTTP 429 with a `Retry-After` header. What should the client do?",
    "options": [
      "Refresh its access token before repeating the same request.",
      "Wait for the indicated period before retrying the request.",
      "Request a smaller response before repeating the same request.",
      "Open another connection before retrying the same request."
    ],
    "answer": 1,
    "hint": "Think about what the server is communicating about the request rate."
  },
  {
    "id": "q59",
    "topic": "Security & Performance",
    "question": "A website loads the same logo for users in several countries. How can a CDN reduce loading time?",
    "options": [
      "By keeping cached copies at locations closer to users.",
      "By storing the logo inside each user’s session cookie.",
      "By rendering the logo on the application’s database server.",
      "By bundling the logo into each API response payload."
    ],
    "answer": 0,
    "hint": "Consider the distance the file travels before reaching the browser."
  },
  {
    "id": "q60",
    "topic": "Background Processing",
    "question": "A payment provider may deliver the same webhook more than once. How should the receiver avoid processing the payment twice?",
    "options": [
      "Return a successful response before checking the event contents.",
      "Create a new internal event ID for every received delivery.",
      "Record processed event IDs and check for duplicate deliveries.",
      "Process events in the order of their arrival timestamps."
    ],
    "answer": 2,
    "hint": "Consider how the receiver can recognize an event it has already handled."
  },
  {
    "id": "q61",
    "topic": "Testing & Quality Assurance",
    "question": "Which task is most suitable for a unit test?",
    "options": [
      "Checking a checkout flow across the browser and payment service.",
      "Checking a database migration against a running database instance.",
      "Checking a deployed API through its public network endpoint.",
      "Checking a price calculation function with controlled input values."
    ],
    "answer": 3,
    "hint": "Think about the smallest piece of behavior that can be tested in isolation."
  },
  {
    "id": "q62",
    "topic": "Collaboration & Version Control",
    "question": "A developer runs `git commit` successfully. What has happened at this point?",
    "options": [
      "The changes have been uploaded to the remote repository.",
      "A snapshot of staged changes has been saved locally.",
      "The branch has been merged into the main branch.",
      "A deployment has been triggered on the production server."
    ],
    "answer": 1,
    "hint": "Think about the separate roles of `commit` and `push`."
  },
  {
    "id": "q63",
    "topic": "Security & Performance",
    "question": "Why is a content hash often included in a JavaScript filename, such as `app.a81f.js`?",
    "options": [
      "To let browsers check who published the JavaScript file.",
      "To let browsers reconstruct the file after a partial download.",
      "To change the resource URL when the file content changes.",
      "To choose a file version based on the browser’s capabilities."
    ],
    "answer": 2,
    "hint": "Think about how a browser distinguishes a cached file from a newer version."
  },
  {
    "id": "q64",
    "topic": "Deployment & Infrastructure",
    "question": "A frontend bundle contains a private API secret. Why is moving it into a build-time environment variable not enough to protect it?",
    "options": [
      "The value may still be included in the files sent to browsers.",
      "The value becomes part of the domain’s public DNS records.",
      "The value is copied into browser cookies during deployment.",
      "The value is added to outgoing HTTP headers by the browser."
    ],
    "answer": 0,
    "hint": "Consider where the value ends up after the frontend build is generated."
  },
  {
    "id": "q65",
    "topic": "What Is the Web and Why Does It Matter?",
    "question": "A page contains several “Read more” links for different articles. What would make these links clearer for screen reader users?",
    "options": [
      "Giving each link a larger clickable area around its text.",
      "Applying a distinct color to each link within the list.",
      "Opening each linked article in a separate browser tab.",
      "Giving each link a descriptive name that identifies its article."
    ],
    "answer": 3,
    "hint": "A user may navigate through a list of links without hearing the surrounding paragraphs."
  }
];

// Quiz labels mirror the exact English section titles used by the training pages.
// The source document supplies question text; the project curriculum determines grouping.
const QUIZ_TOPIC_BY_ID = {
  q1:'What Is the Web and Why Does It Matter?', q2:'What Is the Web and Why Does It Matter?',
  q3:'What Is the Web and Why Does It Matter?', q4:'What Is the Web and Why Does It Matter?',
  q5:'Client–Server Communication', q6:'Client–Server Communication', q7:'Client–Server Communication',
  q8:'HTTP Communication', q9:'HTTP Communication', q10:'HTTP Communication',
  q11:'HTTP Communication', q12:'HTTP Communication', q13:'HTTP Communication', q14:'HTTP Communication',
  q15:'APIs and Data Exchange', q16:'APIs and Data Exchange', q17:'APIs and Data Exchange',
  q18:'Authentication & User Management', q19:'Authentication & User Management',
  q20:'Authentication & User Management', q21:'Authentication & User Management',
  q22:'Authentication & User Management',
  q23:'Security & Performance', q24:'Security & Performance', q25:'Security & Performance',
  q26:'Security & Performance', q27:'Security & Performance',
  q28:'Data Storage', q29:'Data Storage', q30:'Data Storage',
  q31:'Background Processing', q32:'Background Processing', q33:'Background Processing',
  q34:'Background Processing',
  q35:'Testing & Quality Assurance', q36:'Testing & Quality Assurance', q37:'Testing & Quality Assurance',
  q38:'Deployment & Infrastructure', q39:'Deployment & Infrastructure',
  q40:'Collaboration & Version Control',
  q41:'What Is the Web and Why Does It Matter?', q42:'What Is the Web and Why Does It Matter?',
  q43:'What Is the Web and Why Does It Matter?', q44:'What Is the Web and Why Does It Matter?',
  q45:'HTTP Communication', q46:'HTTP Communication', q47:'HTTP Communication',
  q48:'Authentication & User Management', q49:'Data Storage', q50:'Collaboration & Version Control',
  q51: "What Is the Web and Why Does It Matter?",
  q52: "Security & Performance",
  q53: "APIs and Data Exchange",
  q54: "HTTP Communication",
  q55: "Data Storage",
  q56: "Security & Performance",
  q57: "Data Storage",
  q58: "HTTP Communication",
  q59: "Security & Performance",
  q60: "Background Processing",
  q61: "Testing & Quality Assurance",
  q62: "Collaboration & Version Control",
  q63: "Security & Performance",
  q64: "Deployment & Infrastructure",
  q65: "What Is the Web and Why Does It Matter?"

};

QUIZ_QUESTIONS_EN.forEach(question=>{
  question.topic=QUIZ_TOPIC_BY_ID[question.id];
});
