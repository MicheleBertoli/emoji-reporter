import assert from 'assert'
import sinon from 'sinon'
import { EventEmitter } from 'events'

import Emoji from '../src/index'

describe('test', () => {
  class Runner extends EventEmitter {}
  const noop = () => {}
  let runner
  let emoji

  beforeEach(() => {
    runner = new Runner()
    emoji = new Emoji(runner)

    emoji.write = sinon.spy()
    emoji.epilogue = sinon.spy()
  })

  it('works on pass', () => {
    runner.emit('pass', { slow: noop })

    assert(emoji.write.calledWithExactly('😻 '))
  })

  it('works on pending', () => {
    runner.emit('pending')

    assert(emoji.write.calledWithExactly('🙀 '))
  })

  it('works on fail', () => {
    runner.emit('fail', {})

    assert(emoji.write.calledWithExactly('😿 '))
  })

  it('works on end', () => {
    const log = console.log
    console.log = sinon.spy()
    runner.emit('end')

    assert(console.log.called)
    assert(emoji.epilogue.called)

    console.log = log
  })

  it('appends shit to failures', () => {
    const test = { title: 'foo' }
    runner.emit('fail', test)

    assert.equal(test.title, 'foo 💩 ')
  })
})
