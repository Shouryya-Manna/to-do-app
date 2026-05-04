/**
 * ======================================================
 *                        Types
 * ======================================================
 */
export type ToDo = { id: string; text: string; completed: boolean };

export type ToDoData = ToDo[];

/**
 * ======================================================
 *                        Data
 * ======================================================
 */

export const TODO_DATA = [
  { id: "1", text: "Finish todo UI", completed: false },
  { id: "2", text: "Fix FlatList bug", completed: true },
  { id: "3", text: "Study Excel basics", completed: false },
  { id: "4", text: "Push code to GitHub", completed: true },
];