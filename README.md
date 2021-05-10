# custom-form-fields-react

> This is a library helps user to create custom forms. All you need to do is passing the list of objects contain form fields information to the CustomForm component and it will return a React Form. Similar to Custo form user can pass form item values to DisplayCustomFields to display them in a table.

[![NPM](https://img.shields.io/npm/v/custom-form-fields-react.svg)](https://www.npmjs.com/package/custom-form-fields-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-form-fields-react

or 

yarn add custom-form-fields-react
```

## Usage

```jsx
import React, { useState }  from 'react'
import { Container, Form, Button,Col,Row} from 'react-bootstrap';
import { CustomForm, DisplayCustomFields } from 'custom-form-fields-react'
import 'custom-form-fields-react/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [state, setState] = useState({
    firstName: "Sinan",
    lastName: "Cengiz",
    email: "sinan@gmail.com",
    password: "password",
    customValues:values
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function helperHandleCustomFieldChange(customValues){
    setState({
      ...state,
      customValues: customValues
    })
  }

  function onSubmit(event){
    event.preventDefault()
    console.log(state)
  };

  return (
    <Container>
      <Row>
        <h1>This is a Form with Custom Fields</h1>
      </Row>
      <Row>
      <Col md="2">

      </Col>

      <Col md="8">
      <Form onSubmit={onSubmit} >
        <Form.Group controlId="first_name_last_name">
          <Form.Row>
            <Col>
              <Form.Control 
                name={"firstName"}
                value={state.firstName}
                onChange={handleChange}
                placeholder="First name" 
              />
            </Col>
            <Col>
              <Form.Control 
                name={"lastName"}
                value={state.lastName}
                onChange={handleChange}
                placeholder="Last name" 
              />
            </Col>
          </Form.Row>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              name={"email"}
              value={state.email}
              onChange={handleChange}
              type="email" 
              placeholder="Enter email" 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control 
              name={"password"}
              value={state.password}
              onChange={handleChange}
              placeholder="Enter Password"
              type="password"  
            />
          </Form.Group>
          
          <CustomForm state={state} modelFormItems={modelFormItems} helperHandleCustomFieldChange={helperHandleCustomFieldChange} />

          <Button variant="primary" type="submit" >
            Submit
          </Button>
      </Form>
      </Col>

      <Col md="2">

      </Col>
    </Row>
    <Row>
      <DisplayCustomFields state={state} modelFormItems={modelFormItems}></DisplayCustomFields>
    </Row>
  </Container>

  
  )
}

export default App

//example values to provide form items not provided items will be emty
const values = {
  "1": "[\"Economy\",\"Business\"]",
  "2": "Corolla",
  "4": "san francisco Ca",
  "5": "2021",
  "6": "description edited",
  "13": "5/12/2021",
  "15": "[\"blue\",\"yellow\"]",
  "16": "5/19/2021"
}

//this is the example form items checkbox, select, text, number, textarea, date, header 
var modelFormItems =[
  {
    "key": 1,
    "type": "checkbox-group",
    "label": "fare",
    "values": [
      {
        "value": "First Class",
        "selected": false,
        "label": "First class"
      },
      {
        "value": "Business",
        "selected": false,
        "label": "Business"
      },
      {
        "value": "Economy",
        "selected": false,
        "label": "Economy"
      }
    ],
    "required": false
  },
  {
    "key": 2,
    "type": "select",
    "label": "toyota",
    "values": [
      {
        "value": "Camry",
        "selected": false
      },
      {
        "value": "Corolla",
        "selected": false
      },
      {
        "value": "Tacoma",
        "selected": false
      }
    ],
    "required": false
  },
  {
    "key": 3,
    "type": "header",
    "label": "Custom Fields",
    "subtype": "h3",
    "value": null
  },
  {
    "key": 4,
    "type": "text",
    "label": "address",
    "subtype": "text",
    "value": null,
    "required": false
  },
  {
    "key": 5,
    "type": "number",
    "label": "year",
    "value": null
  },
  {
    "key": 6,
    "type": "textarea",
    "label": "description",
    "value": null,
    "required": false
  },
  {
    "key": 13,
    "type": "date",
    "label": "Date Field",
    "value": null
  },
  {
    "key": 15,
    "type": "checkbox-group",
    "label": "colors",
    "values": [
      {
        "value": "red",
        "selected": false,
        "label": "Red"
      },
      {
        "value": "blue",
        "selected": false,
        "label": "Blue"
      },
      {
        "value": "yellow",
        "selected": false,
        "label": "Yellow"
      }
    ],
    "required": false
  },
  {
    "key": 16,
    "type": "date",
    "label": "Date 2",
    "value": null
  }
]

```

## Code of Conduct

Please read the [Code of Conduct](https://github.com/sinancengiz/custom-form-fields-react/blob/master/CODE_OF_CONDUCT.md)

## License

MIT © [sinancengiz](https://github.com/sinancengiz) Copyright © 2021,

## Author

Sinan Cengiz
