const IndexFunctions = {
  generateAnswer() {
    const possibleAnswers = [
      "Absolutely!",
      "I wouldn't be so sure..",
      "Yeah, for sure!",
      "You shouldn't count on that.",
      "No doubt!",
      "Try asking again later.",
      "Yes, totally!",
      "My answer is no.",
      "You can count on it.",
      "It's better not tell you.",
      "I would say yes.",
      "My sources are telling me no.",
      "Probably.",
      "Can't say for now.",
      "Yes.",
      "Take a breath, ask again.",
      "The signs indicate no.",
    ];
    const possibilities = Math.random() * (possibleAnswers.length - 1);

    return possibleAnswers[Math.round(possibilities)];
  },
};

export default IndexFunctions;