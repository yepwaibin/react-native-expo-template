import { useState, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * 自定义 Hook 示例：useAsync
 *
 * 用于处理异步操作的通用 Hook
 *
 * @example
 * const { data, loading, error, execute } = useAsync(fetchUser);
 *
 * useEffect(() => {
 *   execute(userId);
 * }, [userId]);
 */
export function useAsync<T, Args extends unknown[]>(asyncFunction: (...args: Args) => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: Args) => {
      setState({ data: null, loading: true, error: null });

      try {
        const data = await asyncFunction(...args);
        setState({ data, loading: false, error: null });
        return data;
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error });
        throw error;
      }
    },
    [asyncFunction]
  );

  return { ...state, execute };
}
