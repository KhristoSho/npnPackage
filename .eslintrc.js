module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'semi': ['error', 'always'], // Требует точку с запятой в конце выражений
    'quotes': ['error', 'single'], // Требует одинарные кавычки для строк
    'no-console': 'warn', // Предупреждает об использовании console
    'no-unused-vars': 'error' // Ошибка при неиспользуемых переменных
  }
};