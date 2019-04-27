const LocalStorage = {};

LocalStorage.get = (key) => {
  const rawData = window.localStorage.getItem(key);
  return JSON.parse(rawData);
};

LocalStorage.set = (key, data) => {
  const serialized = JSON.stringify(data);
  window.localStorage.setItem(key, serialized);
};

LocalStorage.clear = (key) => {
  localStorage.removeItem(key);
}

export default LocalStorage;
