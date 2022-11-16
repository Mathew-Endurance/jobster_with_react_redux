# Jobster

view completed project :

 <!-- Setup React App -->

```
npx create-react-app myApp

or

npx create-react-app@latest myApp

```

####

- set editor/browser side by side
- create assets that contains all the images, favicon and logo needed for the project

<!-- Spring Cleaning -->

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

 <!-- Title and Favicon -->

- change title in public/index.html
- replace favicon.ico in public
- resource [Generate Favicons](https://favicon.io/)

<!-- install  Normalize.css and styled-components-->

- [Styled Components Docs](https://styled-components.com/)
- npm install normalize.css
- npm install styled-components
- import styled from 'styled-components'

const Button = styled.button ` // styles go here`

- import 'normalize.css' in index.js, make sure its set before the 'index.css'

<!-- Landing Page - Setup -->

- create pages directory in the source and the Landing.js file
- import logo.svg and main.svg from images in the assets folder
- import Landing in App.js and render

 <!-- Landing Page - Structure -->

<Wrapper> from the styled component

  <nav>
   /  <img src={logo}/>  
   </nav>
   <div>
   {info}
   <button>  -------- to login/register
   </div>
   <img src={main}/>
   </Wrapper>
<!-- ERROR PAGE -->
- create Error.js, Register.js, Dashboard.js  in the pages folder
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components in App.js
```js

```js
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
return (
  <Wrapper className="full-page">
    <div>
      <img src={img} alt="not found" />
      <h3>text</h3>
      <p>text</p>
      <Link to="/">back home</Link>
    </div>
  </Wrapper>
);
```

<!-- REACT ROUTER 6 -->

- install react router 6
  npm install react-router-dom@6
- import {BrowserRouter, Routes, Route} from react-router-dom in App.js
- create the routes

<!-- REGISTER/LOGIN -->

- create FormRow.js in components
- setup import/export in index.js
- setup one for name, email and password
- pass the prop in the FormRow component in register.js

<!-- TOGGLE BETWEEN FORM -->

```js
const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember });
};

return (
  <Wrapper>
    {/* control h3 */}

    <h3>{values.isMember ? "Login" : "Register"}</h3>

    {/* toggle name */}

    {!values.isMember && (
      <FormRow
        type="text"
        name="name"
        value={values.name}
        handleChange={handleChange}
      />
    )}

    {/* right after submit btn */}
    {/* toggle button */}

    <p>
      {values.isMember ? "Not a member yet?" : "Already a member?"}

      <button type="button" onClick={toggleMember} className="member-btn">
        {values.isMember ? "Register" : "Login"}
      </button>
    </p>
  </Wrapper>
);
```

<!-- Handle Change and Empty Values -->

Register.js

```js
const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  console.log(`${name}:${value}`);
  setValues({ ...values, [name]: value });
};

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    consol.log("Please Fill Out All Fields");
    return;
  }
};
```
