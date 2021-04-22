import React from 'react'
import styles from './styles.module.css'
import { Button, Form,  } from 'react-bootstrap';


export const CustomForm = ({ formLabel, values }) => {

  let formItems = values.map(value => {
    switch(value.type) {
      case "multiselect":
        return(<Form.Group controlId={value.key}>
                <Form.Label>{value.label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.placeholder} required={value.required}/>
              </Form.Group>
        );
        break;
      case "text":
        return(<Form.Group controlId={value.key}>
                <Form.Label>{value.label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.placeholder} required={value.required}/>
              </Form.Group>
        );
        break;
      case "number":
        return(<Form.Group controlId={value.key}>
                <Form.Label>{value.label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.placeholder} required={value.required}/>
              </Form.Group>
        );
        break;
      case "Heading":
        return(<Form.Group controlId={value.key}>
                <Form.Label>{value.label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.placeholder} required={value.required}/>
              </Form.Group>
        );
        break;
      case "select":
        return(<Form.Group controlId={value.key}>
                <Form.Label>{value.label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.placeholder} required={value.required}/>
              </Form.Group>
        );
        break;
      case "range":
        return(<Form.Group controlId={value.key}>
                <Form.Label>{value.label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.placeholder} required={value.required}/>
              </Form.Group>
        );
        break;
      default:
        return(<Form.Group controlId={value.key}>
                <Form.Label>{value.label}</Form.Label>
                <Form.Control type={value.type} placeholder={value.placeholder} required={value.required}/>
              </Form.Group>
        );
    }
  }
  )

  return(
    <div style={{width:500, margin:"auto", marginTop:100, padding:50, backgroundColor:"lightblue"}}>
      <Form>
        <h2>{formLabel}</h2>
        {formItems}
        <div style={{textAlign:"center"}}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>

  );
}
