/**
 * A TypeScript type to validate an alias for input of
 * `@mnrendra/alias-resolver` or output of `@mnrendra/tsconfig-alias-parser`.
 *
 * @see https://www.npmjs.com/package/@mnrendra/types-aliases
 */
export interface Alias {
  /**
   * An alias for a path.
   *
   * @see https://www.npmjs.com/package/@mnrendra/types-aliases
   */
  alias: string

  /**
   * A relative path to the target path.
   *
   * @see https://www.npmjs.com/package/@mnrendra/types-aliases
   */
  path: string
}

export default Alias
