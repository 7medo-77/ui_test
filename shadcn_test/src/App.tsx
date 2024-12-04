import { useState } from 'react'
import { DataTableDemo, columns, data } from '@/components/unauthorized/payments/all-component'
import DataTable from '@/components/unauthorized/payments/data-table'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataTableDemo />
    </>
  )
}

export default App

