import React from 'react';
import { DevCard } from './components/DevCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <DevCard
        name="Sarah Johnson"
        username="sarahdev"
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
        issuesResolved={127}
        bountiesEarned={2450}
        prizesWon={8}
        topLanguages={['TypeScript', 'React', 'Node.js', 'Python', 'Go']}
        githubUrl="https://github.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}

export default App;