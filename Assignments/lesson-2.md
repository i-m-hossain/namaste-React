# Assignent--2(Ignite our app)
Theory Assignment:
    ● - What is `NPM`?
        - NPM is an open source repository of different packages that is used to manage packages, develop application and websites

    ● - What is `Parcel/Webpack`? Why do we need it?
        - Parcel/Webpack is bundler whose core functionalities are- to create a development environment, bundling application and making an application production ready.

        Why do we need it: There are lots of functionality are provided by bundler that we need building our application. Some of them are:
            i. creating a server
            ii. compression
            iii. minification
            iv. opening a port to run the application
            v. caching
            vi. optimization
            vii. File watcher
            viii. HMR
            ix. image optimization
            x. tree shaking
            xi. code cleaning
            xii. zero configuration
            xiii. compatible with older version of the browser
            xiv. consistent hashing algorithm
    ● - What is `.parcel-cache`
        - `.parcel-cache` is a folder, used by parcel for caching the application, so that after the first build the application will not be needed to build again from the beginning. It stores the cached version of the application in the    `.parcel-cache` folder and reduces the build time of the application significantly. 

    ● - What is `npx` ?
        - npx stands for node package execute, thus it executes the npm packages

    ● - What is difference between `dependencies` vs `devDependencies`
        - dependencies are needed in the browser to run the corresponding functionality. where as devDependency is only needed in the development machine. After the build the devDependency is no longer needed. Thus, installing npm packages we need to mention the dependency type of that module. To install as devDependency, we use "-D" or "--save-dev" flag.

    ● - What is Tree Shaking?
        - Tree shaking concept is used in bundler to remove unused code/modules. This term is commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

        In modern JavaScript applications, we use module bundlers (e.g., webpack,  Rollup, Parcel) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.thus the application gets more optimized.

    ● - What is Hot Module Replacement?
        - During Application development, the codes get changed. This code changes are needed to be reflected in the application immediately without reloading. Hot module replacement does this operation by performing some algorithm, quickly finds the changes and update the application immediately.

        In a nut shell: Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

    ● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
        - 5 superpowers:
            1. Creating a server: 
                - Parcel creates a server for the application with zero configuration and also allocate a port  number against the application. This functionality removes loads of work from us and make develeopment focused.   
            2. Compression and minification: 
                - The code we write gets compressed and also minified by parcel which is amazing. Because of this we don't have to be worry about our application size. Thus it helps us in optimization and faster running of the application 
            3. Caching:
                - Parcel creates a folder and tracks that files to minimize the build time of the application which is very useful as it helps to faster runtime of the application.
            4. File watching
            5. HMR
    ● - What is `.gitignore`? What should we add and not add into it?
        - `.gitignore` is used to ignore the files we wish not to put in the github repository. We should only add those things in the  .gitignore file which can be reproduced (i.e. node_modules) and file containing sensitive info(.env)

    ● - What is the difference between `package.json` and `package-lock.json`
        - Package.json file only keep track the manually added npm modules, executable command and application info, Where as package-lock.json keeps track of all the modules of the current application including node_modules. Depending on package-lock.json the node_modules get regenerated. package.lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json.

    ● - Why should I not modify `package-lock.json`?
        -If package.lock.json gets modified, there might be some differences in installed versions in different environments, which leads to application failure
    ● - What is `node_modules` ? Is it a good idea to push that on git?
        - node_modules is auto generated folder which gets generated while installing an npm module. It is not a good idea to push node_modules in git as it is bulky in size and there are better ways to handle it. Package-lock.json is used to regenerate npm modules. 

    ● - What is the `dist` folder?
        - After the build command in an application dist folder gets generated. This folder contains the build scripts of the application contains compressed and minified code. This folder actually gets deployed in the real application.
    
    ● - What is `browserlists`?
        - Browserlists is the list of all browser for the compatibility of older browsers. With browserlist we can select the browsers to run the application and also can provide polyfills for the older browsers.



Read about dif bundlers: vite, webpack, parcel
    ● Read about: ^ - caret and ~ - tilda in package.json
        - ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

        - ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.
    ● Read about Script types in html (MDN Docs)