import { h, app } from 'hyperapp'
import { Counter } from './components'
import actions from './actions'
import state from './state'
import './style.css'
import 'minireset.css'

const view = (state, actions) => (
  <div class="font-sans text-2xl">
    {state.counters
      .sort((o, i) => parseInt(i.count) - parseInt(o.count))
      .map((counter, index) => (
        <Counter
          counter={counter}
          theme={counter.theme}
          actions={actions}
          key={counter.id}
        />
      ))}
  </div>
)

app(state, actions, view, document.body)
