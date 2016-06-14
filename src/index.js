export default runner => {
  let passes = 0
  let failures = 0

  runner.on('pass', () => {
    passes++
    process.stdout.write('😻 ')
  })

  runner.on('fail', () => {
    failures++
    process.stdout.write('😿 ')
  })

  runner.on('end', () => {
    process.stdout.write('\n')
    console.log('%d/%d', passes, passes + failures)
  })
}
