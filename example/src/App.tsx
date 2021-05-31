import React from 'react'

import { Stepper } from 'react-stepper'
import 'react-stepper/dist/index.css'

const App = () => {
  return <Stepper min={2} max={10} input={3} onValueChange={(e: any) => console.log(e)} />
}

export default App
