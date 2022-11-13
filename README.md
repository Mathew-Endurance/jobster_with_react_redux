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
     <img src={logo}/>  
   </nav>
   <div>
   {info}
   <button>  -------- to login/register
   </div>
   <img src={main}/>
   </Wrapper>
