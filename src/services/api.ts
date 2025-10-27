/**
 * API 服务示例
 *
 * 封装所有 API 请求，统一处理：
 * - 请求配置
 * - 错误处理
 * - 认证
 * - 响应转换
 */

const API_BASE_URL = process.env.API_URL || 'https://api.example.com';

interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}

/**
 * 基础请求函数
 */
async function request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
  const { params, ...fetchConfig } = config;

  // 构建 URL（带查询参数）
  let url = `${API_BASE_URL}${endpoint}`;
  if (params) {
    const queryString = new URLSearchParams(params).toString();
    url += `?${queryString}`;
  }

  // 默认配置
  const defaultConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...fetchConfig.headers,
    },
  };

  try {
    const response = await fetch(url, { ...defaultConfig, ...fetchConfig });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
}

/**
 * GET 请求
 */
export function get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  return request<T>(endpoint, { method: 'GET', params });
}

/**
 * POST 请求
 */
export function post<T>(endpoint: string, data?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * PUT 请求
 */
export function put<T>(endpoint: string, data?: unknown): Promise<T> {
  return request<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * DELETE 请求
 */
export function del<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint, { method: 'DELETE' });
}

// 示例 API 函数
// export const userAPI = {
//   getUser: (id: string) => get<User>(`/users/${id}`),
//   createUser: (data: CreateUserData) => post<User>('/users', data),
//   updateUser: (id: string, data: UpdateUserData) => put<User>(`/users/${id}`, data),
//   deleteUser: (id: string) => del(`/users/${id}`),
// };
