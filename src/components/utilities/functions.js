export const getUnique = arr => {
  const photos = new Set();
  const unique = [];
  for (let obj of arr) {
    if (!photos.has(obj.id)) {
      photos.add(obj.id);
      unique.push({ ...obj });
    }
  }
  return unique;
};

export const handleOnScroll = () => {
  const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
  const scrollHeight =
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  if (Math.ceil(scrollTop + clientHeight) >= scrollHeight - 356) return true;
  return false;
};
