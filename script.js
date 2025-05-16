const parseCode = (str) => {
  // Split using one or more zeros as the delimiter
  const parts = str.split(/0+/);
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
