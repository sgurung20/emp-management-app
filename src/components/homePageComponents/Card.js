import React from 'react'
import emp_dir from './card_images/emp_dir.png'
import manage_work from './card_images/manage_work.jpg'
import CardUI from './CardUI'
import './CardUI.css'

function Card() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-sm-6">
                    <CardUI imgsrc={emp_dir} title="Employee Directory" 
                    para="Add and Update Employee data."/>
                </div>

                <div className="col-sm-6">
                    <CardUI imgsrc={manage_work} title="Manage Work"
                    para="Manage workflow."/>
                </div>
            </div>
        </div>
      )
    }

export default Card