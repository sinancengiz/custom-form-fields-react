import React from 'react'
import { CustomForm } from 'custom-form-fields-react'
import 'custom-form-fields-react/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <CustomForm formLabel="Site Form" values= {[
    {label:"Site Name",
    value:"value",
    type:"text",
    placeholder:"Enter Site Name",
    required:true,
    key:1
    },
    {label:"State",
    value:"value",
    type:"text",
    placeholder:"Enter State",
    required:false,
    key:2
    },
    {label:"Range",
    value:50,
    type:"range",
    placeholder:"Enter State",
    required:false,
    key:3
    },
    {label:"Check Me Out",
    type:"checkbox",
    value:true,
    required:false,
    placeholder:"check box",
    key:4
    },
    {label:"Number",
    type:"number",
    value:1234,
    required:false,
    placeholder:"Enter number",
    key:5
    }
  ]} />
}

export default App
