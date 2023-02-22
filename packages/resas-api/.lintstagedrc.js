module.exports = {
  '**/*.{js,ts,tsx}': (/** @type {string[]} */ filenames) => `pnpm eslint --fix ${filenames.join(' --fix ')}`,
  '**/*.{js,ts,tsx,json}': (/** @type {string[]} */ filenames) => `pnpm prettier --check ${filenames.join(' --check ')}`,
};
