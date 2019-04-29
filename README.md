# tiny-pick

[![source](https://badgen.net/npm/v/@ngard/tiny-pick)](https://www.npmjs.com/package/@ngard/tiny-pick)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-pick)](https://bundlephobia.com/result?p=@ngard/tiny-pick)
[![build status](https://badgen.net/travis/NickGard/tiny-pick)](https://travis-ci.org/NickGard/tiny-pick)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal utility equivalent to `lodash.pick`. For when every byte counts!

<hr/>

lodash.pick: [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.pick)](https://bundlephobia.com/result?p=lodash.pick)
<br/>
tiny-pick: [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-pick)](https://bundlephobia.com/result?p=@ngard/tiny-pick)

<hr/>

## Install

```sh
npm install @ngard/tiny-pick
```

## Syntax

```javascript
pick(/* source, key [, key2, ...] */);
```

## Parameters

`source` - `[Object|Array]` The object whose key/value pairs will be picked.
`key [, key2, ...]` - `[String|Array<String>]` An array or list of key names.

## Returns
An object comprised of the picked key/value pairs.

## Example

```javascript
import { pick } from '@ngard/tiny-pick';

const character = {
  name: 'Luke Skywalker',
  description: 'whiny Jedi',
  planet: 'Tatooine',
  system: 'Jabak',
}

const bio = pick(character, 'name', 'description');
// { name: 'Luke Skywalker', description: 'whiny Jedi' }

const address = pick(character, ['planet', 'system']);
// { planet: 'Tatooine', system: 'Jabak' }

/* Picking Arrays */
pick(['a', 'b', 'c'], 0, 2); // { 0: 'a', 2: 'c' }
```
