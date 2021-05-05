import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Container  } from 'react-bootstrap';
import MultiSelect from './Components/MultiSelect';
import DatePicker from "react-datepicker";

export const CustomForm = ({ state, modelFormItems, helperHandleCustomFieldChange }) => {

  const [customValues, setCustomValues] = useState(state.customValues);

  function onOptionsChange(selectedOptions, multiSelectId) {
    let customFieldId = multiSelectId
    let multiSelectField = "["
    selectedOptions.forEach(element =>{
      multiSelectField += `\"${element}\",`
    })
    if(multiSelectField.length > 3){
      multiSelectField = multiSelectField.substring(0, multiSelectField.length - 1)
    }    
    multiSelectField += "]"
    setCustomValues( {       
      ...customValues,
      [customFieldId]: multiSelectField })
  };

  function handleCustomFieldChange(evt) {
    const value = evt.target.value;
    setCustomValues({
      ...customValues,
      [evt.target.name]: value
    });  
  }

  useEffect(() => {
    // action on update of customValues
    helperHandleCustomFieldChange(customValues);
}, [customValues]);

  let formItems = modelFormItems.map(item => {
    switch(item.type) {
      case "checkbox-group":
          return( <MultiSelect
            name={item.key}
            item={item}
            selectedOptions={ customValues[item.key]? typeof customValues[item.key] === 'string' ? JSON.parse(customValues[item.key]): customValues[item.key] :[]}
            onOptionsChange={onOptionsChange}
          />);
        break;
      case "textarea":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</Form.Label>
                <Form.Control 
                  as={"textarea"} rows={3}
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.key}
                  value={customValues[item.key]? customValues[item.key] : ""}
                />
              </Form.Group>
        );
        break;
      case "text":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</Form.Label>
                <Form.Control 
                  type={"text"} 
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.key}
                  value={customValues[item.key]? customValues[item.key] : ""}
                />
              </Form.Group>
        );
        break;
      case "number":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</Form.Label>
                <Form.Control 
                  type={"number"} 
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.key}
                  value={customValues[item.key]? customValues[item.key] : ""}
                />
              </Form.Group>
        );
        break;
      case "date":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</Form.Label>
                <DatePicker selected={typeof customValues[item.key] === 'string'? new Date(customValues[item.key]) : customValues[item.key]} onChange={selectedDate => setCustomValues({...customValues, [item.key]:selectedDate.toLocaleDateString()})}/>
              </Form.Group>
        );
        break;
      case "header":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{ customValues[item.key] ? customValues[item.key].trim().replace(/^\w/, (c) => c.toUpperCase()): null}</Form.Label>
              </Form.Group>
        );
        break;
      case "select":
        return( <Form.Group controlId={item.key}>
                  <Form.Label>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</Form.Label>
                  <Form.Control 
                    as={"select"} custom
                    onChange={handleCustomFieldChange}
                    name={item.key}
                    value={customValues[item.key]? customValues[item.key] : ""}
                    >
                    {item.values.map(item => <option value={item.value} >{item.value}</option>)}
                  </Form.Control>
                </Form.Group>
        );
        break;
      default:
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</Form.Label>
                <Form.Control 
                  type={"text"} 
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.key}
                  value={customValues[item.key] || ""}
                />
              </Form.Group>
        );
    }
  }
  )
  return( 
    <div>{formItems}</div>
  );
}


export const DisplayCustomFields = ({state, modelFormItems}) => {

  const [customValues, setCustomValues] = useState(state.customValues);

  let formItems = modelFormItems.map(item => {
    switch(item.type) {
      case "checkbox-group":
          return(<tr>
                  <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                  <td scope="col">{customValues[item.key]? typeof customValues[item.key] === 'string' ? JSON.parse(customValues[item.key]).join(", "): customValues[item.key] :[]}</td>
                </tr>);
        break;
      case "textarea":
        return(<tr>
                <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                <td>{customValues[item.key]? customValues[item.key] : ""}</td>
              </tr>
        );
        break;
      case "text":
        return(<tr>
                <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                <td>{customValues[item.key]? customValues[item.key] : ""}</td>
              </tr>
        );
        break;
      case "number":
        return(<tr>
                <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                <td>{customValues[item.key]? customValues[item.key] : ""}</td>
              </tr>
        );
        break;
      case "date":
        return(<tr>
                <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                <td>{customValues[item.key]? customValues[item.key] : ""}</td>
              </tr>
        );
        break;
      case "header":
        return(<tr>
                <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                <th scope="col"></th>
              </tr>
        );
        break;
      case "select":
        return(<tr>
                <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                  <td>{item.values.map(item => item.value + ", ")}</td>
              </tr>
        );
        break;
      default:
        return(<tr>
                <th class="table-heading"scope="col"><b>{item.label.trim().replace(/^\w/, (c) => c.toUpperCase())}</b></th>
                <th scope="col"></th>
              </tr>
        );
    }
  }
  )
  return( 
    <table class="table table-sm">
      {formItems}
    </table>
  );
}