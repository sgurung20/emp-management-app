import React from 'react'
import { Routes, Route} from "react-router-dom"
import EmployeeDir from './EmployeeDir'
import Card from './Card'
import TaskManagement from './TaskManagement'
import ErrorPage from './ErrorPage'
import DocUpload from '../docForm/DocUpload'

function HomePage() {

    return (
        <div>
            <Routes>
                    <Route path='/' element={<Card />} />
                    <Route path='/empDir' element={<EmployeeDir />} />
                    <Route path='/taskManagement' element={<TaskManagement />} />  
                    <Route path='*' element={<ErrorPage />} />
                    <Route path='/uploadDoc' element={<DocUpload />} />
            </Routes>

        </div>
    )
  }

export default HomePage