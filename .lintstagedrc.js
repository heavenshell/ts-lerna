module.exports = {
  '*.ts?(x)': (files) => {
    return [
      'tsc -p tsconfig.json --noEmit',
      // `eslint --fix ${files.join(' ')}`,
      `eslint --fix`,
    ]
  },
  '*.md': (files) =>  {
    return [
      // `prettier --parser markdown --write`,
      `markdownlint`
    ]
  }
}
