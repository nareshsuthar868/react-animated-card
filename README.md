# Animated Developer Card

A beautiful, animated React component that showcases developer statistics and achievements with smooth, interactive animations. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🔥 Live Demo

Check out the live demo: [Dev Card Demo](https://react-animated-card-three.vercel.app)

## ✨ Features

- 🎨 Modern, gradient-bordered design
- 🌟 Smooth hover animations and transitions
- 📱 Fully responsive layout
- 🎯 Interactive statistics display
- 🏆 Achievement showcasing
- 🔗 Social media integration
- 🎭 Dynamic language tags

## 🚀 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## 📦 Installation

```bash
npm install
npm run dev
```

## 💻 Usage

```tsx
import { DevCard } from './components/DevCard';

function App() {
  return (
    <DevCard
      name="Sarah Johnson"
      username="sarahdev"
      avatar="https://example.com/avatar.jpg"
      issuesResolved={127}
      bountiesEarned={2450}
      prizesWon={8}
      topLanguages={['TypeScript', 'React', 'Node.js', 'Python', 'Go']}
      githubUrl="https://github.com"
      twitterUrl="https://twitter.com"
    />
  );
}
```

## 🎯 Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Developer's full name |
| `username` | `string` | Developer's username |
| `avatar` | `string` | URL to developer's avatar image |
| `issuesResolved` | `number` | Number of resolved issues |
| `bountiesEarned` | `number` | Total bounties earned in USD |
| `prizesWon` | `number` | Number of prizes/achievements won |
| `topLanguages` | `string[]` | Array of top programming languages |
| `githubUrl` | `string` | GitHub profile URL |
| `twitterUrl` | `string` | Twitter profile URL |

## ✨ Animations

The component features several interactive animations:

- Card scale and gradient transitions on hover
- Profile image zoom effect
- Rotating social media icons
- Floating statistics cards
- Dynamic language tag animations
- Smooth entry animations on mount

## 📱 Responsive Design

The card automatically adjusts to different screen sizes while maintaining its visual appeal and functionality.

## 🙏 Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion)
- Styling with [Tailwind CSS](https://tailwindcss.com)