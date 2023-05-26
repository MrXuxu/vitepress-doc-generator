import { describe, test, expect } from 'vitest';
import { isFloat } from '../../src/strings/is-float';

describe('isFloat', () => {
  test('应当对有效的浮点数返回 true', () => {
    expect(isFloat('3.14')).toBe(true);
    expect(isFloat('-0.5')).toBe(true);
    // expect(isFloat('1.23e-4')).toBe(true);
  });

  test('应当对非浮点数返回 false', () => {
    expect(isFloat('10')).toBe(false);
    expect(isFloat('1a')).toBe(false);
  });

  test('应当正确处理正负号', () => {
    expect(isFloat('+3.14')).toBe(true);
    expect(isFloat('-0.5')).toBe(true);
  });

  test('应当正确处理空字符串', () => {
    expect(isFloat('')).toBe(false);
  });
});
