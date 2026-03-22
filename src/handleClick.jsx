const handleClick = (setItem) => {
  setItem((prev) => prev * 10);
  setItem("");
};


export default handleClick