import { h } from 'hyperapp'

export default ({ value, theme, toggle }) => (
  <button
    onclick={e => toggle()}
    style={{ width: '10vh' }}
    class={`font-light bg-${theme}-dark text-${theme}-darker hover:bg-${theme}-lighter`}
  >
    {value}
  </button>
)
