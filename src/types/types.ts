export type Question = {
  id: number;
  groupId: number;
  title: string;
  content: string;
};
export type Group = {
  columnType: string;
  id: number;
  name: string;
};

export type Groups = {
  [key: string]: [Group];
};

export type Item = {
  id: number;
  groupId: number;
  title: string;
  content: string;
  group: Group;
};
