function timePosted(date) {
  let seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let t = seconds / 31536000;

  if (t > 1) {
    return t + " years";
  }
  t = Math.floor(seconds / 2592000);
  if (t > 1) {
    return t + " months";
  }
  t = Math.floor(seconds / 86400);
  if (t > 1) {
    return t + " days";
  }
  t = Math.floor(seconds / 3600);
  if (t > 1) {
    return t + " hours";
  }
  t = Math.floor(seconds / 60);
  if (t > 1) {
    return t + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export { timePosted };
