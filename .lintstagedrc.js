module.exports = {
  '**/*.tf': (filenames) =>
    filenames.map((filename) => `terraform fmt -check '${filename}'`),
  '**/*.ts': 'yarn lint',
  '**/*.ts': 'yarn format',
};
