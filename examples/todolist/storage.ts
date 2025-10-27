import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from './types';

const STORAGE_KEY = '@TodoList:todos';

// 保存 todos 到本地存储
export const saveTodos = async (todos: Todo[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos:', error);
    throw error;
  }
};

// 从本地存储加载 todos
export const loadTodos = async (): Promise<Todo[]> => {
  try {
    const todosJson = await AsyncStorage.getItem(STORAGE_KEY);
    return todosJson ? JSON.parse(todosJson) : [];
  } catch (error) {
    console.error('Error loading todos:', error);
    return [];
  }
};

// 清除所有 todos
export const clearTodos = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing todos:', error);
    throw error;
  }
};
