import React, { useState } from 'react';
import { MessageSquare, Wand2, Share2, Info } from 'lucide-react';

const QuickPostManager = () => {
  const [userInput, setUserInput] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [postLength, setPostLength] = useState('short');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleAIAssist = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setAiOutput(
        postLength === 'short' 
          ? `✨ ${userInput.slice(0, 100)}... #AIClub #LearnFromAI`
          : `🎯 ${userInput}\n\nLet me expand on that...\n\nJoin us this Saturday to learn more! #AIClub #FutureOfLearning #AIEducation`
      );
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen md:min-h-0 md:my-8 md:rounded-xl md:shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-white">
        <h1 className="text-3xl font-bold mb-2">QuickPost Manager</h1>
        <p className="text-lg opacity-90">Let AI perfect your social media posts! 🤖✨</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <select 
              value={postLength}
              onChange={(e) => setPostLength(e.target.value)}
              className="border rounded-lg px-4 py-2 bg-white flex-grow md:flex-grow-0"
            >
              <option value="short">Short Form</option>
              <option value="long">Long Form</option>
            </select>
            
            <div className="flex gap-2 flex-wrap flex-grow justify-end">
              <button
                onClick={() => handlePlatformToggle('twitter')}
                className={`px-4 py-2 rounded-lg border ${
                  selectedPlatforms.includes('twitter') 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300'
                }`}
              >
                Twitter
              </button>
              <button
                onClick={() => handlePlatformToggle('linkedin')}
                className={`px-4 py-2 rounded-lg border ${
                  selectedPlatforms.includes('linkedin') 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300'
                }`}
              >
                LinkedIn
              </button>
              <button
                onClick={() => handlePlatformToggle('instagram')}
                className={`px-4 py-2 rounded-lg border ${
                  selectedPlatforms.includes('instagram') 
                    ? 'bg-blue-50 border-blue-500 text-blue-700' 
                    : 'border-gray-300'
                }`}
              >
                Instagram
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-800">
            <MessageSquare className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Your Content</h2>
          </div>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Write your post content here, and I'll help make it perfect!"
            className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAIAssist}
            disabled={!userInput.trim() || isProcessing}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 
              disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Wand2 className="w-5 h-5" />
            {isProcessing ? 'Perfecting your post...' : 'Let AI Perfect This!'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <Wand2 className="w-5 h-5" />
            <h2 className="text-xl font-semibold">AI Enhanced Version</h2>
          </div>
          <div className="w-full h-48 p-4 bg-rose-50 border border-rose-100 rounded-lg overflow-y-auto">
            {aiOutput ? (
              <div className="prose">
                {aiOutput.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                I'll help enhance your post with the perfect tone and hashtags for your selected platforms!
              </p>
            )}
          </div>
          {aiOutput && (
            <div className="flex gap-2">
              <button 
                className="flex-1 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share Now
              </button>
              <button 
                className="flex-1 border border-rose-600 text-rose-600 px-6 py-3 rounded-lg hover:bg-rose-50 flex items-center justify-center gap-2"
              >
                Save Draft
              </button>
            </div>
          )}
        </div>

        <div className="bg-blue-50 rounded-lg p-4 flex gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-blue-800 mb-1">AI Assistant Tips</h3>
            <p className="text-sm text-blue-600">
              For best results, include your key message and target audience. I'll help with tone, 
              hashtags, and platform-specific formatting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPostManager;
