# React Native + Expo + TypeScript 项目模版

> 🚀 **生产就绪的 React Native 项目模版**
>
> 包含完整的技术栈、工程化配置、测试框架和最佳实践

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54.0-000020)](https://expo.dev/)
[![Jest](https://img.shields.io/badge/Jest-29.7-C21325)](https://jestjs.io/)

---

## 📖 目录

- [特性](#-特性)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [开发指南](#-开发指南)
- [测试指南](#-测试指南)
- [代码规范](#-代码规范)
- [Git 工作流](#-git-工作流)
- [部署发布](#-部署发布)
- [常见问题](#-常见问题)

---

## ✨ 特性

### 📦 技术栈

- ⚛️ **React Native 0.81** - 跨平台 UI 框架
- 🎨 **Expo 54** - 完整开发工具链
- 📘 **TypeScript 5.9** - 类型安全
- 💾 **AsyncStorage** - 本地数据持久化

### ⚙️ 工程化配置

- ✅ **ESLint** - 代码质量检查
- ✅ **Prettier** - 代码格式化
- ✅ **Husky** - Git hooks 自动化
- ✅ **Commitlint** - 提交信息规范
- ✅ **Jest + Testing Library** - 单元测试
- ✅ **TypeScript** - 严格模式类型检查

### 🎯 开箱即用

- ✅ 清晰的目录结构
- ✅ 示例组件和工具函数
- ✅ 完整的测试配置和示例
- ✅ 统一的代码风格
- ✅ Git 工作流规范
- ✅ VS Code 配置（团队共享）

---

## 🚀 快速开始

### 环境要求

- **Node.js 20+** 或 **22+**（推荐 22.13+）⚠️
  - ⚠️ Node 18 不支持（Metro bundler 需要 20+）
- **macOS**（用于 iOS 开发）
- **Xcode 15+**（iOS 模拟器）
- **Android Studio**（Android 开发，可选）

> **重要**: 必须使用 Node.js 20 或更高版本。使用 `nvm` 管理 Node 版本：
>
> ```bash
> nvm install 22
> nvm use 22
> node -v  # 确认版本
> ```

### 创建新项目

#### 方式 1：使用初始化脚本（推荐）

```bash
# 1. Clone 模版
git clone https://github.com/your-username/react-native-expo-template my-app
cd my-app

# 2. 运行初始化脚本
./init-project.sh

# 3. 按提示输入项目信息
# 项目名称: my-app
# 显示名称: My App
# Bundle ID: com.mycompany.myapp
# ...

# 4. 脚本会自动：
# - 更新配置文件
# - 清理 Git 历史
# - 安装依赖
# - 配置 Git hooks
```

#### 方式 2：手动初始化

```bash
# 1. Clone 模版
git clone https://github.com/your-username/react-native-expo-template my-app
cd my-app

# 2. 删除 Git 历史
rm -rf .git
git init

# 3. 更新项目信息
# 编辑 package.json 和 app.json

# 4. 安装依赖
npm install

# 5. 配置 Git hooks
npm run prepare
```

### 启动应用

```bash
# 推荐：使用统一启动脚本（确保正确的 Node 版本）
./RUN_NOW.sh

# 或直接启动
npm start

# 然后：
# - 按 'i' 启动 iOS 模拟器
# - 按 'a' 启动 Android 模拟器
# - 按 'w' 启动 Web 版本
# - 扫码在真机运行（需安装 Expo Go）
```

### 验证安装

```bash
# 运行测试
npm test

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

---

## 📂 项目结构

```
react-native-expo-template/
├── src/                        # 源代码目录
│   ├── screens/                # 页面/屏幕
│   │   └── HomeScreen.tsx      # 主页示例
│   ├── components/             # 可复用组件
│   │   └── Button.tsx          # 按钮组件示例
│   ├── hooks/                  # 自定义 Hooks
│   │   └── useAsync.ts         # 异步操作 Hook 示例
│   ├── utils/                  # 工具函数
│   │   └── storage.ts          # 本地存储工具
│   ├── services/               # API 服务
│   │   └── api.ts              # API 请求封装
│   ├── types/                  # TypeScript 类型
│   │   └── index.ts            # 全局类型定义
│   └── constants/              # 常量
│       └── index.ts            # 应用常量（颜色、尺寸等）
│
├── __tests__/                  # 测试文件
│   ├── Button.test.tsx         # 组件测试示例
│   └── storage.test.ts         # 工具函数测试示例
│
├── examples/                   # 示例代码（TodoList）
│   └── todolist/               # 完整的 TodoList 示例
│
├── assets/                     # 资源文件
│   ├── icon.png                # 应用图标
│   ├── splash-icon.png         # 启动屏
│   └── adaptive-icon.png       # Android 自适应图标
│
├── .husky/                     # Git hooks
│   ├── pre-commit              # 提交前检查
│   └── commit-msg              # 提交信息检查
│
├── .vscode/                    # VS Code 配置
│   ├── settings.json           # 编辑器设置
│   └── extensions.json         # 推荐扩展
│
├── .github/                    # GitHub 配置
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_TEMPLATE/
│
├── App.tsx                     # 应用入口（简洁）
├── app.json                    # Expo 配置
├── package.json                # 依赖管理
├── tsconfig.json               # TypeScript 配置
├── jest.config.js              # Jest 配置
├── jest.setup.js               # Jest 初始化
├── .eslintrc.js                # ESLint 配置
├── .prettierrc.js              # Prettier 配置
├── commitlint.config.js        # Commitlint 配置
├── .gitignore                  # Git 忽略规则
├── init-project.sh             # 项目初始化脚本
├── RUN_NOW.sh                  # 启动脚本
└── README.md                   # 本文件
```

### 目录说明

- **`src/`** - 所有源代码放在这里，保持根目录整洁
- **`src/screens/`** - 页面组件，每个页面一个文件
- **`src/components/`** - 可复用的 UI 组件
- **`src/hooks/`** - 自定义 React Hooks
- **`src/utils/`** - 工具函数（格式化、验证等）
- **`src/services/`** - API 请求、数据服务
- **`src/types/`** - TypeScript 类型定义
- **`src/constants/`** - 应用常量（主题、配置等）
- **`__tests__/`** - 测试文件，镜像 `src/` 结构
- **`examples/`** - 示例代码，可以删除或保留作为参考

---

## 💻 开发指南

### 添加新页面

```typescript
// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### 添加新组件

```typescript
// src/components/Card.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
```

### 添加自定义 Hook

```typescript
// src/hooks/useToggle.ts
import { useState, useCallback } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}
```

### API 调用

```typescript
// src/services/userService.ts
import { get, post } from './api';
import { User } from '../types';

export const userService = {
  getUser: (id: string) => get<User>(`/users/${id}`),
  createUser: (data: Partial<User>) => post<User>('/users', data),
};

// 在组件中使用
import { useAsync } from '../hooks/useAsync';
import { userService } from '../services/userService';

const { data, loading, error, execute } = useAsync(userService.getUser);

useEffect(() => {
  execute('user-id');
}, []);
```

### 常用命令

```bash
# 开发
npm start                   # 启动开发服务器
npm run ios                 # iOS 模拟器
npm run android             # Android 模拟器
npm run web                 # Web 版本

# 代码质量
npm run lint                # 检查代码
npm run lint:fix            # 自动修复
npm run format              # 格式化代码
npm run type-check          # 类型检查

# 测试
npm test                    # 运行测试
npm run test:watch          # 监听模式
npm run test:coverage       # 测试覆盖率

# 清理
rm -rf node_modules         # 删除依赖
npm install                 # 重新安装
npm start -- --reset-cache  # 清理缓存
```

---

## 🧪 测试指南

### 测试框架

- **Jest 29.7** - 测试运行器
- **Babel Jest** - TypeScript 转译
- **AsyncStorage Mock** - 存储模拟

> **注意**: React Native 组件测试需要复杂的环境配置。
> 本模版提供了**工具函数和 Hooks 测试**示例，这是最实用的测试方式。
> 如需组件测试，建议使用 E2E 测试框架（如 Detox）

### 编写测试

#### 纯函数测试（推荐）

```typescript
// __tests__/utils.test.ts
describe('formatCurrency', () => {
  it('formats numbers as currency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
    expect(formatCurrency(0)).toBe('$0.00');
  });
});

describe('validateEmail', () => {
  it('validates email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid')).toBe(false');
  });
});
```

#### 工具函数测试

```typescript
// __tests__/formatters.test.ts
import { formatCurrency, formatDate } from '../src/utils/formatters';

describe('Formatters', () => {
  describe('formatCurrency', () => {
    it('formats number as currency', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2025-01-01');
      expect(formatDate(date)).toBe('2025-01-01');
    });
  });
});
```

#### Hook 测试

```typescript
// __tests__/useToggle.test.ts
import { renderHook, act } from '@testing-library/react-native';
import { useToggle } from '../src/hooks/useToggle';

describe('useToggle', () => {
  it('toggles value', () => {
    const { result } = renderHook(() => useToggle(false));

    expect(result.current.value).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);
  });
});
```

### 运行测试

```bash
# 运行所有测试
npm test

# 监听模式（开发时使用）
npm run test:watch

# 生成覆盖率报告
npm run test:coverage

# 运行特定测试
npm test Button.test.tsx

# 更新快照
npm test -- -u
```

### 测试覆盖率

测试覆盖率报告会生成在 `coverage/` 目录：

```bash
npm run test:coverage

# 查看 HTML 报告
open coverage/lcov-report/index.html
```

---

## 📐 代码规范

### TypeScript

- ✅ 使用 `interface` 定义组件 Props
- ✅ 使用 `type` 定义联合类型
- ✅ 避免使用 `any`，使用 `unknown` 替代
- ✅ 启用严格模式

```typescript
// ✅ Good
interface UserProps {
  name: string;
  age: number;
  email?: string;
}

type Status = 'pending' | 'success' | 'error';

// ❌ Bad
const user: any = {}; // 不要使用 any
```

### 组件规范

```typescript
// ✅ Good - 功能组件 + TypeScript
export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return <TouchableOpacity onPress={onPress}>{title}</TouchableOpacity>;
};

// ❌ Bad - 类组件（除非必要）
class Button extends React.Component {
  // ...
}
```

### 命名规范

- **组件**: `PascalCase` - `Button`, `UserProfile`
- **函数**: `camelCase` - `handleClick`, `fetchUser`
- **常量**: `UPPER_SNAKE_CASE` - `API_URL`, `MAX_COUNT`
- **文件名**:
  - 组件: `PascalCase.tsx` - `Button.tsx`
  - 工具: `camelCase.ts` - `formatters.ts`

### ESLint 规则

主要规则（可在 `.eslintrc.js` 中修改）：

```javascript
{
  'no-console': 'warn',              // 警告 console
  'no-unused-vars': 'error',         // 禁止未使用的变量
  'react-hooks/exhaustive-deps': 'warn',  // 检查 Hook 依赖
  'prettier/prettier': 'error',      // Prettier 格式化
}
```

### Prettier 配置

```javascript
{
  printWidth: 100,        // 每行最大字符数
  tabWidth: 2,            // 缩进空格数
  semi: true,             // 语句末尾分号
  singleQuote: true,      // 使用单引号
  trailingComma: 'es5',   // 尾随逗号
  arrowParens: 'always',  // 箭头函数参数括号
}
```

---

## 🔄 Git 工作流

### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型：**

- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具变动
- `ci`: CI 配置
- `revert`: 回滚

**示例：**

```bash
# 新功能
git commit -m "feat: 添加用户登录功能"
git commit -m "feat(auth): 实现 OAuth 登录"

# 修复 Bug
git commit -m "fix: 修复列表滚动问题"
git commit -m "fix(ui): 修复按钮样式错误"

# 文档
git commit -m "docs: 更新 README 安装说明"

# 重构
git commit -m "refactor: 重构用户服务代码"
```

### Git Hooks

#### Pre-commit（提交前）

自动执行：

1. ✅ ESLint 检查暂存文件
2. ✅ Prettier 格式化暂存文件
3. ✅ TypeScript 类型检查

如果检查失败，提交会被阻止。

```bash
# 提交代码
git add .
git commit -m "feat: 添加新功能"

# Hook 自动运行：
# ✓ ESLint checking...
# ✓ Prettier formatting...
# ✓ TypeScript checking...
# ✓ Commit successful!
```

#### Commit-msg（提交信息）

检查提交信息是否符合规范：

```bash
# ✅ Good
git commit -m "feat: 添加用户登录"
git commit -m "fix: 修复按钮样式"

# ❌ Bad - 会被拒绝
git commit -m "更新代码"
git commit -m "bug fix"
```

### 分支策略

```
main (生产)
  ↓
develop (开发)
  ↓
feature/user-login (功能分支)
fix/button-style (修复分支)
```

**分支命名：**

- `feature/功能名` - `feature/user-auth`
- `fix/问题描述` - `fix/button-crash`
- `refactor/模块名` - `refactor/api-service`
- `release/版本号` - `release/v1.2.0`

### 工作流程

```bash
# 1. 创建功能分支
git checkout -b feature/user-profile

# 2. 开发功能
# ...编写代码...

# 3. 提交代码
git add .
git commit -m "feat: 添加用户个人资料页面"

# 4. 推送到远程
git push origin feature/user-profile

# 5. 创建 Pull Request
# 在 GitHub/GitLab 上创建 PR

# 6. Code Review
# 团队成员审查代码

# 7. 合并到 develop
# PR 通过后合并
```

---

## 🚀 部署发布

### 开发构建

```bash
# 安装 EAS CLI
npm install -g eas-cli

# 登录 Expo 账号
eas login

# 配置 EAS
eas build:configure

# 开发构建
eas build --platform ios --profile development
eas build --platform android --profile development
```

### 生产构建

```bash
# iOS
eas build --platform ios --profile production

# Android
eas build --platform android --profile production

# 两个平台
eas build --platform all --profile production
```

### 提交到应用商店

```bash
# iOS App Store
eas submit --platform ios

# Google Play Store
eas submit --platform android
```

### 环境变量

创建 `.env` 文件（不要提交到 Git）：

```bash
# API 配置
API_URL=https://api.production.com
API_KEY=your_api_key

# 功能开关
ENABLE_ANALYTICS=true
```

在代码中使用：

```typescript
const API_URL = process.env.API_URL;
```

---

## ❓ 常见问题

### Q1: 如何修改应用名称和图标？

**应用名称：**

编辑 `app.json`:

```json
{
  "expo": {
    "name": "你的应用名称",
    "slug": "your-app-slug"
  }
}
```

**应用图标：**

替换 `assets/` 目录下的图片：

- `icon.png` (1024x1024)
- `splash-icon.png`
- `adaptive-icon.png`

### Q2: 如何添加导航？

```bash
# 安装 React Navigation
npx expo install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
```

创建导航配置：

```typescript
// src/navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

### Q3: 如何添加状态管理？

**选项 1: Context API（简单应用）**

```typescript
// src/context/UserContext.tsx
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
```

**选项 2: Zustand（推荐）**

```bash
npm install zustand
```

```typescript
// src/store/userStore.ts
import create from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

### Q4: 提交时报错怎么办？

**错误 1: ESLint 检查失败**

```bash
# 自动修复
npm run lint:fix

# 格式化代码
npm run format

# 重新提交
git add .
git commit -m "fix: 修复代码问题"
```

**错误 2: 提交信息格式错误**

```bash
# ❌ 错误
git commit -m "修复bug"

# ✅ 正确
git commit -m "fix: 修复列表滚动问题"
```

### Q5: 如何调试？

**Chrome DevTools:**

```bash
npm start
# 按 'j' 打开 Debugger
```

**React DevTools:**

```bash
npm install -g react-devtools
react-devtools
```

**Flipper:**

推荐使用 [Flipper](https://fbflipper.com/) 进行调试。

### Q6: SafeAreaView 废弃了怎么办？

React Native 的 `SafeAreaView` 已废弃，推荐使用：

**方式 1: 使用 `react-native-safe-area-context`**

```bash
npx expo install react-native-safe-area-context
```

```typescript
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return <SafeAreaView style={styles.container}>{/* ... */}</SafeAreaView>;
}
```

**方式 2: 简单使用 View + StatusBar**

```typescript
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}>
      {/* ... */}
    </View>
  );
}
```

**方式 3: Expo 默认处理（最简单）**

Expo 项目默认已处理安全区域，直接使用 `View` 即可。

### Q7: 如何优化性能？

1. **使用 React.memo**

```typescript
export const MyComponent = React.memo(({ data }) => {
  return <View>{/* ... */}</View>;
});
```

2. **使用 useCallback**

```typescript
const handlePress = useCallback(() => {
  console.log('Pressed');
}, []);
```

3. **使用 FlatList 而不是 ScrollView**

```typescript
<FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
```

4. **图片优化**

```typescript
<Image source={{ uri: imageUrl }} resizeMode="cover" style={{ width: 100, height: 100 }} />
```

---

## 📚 推荐资源

### 官方文档

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

### 社区资源

- [React Native Directory](https://reactnative.directory/)
- [Awesome React Native](https://github.com/jondot/awesome-react-native)

### 工具

- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Query](https://tanstack.com/query)
- [Axios](https://axios-http.com/)

---

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

---

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交改动 (`git commit -m 'feat: 添加某个功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

---

## 📞 支持

- 🐛 [提交 Bug](https://github.com/your-username/react-native-expo-template/issues)
- 💡 [功能建议](https://github.com/your-username/react-native-expo-template/discussions)
- 📧 联系我们: your-email@example.com

---

**开始构建你的应用吧！** 🚀

```bash
./init-project.sh
./RUN_NOW.sh
```

---

## 📋 更新日志

### v1.0.0 (2025-10-28)

- ✅ 初始版本发布
- ✅ 完整的项目模版
- ✅ 工程化配置
- ✅ 测试框架
- ✅ 示例代码

---

**Made with ❤️ for the React Native community**
