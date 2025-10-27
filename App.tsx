import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';

/**
 * App 根组件
 *
 * 这是应用的入口组件，保持简洁。
 * 在实际项目中，这里通常会：
 * - 配置导航（React Navigation）
 * - 配置状态管理（Redux/Zustand/Context）
 * - 初始化应用（加载字体、检查认证等）
 *
 */
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: StatusBar.currentHeight || 0, // Android 状态栏高度
  },
});
