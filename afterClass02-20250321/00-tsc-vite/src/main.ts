import './style.css'
import { tipado } from './typescript/01-tipado'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
Pruebas TypeScript - 

${tipado}
`

