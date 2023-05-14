export type Item = {
  name: string;
  src: string;
};

export type StorageGet = (key: string) => any;

export type StorageSet = (key: string, data: string) => any;
