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
  { id: "5", text: "Learn React Context API", completed: false },
  { id: "6", text: "Build authentication screen", completed: true },
  { id: "7", text: "Practice TypeScript types", completed: false },
  { id: "8", text: "Create dark mode theme", completed: false },
  { id: "9", text: "Fix navigation issue", completed: true },
  { id: "10", text: "Read about Redux Toolkit", completed: false },
  { id: "11", text: "Complete Spark fundamentals", completed: false },
  { id: "12", text: "Watch React Native tutorial", completed: true },
  { id: "13", text: "Refactor Todo component", completed: false },
  { id: "14", text: "Learn Expo Router", completed: true },
  { id: "15", text: "Design app logo", completed: false },
  { id: "16", text: "Write reusable button component", completed: false },
  { id: "17", text: "Optimize FlatList rendering", completed: true },
  { id: "18", text: "Prepare for MS Office exam", completed: false },
  { id: "19", text: "Study PowerPoint animations", completed: true },
  { id: "20", text: "Practice Excel formulas", completed: false },
];