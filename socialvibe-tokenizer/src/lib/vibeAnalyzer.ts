export async function analyzeTweetVibe(text: string) {
  // Enhanced mock analysis
  const positiveWords = ['love', 'great', 'amazing', 'awesome', 'bullish', 'excited', 'happy', 'perfect', 'fantastic', 'wonderful'];
  const negativeWords = ['hate', 'terrible', 'awful', 'bearish', 'scam', 'rug', 'worst', 'bad', 'sad', 'angry'];
  
  const lowerText = text.toLowerCase();
  let positiveCount = 0;
  let negativeCount = 0;
  
  positiveWords.forEach(word => {
    if (lowerText.includes(word)) positiveCount++;
  });
  
  negativeWords.forEach(word => {
    if (lowerText.includes(word)) negativeCount++;
  });

  let sentiment = 'NEUTRAL';
  let positiveScore = 0.5;
  
  if (positiveCount > negativeCount) {
    sentiment = 'POSITIVE';
    positiveScore = 0.7 + (positiveCount * 0.1);
  } else if (negativeCount > positiveCount) {
    sentiment = 'NEGATIVE';
    positiveScore = 0.3 - (negativeCount * 0.1);
  }

  positiveScore = Math.max(0.1, Math.min(0.95, positiveScore));

  return {
    Sentiment: sentiment,
    SentimentScore: {
      Positive: positiveScore,
      Negative: 1 - positiveScore,
      Neutral: 0.1,
      Mixed: 0.1
    }
  };
}
