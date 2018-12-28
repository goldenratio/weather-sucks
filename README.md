# weather-sucks
Our Earth needs yet another Weather App.
Demo: https://doesweathersuck.com/

City and Unit param in URL,
- https://doesweathersuck.com/?city=london
- https://doesweathersuck.com/?city=vancouver,CA
- https://doesweathersuck.com/?city=vancouver,US
- https://doesweathersuck.com/?city=london&unit=F
- https://doesweathersuck.com/?city=london&unit=C

Proof of Concept app, to showcase:
- no transpilers needed to write modern javascript
- Making use of script type `module`
- Use TypeScript compiler to TypeCheck `.js` via JSDoc
- I don't recommend such approach for production. Please directly use TypeScript (If you need type safety). 
Even in such a small app, maintaining types in JSDoc is cumbersome.

App inspiration:
- http://ootsi.de/
- Google weather app

Related links:
- http://2ality.com/2017/05/es-module-specifiers.html
- https://jakearchibald.com/2017/es-modules-in-browsers/
 
