import * as inquirer from 'inquirer'

const main = () => {
  return inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'items',
        message: 'Select item',
        choices: [{ name: 'foo' }, { name: 'bar' }, { name: 'buzz' }],
      },
    ])
    .then((items) => {
      // eslint-disable-next-line no-console
      console.log(items)
    })
}

main().catch((err) => {
  console.log(err) // eslint-disable-line no-console
})
