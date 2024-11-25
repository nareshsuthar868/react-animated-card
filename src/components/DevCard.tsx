import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GitPullRequest, DollarSign, Star, Github, Twitter } from 'lucide-react';

interface DevCardProps {
  name: string;
  username: string;
  avatar: string;
  issuesResolved: number;
  bountiesEarned: number;
  prizesWon: number;
  topLanguages: string[];
  githubUrl: string;
  twitterUrl: string;
}

export const DevCard: React.FC<DevCardProps> = ({
  name,
  username,
  avatar,
  issuesResolved,
  bountiesEarned,
  prizesWon,
  topLanguages,
  githubUrl,
  twitterUrl,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-[2px] rounded-2xl hover:shadow-2xl transition-all duration-300 hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600"
    >
      <div className="bg-gray-900 rounded-2xl p-6 h-full">
        <div className="flex items-start justify-between mb-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 group"
          >
            <motion.div className="relative">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full border-2 border-purple-500 group-hover:border-pink-500 transition-colors"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-gray-900"
              />
            </motion.div>
            <div>
              <motion.h2 
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold text-white cursor-default"
              >
                {name}
              </motion.h2>
              <p className="text-gray-400 group-hover:text-purple-400 transition-colors">@{username}</p>
            </div>
          </motion.div>
          <div className="flex space-x-2">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-default"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GitPullRequest className="w-6 h-6 text-green-500 mx-auto mb-2" />
            </motion.div>
            <p className="text-2xl font-bold text-white">{issuesResolved}</p>
            <p className="text-xs text-gray-400">Issues Resolved</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-default"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <DollarSign className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            </motion.div>
            <p className="text-2xl font-bold text-white">${bountiesEarned}</p>
            <p className="text-xs text-gray-400">Bounties Earned</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-default"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Trophy className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            </motion.div>
            <p className="text-2xl font-bold text-white">{prizesWon}</p>
            <p className="text-xs text-gray-400">Prizes Won</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-center mb-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
            </motion.div>
            <h3 className="text-white font-semibold">Top Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {topLanguages.map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 hover:text-white transition-colors cursor-default"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}