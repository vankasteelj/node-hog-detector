# node-hog-detector

Detects Node hogs on CPU-intensive tasks and reports them in console.

### Quick start

    npm install node-hog-detector

Then:

```js
var hogDetector = require('node-hog-detector');
hogDetector.start(-1);
hogDetector.stop();
```
    
### Usage
`start(ms, i, t)`
- `ms` : Maximum time in milliseconds the node engine can hog before reporting (small hogs from 1 to 30ms are quite frequent), defaults to 30
- `i` : Total number of iterations to make (each iteration is 100ms) before exiting, defaults to 3000 (5min)
- `t` : Total number of hogs superior to `ms` to report before exiting, defaults to 10

You can use `-1` to make the iteration and the reporting infinite. You'll need to quit the iteration with `hogDetector.stop()`.

You can combine these factors: `hogDetector.start(100, -1)` will report all hogs greater than 100ms for an infinite number of time, until explicitely stopped with `.stop()`.


### License

This code is registered under GPLv3

#### The GNU GENERAL PUBLIC LICENSE (GPL)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see http://www.gnu.org/licenses/
