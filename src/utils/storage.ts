import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 本地存储工具函数
 *
 * 封装 AsyncStorage，提供类型安全的存储操作
 */

/**
 * 保存数据到本地存储
 */
export async function setItem<T>(key: string, value: T): Promise<void> {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(`Failed to save ${key}:`, error);
    throw error;
  }
}

/**
 * 从本地存储读取数据
 */
export async function getItem<T>(key: string): Promise<T | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Failed to load ${key}:`, error);
    return null;
  }
}

/**
 * 从本地存储删除数据
 */
export async function removeItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to remove ${key}:`, error);
    throw error;
  }
}

/**
 * 清空所有本地存储
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Failed to clear storage:', error);
    throw error;
  }
}
