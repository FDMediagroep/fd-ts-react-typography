[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-typography.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-typography)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-typography/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-typography?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-typography.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-typography)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fd-ts-react-typography.svg)](https://greenkeeper.io/)

# fd-typography
FD-themed typography.

# Installation
* Run `npm i -D @fdmg/fd-typography`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/typography/demo.html)

# Usage
```
import {H1, H3} from '@fdmg/fd-typography';
...
<H1>.fd-h1</H1>
<H1 className="article-longread">.fd-h1.article-longread</H1>

<H3 className="card">.fd-h3.card</H3>
<H3>.fd-h3</H3>
```
