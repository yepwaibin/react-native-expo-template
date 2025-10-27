# 示例代码

这个目录包含完整的示例应用，可以作为学习参考。

## TodoList 示例

`todolist/` 目录包含一个完整的待办事项应用，展示：

- ✅ 组件化架构
- ✅ 状态管理（useState, useEffect, useCallback）
- ✅ 本地存储（AsyncStorage）
- ✅ 列表渲染（FlatList）
- ✅ TypeScript 类型定义
- ✅ 样式组织

### 如何使用

#### 方式 1：作为参考

保留在 `examples/` 目录，在开发时作为参考。

#### 方式 2：复制到项目

```bash
# 复制组件
cp -r examples/todolist/components/* src/components/

# 复制工具
cp examples/todolist/types.ts src/types/
cp examples/todolist/storage.ts src/utils/
```

#### 方式 3：运行示例

如果想运行 TodoList 示例：

1. 将 `examples/todolist/App.tsx` 复制到根目录
2. 修改根目录的 `App.tsx` 引入它
3. 运行 `npm start`

## 清理示例

如果不需要示例代码，可以删除：

```bash
rm -rf examples/
```

---

**这些示例帮助你快速理解项目结构和最佳实践！**
