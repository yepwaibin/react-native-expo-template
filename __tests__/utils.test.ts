/**
 * 工具函数测试示例
 *
 * 测试纯函数逻辑，不依赖 React Native 组件
 */

describe('Utils', () => {
  describe('formatters', () => {
    it('should format currency', () => {
      const formatCurrency = (amount: number) =>
        `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(0)).toBe('$0.00');
    });

    it('should format date', () => {
      const formatDate = (date: Date) => date.toISOString().split('T')[0];

      const date = new Date('2025-01-27');
      expect(formatDate(date)).toBe('2025-01-27');
    });
  });

  describe('validators', () => {
    it('should validate email', () => {
      const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });

    it('should validate phone', () => {
      const isValidPhone = (phone: string) => /^\d{10,11}$/.test(phone);

      expect(isValidPhone('13812345678')).toBe(true);
      expect(isValidPhone('1381234567')).toBe(true);
      expect(isValidPhone('138123')).toBe(false);
    });
  });
});
