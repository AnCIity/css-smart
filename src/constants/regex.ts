// 匹配 CSS 变量
export const CSS_VARIABLES_REG = /(\--[^:\s]+):[\s]*([^;]+);/g
// 匹配 Stylus 变量
export const STYLUS_VARIABLES_REG = /(\--[^ \s]+) [\s]*([^\n]+)(\n|$)/g
// 匹配路径别名
export const PATH_ALIAS_REG = /"(.*?)\*": \["(.*?)\*"\]/g
// 匹配基础路径
export const PATH_BASE_URL_REG = /"baseUrl": "(.*?)"/g
