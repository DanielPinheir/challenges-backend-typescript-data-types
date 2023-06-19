const letterSeparator = (text: string): string => {
  return text.split("").join("-");
};

console.log(letterSeparator("programador"));
