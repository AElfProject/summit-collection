const isMac = () => /macintosh|mac os x/i.test(navigator.userAgent);

const isPC = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|SymbianOS|Windows Phone/i.test(
      navigator.userAgent
    )
  ) {
    return false;
  }
  return true;
};

export { isMac, isPC };
