export type TaskType = {
  id: string;
  text: string;
  checked: boolean;
  error?: null | string;
};

export type FilterType = 'active' | 'all' | 'completed';
