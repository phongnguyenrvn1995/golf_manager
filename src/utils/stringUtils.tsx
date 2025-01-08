// src/utils/stringUtils.ts

/**
 * Chuyển đổi một chuỗi thành dạng camelCase
 * @param str - Chuỗi cần chuyển đổi
 * @returns Chuỗi dạng camelCase
 */
export const toCamelCase = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
  };
  
  /**
   * Chuyển đổi một chuỗi thành dạng kebab-case
   * @param str - Chuỗi cần chuyển đổi
   * @returns Chuỗi dạng kebab-case
   */
  export const toKebabCase = (str: string): string => {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase();
  };
  
  /**
   * Viết hoa chữ cái đầu tiên của chuỗi
   * @param str - Chuỗi cần viết hoa
   * @returns Chuỗi với chữ cái đầu viết hoa
   */
  export const capitalizeFirstLetter = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Rút gọn chuỗi nếu dài hơn độ dài cho phép
   * @param str - Chuỗi cần rút gọn
   * @param maxLength - Độ dài tối đa
   * @returns Chuỗi đã rút gọn
   */
  export const truncate = (str: string, maxLength: number): string => {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  };
  
  /**
   * Loại bỏ tất cả khoảng trắng trong chuỗi
   * @param str - Chuỗi cần xử lý
   * @returns Chuỗi không còn khoảng trắng
   */
  export const removeWhitespace = (str: string): string => {
    return str.replace(/\s+/g, '');
  };
  
  /**
   * Đảo ngược chuỗi
   * @param str - Chuỗi cần đảo ngược
   * @returns Chuỗi đã đảo ngược
   */
  export const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
  };
  