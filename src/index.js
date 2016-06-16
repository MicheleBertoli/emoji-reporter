import Base from 'mocha/lib/reporters/base'

class Emoji extends Base {

  constructor(runner) {
    super(runner)

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

}

export default Emoji
