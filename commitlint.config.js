module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 커밋 메시지에서 타입을 반드시 포함하도록 설정
    'type-enum': [2, 'always', ['feat', 'fix', 'docs']],
    // 커밋 메시지 길이를 100자로 제한
    'header-max-length': [2, 'always', 100],
  },
};
