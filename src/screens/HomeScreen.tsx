import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../components/Button';

/**
 * 主屏幕示例
 *
 * 这是一个简单的示例页面，展示如何：
 * - 创建功能组件
 * - 使用自定义组件
 * - 编写样式
 *
 * 在实际项目中，你可以删除此文件或作为参考
 */
export const HomeScreen: React.FC = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! 🎉</Text>
      <Text style={styles.subtitle}>React Native + Expo Template</Text>

      <View style={styles.content}>
        <Text style={styles.description}>这是一个生产就绪的项目模版，包含：</Text>
        <Text style={styles.feature}>✅ TypeScript</Text>
        <Text style={styles.feature}>✅ ESLint + Prettier</Text>
        <Text style={styles.feature}>✅ Git Hooks</Text>
        <Text style={styles.feature}>✅ 测试配置</Text>
      </View>

      <Button title="开始开发" onPress={handlePress} />

      <Text style={styles.hint}>编辑 src/screens/HomeScreen.tsx 开始</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  content: {
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  feature: {
    fontSize: 14,
    color: '#666',
    marginLeft: 16,
    marginVertical: 4,
  },
  hint: {
    fontSize: 12,
    color: '#999',
    marginTop: 32,
    textAlign: 'center',
  },
});
