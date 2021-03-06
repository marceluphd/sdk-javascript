---
code: true
type: page
title: smembers
---

# smembers

Returns the members of a set of unique values.

[[_Redis documentation_]](https://redis.io/commands/smembers)

## Arguments

```js
smembers(key, [options]);
```

<br/>

| Arguments | Type              | Description              |
| --------- | ----------------- | ------------------------ |
| `key`     | <pre>string</pre> | Set key                  |
| `options` | <pre>object</pre> | Optional query arguments |

### options

The `options` arguments can contain the following option properties:

| Property   | Type (default)            | Description                                                                  |
| ---------- | ------------------------- | ---------------------------------------------------------------------------- |
| `queuable` | <pre>boolean (true)</pre> | If true, queues the request during downtime, until connected to Kuzzle again |

## Resolve

Resolves to the list of the set's members.

## Usage

<<< ./snippets/smembers.js
