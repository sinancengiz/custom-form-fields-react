# custom-form-fields-react

> This is Library helps user to create custom forms. All you need to do is passing the list of object contains form fileds information to the CustomForm component and it will return the react form.

[![NPM](https://img.shields.io/npm/v/custom-form-fields-react.svg)](https://www.npmjs.com/package/custom-form-fields-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-form-fields-react
```

## Usage

```jsx
import React, { Component } from 'react'

import {CustomForm from} from  'custom-form-fields-react'
import 'custom-form-fields-react/dist/index.css'

class Example extends Component {
  render() {
    return <CustomForm formLabel={"Label of Your Form"} values={[
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
    ]}/>
  }
}
```

## Code of Conduct

Please read the [Code of Conduct](https://github.com/sinancengiz/custom-form-fields-react/blob/master/CODE_OF_CONDUCT.md)

## License

MIT © [sinancengiz](https://github.com/sinancengiz) Copyright © 2021,

## Author

Sinan Cengiz