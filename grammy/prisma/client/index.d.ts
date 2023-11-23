
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Present
 * 
 */
export type Present = $Result.DefaultSelection<Prisma.$PresentPayload>
/**
 * Model PresentMessage
 * 
 */
export type PresentMessage = $Result.DefaultSelection<Prisma.$PresentMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.present`: Exposes CRUD operations for the **Present** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presents
    * const presents = await prisma.present.findMany()
    * ```
    */
  get present(): Prisma.PresentDelegate<ExtArgs>;

  /**
   * `prisma.presentMessage`: Exposes CRUD operations for the **PresentMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PresentMessages
    * const presentMessages = await prisma.presentMessage.findMany()
    * ```
    */
  get presentMessage(): Prisma.PresentMessageDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    User: 'User',
    Present: 'Present',
    PresentMessage: 'PresentMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'session' | 'user' | 'present' | 'presentMessage'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Present: {
        payload: Prisma.$PresentPayload<ExtArgs>
        fields: Prisma.PresentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          findFirst: {
            args: Prisma.PresentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          findMany: {
            args: Prisma.PresentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>[]
          }
          create: {
            args: Prisma.PresentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          createMany: {
            args: Prisma.PresentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PresentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          update: {
            args: Prisma.PresentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          deleteMany: {
            args: Prisma.PresentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PresentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PresentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentPayload>
          }
          aggregate: {
            args: Prisma.PresentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePresent>
          }
          groupBy: {
            args: Prisma.PresentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PresentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresentCountArgs<ExtArgs>,
            result: $Utils.Optional<PresentCountAggregateOutputType> | number
          }
        }
      }
      PresentMessage: {
        payload: Prisma.$PresentMessagePayload<ExtArgs>
        fields: Prisma.PresentMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresentMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresentMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload>
          }
          findFirst: {
            args: Prisma.PresentMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresentMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload>
          }
          findMany: {
            args: Prisma.PresentMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload>[]
          }
          create: {
            args: Prisma.PresentMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload>
          }
          createMany: {
            args: Prisma.PresentMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PresentMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload>
          }
          update: {
            args: Prisma.PresentMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload>
          }
          deleteMany: {
            args: Prisma.PresentMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PresentMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PresentMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PresentMessagePayload>
          }
          aggregate: {
            args: Prisma.PresentMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePresentMessage>
          }
          groupBy: {
            args: Prisma.PresentMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PresentMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresentMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<PresentMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    presents: number
    presentMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presents?: boolean | UserCountOutputTypeCountPresentsArgs
    presentMessages?: boolean | UserCountOutputTypeCountPresentMessagesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentMessageWhereInput
  }



  /**
   * Count Type PresentCountOutputType
   */

  export type PresentCountOutputType = {
    presentMessages: number
  }

  export type PresentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presentMessages?: boolean | PresentCountOutputTypeCountPresentMessagesArgs
  }

  // Custom InputTypes

  /**
   * PresentCountOutputType without action
   */
  export type PresentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentCountOutputType
     */
    select?: PresentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PresentCountOutputType without action
   */
  export type PresentCountOutputTypeCountPresentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentMessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SessionMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SessionCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type SessionMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type SessionCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    key: string
    value: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    key?: boolean
    value?: boolean
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const sessionWithKeyOnly = await prisma.session.findMany({ select: { key: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly key: FieldRef<"Session", 'String'>
    readonly value: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    first_name: string | null
    last_name: string | null
    username: string | null
    isAdmin: boolean | null
    isOwner: boolean | null
    isFriend: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    first_name: string | null
    last_name: string | null
    username: string | null
    isAdmin: boolean | null
    isOwner: boolean | null
    isFriend: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    first_name: number
    last_name: number
    username: number
    isAdmin: number
    isOwner: number
    isFriend: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    first_name?: true
    last_name?: true
    username?: true
    isAdmin?: true
    isOwner?: true
    isFriend?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    first_name?: true
    last_name?: true
    username?: true
    isAdmin?: true
    isOwner?: true
    isFriend?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    first_name?: true
    last_name?: true
    username?: true
    isAdmin?: true
    isOwner?: true
    isFriend?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    first_name: string | null
    last_name: string | null
    username: string | null
    isAdmin: boolean
    isOwner: boolean
    isFriend: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
    presents?: boolean | User$presentsArgs<ExtArgs>
    presentMessages?: boolean | User$presentMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presents?: boolean | User$presentsArgs<ExtArgs>
    presentMessages?: boolean | User$presentMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      presents: Prisma.$PresentPayload<ExtArgs>[]
      presentMessages: Prisma.$PresentMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      first_name: string | null
      last_name: string | null
      username: string | null
      isAdmin: boolean
      isOwner: boolean
      isFriend: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    presents<T extends User$presentsArgs<ExtArgs> = {}>(args?: Subset<T, User$presentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'findMany'> | Null>;

    presentMessages<T extends User$presentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$presentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly isOwner: FieldRef<"User", 'Boolean'>
    readonly isFriend: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.presents
   */
  export type User$presentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    where?: PresentWhereInput
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    cursor?: PresentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }


  /**
   * User.presentMessages
   */
  export type User$presentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    where?: PresentMessageWhereInput
    orderBy?: PresentMessageOrderByWithRelationInput | PresentMessageOrderByWithRelationInput[]
    cursor?: PresentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresentMessageScalarFieldEnum | PresentMessageScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Present
   */

  export type AggregatePresent = {
    _count: PresentCountAggregateOutputType | null
    _avg: PresentAvgAggregateOutputType | null
    _sum: PresentSumAggregateOutputType | null
    _min: PresentMinAggregateOutputType | null
    _max: PresentMaxAggregateOutputType | null
  }

  export type PresentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PresentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PresentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    image: string | null
    description: string | null
    isVacant: boolean | null
    userId: number | null
  }

  export type PresentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    image: string | null
    description: string | null
    isVacant: boolean | null
    userId: number | null
  }

  export type PresentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    image: number
    description: number
    isVacant: number
    userId: number
    _all: number
  }


  export type PresentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PresentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PresentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    image?: true
    description?: true
    isVacant?: true
    userId?: true
  }

  export type PresentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    image?: true
    description?: true
    isVacant?: true
    userId?: true
  }

  export type PresentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    image?: true
    description?: true
    isVacant?: true
    userId?: true
    _all?: true
  }

  export type PresentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Present to aggregate.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presents
    **/
    _count?: true | PresentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresentMaxAggregateInputType
  }

  export type GetPresentAggregateType<T extends PresentAggregateArgs> = {
        [P in keyof T & keyof AggregatePresent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresent[P]>
      : GetScalarType<T[P], AggregatePresent[P]>
  }




  export type PresentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentWhereInput
    orderBy?: PresentOrderByWithAggregationInput | PresentOrderByWithAggregationInput[]
    by: PresentScalarFieldEnum[] | PresentScalarFieldEnum
    having?: PresentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresentCountAggregateInputType | true
    _avg?: PresentAvgAggregateInputType
    _sum?: PresentSumAggregateInputType
    _min?: PresentMinAggregateInputType
    _max?: PresentMaxAggregateInputType
  }

  export type PresentGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    image: string
    description: string
    isVacant: boolean
    userId: number | null
    _count: PresentCountAggregateOutputType | null
    _avg: PresentAvgAggregateOutputType | null
    _sum: PresentSumAggregateOutputType | null
    _min: PresentMinAggregateOutputType | null
    _max: PresentMaxAggregateOutputType | null
  }

  type GetPresentGroupByPayload<T extends PresentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresentGroupByOutputType[P]>
            : GetScalarType<T[P], PresentGroupByOutputType[P]>
        }
      >
    >


  export type PresentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    image?: boolean
    description?: boolean
    isVacant?: boolean
    userId?: boolean
    user?: boolean | Present$userArgs<ExtArgs>
    presentMessages?: boolean | Present$presentMessagesArgs<ExtArgs>
    _count?: boolean | PresentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["present"]>

  export type PresentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    image?: boolean
    description?: boolean
    isVacant?: boolean
    userId?: boolean
  }

  export type PresentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Present$userArgs<ExtArgs>
    presentMessages?: boolean | Present$presentMessagesArgs<ExtArgs>
    _count?: boolean | PresentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PresentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Present"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      presentMessages: Prisma.$PresentMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      image: string
      description: string
      isVacant: boolean
      userId: number | null
    }, ExtArgs["result"]["present"]>
    composites: {}
  }


  type PresentGetPayload<S extends boolean | null | undefined | PresentDefaultArgs> = $Result.GetResult<Prisma.$PresentPayload, S>

  type PresentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PresentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PresentCountAggregateInputType | true
    }

  export interface PresentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Present'], meta: { name: 'Present' } }
    /**
     * Find zero or one Present that matches the filter.
     * @param {PresentFindUniqueArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PresentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PresentFindUniqueArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Present that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PresentFindUniqueOrThrowArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PresentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Present that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentFindFirstArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PresentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentFindFirstArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Present that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentFindFirstOrThrowArgs} args - Arguments to find a Present
     * @example
     * // Get one Present
     * const present = await prisma.present.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PresentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Presents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presents
     * const presents = await prisma.present.findMany()
     * 
     * // Get first 10 Presents
     * const presents = await prisma.present.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presentWithIdOnly = await prisma.present.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PresentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Present.
     * @param {PresentCreateArgs} args - Arguments to create a Present.
     * @example
     * // Create one Present
     * const Present = await prisma.present.create({
     *   data: {
     *     // ... data to create a Present
     *   }
     * })
     * 
    **/
    create<T extends PresentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PresentCreateArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Presents.
     *     @param {PresentCreateManyArgs} args - Arguments to create many Presents.
     *     @example
     *     // Create many Presents
     *     const present = await prisma.present.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PresentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Present.
     * @param {PresentDeleteArgs} args - Arguments to delete one Present.
     * @example
     * // Delete one Present
     * const Present = await prisma.present.delete({
     *   where: {
     *     // ... filter to delete one Present
     *   }
     * })
     * 
    **/
    delete<T extends PresentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PresentDeleteArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Present.
     * @param {PresentUpdateArgs} args - Arguments to update one Present.
     * @example
     * // Update one Present
     * const present = await prisma.present.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PresentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PresentUpdateArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Presents.
     * @param {PresentDeleteManyArgs} args - Arguments to filter Presents to delete.
     * @example
     * // Delete a few Presents
     * const { count } = await prisma.present.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PresentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presents
     * const present = await prisma.present.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PresentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PresentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Present.
     * @param {PresentUpsertArgs} args - Arguments to update or create a Present.
     * @example
     * // Update or create a Present
     * const present = await prisma.present.upsert({
     *   create: {
     *     // ... data to create a Present
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Present we want to update
     *   }
     * })
    **/
    upsert<T extends PresentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PresentUpsertArgs<ExtArgs>>
    ): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Presents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentCountArgs} args - Arguments to filter Presents to count.
     * @example
     * // Count the number of Presents
     * const count = await prisma.present.count({
     *   where: {
     *     // ... the filter for the Presents we want to count
     *   }
     * })
    **/
    count<T extends PresentCountArgs>(
      args?: Subset<T, PresentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Present.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresentAggregateArgs>(args: Subset<T, PresentAggregateArgs>): Prisma.PrismaPromise<GetPresentAggregateType<T>>

    /**
     * Group by Present.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresentGroupByArgs['orderBy'] }
        : { orderBy?: PresentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Present model
   */
  readonly fields: PresentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Present.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Present$userArgs<ExtArgs> = {}>(args?: Subset<T, Present$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    presentMessages<T extends Present$presentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Present$presentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Present model
   */ 
  interface PresentFieldRefs {
    readonly id: FieldRef<"Present", 'Int'>
    readonly createdAt: FieldRef<"Present", 'DateTime'>
    readonly updatedAt: FieldRef<"Present", 'DateTime'>
    readonly title: FieldRef<"Present", 'String'>
    readonly image: FieldRef<"Present", 'String'>
    readonly description: FieldRef<"Present", 'String'>
    readonly isVacant: FieldRef<"Present", 'Boolean'>
    readonly userId: FieldRef<"Present", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Present findUnique
   */
  export type PresentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where: PresentWhereUniqueInput
  }


  /**
   * Present findUniqueOrThrow
   */
  export type PresentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where: PresentWhereUniqueInput
  }


  /**
   * Present findFirst
   */
  export type PresentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presents.
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presents.
     */
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }


  /**
   * Present findFirstOrThrow
   */
  export type PresentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Present to fetch.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presents.
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presents.
     */
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }


  /**
   * Present findMany
   */
  export type PresentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter, which Presents to fetch.
     */
    where?: PresentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presents to fetch.
     */
    orderBy?: PresentOrderByWithRelationInput | PresentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presents.
     */
    cursor?: PresentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presents.
     */
    skip?: number
    distinct?: PresentScalarFieldEnum | PresentScalarFieldEnum[]
  }


  /**
   * Present create
   */
  export type PresentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * The data needed to create a Present.
     */
    data: XOR<PresentCreateInput, PresentUncheckedCreateInput>
  }


  /**
   * Present createMany
   */
  export type PresentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presents.
     */
    data: PresentCreateManyInput | PresentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Present update
   */
  export type PresentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * The data needed to update a Present.
     */
    data: XOR<PresentUpdateInput, PresentUncheckedUpdateInput>
    /**
     * Choose, which Present to update.
     */
    where: PresentWhereUniqueInput
  }


  /**
   * Present updateMany
   */
  export type PresentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presents.
     */
    data: XOR<PresentUpdateManyMutationInput, PresentUncheckedUpdateManyInput>
    /**
     * Filter which Presents to update
     */
    where?: PresentWhereInput
  }


  /**
   * Present upsert
   */
  export type PresentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * The filter to search for the Present to update in case it exists.
     */
    where: PresentWhereUniqueInput
    /**
     * In case the Present found by the `where` argument doesn't exist, create a new Present with this data.
     */
    create: XOR<PresentCreateInput, PresentUncheckedCreateInput>
    /**
     * In case the Present was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresentUpdateInput, PresentUncheckedUpdateInput>
  }


  /**
   * Present delete
   */
  export type PresentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
    /**
     * Filter which Present to delete.
     */
    where: PresentWhereUniqueInput
  }


  /**
   * Present deleteMany
   */
  export type PresentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presents to delete
     */
    where?: PresentWhereInput
  }


  /**
   * Present.user
   */
  export type Present$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Present.presentMessages
   */
  export type Present$presentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    where?: PresentMessageWhereInput
    orderBy?: PresentMessageOrderByWithRelationInput | PresentMessageOrderByWithRelationInput[]
    cursor?: PresentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresentMessageScalarFieldEnum | PresentMessageScalarFieldEnum[]
  }


  /**
   * Present without action
   */
  export type PresentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Present
     */
    select?: PresentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentInclude<ExtArgs> | null
  }



  /**
   * Model PresentMessage
   */

  export type AggregatePresentMessage = {
    _count: PresentMessageCountAggregateOutputType | null
    _avg: PresentMessageAvgAggregateOutputType | null
    _sum: PresentMessageSumAggregateOutputType | null
    _min: PresentMessageMinAggregateOutputType | null
    _max: PresentMessageMaxAggregateOutputType | null
  }

  export type PresentMessageAvgAggregateOutputType = {
    chatId: number | null
    messageId: number | null
    presentId: number | null
    userId: number | null
  }

  export type PresentMessageSumAggregateOutputType = {
    chatId: number | null
    messageId: number | null
    presentId: number | null
    userId: number | null
  }

  export type PresentMessageMinAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    chatId: number | null
    messageId: number | null
    presentId: number | null
    userId: number | null
  }

  export type PresentMessageMaxAggregateOutputType = {
    createdAt: Date | null
    updatedAt: Date | null
    chatId: number | null
    messageId: number | null
    presentId: number | null
    userId: number | null
  }

  export type PresentMessageCountAggregateOutputType = {
    createdAt: number
    updatedAt: number
    chatId: number
    messageId: number
    presentId: number
    userId: number
    _all: number
  }


  export type PresentMessageAvgAggregateInputType = {
    chatId?: true
    messageId?: true
    presentId?: true
    userId?: true
  }

  export type PresentMessageSumAggregateInputType = {
    chatId?: true
    messageId?: true
    presentId?: true
    userId?: true
  }

  export type PresentMessageMinAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    chatId?: true
    messageId?: true
    presentId?: true
    userId?: true
  }

  export type PresentMessageMaxAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    chatId?: true
    messageId?: true
    presentId?: true
    userId?: true
  }

  export type PresentMessageCountAggregateInputType = {
    createdAt?: true
    updatedAt?: true
    chatId?: true
    messageId?: true
    presentId?: true
    userId?: true
    _all?: true
  }

  export type PresentMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresentMessage to aggregate.
     */
    where?: PresentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentMessages to fetch.
     */
    orderBy?: PresentMessageOrderByWithRelationInput | PresentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PresentMessages
    **/
    _count?: true | PresentMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresentMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresentMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresentMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresentMessageMaxAggregateInputType
  }

  export type GetPresentMessageAggregateType<T extends PresentMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePresentMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresentMessage[P]>
      : GetScalarType<T[P], AggregatePresentMessage[P]>
  }




  export type PresentMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentMessageWhereInput
    orderBy?: PresentMessageOrderByWithAggregationInput | PresentMessageOrderByWithAggregationInput[]
    by: PresentMessageScalarFieldEnum[] | PresentMessageScalarFieldEnum
    having?: PresentMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresentMessageCountAggregateInputType | true
    _avg?: PresentMessageAvgAggregateInputType
    _sum?: PresentMessageSumAggregateInputType
    _min?: PresentMessageMinAggregateInputType
    _max?: PresentMessageMaxAggregateInputType
  }

  export type PresentMessageGroupByOutputType = {
    createdAt: Date
    updatedAt: Date
    chatId: number
    messageId: number
    presentId: number
    userId: number
    _count: PresentMessageCountAggregateOutputType | null
    _avg: PresentMessageAvgAggregateOutputType | null
    _sum: PresentMessageSumAggregateOutputType | null
    _min: PresentMessageMinAggregateOutputType | null
    _max: PresentMessageMaxAggregateOutputType | null
  }

  type GetPresentMessageGroupByPayload<T extends PresentMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresentMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresentMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresentMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PresentMessageGroupByOutputType[P]>
        }
      >
    >


  export type PresentMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    updatedAt?: boolean
    chatId?: boolean
    messageId?: boolean
    presentId?: boolean
    userId?: boolean
    present?: boolean | PresentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentMessage"]>

  export type PresentMessageSelectScalar = {
    createdAt?: boolean
    updatedAt?: boolean
    chatId?: boolean
    messageId?: boolean
    presentId?: boolean
    userId?: boolean
  }

  export type PresentMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    present?: boolean | PresentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PresentMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PresentMessage"
    objects: {
      present: Prisma.$PresentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      createdAt: Date
      updatedAt: Date
      chatId: number
      messageId: number
      presentId: number
      userId: number
    }, ExtArgs["result"]["presentMessage"]>
    composites: {}
  }


  type PresentMessageGetPayload<S extends boolean | null | undefined | PresentMessageDefaultArgs> = $Result.GetResult<Prisma.$PresentMessagePayload, S>

  type PresentMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PresentMessageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PresentMessageCountAggregateInputType | true
    }

  export interface PresentMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PresentMessage'], meta: { name: 'PresentMessage' } }
    /**
     * Find zero or one PresentMessage that matches the filter.
     * @param {PresentMessageFindUniqueArgs} args - Arguments to find a PresentMessage
     * @example
     * // Get one PresentMessage
     * const presentMessage = await prisma.presentMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PresentMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PresentMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PresentMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PresentMessageFindUniqueOrThrowArgs} args - Arguments to find a PresentMessage
     * @example
     * // Get one PresentMessage
     * const presentMessage = await prisma.presentMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PresentMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PresentMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentMessageFindFirstArgs} args - Arguments to find a PresentMessage
     * @example
     * // Get one PresentMessage
     * const presentMessage = await prisma.presentMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PresentMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentMessageFindFirstArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PresentMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentMessageFindFirstOrThrowArgs} args - Arguments to find a PresentMessage
     * @example
     * // Get one PresentMessage
     * const presentMessage = await prisma.presentMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PresentMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PresentMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PresentMessages
     * const presentMessages = await prisma.presentMessage.findMany()
     * 
     * // Get first 10 PresentMessages
     * const presentMessages = await prisma.presentMessage.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const presentMessageWithCreatedAtOnly = await prisma.presentMessage.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends PresentMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PresentMessage.
     * @param {PresentMessageCreateArgs} args - Arguments to create a PresentMessage.
     * @example
     * // Create one PresentMessage
     * const PresentMessage = await prisma.presentMessage.create({
     *   data: {
     *     // ... data to create a PresentMessage
     *   }
     * })
     * 
    **/
    create<T extends PresentMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PresentMessageCreateArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PresentMessages.
     *     @param {PresentMessageCreateManyArgs} args - Arguments to create many PresentMessages.
     *     @example
     *     // Create many PresentMessages
     *     const presentMessage = await prisma.presentMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PresentMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PresentMessage.
     * @param {PresentMessageDeleteArgs} args - Arguments to delete one PresentMessage.
     * @example
     * // Delete one PresentMessage
     * const PresentMessage = await prisma.presentMessage.delete({
     *   where: {
     *     // ... filter to delete one PresentMessage
     *   }
     * })
     * 
    **/
    delete<T extends PresentMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PresentMessageDeleteArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PresentMessage.
     * @param {PresentMessageUpdateArgs} args - Arguments to update one PresentMessage.
     * @example
     * // Update one PresentMessage
     * const presentMessage = await prisma.presentMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PresentMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PresentMessageUpdateArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PresentMessages.
     * @param {PresentMessageDeleteManyArgs} args - Arguments to filter PresentMessages to delete.
     * @example
     * // Delete a few PresentMessages
     * const { count } = await prisma.presentMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PresentMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PresentMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PresentMessages
     * const presentMessage = await prisma.presentMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PresentMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PresentMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PresentMessage.
     * @param {PresentMessageUpsertArgs} args - Arguments to update or create a PresentMessage.
     * @example
     * // Update or create a PresentMessage
     * const presentMessage = await prisma.presentMessage.upsert({
     *   create: {
     *     // ... data to create a PresentMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PresentMessage we want to update
     *   }
     * })
    **/
    upsert<T extends PresentMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PresentMessageUpsertArgs<ExtArgs>>
    ): Prisma__PresentMessageClient<$Result.GetResult<Prisma.$PresentMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PresentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentMessageCountArgs} args - Arguments to filter PresentMessages to count.
     * @example
     * // Count the number of PresentMessages
     * const count = await prisma.presentMessage.count({
     *   where: {
     *     // ... the filter for the PresentMessages we want to count
     *   }
     * })
    **/
    count<T extends PresentMessageCountArgs>(
      args?: Subset<T, PresentMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresentMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PresentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresentMessageAggregateArgs>(args: Subset<T, PresentMessageAggregateArgs>): Prisma.PrismaPromise<GetPresentMessageAggregateType<T>>

    /**
     * Group by PresentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresentMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresentMessageGroupByArgs['orderBy'] }
        : { orderBy?: PresentMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresentMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresentMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PresentMessage model
   */
  readonly fields: PresentMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PresentMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresentMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    present<T extends PresentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PresentDefaultArgs<ExtArgs>>): Prisma__PresentClient<$Result.GetResult<Prisma.$PresentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PresentMessage model
   */ 
  interface PresentMessageFieldRefs {
    readonly createdAt: FieldRef<"PresentMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"PresentMessage", 'DateTime'>
    readonly chatId: FieldRef<"PresentMessage", 'Int'>
    readonly messageId: FieldRef<"PresentMessage", 'Int'>
    readonly presentId: FieldRef<"PresentMessage", 'Int'>
    readonly userId: FieldRef<"PresentMessage", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PresentMessage findUnique
   */
  export type PresentMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * Filter, which PresentMessage to fetch.
     */
    where: PresentMessageWhereUniqueInput
  }


  /**
   * PresentMessage findUniqueOrThrow
   */
  export type PresentMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * Filter, which PresentMessage to fetch.
     */
    where: PresentMessageWhereUniqueInput
  }


  /**
   * PresentMessage findFirst
   */
  export type PresentMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * Filter, which PresentMessage to fetch.
     */
    where?: PresentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentMessages to fetch.
     */
    orderBy?: PresentMessageOrderByWithRelationInput | PresentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresentMessages.
     */
    cursor?: PresentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresentMessages.
     */
    distinct?: PresentMessageScalarFieldEnum | PresentMessageScalarFieldEnum[]
  }


  /**
   * PresentMessage findFirstOrThrow
   */
  export type PresentMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * Filter, which PresentMessage to fetch.
     */
    where?: PresentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentMessages to fetch.
     */
    orderBy?: PresentMessageOrderByWithRelationInput | PresentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresentMessages.
     */
    cursor?: PresentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresentMessages.
     */
    distinct?: PresentMessageScalarFieldEnum | PresentMessageScalarFieldEnum[]
  }


  /**
   * PresentMessage findMany
   */
  export type PresentMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * Filter, which PresentMessages to fetch.
     */
    where?: PresentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresentMessages to fetch.
     */
    orderBy?: PresentMessageOrderByWithRelationInput | PresentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PresentMessages.
     */
    cursor?: PresentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresentMessages.
     */
    skip?: number
    distinct?: PresentMessageScalarFieldEnum | PresentMessageScalarFieldEnum[]
  }


  /**
   * PresentMessage create
   */
  export type PresentMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PresentMessage.
     */
    data: XOR<PresentMessageCreateInput, PresentMessageUncheckedCreateInput>
  }


  /**
   * PresentMessage createMany
   */
  export type PresentMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PresentMessages.
     */
    data: PresentMessageCreateManyInput | PresentMessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PresentMessage update
   */
  export type PresentMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PresentMessage.
     */
    data: XOR<PresentMessageUpdateInput, PresentMessageUncheckedUpdateInput>
    /**
     * Choose, which PresentMessage to update.
     */
    where: PresentMessageWhereUniqueInput
  }


  /**
   * PresentMessage updateMany
   */
  export type PresentMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PresentMessages.
     */
    data: XOR<PresentMessageUpdateManyMutationInput, PresentMessageUncheckedUpdateManyInput>
    /**
     * Filter which PresentMessages to update
     */
    where?: PresentMessageWhereInput
  }


  /**
   * PresentMessage upsert
   */
  export type PresentMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PresentMessage to update in case it exists.
     */
    where: PresentMessageWhereUniqueInput
    /**
     * In case the PresentMessage found by the `where` argument doesn't exist, create a new PresentMessage with this data.
     */
    create: XOR<PresentMessageCreateInput, PresentMessageUncheckedCreateInput>
    /**
     * In case the PresentMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresentMessageUpdateInput, PresentMessageUncheckedUpdateInput>
  }


  /**
   * PresentMessage delete
   */
  export type PresentMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
    /**
     * Filter which PresentMessage to delete.
     */
    where: PresentMessageWhereUniqueInput
  }


  /**
   * PresentMessage deleteMany
   */
  export type PresentMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresentMessages to delete
     */
    where?: PresentMessageWhereInput
  }


  /**
   * PresentMessage without action
   */
  export type PresentMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentMessage
     */
    select?: PresentMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PresentMessageInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    isAdmin: 'isAdmin',
    isOwner: 'isOwner',
    isFriend: 'isFriend'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PresentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    image: 'image',
    description: 'description',
    isVacant: 'isVacant',
    userId: 'userId'
  };

  export type PresentScalarFieldEnum = (typeof PresentScalarFieldEnum)[keyof typeof PresentScalarFieldEnum]


  export const PresentMessageScalarFieldEnum: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    chatId: 'chatId',
    messageId: 'messageId',
    presentId: 'presentId',
    userId: 'userId'
  };

  export type PresentMessageScalarFieldEnum = (typeof PresentMessageScalarFieldEnum)[keyof typeof PresentMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    key?: StringFilter<"Session"> | string
    value?: StringFilter<"Session"> | string
  }

  export type SessionOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    value?: StringFilter<"Session"> | string
  }, "key">

  export type SessionOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Session"> | string
    value?: StringWithAggregatesFilter<"Session"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    isOwner?: BoolFilter<"User"> | boolean
    isFriend?: BoolFilter<"User"> | boolean
    presents?: PresentListRelationFilter
    presentMessages?: PresentMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
    isFriend?: SortOrder
    presents?: PresentOrderByRelationAggregateInput
    presentMessages?: PresentMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    isOwner?: BoolFilter<"User"> | boolean
    isFriend?: BoolFilter<"User"> | boolean
    presents?: PresentListRelationFilter
    presentMessages?: PresentMessageListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
    isFriend?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    isOwner?: BoolWithAggregatesFilter<"User"> | boolean
    isFriend?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type PresentWhereInput = {
    AND?: PresentWhereInput | PresentWhereInput[]
    OR?: PresentWhereInput[]
    NOT?: PresentWhereInput | PresentWhereInput[]
    id?: IntFilter<"Present"> | number
    createdAt?: DateTimeFilter<"Present"> | Date | string
    updatedAt?: DateTimeFilter<"Present"> | Date | string
    title?: StringFilter<"Present"> | string
    image?: StringFilter<"Present"> | string
    description?: StringFilter<"Present"> | string
    isVacant?: BoolFilter<"Present"> | boolean
    userId?: IntNullableFilter<"Present"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    presentMessages?: PresentMessageListRelationFilter
  }

  export type PresentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isVacant?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    presentMessages?: PresentMessageOrderByRelationAggregateInput
  }

  export type PresentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: PresentWhereInput | PresentWhereInput[]
    OR?: PresentWhereInput[]
    NOT?: PresentWhereInput | PresentWhereInput[]
    createdAt?: DateTimeFilter<"Present"> | Date | string
    updatedAt?: DateTimeFilter<"Present"> | Date | string
    image?: StringFilter<"Present"> | string
    description?: StringFilter<"Present"> | string
    isVacant?: BoolFilter<"Present"> | boolean
    userId?: IntNullableFilter<"Present"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    presentMessages?: PresentMessageListRelationFilter
  }, "id" | "title">

  export type PresentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isVacant?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PresentCountOrderByAggregateInput
    _avg?: PresentAvgOrderByAggregateInput
    _max?: PresentMaxOrderByAggregateInput
    _min?: PresentMinOrderByAggregateInput
    _sum?: PresentSumOrderByAggregateInput
  }

  export type PresentScalarWhereWithAggregatesInput = {
    AND?: PresentScalarWhereWithAggregatesInput | PresentScalarWhereWithAggregatesInput[]
    OR?: PresentScalarWhereWithAggregatesInput[]
    NOT?: PresentScalarWhereWithAggregatesInput | PresentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Present"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Present"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Present"> | Date | string
    title?: StringWithAggregatesFilter<"Present"> | string
    image?: StringWithAggregatesFilter<"Present"> | string
    description?: StringWithAggregatesFilter<"Present"> | string
    isVacant?: BoolWithAggregatesFilter<"Present"> | boolean
    userId?: IntNullableWithAggregatesFilter<"Present"> | number | null
  }

  export type PresentMessageWhereInput = {
    AND?: PresentMessageWhereInput | PresentMessageWhereInput[]
    OR?: PresentMessageWhereInput[]
    NOT?: PresentMessageWhereInput | PresentMessageWhereInput[]
    createdAt?: DateTimeFilter<"PresentMessage"> | Date | string
    updatedAt?: DateTimeFilter<"PresentMessage"> | Date | string
    chatId?: IntFilter<"PresentMessage"> | number
    messageId?: IntFilter<"PresentMessage"> | number
    presentId?: IntFilter<"PresentMessage"> | number
    userId?: IntFilter<"PresentMessage"> | number
    present?: XOR<PresentRelationFilter, PresentWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PresentMessageOrderByWithRelationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    presentId?: SortOrder
    userId?: SortOrder
    present?: PresentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PresentMessageWhereUniqueInput = Prisma.AtLeast<{
    chatId?: number
    chatId_messageId?: PresentMessageChatIdMessageIdCompoundUniqueInput
    AND?: PresentMessageWhereInput | PresentMessageWhereInput[]
    OR?: PresentMessageWhereInput[]
    NOT?: PresentMessageWhereInput | PresentMessageWhereInput[]
    createdAt?: DateTimeFilter<"PresentMessage"> | Date | string
    updatedAt?: DateTimeFilter<"PresentMessage"> | Date | string
    messageId?: IntFilter<"PresentMessage"> | number
    presentId?: IntFilter<"PresentMessage"> | number
    userId?: IntFilter<"PresentMessage"> | number
    present?: XOR<PresentRelationFilter, PresentWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "chatId" | "chatId_messageId">

  export type PresentMessageOrderByWithAggregationInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    presentId?: SortOrder
    userId?: SortOrder
    _count?: PresentMessageCountOrderByAggregateInput
    _avg?: PresentMessageAvgOrderByAggregateInput
    _max?: PresentMessageMaxOrderByAggregateInput
    _min?: PresentMessageMinOrderByAggregateInput
    _sum?: PresentMessageSumOrderByAggregateInput
  }

  export type PresentMessageScalarWhereWithAggregatesInput = {
    AND?: PresentMessageScalarWhereWithAggregatesInput | PresentMessageScalarWhereWithAggregatesInput[]
    OR?: PresentMessageScalarWhereWithAggregatesInput[]
    NOT?: PresentMessageScalarWhereWithAggregatesInput | PresentMessageScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeWithAggregatesFilter<"PresentMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PresentMessage"> | Date | string
    chatId?: IntWithAggregatesFilter<"PresentMessage"> | number
    messageId?: IntWithAggregatesFilter<"PresentMessage"> | number
    presentId?: IntWithAggregatesFilter<"PresentMessage"> | number
    userId?: IntWithAggregatesFilter<"PresentMessage"> | number
  }

  export type SessionCreateInput = {
    key: string
    value: string
  }

  export type SessionUncheckedCreateInput = {
    key: string
    value: string
  }

  export type SessionUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    key: string
    value: string
  }

  export type SessionUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
    presents?: PresentCreateNestedManyWithoutUserInput
    presentMessages?: PresentMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
    presents?: PresentUncheckedCreateNestedManyWithoutUserInput
    presentMessages?: PresentMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
    presents?: PresentUpdateManyWithoutUserNestedInput
    presentMessages?: PresentMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
    presents?: PresentUncheckedUpdateManyWithoutUserNestedInput
    presentMessages?: PresentMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
    user?: UserCreateNestedOneWithoutPresentsInput
    presentMessages?: PresentMessageCreateNestedManyWithoutPresentInput
  }

  export type PresentUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
    userId?: number | null
    presentMessages?: PresentMessageUncheckedCreateNestedManyWithoutPresentInput
  }

  export type PresentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutPresentsNestedInput
    presentMessages?: PresentMessageUpdateManyWithoutPresentNestedInput
  }

  export type PresentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    presentMessages?: PresentMessageUncheckedUpdateManyWithoutPresentNestedInput
  }

  export type PresentCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
    userId?: number | null
  }

  export type PresentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PresentMessageCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    present: PresentCreateNestedOneWithoutPresentMessagesInput
    user: UserCreateNestedOneWithoutPresentMessagesInput
  }

  export type PresentMessageUncheckedCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    presentId: number
    userId: number
  }

  export type PresentMessageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    present?: PresentUpdateOneRequiredWithoutPresentMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutPresentMessagesNestedInput
  }

  export type PresentMessageUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    presentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PresentMessageCreateManyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    presentId: number
    userId: number
  }

  export type PresentMessageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type PresentMessageUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    presentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SessionCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PresentListRelationFilter = {
    every?: PresentWhereInput
    some?: PresentWhereInput
    none?: PresentWhereInput
  }

  export type PresentMessageListRelationFilter = {
    every?: PresentMessageWhereInput
    some?: PresentMessageWhereInput
    none?: PresentMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PresentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresentMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
    isFriend?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
    isFriend?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
    isFriend?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PresentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isVacant?: SortOrder
    userId?: SortOrder
  }

  export type PresentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PresentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isVacant?: SortOrder
    userId?: SortOrder
  }

  export type PresentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    isVacant?: SortOrder
    userId?: SortOrder
  }

  export type PresentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PresentRelationFilter = {
    is?: PresentWhereInput
    isNot?: PresentWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PresentMessageChatIdMessageIdCompoundUniqueInput = {
    chatId: number
    messageId: number
  }

  export type PresentMessageCountOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    presentId?: SortOrder
    userId?: SortOrder
  }

  export type PresentMessageAvgOrderByAggregateInput = {
    chatId?: SortOrder
    messageId?: SortOrder
    presentId?: SortOrder
    userId?: SortOrder
  }

  export type PresentMessageMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    presentId?: SortOrder
    userId?: SortOrder
  }

  export type PresentMessageMinOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    presentId?: SortOrder
    userId?: SortOrder
  }

  export type PresentMessageSumOrderByAggregateInput = {
    chatId?: SortOrder
    messageId?: SortOrder
    presentId?: SortOrder
    userId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PresentCreateNestedManyWithoutUserInput = {
    create?: XOR<PresentCreateWithoutUserInput, PresentUncheckedCreateWithoutUserInput> | PresentCreateWithoutUserInput[] | PresentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutUserInput | PresentCreateOrConnectWithoutUserInput[]
    createMany?: PresentCreateManyUserInputEnvelope
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
  }

  export type PresentMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<PresentMessageCreateWithoutUserInput, PresentMessageUncheckedCreateWithoutUserInput> | PresentMessageCreateWithoutUserInput[] | PresentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutUserInput | PresentMessageCreateOrConnectWithoutUserInput[]
    createMany?: PresentMessageCreateManyUserInputEnvelope
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
  }

  export type PresentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PresentCreateWithoutUserInput, PresentUncheckedCreateWithoutUserInput> | PresentCreateWithoutUserInput[] | PresentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutUserInput | PresentCreateOrConnectWithoutUserInput[]
    createMany?: PresentCreateManyUserInputEnvelope
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
  }

  export type PresentMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PresentMessageCreateWithoutUserInput, PresentMessageUncheckedCreateWithoutUserInput> | PresentMessageCreateWithoutUserInput[] | PresentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutUserInput | PresentMessageCreateOrConnectWithoutUserInput[]
    createMany?: PresentMessageCreateManyUserInputEnvelope
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PresentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresentCreateWithoutUserInput, PresentUncheckedCreateWithoutUserInput> | PresentCreateWithoutUserInput[] | PresentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutUserInput | PresentCreateOrConnectWithoutUserInput[]
    upsert?: PresentUpsertWithWhereUniqueWithoutUserInput | PresentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresentCreateManyUserInputEnvelope
    set?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    disconnect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    delete?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    update?: PresentUpdateWithWhereUniqueWithoutUserInput | PresentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresentUpdateManyWithWhereWithoutUserInput | PresentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresentScalarWhereInput | PresentScalarWhereInput[]
  }

  export type PresentMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresentMessageCreateWithoutUserInput, PresentMessageUncheckedCreateWithoutUserInput> | PresentMessageCreateWithoutUserInput[] | PresentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutUserInput | PresentMessageCreateOrConnectWithoutUserInput[]
    upsert?: PresentMessageUpsertWithWhereUniqueWithoutUserInput | PresentMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresentMessageCreateManyUserInputEnvelope
    set?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    disconnect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    delete?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    update?: PresentMessageUpdateWithWhereUniqueWithoutUserInput | PresentMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresentMessageUpdateManyWithWhereWithoutUserInput | PresentMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresentMessageScalarWhereInput | PresentMessageScalarWhereInput[]
  }

  export type PresentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresentCreateWithoutUserInput, PresentUncheckedCreateWithoutUserInput> | PresentCreateWithoutUserInput[] | PresentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentCreateOrConnectWithoutUserInput | PresentCreateOrConnectWithoutUserInput[]
    upsert?: PresentUpsertWithWhereUniqueWithoutUserInput | PresentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresentCreateManyUserInputEnvelope
    set?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    disconnect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    delete?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    connect?: PresentWhereUniqueInput | PresentWhereUniqueInput[]
    update?: PresentUpdateWithWhereUniqueWithoutUserInput | PresentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresentUpdateManyWithWhereWithoutUserInput | PresentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresentScalarWhereInput | PresentScalarWhereInput[]
  }

  export type PresentMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresentMessageCreateWithoutUserInput, PresentMessageUncheckedCreateWithoutUserInput> | PresentMessageCreateWithoutUserInput[] | PresentMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutUserInput | PresentMessageCreateOrConnectWithoutUserInput[]
    upsert?: PresentMessageUpsertWithWhereUniqueWithoutUserInput | PresentMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresentMessageCreateManyUserInputEnvelope
    set?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    disconnect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    delete?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    update?: PresentMessageUpdateWithWhereUniqueWithoutUserInput | PresentMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresentMessageUpdateManyWithWhereWithoutUserInput | PresentMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresentMessageScalarWhereInput | PresentMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPresentsInput = {
    create?: XOR<UserCreateWithoutPresentsInput, UserUncheckedCreateWithoutPresentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresentsInput
    connect?: UserWhereUniqueInput
  }

  export type PresentMessageCreateNestedManyWithoutPresentInput = {
    create?: XOR<PresentMessageCreateWithoutPresentInput, PresentMessageUncheckedCreateWithoutPresentInput> | PresentMessageCreateWithoutPresentInput[] | PresentMessageUncheckedCreateWithoutPresentInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutPresentInput | PresentMessageCreateOrConnectWithoutPresentInput[]
    createMany?: PresentMessageCreateManyPresentInputEnvelope
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
  }

  export type PresentMessageUncheckedCreateNestedManyWithoutPresentInput = {
    create?: XOR<PresentMessageCreateWithoutPresentInput, PresentMessageUncheckedCreateWithoutPresentInput> | PresentMessageCreateWithoutPresentInput[] | PresentMessageUncheckedCreateWithoutPresentInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutPresentInput | PresentMessageCreateOrConnectWithoutPresentInput[]
    createMany?: PresentMessageCreateManyPresentInputEnvelope
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutPresentsNestedInput = {
    create?: XOR<UserCreateWithoutPresentsInput, UserUncheckedCreateWithoutPresentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresentsInput
    upsert?: UserUpsertWithoutPresentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPresentsInput, UserUpdateWithoutPresentsInput>, UserUncheckedUpdateWithoutPresentsInput>
  }

  export type PresentMessageUpdateManyWithoutPresentNestedInput = {
    create?: XOR<PresentMessageCreateWithoutPresentInput, PresentMessageUncheckedCreateWithoutPresentInput> | PresentMessageCreateWithoutPresentInput[] | PresentMessageUncheckedCreateWithoutPresentInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutPresentInput | PresentMessageCreateOrConnectWithoutPresentInput[]
    upsert?: PresentMessageUpsertWithWhereUniqueWithoutPresentInput | PresentMessageUpsertWithWhereUniqueWithoutPresentInput[]
    createMany?: PresentMessageCreateManyPresentInputEnvelope
    set?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    disconnect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    delete?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    update?: PresentMessageUpdateWithWhereUniqueWithoutPresentInput | PresentMessageUpdateWithWhereUniqueWithoutPresentInput[]
    updateMany?: PresentMessageUpdateManyWithWhereWithoutPresentInput | PresentMessageUpdateManyWithWhereWithoutPresentInput[]
    deleteMany?: PresentMessageScalarWhereInput | PresentMessageScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PresentMessageUncheckedUpdateManyWithoutPresentNestedInput = {
    create?: XOR<PresentMessageCreateWithoutPresentInput, PresentMessageUncheckedCreateWithoutPresentInput> | PresentMessageCreateWithoutPresentInput[] | PresentMessageUncheckedCreateWithoutPresentInput[]
    connectOrCreate?: PresentMessageCreateOrConnectWithoutPresentInput | PresentMessageCreateOrConnectWithoutPresentInput[]
    upsert?: PresentMessageUpsertWithWhereUniqueWithoutPresentInput | PresentMessageUpsertWithWhereUniqueWithoutPresentInput[]
    createMany?: PresentMessageCreateManyPresentInputEnvelope
    set?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    disconnect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    delete?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    connect?: PresentMessageWhereUniqueInput | PresentMessageWhereUniqueInput[]
    update?: PresentMessageUpdateWithWhereUniqueWithoutPresentInput | PresentMessageUpdateWithWhereUniqueWithoutPresentInput[]
    updateMany?: PresentMessageUpdateManyWithWhereWithoutPresentInput | PresentMessageUpdateManyWithWhereWithoutPresentInput[]
    deleteMany?: PresentMessageScalarWhereInput | PresentMessageScalarWhereInput[]
  }

  export type PresentCreateNestedOneWithoutPresentMessagesInput = {
    create?: XOR<PresentCreateWithoutPresentMessagesInput, PresentUncheckedCreateWithoutPresentMessagesInput>
    connectOrCreate?: PresentCreateOrConnectWithoutPresentMessagesInput
    connect?: PresentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPresentMessagesInput = {
    create?: XOR<UserCreateWithoutPresentMessagesInput, UserUncheckedCreateWithoutPresentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type PresentUpdateOneRequiredWithoutPresentMessagesNestedInput = {
    create?: XOR<PresentCreateWithoutPresentMessagesInput, PresentUncheckedCreateWithoutPresentMessagesInput>
    connectOrCreate?: PresentCreateOrConnectWithoutPresentMessagesInput
    upsert?: PresentUpsertWithoutPresentMessagesInput
    connect?: PresentWhereUniqueInput
    update?: XOR<XOR<PresentUpdateToOneWithWhereWithoutPresentMessagesInput, PresentUpdateWithoutPresentMessagesInput>, PresentUncheckedUpdateWithoutPresentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutPresentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutPresentMessagesInput, UserUncheckedCreateWithoutPresentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresentMessagesInput
    upsert?: UserUpsertWithoutPresentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPresentMessagesInput, UserUpdateWithoutPresentMessagesInput>, UserUncheckedUpdateWithoutPresentMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PresentCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
    presentMessages?: PresentMessageCreateNestedManyWithoutPresentInput
  }

  export type PresentUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
    presentMessages?: PresentMessageUncheckedCreateNestedManyWithoutPresentInput
  }

  export type PresentCreateOrConnectWithoutUserInput = {
    where: PresentWhereUniqueInput
    create: XOR<PresentCreateWithoutUserInput, PresentUncheckedCreateWithoutUserInput>
  }

  export type PresentCreateManyUserInputEnvelope = {
    data: PresentCreateManyUserInput | PresentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PresentMessageCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    present: PresentCreateNestedOneWithoutPresentMessagesInput
  }

  export type PresentMessageUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    presentId: number
  }

  export type PresentMessageCreateOrConnectWithoutUserInput = {
    where: PresentMessageWhereUniqueInput
    create: XOR<PresentMessageCreateWithoutUserInput, PresentMessageUncheckedCreateWithoutUserInput>
  }

  export type PresentMessageCreateManyUserInputEnvelope = {
    data: PresentMessageCreateManyUserInput | PresentMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PresentUpsertWithWhereUniqueWithoutUserInput = {
    where: PresentWhereUniqueInput
    update: XOR<PresentUpdateWithoutUserInput, PresentUncheckedUpdateWithoutUserInput>
    create: XOR<PresentCreateWithoutUserInput, PresentUncheckedCreateWithoutUserInput>
  }

  export type PresentUpdateWithWhereUniqueWithoutUserInput = {
    where: PresentWhereUniqueInput
    data: XOR<PresentUpdateWithoutUserInput, PresentUncheckedUpdateWithoutUserInput>
  }

  export type PresentUpdateManyWithWhereWithoutUserInput = {
    where: PresentScalarWhereInput
    data: XOR<PresentUpdateManyMutationInput, PresentUncheckedUpdateManyWithoutUserInput>
  }

  export type PresentScalarWhereInput = {
    AND?: PresentScalarWhereInput | PresentScalarWhereInput[]
    OR?: PresentScalarWhereInput[]
    NOT?: PresentScalarWhereInput | PresentScalarWhereInput[]
    id?: IntFilter<"Present"> | number
    createdAt?: DateTimeFilter<"Present"> | Date | string
    updatedAt?: DateTimeFilter<"Present"> | Date | string
    title?: StringFilter<"Present"> | string
    image?: StringFilter<"Present"> | string
    description?: StringFilter<"Present"> | string
    isVacant?: BoolFilter<"Present"> | boolean
    userId?: IntNullableFilter<"Present"> | number | null
  }

  export type PresentMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: PresentMessageWhereUniqueInput
    update: XOR<PresentMessageUpdateWithoutUserInput, PresentMessageUncheckedUpdateWithoutUserInput>
    create: XOR<PresentMessageCreateWithoutUserInput, PresentMessageUncheckedCreateWithoutUserInput>
  }

  export type PresentMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: PresentMessageWhereUniqueInput
    data: XOR<PresentMessageUpdateWithoutUserInput, PresentMessageUncheckedUpdateWithoutUserInput>
  }

  export type PresentMessageUpdateManyWithWhereWithoutUserInput = {
    where: PresentMessageScalarWhereInput
    data: XOR<PresentMessageUpdateManyMutationInput, PresentMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type PresentMessageScalarWhereInput = {
    AND?: PresentMessageScalarWhereInput | PresentMessageScalarWhereInput[]
    OR?: PresentMessageScalarWhereInput[]
    NOT?: PresentMessageScalarWhereInput | PresentMessageScalarWhereInput[]
    createdAt?: DateTimeFilter<"PresentMessage"> | Date | string
    updatedAt?: DateTimeFilter<"PresentMessage"> | Date | string
    chatId?: IntFilter<"PresentMessage"> | number
    messageId?: IntFilter<"PresentMessage"> | number
    presentId?: IntFilter<"PresentMessage"> | number
    userId?: IntFilter<"PresentMessage"> | number
  }

  export type UserCreateWithoutPresentsInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
    presentMessages?: PresentMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPresentsInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
    presentMessages?: PresentMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPresentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPresentsInput, UserUncheckedCreateWithoutPresentsInput>
  }

  export type PresentMessageCreateWithoutPresentInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    user: UserCreateNestedOneWithoutPresentMessagesInput
  }

  export type PresentMessageUncheckedCreateWithoutPresentInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    userId: number
  }

  export type PresentMessageCreateOrConnectWithoutPresentInput = {
    where: PresentMessageWhereUniqueInput
    create: XOR<PresentMessageCreateWithoutPresentInput, PresentMessageUncheckedCreateWithoutPresentInput>
  }

  export type PresentMessageCreateManyPresentInputEnvelope = {
    data: PresentMessageCreateManyPresentInput | PresentMessageCreateManyPresentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPresentsInput = {
    update: XOR<UserUpdateWithoutPresentsInput, UserUncheckedUpdateWithoutPresentsInput>
    create: XOR<UserCreateWithoutPresentsInput, UserUncheckedCreateWithoutPresentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPresentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPresentsInput, UserUncheckedUpdateWithoutPresentsInput>
  }

  export type UserUpdateWithoutPresentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
    presentMessages?: PresentMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPresentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
    presentMessages?: PresentMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PresentMessageUpsertWithWhereUniqueWithoutPresentInput = {
    where: PresentMessageWhereUniqueInput
    update: XOR<PresentMessageUpdateWithoutPresentInput, PresentMessageUncheckedUpdateWithoutPresentInput>
    create: XOR<PresentMessageCreateWithoutPresentInput, PresentMessageUncheckedCreateWithoutPresentInput>
  }

  export type PresentMessageUpdateWithWhereUniqueWithoutPresentInput = {
    where: PresentMessageWhereUniqueInput
    data: XOR<PresentMessageUpdateWithoutPresentInput, PresentMessageUncheckedUpdateWithoutPresentInput>
  }

  export type PresentMessageUpdateManyWithWhereWithoutPresentInput = {
    where: PresentMessageScalarWhereInput
    data: XOR<PresentMessageUpdateManyMutationInput, PresentMessageUncheckedUpdateManyWithoutPresentInput>
  }

  export type PresentCreateWithoutPresentMessagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
    user?: UserCreateNestedOneWithoutPresentsInput
  }

  export type PresentUncheckedCreateWithoutPresentMessagesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
    userId?: number | null
  }

  export type PresentCreateOrConnectWithoutPresentMessagesInput = {
    where: PresentWhereUniqueInput
    create: XOR<PresentCreateWithoutPresentMessagesInput, PresentUncheckedCreateWithoutPresentMessagesInput>
  }

  export type UserCreateWithoutPresentMessagesInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
    presents?: PresentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPresentMessagesInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    isAdmin?: boolean
    isOwner?: boolean
    isFriend?: boolean
    presents?: PresentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPresentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPresentMessagesInput, UserUncheckedCreateWithoutPresentMessagesInput>
  }

  export type PresentUpsertWithoutPresentMessagesInput = {
    update: XOR<PresentUpdateWithoutPresentMessagesInput, PresentUncheckedUpdateWithoutPresentMessagesInput>
    create: XOR<PresentCreateWithoutPresentMessagesInput, PresentUncheckedCreateWithoutPresentMessagesInput>
    where?: PresentWhereInput
  }

  export type PresentUpdateToOneWithWhereWithoutPresentMessagesInput = {
    where?: PresentWhereInput
    data: XOR<PresentUpdateWithoutPresentMessagesInput, PresentUncheckedUpdateWithoutPresentMessagesInput>
  }

  export type PresentUpdateWithoutPresentMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutPresentsNestedInput
  }

  export type PresentUncheckedUpdateWithoutPresentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutPresentMessagesInput = {
    update: XOR<UserUpdateWithoutPresentMessagesInput, UserUncheckedUpdateWithoutPresentMessagesInput>
    create: XOR<UserCreateWithoutPresentMessagesInput, UserUncheckedCreateWithoutPresentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPresentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPresentMessagesInput, UserUncheckedUpdateWithoutPresentMessagesInput>
  }

  export type UserUpdateWithoutPresentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
    presents?: PresentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPresentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    isFriend?: BoolFieldUpdateOperationsInput | boolean
    presents?: PresentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PresentCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    image: string
    description: string
    isVacant?: boolean
  }

  export type PresentMessageCreateManyUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    presentId: number
  }

  export type PresentUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
    presentMessages?: PresentMessageUpdateManyWithoutPresentNestedInput
  }

  export type PresentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
    presentMessages?: PresentMessageUncheckedUpdateManyWithoutPresentNestedInput
  }

  export type PresentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isVacant?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresentMessageUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    present?: PresentUpdateOneRequiredWithoutPresentMessagesNestedInput
  }

  export type PresentMessageUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    presentId?: IntFieldUpdateOperationsInput | number
  }

  export type PresentMessageUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    presentId?: IntFieldUpdateOperationsInput | number
  }

  export type PresentMessageCreateManyPresentInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatId: number
    messageId: number
    userId: number
  }

  export type PresentMessageUpdateWithoutPresentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPresentMessagesNestedInput
  }

  export type PresentMessageUncheckedUpdateWithoutPresentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PresentMessageUncheckedUpdateManyWithoutPresentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PresentCountOutputTypeDefaultArgs instead
     */
    export type PresentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PresentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PresentDefaultArgs instead
     */
    export type PresentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PresentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PresentMessageDefaultArgs instead
     */
    export type PresentMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PresentMessageDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}