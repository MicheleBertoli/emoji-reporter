import Base from 'mocha/lib/reporters/base'

class Emoji extends Base {

  constructor(runner) {
    super(runner)

    runner.on('pass', () => {
      this.write('😻 ')
    })

    runner.on('pending', () => {
      this.write('🙀 ')
    })

    runner.on('fail', (test) => {
      test.title += ' 💩 '
      this.write('😿 ')
    })

    runner.on('end', () => {
      console.log()
      this.epilogue()
    })
  }

  write(msg) {
    process.stdout.write(msg)
  }

}

export default Emoji
