# Assignment -10 (Jo dikhta hai, bo bikta hai)

## Explore all the ways of writing css.</li>

    - separate file for css
    - inline css
    - SCSS
    - Component libraries: Bootstrap, Ant Design, Material ui, Chakra, Base etc
    - Styled components
    - utility library: Tailwind 
##	How do we configure tailwind?
        
        ```
            npm install -D tailwindcss postcss
            npx tailwindcss init

            - .postcssrc configuration
            
            {
            "plugins": {
                "tailwindcss": {}
                }
            }
            
            - tailwind.config.js

            /** @type {import('tailwindcss').Config} */
            module.exports = {
            content: [
                "./src/**/*.{html,js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            }

            - index.css
            
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
        ```
## In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

    - content: Here, we add files directory and their extension where tailwind classes will be activated

    - theme: The theme section of tailwind.config.js file is where we define our project’sr palette, type scale, fonts, breakpoints, border radius values, and more.

    - extend: If we like to preserve the default values for a theme option but also add new values, we can do that by adding extensions under the extend key in the theme section of your configuration file.

    - plugins: this is used for third party library extension and also tailwind plugins

## Why do we have .postcssrc file?

    - .posrtcssrc file is used to process the tailwind css class and converting them into pure vanilla css. This process is done by the bundler which needs configuration and the configuration comes from the .postcssrc file

















## topic covered:
ways to integrate css:
...
1. separate file for css

2. inline css

3. SCSS 

4. Component libraries: Bootstrap, Ant Design, Material ui, Chakra, Base etc

5. Styled components

6. utility library: Tailwind