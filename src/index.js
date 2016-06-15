import colors from 'colors'
import prettyMs from 'pretty-ms'

export default runner => {
  const stats = {
    start: null,
    passes: 0,
    pending: 0,
    failures: 0,
  }

  runner.on('start', () => {
    stats.start = new Date()
  })

  runner.on('pass', () => {
    stats.passes++
    process.stdout.write('😻 ')
  })

  runner.on('pending', () => {
    stats.pending++
    process.stdout.write('🙀 ')
  })

  runner.on('fail', () => {
    stats.failures++
    process.stdout.write('😿 ')
  })

  runner.on('end', () => {
    process.stdout.write('\n')

    console.log()

    const duration = new Date() - stats.start
    console.log(
      `${stats.passes} passing`.green,
      `(${prettyMs(duration)})`.grey
    )

    if (stats.pending) {
      console.log(`${stats.pending} pending`.cyan)
    }

    if (stats.failures) {
      console.log(`${stats.failures} failing`.red)
    }

    console.log()
  })
}
