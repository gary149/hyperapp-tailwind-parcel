import { h } from 'hyperapp'
import Button from './Button'

export default ({ counter, theme, actions }) => (
  <div
    class="flex w-100 font-light"
    style={{ height: '10vh' }}
  >
    <div
      class={`bg-${theme} text-${theme}-darker flex-grow flex items-center pl-4 w-32`}
    >
      {counter.count.toString()}
    </div>
    <div class="flex flex-wrap">
      <Button
        value="-"
        theme={theme}
        toggle={() =>
          actions.down({
            id: counter.id,
            value: 1
          })
        }
      />
      <Button
        value="+"
        theme={theme}
        toggle={() =>
          actions.up({
            id: counter.id,
            value: 1
          })
        }
      />
    </div>
  </div>
)
