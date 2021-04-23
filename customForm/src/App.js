import React from 'react'
import { CustomForm } from 'custom-form-fields-react'
import 'custom-form-fields-react/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <CustomForm values= {values} modelFormItems={modelFormItems} />
}

export default App

const values = {
  8:"Select Field",
  10:"He is jobless, rely on EDD",
  11:"35",
  12:"So nice farm with a lot of sheep"
}


var modelFormItems = [{
    id: 7, 
    model_form_id: 22, 
    position: 1, 
    type: "FormItem::Multiselect", 
    label: "color", 
    encrypt: true, 
    active: true, 
    options: ["red", "blue", "green"], 
    required: false
  },{
    id: 8, 
    model_form_id: 22, 
    position: 1, 
    type: "FormItem::Select", 
    label: "honda", 
    encrypt: false, 
    active: true, 
    options: ["crv", "accord", "pilot"], 
    required: false
  },{
    id: 9, 
    model_form_id: 22, 
    position: 1, 
    type: "FormItem::Heading", 
    label: "information", 
    encrypt: true, 
    active: true, 
    options: null, 
    required: false
  },{
    id: 10, 
    model_form_id: 22, 
    position: 1, 
    type: "FormItem::Line", 
    label: "Employment", 
    encrypt: false, 
    active: true, 
    options: null, 
    required: false
  },{
    id: 11, 
    model_form_id: 22, 
    position: 1, 
    type: "FormItem::Number", 
    label: "Age", 
    encrypt: true, 
    active: true, 
    options: null, 
    required: false
  },{
    id: 12, 
    model_form_id: 22, 
    position: 1, 
    type: "FormItem::Text", 
    label: "Description", 
    encrypt: false, 
    active: true, 
    options: null, 
    required: false
  }
]