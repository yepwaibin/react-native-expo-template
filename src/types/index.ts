/**
 * 全局 TypeScript 类型定义
 *
 * 在这里定义项目中使用的所有类型和接口
 */

// 示例：用户类型
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
}

// 示例：API 响应类型
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// 示例：分页类型
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

// 根据你的项目需求添加更多类型...
