import AsyncStorage from '@react-native-async-storage/async-storage';
import { setItem, getItem, removeItem, clear } from '../src/utils/storage';

// AsyncStorage 已在 jest.setup.js 中被 mock

describe('Storage Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('setItem', () => {
    it('saves data correctly', async () => {
      const data = { name: 'John', age: 30 };
      await setItem('user', data);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(data));
    });

    it('throws error when save fails', async () => {
      (AsyncStorage.setItem as jest.Mock).mockRejectedValue(new Error('Save failed'));

      await expect(setItem('key', 'value')).rejects.toThrow('Save failed');
    });
  });

  describe('getItem', () => {
    it('retrieves data correctly', async () => {
      const data = { name: 'John', age: 30 };
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(data));

      const result = await getItem('user');
      expect(result).toEqual(data);
    });

    it('returns null when key does not exist', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

      const result = await getItem('nonexistent');
      expect(result).toBeNull();
    });

    it('returns null when retrieval fails', async () => {
      (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error('Read failed'));

      const result = await getItem('key');
      expect(result).toBeNull();
    });
  });

  describe('removeItem', () => {
    it('removes item correctly', async () => {
      await removeItem('user');
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('user');
    });
  });

  describe('clear', () => {
    it('clears all storage', async () => {
      await clear();
      expect(AsyncStorage.clear).toHaveBeenCalled();
    });
  });
});
