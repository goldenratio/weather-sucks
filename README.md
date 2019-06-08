# Weather Sucks
[![Build Status](https://travis-ci.org/goldenratio/weather-sucks.svg?branch=master)](https://travis-ci.org/goldenratio/weather-sucks)

Our Earth needs yet another Weather App.
Demo: https://weather-sucks.web.app/

Proof of Concept app, to showcase:
- no transpilers needed to write modern javascript
- Making use of script type `module`
- Use TypeScript compiler to type check `.js` via JSDoc
- I don't recommend such approach for production. Please directly use TypeScript (If you need type safety). 
Even in such a small app, maintaining types in JSDoc is cumbersome.

City and Unit param in URL,
- https://weather-sucks.web.app/?city=london
- https://weather-sucks.web.app/?city=vancouver,CA
- https://weather-sucks.web.app/?city=vancouver,US
- https://weather-sucks.web.app/?city=london&unit=F
- https://weather-sucks.web.app/?city=london&unit=C

App inspiration:
- http://ootsi.de/
- Google weather app

Related links:
- http://2ality.com/2017/05/es-module-specifiers.html
- https://jakearchibald.com/2017/es-modules-in-browsers/
 
