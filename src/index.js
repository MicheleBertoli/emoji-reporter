import { inherits } from 'util'
import base from 'mocha/lib/reporters/base'

export default function emoji(runner) {
  base.call(this, runner)

  runner.on('pass', () => {
    process.stdout.write('😻 ')
  })

  runner.on('pending', () => {
    process.stdout.write('🙀 ')
  })

  runner.on('fail', () => {
    process.stdout.write('😿 ')
  })

  runner.on('end', () => {
    console.log()
    this.epilogue()
  })
}

inherits(emoji, base)
