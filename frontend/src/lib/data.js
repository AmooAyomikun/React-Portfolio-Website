export const projects = [
  {
    id: "nexara",
    title: "Nexara",
    slug: "nexara",
    shortDescription: "A high-performance e-commerce storefront optimized for conversion.",
    description: "A high-performance headless e-commerce storefront designed to maximize conversion rates while maintaining a premium brand aesthetic.",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["HTML5", "CSS3", "JavaScript", "Django"],
    heroImage: "https://placehold.co/1200x675/1e1e1e/c6ff3d?text=Nexara+Storefront",
    gallery: [
      "https://placehold.co/800x450/1e1e1e/c6ff3d?text=Product+Page",
      "https://placehold.co/800x450/1e1e1e/c6ff3d?text=Checkout+Flow"
    ],
    problem: "The client's previous monolithic architecture was slow, leading to high bounce rates and cart abandonment. Content updates required developer intervention, slowing down marketing campaigns.",
    solution: "Architected a headless solution using Next.js for the frontend and Sanity CMS for content. This decoupled approach empowered the marketing team to manage content independently while ensuring sub-second page loads globally via edge caching.",
    technicalChallenges: [
      {
        title: "State Management for Complex Cart Interactions",
        content: "Handling optimistic UI updates for cart modifications while syncing with the backend inventory API required a robust state machine approach. I implemented a custom React context layer with SWR for data fetching, ensuring the UI felt instantaneous while maintaining data consistency."
      },
      {
        title: "Dynamic Image Optimization at the Edge",
        content: "To support the premium aesthetic without compromising performance, we needed to serve highly optimized images. I integrated a custom image loader that leveraged edge functions to dynamically resize and compress images based on the user's device viewport and network conditions."
      }
    ],
    techStackDetails: "Next.js was chosen for its SSR and static site generation capabilities, crucial for SEO and perceived performance. Tailwind CSS enabled rapid UI iteration aligned with the strict design system. Stripe provided the payment infrastructure, and Sanity CMS offered the flexibility required for the complex product data model."
  },
  {
    id: "cadence",
    title: "Cadence",
    slug: "cadence",
    shortDescription: "A developer-focused project management tool with command palette navigation.",
    description: "A keyboard-first project management platform built for engineering teams, prioritizing speed and workflow integration.",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["React", "Django", "Django Channels"],
    heroImage: "https://placehold.co/1200x675/1e1e1e/c6ff3d?text=Cadence+Dashboard",
    gallery: [
      "https://placehold.co/800x450/1e1e1e/c6ff3d?text=Kanban+Board",
      "https://placehold.co/800x450/1e1e1e/c6ff3d?text=Command+Palette"
    ],
    problem: "Existing project management tools were too bloated and mouse-heavy for engineering teams, causing friction in daily task updates and sprint planning.",
    solution: "Developed Cadence with a keyboard-first philosophy. A ubiquitous command palette (Cmd+K) allows users to create tasks, assign members, and transition states without lifting their hands from the keyboard. Real-time updates ensure the whole team is always in sync.",
    technicalChallenges: [
      {
        title: "Performant Real-time Synchronization",
        content: "Keeping the Kanban board in sync across dozens of concurrent users without layout thrashing was challenging. I implemented a WebSocket-based sync engine using Socket.io that batches small state updates and applies them via a custom reconciliation algorithm, ensuring smooth drag-and-drop operations even during active background updates."
      },
      {
        title: "Complex Command Palette Parsing",
        content: "The command palette needed to understand natural language inputs like 'assign @jane to bug in frontend tomorrow'. I built a lightweight parsing engine on the client side that extracts entities (users, tags, dates) using regex and fuzzy matching, providing instantaneous feedback to the user before submitting to the API."
      }
    ],
    techStackDetails: "React and TypeScript ensured type safety and maintainability for the complex client-side state. Node.js and PostgreSQL provided a robust backend. Socket.io was selected for real-time capabilities due to its reliable fallback mechanisms and ease of integration with the existing Node architecture."
  }
];
