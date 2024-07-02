# @mnrendra/types-aliases
A TypeScript type to validate the input of [@mnrendra/alias-resolver](https://www.npmjs.com/package/@mnrendra/alias-resolver) or the output of [@mnrendra/tsconfig-alias-parser](https://www.npmjs.com/package/@mnrendra/tsconfig-alias-parser).

## Install
```bash
npm i -D @mnrendra/types-aliases
```

## Usage
```typescript
import type { Aliases, Alias } from '@mnrendra/types-aliases'

// Alias
const alias: Alias = {
  alias: '@',
  path: './src'
}

console.log('alias:', alias)

// Aliases
const aliases: Aliases = [
  {
    alias: '@',
    path: './src'
  },
  {
    alias: '@tests',
    path: './tests'
  }
]

console.log('aliases:', aliases)
```

## Types
```typescript
import type {
  Aliases, // A TypeScript type to validate the input of `@mnrendra/alias-resolver` or the output of `@mnrendra/tsconfig-alias-parser`.
  Alias // A TypeScript type to validate an alias for input of `@mnrendra/alias-resolver` or output of `@mnrendra/tsconfig-alias-parser`.
} from '@mnrendra/types-aliases'
```

## License
[MIT](https://github.com/mnrendra/types-aliases/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
