import { StorageGet, StorageSet } from "../../types/types";

const get: StorageGet = (key) => {
  const result = JSON.parse(localStorage.getItem(key) as string);
  return result;
};

const set: StorageSet = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));

  return { get, set };
};

export const storage = {
  get,
  set,
};
