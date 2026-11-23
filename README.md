# Ryan Bowler - Portfolio

A responsive portfolio for Ryan Bowler, a software engineer with a background in mechanical design engineering. Built with Next.js, TypeScript and Tailwind CSS.

### 🌟 Key Features

- Statically rendered Home and About pages using the Next.js App Router.
- Responsive layouts with semantic HTML and visible keyboard focus.
- In-page navigation that respects reduced-motion preferences.
- Page-specific titles and descriptions, social-sharing metadata, a sitemap and `robots.txt`.

### 🛠️ Technologies Used

- **Next.js** for routing and rendering.
- **React** for UI components.
- **TypeScript** for type safety.
- **Tailwind CSS** for styling.

### 📁 Project Structure

```text
.
├── app/
│   ├── _components/    # Shared header, navigation and footer
│   ├── _site.ts        # Site settings and metadata
│   ├── about/page.tsx  # About page
│   ├── globals.css     # Theme and shared styles
│   ├── icon.png        # Site icon
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── robots.ts      # Crawler directives
│   └── sitemap.ts     # Sitemap
├── public/            # Static assets
└── next.config.ts     # Next.js configuration
```

### 🚀 Getting Started

Install Node.js 20.9 or later. From the project directory, install dependencies and start the development server.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

Build and run the site in production mode.

```sh
npm run build
npm start
```

Run ESLint with `npm run lint`.

### 📫 Contact

Connect with Ryan on [LinkedIn](https://www.linkedin.com/in/ryan-bowler-601919170/).
