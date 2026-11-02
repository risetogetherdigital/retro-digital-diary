# Little Internet Diary

A cozy, handcrafted personal website inspired by the aesthetic of early internet blogs and modern scrapbook-style design. This project is built as a static frontend and is designed to be uploaded directly to Neocities or any simple web hosting service.

## Overview

Little Internet Diary is a small digital space for sharing:

- personal reflections
- moodboard-style notes
- favorite reminders and little treasures
- a guestbook for short messages

The design uses a soft pastel palette, handwritten-inspired typography, and playful interactions to create a warm, nostalgic online presence.

## Features

- Responsive single-page layout
- Hero section with soft editorial styling
- Diary card entries with expandable note modal
- Interactive “treasure” tiles with message reveal
- Guestbook form that shows notes in the browser session
- Clean static structure with no backend dependencies
- Mobile-friendly design

## Project Structure

```text
.
├── index.html      # Main page structure
├── style.css       # Styling, colors, layout, and responsiveness
├── script.js       # Interactive diary, treasure, and guestbook behavior
├── README.md       # Project documentation
└── README.txt      # Short project notes
```

## Local Usage

1. Open the project folder in a browser, or run a local static file server.
2. Open `index.html` directly for quick preview.
3. For a local preview via server, you can use a simple command such as:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Neocities Upload

1. Sign in to your Neocities account.
2. Open your site dashboard.
3. Go to the file manager.
4. Upload:
   - `index.html`
   - `style.css`
   - `script.js`
5. If prompted to replace an existing `index.html`, back up the current site first.
6. Open your site URL to view the page.

## Notes

- This is a static frontend project and does not require a backend.
- The guestbook is a client-side demo only and does not store messages online.
- Google Fonts are loaded when internet access is available; fallback fonts are included.
- Replace the sample diary entries and text with your own content to personalize the page.

## Customization

You can easily personalize the site by editing:

- `index.html` for text and content sections
- `style.css` for colors, layout, spacing, and typography
- `script.js` for interactive behavior and guestbook logic

## License

This project is provided for personal and creative use. You can adapt it for your own site or portfolio as needed.

## Author

Little Internet Diary is a personal website template for creating a warm, handmade corner of the internet.
