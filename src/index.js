import React, { useState, useEffect } from 'react'
import { Form,  } from 'react-bootstrap';
import MultiSelect from './Components/MultiSelect';

export const CustomForm = ({ state, modelFormItems, helperHandleCustomFieldChange }) => {

  const [customValues, setCustomValues] = useState(state.customValues);
  
  function onOptionsChange(selectedOptions, multiSelectId) {
    let customFieldId = multiSelectId
    setCustomValues( {       
      ...customValues,
      [customFieldId]: selectedOptions })
  };

  function handleCustomFieldChange(evt) {
    const value = evt.target.value;
    setCustomValues({
      ...customValues,
      [evt.target.name]: value
    });  
  }

  useEffect(() => {
    // action on update of movies
    helperHandleCustomFieldChange(customValues);
}, [customValues]);

  let formItems = modelFormItems.map(item => {
    switch(item.type) {
      case "FormItem::Multiselect":
          return( <MultiSelect
            name={item.id}
            item={item}
            selectedOptions={customValues[item.id]}
            onOptionsChange={onOptionsChange}
          />);
        break;
      case "FormItem::Text":
        return(<Form.Group controlId={item.id}>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control 
                  as={"textarea"} rows={3}
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.id}
                  value={customValues[item.id]? customValues[item.id] : ""}
                />
              </Form.Group>
        );
        break;
      case "FormItem::Line":
        return(<Form.Group controlId={item.id}>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control 
                  type={"text"} 
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.id}
                  value={customValues[item.id]? customValues[item.id] : ""}
                />
              </Form.Group>
        );
        break;
      case "FormItem::Number":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control 
                  type={"number"} 
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.id}
                  value={customValues[item.id]? customValues[item.id] : ""}
                />
              </Form.Group>
        );
        break;
      case "FormItem::Date":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control 
                  type={"date"} 
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.id}
                  value={customValues[item.id]? customValues[item.id] : ""}
                />
              </Form.Group>
        );
        break;
      case "FormItem::Heading":
        return(<Form.Group controlId={item.key}>
                <Form.Label>{ customValues[item.id] ? customValues[item.id]: null}</Form.Label>
              </Form.Group>
        );
        break;
      case "FormItem::Select":
        return( <Form.Group controlId={item.key}>
                  <Form.Label>{item.label}</Form.Label>
                  <Form.Control 
                    as={"select"} custom
                    onChange={handleCustomFieldChange}
                    name={item.id}
                    value={customValues[item.id]? customValues[item.id] : ""}
                    >
                    {item.options.map(option => <option value={option} >{option}</option>)}
                  </Form.Control>
                </Form.Group>
        );
        break;
      default:
        return(<Form.Group controlId={item.key}>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control 
                  type={"text"} 
                  placeholder={`Enter ${item.label}`} 
                  required={item.required}
                  onChange={handleCustomFieldChange}
                  name={item.id}
                  value={customValues[item.id] || ""}
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
