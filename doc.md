# Lesson 3

**What parcel does for us**
    1. HMR
    2. Minification
    3. File watcher
    4. Code splitting
    5. Caching
    6. Compression
    7. Image Optimization
    8. Tree shaking--> removing unwanted code
    9. Port number
    10. Bundle things
    11. Create server
    12. Cleaning our code 
    13. Compatible with older version of browsers
    14. HTTPS on dev
    16. Consistent hasing algorithm
    17. Zero config
     
**Polyfill** 
    There is a chance that our js code can’t be run on older version of browsers i.e. internet explorer. For those cases we may need to write the code in older version of javascript in order to make it compatible. So the function will be created in older way is called as Polyfill. In some cases we may need to create it ourself, but most of the cases Babel does this for us. If we use browserslist  npm package, babel transpiles our code and convert it to polyfills for those older browsers
**Tree Shaking**
    Removing unwanted code. Parcel does this for us. Suppose a library has dependency on 10/20 (may be more) funcitons. But parcel will remove those unwanted dependency which is not useds
