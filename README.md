<div align="center">

```
███╗   ███╗██╗   ██╗███████╗███████╗ ░
████╗ ████║██║   ██║██╔════╝██╔════╝ ░
██╔████╔██║██║   ██║███████╗█████╗   ░
██║╚██╔╝██║██║   ██║╚════██║██╔══╝   ░
██║ ╚═╝ ██║╚██████╔╝███████║███████╗ ░
╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚══════╝ ░
```

### *A premium web-based music experience.*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-fa233b?style=for-the-badge)

</div>

---

## ✦ What is Muse.?

**Muse.** is a modern, responsive, multi-page music player built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. It replicates the premium feel of native apps like Apple Music, featuring a dynamic glassmorphism UI, a fully functional audio engine, and fluid transitions between pages.

> Built as a Web Development course project by **Arjun Sheoran** & **Atharv Bains**.

---

## ✦ Feature Highlights

| Feature | Description |
|---|---|
| 🎵 **Dynamic Player** | Full audio playback with play/pause, skip, seek, and volume control |
| 🌀 **Rotating Album Art** | Vinyl-style spinning artwork during active playback |
| 🎨 **Adaptive Backgrounds** | Blurred, color-matched backdrop pulled from the current track's album art |
| 🔀 **Random & Repeat** | Shuffle mode and single-track repeat toggle |
| 📚 **Searchable Library** | 20-track library with live search/filter |
| 🗂️ **Curated Playlists** | 4 hand-picked playlists: Pop Hits, Retro Rewind, Late Night Vibes, High Energy |
| 🏠 **Dynamic Home Feed** | Hero banner, horizontal scroll cards, and quick-link navigation |
| 🔐 **Auth Flow** | Simulated Login & Sign Up with localStorage state |
| 📱 **Fully Responsive** | Optimized for both mobile (app view) and desktop (dashboard view) |

---

## ✦ Pages

```
muse/
├── home.html        →  Dashboard: hero, recommendations, quick links
├── player.html      →  Full-screen music player
├── library.html     →  Searchable list of all 20 tracks
├── playlists.html   →  Curated playlist collections
├── about.html       →  Team info & project overview
├── login.html       →  User login (simulated)
└── signup.html      →  Account creation (simulated)
```

---

## ✦ Tech Stack

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   HTML5      →   Semantic page structure            │
│   CSS3       →   Flexbox · Grid · Animations        │
│                  Glassmorphism · Backdrop Filters   │
│                  CSS Variables · Keyframes          │
│   JavaScript →   Web Audio API · DOM Manipulation   │
│                  URL Params · Event Handling        │
│                  LocalStorage State Management      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## ✦ Music Library

The app ships with **20 tracks** spanning multiple genres and eras:

| # | Track | Artist |
|---|---|---|
| 1 | Animals | Maroon 5 |
| 2 | As It Was | Harry Styles |
| 3 | Attention | Charlie Puth |
| 4 | Bad | Michael Jackson |
| 5 | Beat It | Michael Jackson |
| 6 | Believer | Imagine Dragons |
| 7 | Blank Space | Taylor Swift |
| 8 | Blinding Lights | The Weeknd |
| 9 | bloodline | Ariana Grande |
| 10 | Bones | Imagine Dragons |
| 11 | LA Girls | Charlie Puth |
| 12 | Levitating | Dua Lipa |
| 13 | Light Switch | Charlie Puth |
| 14 | Low (feat. T-Pain) | Flo Rida |
| 15 | Rasputin | Boney M. |
| 16 | See You Again | Charlie Puth |
| 17 | Sunflower | Post Malone |
| 18 | The Way I Am | Charlie Puth |
| 19 | There's Nothing Holdin' Me Back | Shawn Mendes |
| 20 | We Don't Talk Anymore | Charlie Puth |

---

## ✦ Project Structure

```
muse/
├── index / pages
│   ├── home.html
│   ├── player.html
│   ├── library.html
│   ├── playlists.html
│   ├── about.html
│   ├── login.html
│   └── signup.html
│
├── assets
│   ├── style.css          ← All styling (glassmorphism, animations, layout)
│   ├── script.js          ← Audio engine & player logic
│   ├── songs.js           ← Music data (metadata array)
│   ├── music/             ← MP3 audio files
│   └── images/            ← Album artwork & favicon
```

---

## ✦ Getting Started

No build tools. No installs. Just open and play.

```bash
# Clone the repository
git clone https://github.com/your-username/muse.git

# Navigate into the project
cd muse

# Open in browser
open home.html
```

> 💡 For best results, serve via a local server (e.g. VS Code Live Server) to avoid browser audio restrictions on `file://` URLs.

---

## ✦ The Team

<table>
<tr>
<td align="center" width="50%">

### Arjun Sheoran
**Full Stack Developer**

Passionate about audio engineering and seamless user experiences. Architected the player engine, routing logic, and backend simulation.

</td>
<td align="center" width="50%">

### Atharv Bains
**UI/UX Designer**

Driven by color theory and intuitive interaction design. Crafted the glassmorphism aesthetic, layout system, and every visual detail.

</td>
</tr>
</table>

---

## ✦ Design Philosophy

Muse. draws inspiration from **Apple Music's** dark, premium interface language — but pushes it further with:

- **Glassmorphism** — frosted-glass cards, blurred backdrops, layered transparency
- **Dynamic theming** — backgrounds shift color with each track change
- **Fluid motion** — vinyl rotation, hover lifts, smooth transitions
- **Intentional typography** — hierarchy-first, system font stack for native feel

---

<div align="center">

*Made with* ❤️ *for a Web Development course.*

**Muse.** — *Listen without limits.*

</div>
