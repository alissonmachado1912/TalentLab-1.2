
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Setor
 * 
 */
export type Setor = $Result.DefaultSelection<Prisma.$SetorPayload>
/**
 * Model Cargo
 * 
 */
export type Cargo = $Result.DefaultSelection<Prisma.$CargoPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model RegistroPonto
 * 
 */
export type RegistroPonto = $Result.DefaultSelection<Prisma.$RegistroPontoPayload>
/**
 * Model RegistroASO
 * 
 */
export type RegistroASO = $Result.DefaultSelection<Prisma.$RegistroASOPayload>
/**
 * Model EventoFolha
 * 
 */
export type EventoFolha = $Result.DefaultSelection<Prisma.$EventoFolhaPayload>
/**
 * Model FolhaPagamento
 * 
 */
export type FolhaPagamento = $Result.DefaultSelection<Prisma.$FolhaPagamentoPayload>
/**
 * Model ItemFolha
 * 
 */
export type ItemFolha = $Result.DefaultSelection<Prisma.$ItemFolhaPayload>
/**
 * Model Turma
 * 
 */
export type Turma = $Result.DefaultSelection<Prisma.$TurmaPayload>
/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model AtividadeConclusao
 * 
 */
export type AtividadeConclusao = $Result.DefaultSelection<Prisma.$AtividadeConclusaoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Sessao
 * 
 */
export type Sessao = $Result.DefaultSelection<Prisma.$SessaoPayload>
/**
 * Model Trabalho
 * 
 */
export type Trabalho = $Result.DefaultSelection<Prisma.$TrabalhoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoEvento: {
  PROVENTO: 'PROVENTO',
  DESCONTO: 'DESCONTO'
};

export type TipoEvento = (typeof TipoEvento)[keyof typeof TipoEvento]


export const TipoAtividade: {
  pratica: 'pratica',
  simulacao: 'simulacao',
  documento: 'documento',
  calculo: 'calculo'
};

export type TipoAtividade = (typeof TipoAtividade)[keyof typeof TipoAtividade]


export const MecanismoAtividade: {
  empresas: 'empresas',
  cargos: 'cargos',
  funcionarios: 'funcionarios',
  ponto: 'ponto',
  aso: 'aso',
  folha: 'folha',
  custos: 'custos',
  contratacao: 'contratacao'
};

export type MecanismoAtividade = (typeof MecanismoAtividade)[keyof typeof MecanismoAtividade]


export const StatusPonto: {
  REGULAR: 'REGULAR',
  ATRASO: 'ATRASO'
};

export type StatusPonto = (typeof StatusPonto)[keyof typeof StatusPonto]


export const ResultadoASO: {
  APTO: 'APTO',
  INAPTO: 'INAPTO'
};

export type ResultadoASO = (typeof ResultadoASO)[keyof typeof ResultadoASO]


export const TipoNotificacao: {
  NOVA_ATIVIDADE: 'NOVA_ATIVIDADE',
  ATIVIDADE_CONCLUIDA: 'ATIVIDADE_CONCLUIDA'
};

export type TipoNotificacao = (typeof TipoNotificacao)[keyof typeof TipoNotificacao]


export const DestinoNotificacao: {
  PROFESSOR: 'PROFESSOR',
  ALUNO: 'ALUNO'
};

export type DestinoNotificacao = (typeof DestinoNotificacao)[keyof typeof DestinoNotificacao]

}

export type TipoEvento = $Enums.TipoEvento

export const TipoEvento: typeof $Enums.TipoEvento

export type TipoAtividade = $Enums.TipoAtividade

export const TipoAtividade: typeof $Enums.TipoAtividade

export type MecanismoAtividade = $Enums.MecanismoAtividade

export const MecanismoAtividade: typeof $Enums.MecanismoAtividade

export type StatusPonto = $Enums.StatusPonto

export const StatusPonto: typeof $Enums.StatusPonto

export type ResultadoASO = $Enums.ResultadoASO

export const ResultadoASO: typeof $Enums.ResultadoASO

export type TipoNotificacao = $Enums.TipoNotificacao

export const TipoNotificacao: typeof $Enums.TipoNotificacao

export type DestinoNotificacao = $Enums.DestinoNotificacao

export const DestinoNotificacao: typeof $Enums.DestinoNotificacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setor`: Exposes CRUD operations for the **Setor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setors
    * const setors = await prisma.setor.findMany()
    * ```
    */
  get setor(): Prisma.SetorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **Cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.CargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroPonto`: Exposes CRUD operations for the **RegistroPonto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroPontos
    * const registroPontos = await prisma.registroPonto.findMany()
    * ```
    */
  get registroPonto(): Prisma.RegistroPontoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroASO`: Exposes CRUD operations for the **RegistroASO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroASOS
    * const registroASOS = await prisma.registroASO.findMany()
    * ```
    */
  get registroASO(): Prisma.RegistroASODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventoFolha`: Exposes CRUD operations for the **EventoFolha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventoFolhas
    * const eventoFolhas = await prisma.eventoFolha.findMany()
    * ```
    */
  get eventoFolha(): Prisma.EventoFolhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folhaPagamento`: Exposes CRUD operations for the **FolhaPagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FolhaPagamentos
    * const folhaPagamentos = await prisma.folhaPagamento.findMany()
    * ```
    */
  get folhaPagamento(): Prisma.FolhaPagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemFolha`: Exposes CRUD operations for the **ItemFolha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemFolhas
    * const itemFolhas = await prisma.itemFolha.findMany()
    * ```
    */
  get itemFolha(): Prisma.ItemFolhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turma`: Exposes CRUD operations for the **Turma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turmas
    * const turmas = await prisma.turma.findMany()
    * ```
    */
  get turma(): Prisma.TurmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividadeConclusao`: Exposes CRUD operations for the **AtividadeConclusao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtividadeConclusaos
    * const atividadeConclusaos = await prisma.atividadeConclusao.findMany()
    * ```
    */
  get atividadeConclusao(): Prisma.AtividadeConclusaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessao`: Exposes CRUD operations for the **Sessao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessaos
    * const sessaos = await prisma.sessao.findMany()
    * ```
    */
  get sessao(): Prisma.SessaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trabalho`: Exposes CRUD operations for the **Trabalho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trabalhos
    * const trabalhos = await prisma.trabalho.findMany()
    * ```
    */
  get trabalho(): Prisma.TrabalhoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Empresa: 'Empresa',
    Setor: 'Setor',
    Cargo: 'Cargo',
    Funcionario: 'Funcionario',
    RegistroPonto: 'RegistroPonto',
    RegistroASO: 'RegistroASO',
    EventoFolha: 'EventoFolha',
    FolhaPagamento: 'FolhaPagamento',
    ItemFolha: 'ItemFolha',
    Turma: 'Turma',
    Aluno: 'Aluno',
    AtividadeConclusao: 'AtividadeConclusao',
    Notificacao: 'Notificacao',
    Activity: 'Activity',
    Professor: 'Professor',
    Sessao: 'Sessao',
    Trabalho: 'Trabalho'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empresa" | "setor" | "cargo" | "funcionario" | "registroPonto" | "registroASO" | "eventoFolha" | "folhaPagamento" | "itemFolha" | "turma" | "aluno" | "atividadeConclusao" | "notificacao" | "activity" | "professor" | "sessao" | "trabalho"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Setor: {
        payload: Prisma.$SetorPayload<ExtArgs>
        fields: Prisma.SetorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findFirst: {
            args: Prisma.SetorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findMany: {
            args: Prisma.SetorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>[]
          }
          create: {
            args: Prisma.SetorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          createMany: {
            args: Prisma.SetorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SetorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          update: {
            args: Prisma.SetorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          deleteMany: {
            args: Prisma.SetorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SetorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          aggregate: {
            args: Prisma.SetorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetor>
          }
          groupBy: {
            args: Prisma.SetorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetorCountArgs<ExtArgs>
            result: $Utils.Optional<SetorCountAggregateOutputType> | number
          }
        }
      }
      Cargo: {
        payload: Prisma.$CargoPayload<ExtArgs>
        fields: Prisma.CargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findFirst: {
            args: Prisma.CargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          findMany: {
            args: Prisma.CargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>[]
          }
          create: {
            args: Prisma.CargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          createMany: {
            args: Prisma.CargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          update: {
            args: Prisma.CargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          deleteMany: {
            args: Prisma.CargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.CargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      RegistroPonto: {
        payload: Prisma.$RegistroPontoPayload<ExtArgs>
        fields: Prisma.RegistroPontoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroPontoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroPontoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload>
          }
          findFirst: {
            args: Prisma.RegistroPontoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroPontoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload>
          }
          findMany: {
            args: Prisma.RegistroPontoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload>[]
          }
          create: {
            args: Prisma.RegistroPontoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload>
          }
          createMany: {
            args: Prisma.RegistroPontoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistroPontoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload>
          }
          update: {
            args: Prisma.RegistroPontoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload>
          }
          deleteMany: {
            args: Prisma.RegistroPontoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroPontoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistroPontoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPontoPayload>
          }
          aggregate: {
            args: Prisma.RegistroPontoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroPonto>
          }
          groupBy: {
            args: Prisma.RegistroPontoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroPontoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroPontoCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroPontoCountAggregateOutputType> | number
          }
        }
      }
      RegistroASO: {
        payload: Prisma.$RegistroASOPayload<ExtArgs>
        fields: Prisma.RegistroASOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroASOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroASOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload>
          }
          findFirst: {
            args: Prisma.RegistroASOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroASOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload>
          }
          findMany: {
            args: Prisma.RegistroASOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload>[]
          }
          create: {
            args: Prisma.RegistroASOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload>
          }
          createMany: {
            args: Prisma.RegistroASOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistroASODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload>
          }
          update: {
            args: Prisma.RegistroASOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload>
          }
          deleteMany: {
            args: Prisma.RegistroASODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroASOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistroASOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroASOPayload>
          }
          aggregate: {
            args: Prisma.RegistroASOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroASO>
          }
          groupBy: {
            args: Prisma.RegistroASOGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroASOGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroASOCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroASOCountAggregateOutputType> | number
          }
        }
      }
      EventoFolha: {
        payload: Prisma.$EventoFolhaPayload<ExtArgs>
        fields: Prisma.EventoFolhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFolhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFolhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload>
          }
          findFirst: {
            args: Prisma.EventoFolhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFolhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload>
          }
          findMany: {
            args: Prisma.EventoFolhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload>[]
          }
          create: {
            args: Prisma.EventoFolhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload>
          }
          createMany: {
            args: Prisma.EventoFolhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventoFolhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload>
          }
          update: {
            args: Prisma.EventoFolhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload>
          }
          deleteMany: {
            args: Prisma.EventoFolhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoFolhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventoFolhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoFolhaPayload>
          }
          aggregate: {
            args: Prisma.EventoFolhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventoFolha>
          }
          groupBy: {
            args: Prisma.EventoFolhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoFolhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoFolhaCountArgs<ExtArgs>
            result: $Utils.Optional<EventoFolhaCountAggregateOutputType> | number
          }
        }
      }
      FolhaPagamento: {
        payload: Prisma.$FolhaPagamentoPayload<ExtArgs>
        fields: Prisma.FolhaPagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolhaPagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolhaPagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload>
          }
          findFirst: {
            args: Prisma.FolhaPagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolhaPagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload>
          }
          findMany: {
            args: Prisma.FolhaPagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload>[]
          }
          create: {
            args: Prisma.FolhaPagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload>
          }
          createMany: {
            args: Prisma.FolhaPagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FolhaPagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload>
          }
          update: {
            args: Prisma.FolhaPagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload>
          }
          deleteMany: {
            args: Prisma.FolhaPagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolhaPagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FolhaPagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolhaPagamentoPayload>
          }
          aggregate: {
            args: Prisma.FolhaPagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolhaPagamento>
          }
          groupBy: {
            args: Prisma.FolhaPagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolhaPagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolhaPagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<FolhaPagamentoCountAggregateOutputType> | number
          }
        }
      }
      ItemFolha: {
        payload: Prisma.$ItemFolhaPayload<ExtArgs>
        fields: Prisma.ItemFolhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFolhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFolhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload>
          }
          findFirst: {
            args: Prisma.ItemFolhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFolhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload>
          }
          findMany: {
            args: Prisma.ItemFolhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload>[]
          }
          create: {
            args: Prisma.ItemFolhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload>
          }
          createMany: {
            args: Prisma.ItemFolhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemFolhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload>
          }
          update: {
            args: Prisma.ItemFolhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload>
          }
          deleteMany: {
            args: Prisma.ItemFolhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemFolhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemFolhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemFolhaPayload>
          }
          aggregate: {
            args: Prisma.ItemFolhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemFolha>
          }
          groupBy: {
            args: Prisma.ItemFolhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemFolhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemFolhaCountArgs<ExtArgs>
            result: $Utils.Optional<ItemFolhaCountAggregateOutputType> | number
          }
        }
      }
      Turma: {
        payload: Prisma.$TurmaPayload<ExtArgs>
        fields: Prisma.TurmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findFirst: {
            args: Prisma.TurmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          findMany: {
            args: Prisma.TurmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>[]
          }
          create: {
            args: Prisma.TurmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          createMany: {
            args: Prisma.TurmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          update: {
            args: Prisma.TurmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          deleteMany: {
            args: Prisma.TurmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurmaPayload>
          }
          aggregate: {
            args: Prisma.TurmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurma>
          }
          groupBy: {
            args: Prisma.TurmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurmaCountArgs<ExtArgs>
            result: $Utils.Optional<TurmaCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      AtividadeConclusao: {
        payload: Prisma.$AtividadeConclusaoPayload<ExtArgs>
        fields: Prisma.AtividadeConclusaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeConclusaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeConclusaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload>
          }
          findFirst: {
            args: Prisma.AtividadeConclusaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeConclusaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload>
          }
          findMany: {
            args: Prisma.AtividadeConclusaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload>[]
          }
          create: {
            args: Prisma.AtividadeConclusaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload>
          }
          createMany: {
            args: Prisma.AtividadeConclusaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtividadeConclusaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload>
          }
          update: {
            args: Prisma.AtividadeConclusaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload>
          }
          deleteMany: {
            args: Prisma.AtividadeConclusaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeConclusaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtividadeConclusaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadeConclusaoPayload>
          }
          aggregate: {
            args: Prisma.AtividadeConclusaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividadeConclusao>
          }
          groupBy: {
            args: Prisma.AtividadeConclusaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeConclusaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeConclusaoCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeConclusaoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Sessao: {
        payload: Prisma.$SessaoPayload<ExtArgs>
        fields: Prisma.SessaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findFirst: {
            args: Prisma.SessaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findMany: {
            args: Prisma.SessaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          create: {
            args: Prisma.SessaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          createMany: {
            args: Prisma.SessaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          update: {
            args: Prisma.SessaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          deleteMany: {
            args: Prisma.SessaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          aggregate: {
            args: Prisma.SessaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessao>
          }
          groupBy: {
            args: Prisma.SessaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessaoCountArgs<ExtArgs>
            result: $Utils.Optional<SessaoCountAggregateOutputType> | number
          }
        }
      }
      Trabalho: {
        payload: Prisma.$TrabalhoPayload<ExtArgs>
        fields: Prisma.TrabalhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrabalhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrabalhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload>
          }
          findFirst: {
            args: Prisma.TrabalhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrabalhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload>
          }
          findMany: {
            args: Prisma.TrabalhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload>[]
          }
          create: {
            args: Prisma.TrabalhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload>
          }
          createMany: {
            args: Prisma.TrabalhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrabalhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload>
          }
          update: {
            args: Prisma.TrabalhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload>
          }
          deleteMany: {
            args: Prisma.TrabalhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrabalhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrabalhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrabalhoPayload>
          }
          aggregate: {
            args: Prisma.TrabalhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrabalho>
          }
          groupBy: {
            args: Prisma.TrabalhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrabalhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrabalhoCountArgs<ExtArgs>
            result: $Utils.Optional<TrabalhoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    empresa?: EmpresaOmit
    setor?: SetorOmit
    cargo?: CargoOmit
    funcionario?: FuncionarioOmit
    registroPonto?: RegistroPontoOmit
    registroASO?: RegistroASOOmit
    eventoFolha?: EventoFolhaOmit
    folhaPagamento?: FolhaPagamentoOmit
    itemFolha?: ItemFolhaOmit
    turma?: TurmaOmit
    aluno?: AlunoOmit
    atividadeConclusao?: AtividadeConclusaoOmit
    notificacao?: NotificacaoOmit
    activity?: ActivityOmit
    professor?: ProfessorOmit
    sessao?: SessaoOmit
    trabalho?: TrabalhoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    setores: number
    funcionarios: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setores?: boolean | EmpresaCountOutputTypeCountSetoresArgs
    funcionarios?: boolean | EmpresaCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountSetoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetorWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
  }


  /**
   * Count Type CargoCountOutputType
   */

  export type CargoCountOutputType = {
    funcionarios: number
  }

  export type CargoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | CargoCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes
  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoCountOutputType
     */
    select?: CargoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
  }


  /**
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    folhas: number
    pontos: number
    asos: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folhas?: boolean | FuncionarioCountOutputTypeCountFolhasArgs
    pontos?: boolean | FuncionarioCountOutputTypeCountPontosArgs
    asos?: boolean | FuncionarioCountOutputTypeCountAsosArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountFolhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolhaPagamentoWhereInput
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountPontosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroPontoWhereInput
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountAsosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroASOWhereInput
  }


  /**
   * Count Type EventoFolhaCountOutputType
   */

  export type EventoFolhaCountOutputType = {
    itens: number
  }

  export type EventoFolhaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | EventoFolhaCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * EventoFolhaCountOutputType without action
   */
  export type EventoFolhaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolhaCountOutputType
     */
    select?: EventoFolhaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoFolhaCountOutputType without action
   */
  export type EventoFolhaCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemFolhaWhereInput
  }


  /**
   * Count Type FolhaPagamentoCountOutputType
   */

  export type FolhaPagamentoCountOutputType = {
    itens: number
  }

  export type FolhaPagamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | FolhaPagamentoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * FolhaPagamentoCountOutputType without action
   */
  export type FolhaPagamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamentoCountOutputType
     */
    select?: FolhaPagamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolhaPagamentoCountOutputType without action
   */
  export type FolhaPagamentoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemFolhaWhereInput
  }


  /**
   * Count Type TurmaCountOutputType
   */

  export type TurmaCountOutputType = {
    alunos: number
    activities: number
  }

  export type TurmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | TurmaCountOutputTypeCountAlunosArgs
    activities?: boolean | TurmaCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurmaCountOutputType
     */
    select?: TurmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }

  /**
   * TurmaCountOutputType without action
   */
  export type TurmaCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    conclusoes: number
    notificacoes: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conclusoes?: boolean | AlunoCountOutputTypeCountConclusoesArgs
    notificacoes?: boolean | AlunoCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountConclusoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeConclusaoWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    conclusoes: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conclusoes?: boolean | ActivityCountOutputTypeCountConclusoesArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountConclusoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeConclusaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    ownerId: string | null
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    cidadeUF: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    ownerId: string | null
    id: string | null
    razaoSocial: string | null
    nomeFantasia: string | null
    cnpj: string | null
    cidadeUF: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    ownerId: number
    id: number
    razaoSocial: number
    nomeFantasia: number
    cnpj: number
    cidadeUF: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    ownerId?: true
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    cidadeUF?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpresaMaxAggregateInputType = {
    ownerId?: true
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    cidadeUF?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpresaCountAggregateInputType = {
    ownerId?: true
    id?: true
    razaoSocial?: true
    nomeFantasia?: true
    cnpj?: true
    cidadeUF?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    ownerId: string
    id: string
    razaoSocial: string
    nomeFantasia: string | null
    cnpj: string
    cidadeUF: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    cidadeUF?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    setores?: boolean | Empresa$setoresArgs<ExtArgs>
    funcionarios?: boolean | Empresa$funcionariosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>



  export type EmpresaSelectScalar = {
    ownerId?: boolean
    id?: boolean
    razaoSocial?: boolean
    nomeFantasia?: boolean
    cnpj?: boolean
    cidadeUF?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ownerId" | "id" | "razaoSocial" | "nomeFantasia" | "cnpj" | "cidadeUF" | "createdAt" | "updatedAt", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setores?: boolean | Empresa$setoresArgs<ExtArgs>
    funcionarios?: boolean | Empresa$funcionariosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      setores: Prisma.$SetorPayload<ExtArgs>[]
      funcionarios: Prisma.$FuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ownerId: string
      id: string
      razaoSocial: string
      nomeFantasia: string | null
      cnpj: string
      cidadeUF: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `ownerId`
     * const empresaWithOwnerIdOnly = await prisma.empresa.findMany({ select: { ownerId: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setores<T extends Empresa$setoresArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$setoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    funcionarios<T extends Empresa$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly ownerId: FieldRef<"Empresa", 'String'>
    readonly id: FieldRef<"Empresa", 'String'>
    readonly razaoSocial: FieldRef<"Empresa", 'String'>
    readonly nomeFantasia: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly cidadeUF: FieldRef<"Empresa", 'String'>
    readonly createdAt: FieldRef<"Empresa", 'DateTime'>
    readonly updatedAt: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.setores
   */
  export type Empresa$setoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    where?: SetorWhereInput
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    cursor?: SetorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Empresa.funcionarios
   */
  export type Empresa$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    cursor?: FuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Setor
   */

  export type AggregateSetor = {
    _count: SetorCountAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  export type SetorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    empresaId: string | null
  }

  export type SetorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    empresaId: string | null
  }

  export type SetorCountAggregateOutputType = {
    id: number
    nome: number
    empresaId: number
    _all: number
  }


  export type SetorMinAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
  }

  export type SetorMaxAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
  }

  export type SetorCountAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    _all?: true
  }

  export type SetorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setor to aggregate.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Setors
    **/
    _count?: true | SetorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetorMaxAggregateInputType
  }

  export type GetSetorAggregateType<T extends SetorAggregateArgs> = {
        [P in keyof T & keyof AggregateSetor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetor[P]>
      : GetScalarType<T[P], AggregateSetor[P]>
  }




  export type SetorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetorWhereInput
    orderBy?: SetorOrderByWithAggregationInput | SetorOrderByWithAggregationInput[]
    by: SetorScalarFieldEnum[] | SetorScalarFieldEnum
    having?: SetorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetorCountAggregateInputType | true
    _min?: SetorMinAggregateInputType
    _max?: SetorMaxAggregateInputType
  }

  export type SetorGroupByOutputType = {
    id: string
    nome: string
    empresaId: string
    _count: SetorCountAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  type GetSetorGroupByPayload<T extends SetorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetorGroupByOutputType[P]>
            : GetScalarType<T[P], SetorGroupByOutputType[P]>
        }
      >
    >


  export type SetorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setor"]>



  export type SetorSelectScalar = {
    id?: boolean
    nome?: boolean
    empresaId?: boolean
  }

  export type SetorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "empresaId", ExtArgs["result"]["setor"]>
  export type SetorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $SetorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setor"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      empresaId: string
    }, ExtArgs["result"]["setor"]>
    composites: {}
  }

  type SetorGetPayload<S extends boolean | null | undefined | SetorDefaultArgs> = $Result.GetResult<Prisma.$SetorPayload, S>

  type SetorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetorCountAggregateInputType | true
    }

  export interface SetorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setor'], meta: { name: 'Setor' } }
    /**
     * Find zero or one Setor that matches the filter.
     * @param {SetorFindUniqueArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetorFindUniqueArgs>(args: SelectSubset<T, SetorFindUniqueArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetorFindUniqueOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetorFindUniqueOrThrowArgs>(args: SelectSubset<T, SetorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetorFindFirstArgs>(args?: SelectSubset<T, SetorFindFirstArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetorFindFirstOrThrowArgs>(args?: SelectSubset<T, SetorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setors
     * const setors = await prisma.setor.findMany()
     * 
     * // Get first 10 Setors
     * const setors = await prisma.setor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setorWithIdOnly = await prisma.setor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetorFindManyArgs>(args?: SelectSubset<T, SetorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setor.
     * @param {SetorCreateArgs} args - Arguments to create a Setor.
     * @example
     * // Create one Setor
     * const Setor = await prisma.setor.create({
     *   data: {
     *     // ... data to create a Setor
     *   }
     * })
     * 
     */
    create<T extends SetorCreateArgs>(args: SelectSubset<T, SetorCreateArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setors.
     * @param {SetorCreateManyArgs} args - Arguments to create many Setors.
     * @example
     * // Create many Setors
     * const setor = await prisma.setor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetorCreateManyArgs>(args?: SelectSubset<T, SetorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setor.
     * @param {SetorDeleteArgs} args - Arguments to delete one Setor.
     * @example
     * // Delete one Setor
     * const Setor = await prisma.setor.delete({
     *   where: {
     *     // ... filter to delete one Setor
     *   }
     * })
     * 
     */
    delete<T extends SetorDeleteArgs>(args: SelectSubset<T, SetorDeleteArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setor.
     * @param {SetorUpdateArgs} args - Arguments to update one Setor.
     * @example
     * // Update one Setor
     * const setor = await prisma.setor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetorUpdateArgs>(args: SelectSubset<T, SetorUpdateArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setors.
     * @param {SetorDeleteManyArgs} args - Arguments to filter Setors to delete.
     * @example
     * // Delete a few Setors
     * const { count } = await prisma.setor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetorDeleteManyArgs>(args?: SelectSubset<T, SetorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setors
     * const setor = await prisma.setor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetorUpdateManyArgs>(args: SelectSubset<T, SetorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setor.
     * @param {SetorUpsertArgs} args - Arguments to update or create a Setor.
     * @example
     * // Update or create a Setor
     * const setor = await prisma.setor.upsert({
     *   create: {
     *     // ... data to create a Setor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setor we want to update
     *   }
     * })
     */
    upsert<T extends SetorUpsertArgs>(args: SelectSubset<T, SetorUpsertArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorCountArgs} args - Arguments to filter Setors to count.
     * @example
     * // Count the number of Setors
     * const count = await prisma.setor.count({
     *   where: {
     *     // ... the filter for the Setors we want to count
     *   }
     * })
    **/
    count<T extends SetorCountArgs>(
      args?: Subset<T, SetorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetorAggregateArgs>(args: Subset<T, SetorAggregateArgs>): Prisma.PrismaPromise<GetSetorAggregateType<T>>

    /**
     * Group by Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorGroupByArgs} args - Group by arguments.
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
      T extends SetorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetorGroupByArgs['orderBy'] }
        : { orderBy?: SetorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setor model
   */
  readonly fields: SetorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setor model
   */
  interface SetorFieldRefs {
    readonly id: FieldRef<"Setor", 'String'>
    readonly nome: FieldRef<"Setor", 'String'>
    readonly empresaId: FieldRef<"Setor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setor findUnique
   */
  export type SetorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor findUniqueOrThrow
   */
  export type SetorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor findFirst
   */
  export type SetorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor findFirstOrThrow
   */
  export type SetorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor findMany
   */
  export type SetorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setors to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }

  /**
   * Setor create
   */
  export type SetorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to create a Setor.
     */
    data: XOR<SetorCreateInput, SetorUncheckedCreateInput>
  }

  /**
   * Setor createMany
   */
  export type SetorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Setors.
     */
    data: SetorCreateManyInput | SetorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setor update
   */
  export type SetorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to update a Setor.
     */
    data: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
    /**
     * Choose, which Setor to update.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor updateMany
   */
  export type SetorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Setors.
     */
    data: XOR<SetorUpdateManyMutationInput, SetorUncheckedUpdateManyInput>
    /**
     * Filter which Setors to update
     */
    where?: SetorWhereInput
    /**
     * Limit how many Setors to update.
     */
    limit?: number
  }

  /**
   * Setor upsert
   */
  export type SetorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The filter to search for the Setor to update in case it exists.
     */
    where: SetorWhereUniqueInput
    /**
     * In case the Setor found by the `where` argument doesn't exist, create a new Setor with this data.
     */
    create: XOR<SetorCreateInput, SetorUncheckedCreateInput>
    /**
     * In case the Setor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
  }

  /**
   * Setor delete
   */
  export type SetorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter which Setor to delete.
     */
    where: SetorWhereUniqueInput
  }

  /**
   * Setor deleteMany
   */
  export type SetorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setors to delete
     */
    where?: SetorWhereInput
    /**
     * Limit how many Setors to delete.
     */
    limit?: number
  }

  /**
   * Setor without action
   */
  export type SetorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setor
     */
    omit?: SetorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SetorInclude<ExtArgs> | null
  }


  /**
   * Model Cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    salarioBase: number | null
    jornadaMensal: number | null
  }

  export type CargoSumAggregateOutputType = {
    salarioBase: number | null
    jornadaMensal: number | null
  }

  export type CargoMinAggregateOutputType = {
    ownerId: string | null
    id: string | null
    codigo: string | null
    titulo: string | null
    salarioBase: number | null
    jornadaMensal: number | null
    adicionalInsalubridade: boolean | null
    adicionalPericulosidade: boolean | null
  }

  export type CargoMaxAggregateOutputType = {
    ownerId: string | null
    id: string | null
    codigo: string | null
    titulo: string | null
    salarioBase: number | null
    jornadaMensal: number | null
    adicionalInsalubridade: boolean | null
    adicionalPericulosidade: boolean | null
  }

  export type CargoCountAggregateOutputType = {
    ownerId: number
    id: number
    codigo: number
    titulo: number
    salarioBase: number
    jornadaMensal: number
    adicionalInsalubridade: number
    adicionalPericulosidade: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    salarioBase?: true
    jornadaMensal?: true
  }

  export type CargoSumAggregateInputType = {
    salarioBase?: true
    jornadaMensal?: true
  }

  export type CargoMinAggregateInputType = {
    ownerId?: true
    id?: true
    codigo?: true
    titulo?: true
    salarioBase?: true
    jornadaMensal?: true
    adicionalInsalubridade?: true
    adicionalPericulosidade?: true
  }

  export type CargoMaxAggregateInputType = {
    ownerId?: true
    id?: true
    codigo?: true
    titulo?: true
    salarioBase?: true
    jornadaMensal?: true
    adicionalInsalubridade?: true
    adicionalPericulosidade?: true
  }

  export type CargoCountAggregateInputType = {
    ownerId?: true
    id?: true
    codigo?: true
    titulo?: true
    salarioBase?: true
    jornadaMensal?: true
    adicionalInsalubridade?: true
    adicionalPericulosidade?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargo to aggregate.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type CargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargoWhereInput
    orderBy?: CargoOrderByWithAggregationInput | CargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: CargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    ownerId: string
    id: string
    codigo: string
    titulo: string
    salarioBase: number
    jornadaMensal: number
    adicionalInsalubridade: boolean
    adicionalPericulosidade: boolean
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends CargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type CargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    id?: boolean
    codigo?: boolean
    titulo?: boolean
    salarioBase?: boolean
    jornadaMensal?: boolean
    adicionalInsalubridade?: boolean
    adicionalPericulosidade?: boolean
    funcionarios?: boolean | Cargo$funcionariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>



  export type CargoSelectScalar = {
    ownerId?: boolean
    id?: boolean
    codigo?: boolean
    titulo?: boolean
    salarioBase?: boolean
    jornadaMensal?: boolean
    adicionalInsalubridade?: boolean
    adicionalPericulosidade?: boolean
  }

  export type CargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ownerId" | "id" | "codigo" | "titulo" | "salarioBase" | "jornadaMensal" | "adicionalInsalubridade" | "adicionalPericulosidade", ExtArgs["result"]["cargo"]>
  export type CargoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | Cargo$funcionariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cargo"
    objects: {
      funcionarios: Prisma.$FuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ownerId: string
      id: string
      codigo: string
      titulo: string
      salarioBase: number
      jornadaMensal: number
      adicionalInsalubridade: boolean
      adicionalPericulosidade: boolean
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type CargoGetPayload<S extends boolean | null | undefined | CargoDefaultArgs> = $Result.GetResult<Prisma.$CargoPayload, S>

  type CargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface CargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cargo'], meta: { name: 'Cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {CargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargoFindUniqueArgs>(args: SelectSubset<T, CargoFindUniqueArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargoFindUniqueOrThrowArgs>(args: SelectSubset<T, CargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargoFindFirstArgs>(args?: SelectSubset<T, CargoFindFirstArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargoFindFirstOrThrowArgs>(args?: SelectSubset<T, CargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `ownerId`
     * const cargoWithOwnerIdOnly = await prisma.cargo.findMany({ select: { ownerId: true } })
     * 
     */
    findMany<T extends CargoFindManyArgs>(args?: SelectSubset<T, CargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {CargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends CargoCreateArgs>(args: SelectSubset<T, CargoCreateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {CargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargoCreateManyArgs>(args?: SelectSubset<T, CargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cargo.
     * @param {CargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends CargoDeleteArgs>(args: SelectSubset<T, CargoDeleteArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {CargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargoUpdateArgs>(args: SelectSubset<T, CargoUpdateArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {CargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargoDeleteManyArgs>(args?: SelectSubset<T, CargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargoUpdateManyArgs>(args: SelectSubset<T, CargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cargo.
     * @param {CargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends CargoUpsertArgs>(args: SelectSubset<T, CargoUpsertArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends CargoCountArgs>(
      args?: Subset<T, CargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoGroupByArgs} args - Group by arguments.
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
      T extends CargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargoGroupByArgs['orderBy'] }
        : { orderBy?: CargoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cargo model
   */
  readonly fields: CargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionarios<T extends Cargo$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, Cargo$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cargo model
   */
  interface CargoFieldRefs {
    readonly ownerId: FieldRef<"Cargo", 'String'>
    readonly id: FieldRef<"Cargo", 'String'>
    readonly codigo: FieldRef<"Cargo", 'String'>
    readonly titulo: FieldRef<"Cargo", 'String'>
    readonly salarioBase: FieldRef<"Cargo", 'Float'>
    readonly jornadaMensal: FieldRef<"Cargo", 'Int'>
    readonly adicionalInsalubridade: FieldRef<"Cargo", 'Boolean'>
    readonly adicionalPericulosidade: FieldRef<"Cargo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Cargo findUnique
   */
  export type CargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findUniqueOrThrow
   */
  export type CargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo findFirst
   */
  export type CargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findFirstOrThrow
   */
  export type CargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargo to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo findMany
   */
  export type CargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter, which Cargos to fetch.
     */
    where?: CargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargos to fetch.
     */
    orderBy?: CargoOrderByWithRelationInput | CargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargos.
     */
    cursor?: CargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * Cargo create
   */
  export type CargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to create a Cargo.
     */
    data: XOR<CargoCreateInput, CargoUncheckedCreateInput>
  }

  /**
   * Cargo createMany
   */
  export type CargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargos.
     */
    data: CargoCreateManyInput | CargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cargo update
   */
  export type CargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The data needed to update a Cargo.
     */
    data: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
    /**
     * Choose, which Cargo to update.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo updateMany
   */
  export type CargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargos.
     */
    data: XOR<CargoUpdateManyMutationInput, CargoUncheckedUpdateManyInput>
    /**
     * Filter which Cargos to update
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to update.
     */
    limit?: number
  }

  /**
   * Cargo upsert
   */
  export type CargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * The filter to search for the Cargo to update in case it exists.
     */
    where: CargoWhereUniqueInput
    /**
     * In case the Cargo found by the `where` argument doesn't exist, create a new Cargo with this data.
     */
    create: XOR<CargoCreateInput, CargoUncheckedCreateInput>
    /**
     * In case the Cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargoUpdateInput, CargoUncheckedUpdateInput>
  }

  /**
   * Cargo delete
   */
  export type CargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
    /**
     * Filter which Cargo to delete.
     */
    where: CargoWhereUniqueInput
  }

  /**
   * Cargo deleteMany
   */
  export type CargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargos to delete
     */
    where?: CargoWhereInput
    /**
     * Limit how many Cargos to delete.
     */
    limit?: number
  }

  /**
   * Cargo.funcionarios
   */
  export type Cargo$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    cursor?: FuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Cargo without action
   */
  export type CargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cargo
     */
    select?: CargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cargo
     */
    omit?: CargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargoInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    salarioBase: number | null
    dependentes: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    salarioBase: number | null
    dependentes: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    ownerId: string | null
    id: string | null
    codigo: string | null
    empresaId: string | null
    nome: string | null
    cpf: string | null
    cargoId: string | null
    salarioBase: number | null
    dependentes: number | null
    dataAdmissao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    ownerId: string | null
    id: string | null
    codigo: string | null
    empresaId: string | null
    nome: string | null
    cpf: string | null
    cargoId: string | null
    salarioBase: number | null
    dependentes: number | null
    dataAdmissao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioCountAggregateOutputType = {
    ownerId: number
    id: number
    codigo: number
    empresaId: number
    nome: number
    cpf: number
    cargoId: number
    salarioBase: number
    dependentes: number
    dataAdmissao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    salarioBase?: true
    dependentes?: true
  }

  export type FuncionarioSumAggregateInputType = {
    salarioBase?: true
    dependentes?: true
  }

  export type FuncionarioMinAggregateInputType = {
    ownerId?: true
    id?: true
    codigo?: true
    empresaId?: true
    nome?: true
    cpf?: true
    cargoId?: true
    salarioBase?: true
    dependentes?: true
    dataAdmissao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    ownerId?: true
    id?: true
    codigo?: true
    empresaId?: true
    nome?: true
    cpf?: true
    cargoId?: true
    salarioBase?: true
    dependentes?: true
    dataAdmissao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioCountAggregateInputType = {
    ownerId?: true
    id?: true
    codigo?: true
    empresaId?: true
    nome?: true
    cpf?: true
    cargoId?: true
    salarioBase?: true
    dependentes?: true
    dataAdmissao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    ownerId: string
    id: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes: number
    dataAdmissao: Date
    createdAt: Date
    updatedAt: Date
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    id?: boolean
    codigo?: boolean
    empresaId?: boolean
    nome?: boolean
    cpf?: boolean
    cargoId?: boolean
    salarioBase?: boolean
    dependentes?: boolean
    dataAdmissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
    folhas?: boolean | Funcionario$folhasArgs<ExtArgs>
    pontos?: boolean | Funcionario$pontosArgs<ExtArgs>
    asos?: boolean | Funcionario$asosArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>



  export type FuncionarioSelectScalar = {
    ownerId?: boolean
    id?: boolean
    codigo?: boolean
    empresaId?: boolean
    nome?: boolean
    cpf?: boolean
    cargoId?: boolean
    salarioBase?: boolean
    dependentes?: boolean
    dataAdmissao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ownerId" | "id" | "codigo" | "empresaId" | "nome" | "cpf" | "cargoId" | "salarioBase" | "dependentes" | "dataAdmissao" | "createdAt" | "updatedAt", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    cargo?: boolean | CargoDefaultArgs<ExtArgs>
    folhas?: boolean | Funcionario$folhasArgs<ExtArgs>
    pontos?: boolean | Funcionario$pontosArgs<ExtArgs>
    asos?: boolean | Funcionario$asosArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      cargo: Prisma.$CargoPayload<ExtArgs>
      folhas: Prisma.$FolhaPagamentoPayload<ExtArgs>[]
      pontos: Prisma.$RegistroPontoPayload<ExtArgs>[]
      asos: Prisma.$RegistroASOPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ownerId: string
      id: string
      codigo: string
      empresaId: string
      nome: string
      cpf: string
      cargoId: string
      salarioBase: number
      dependentes: number
      dataAdmissao: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `ownerId`
     * const funcionarioWithOwnerIdOnly = await prisma.funcionario.findMany({ select: { ownerId: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cargo<T extends CargoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CargoDefaultArgs<ExtArgs>>): Prisma__CargoClient<$Result.GetResult<Prisma.$CargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    folhas<T extends Funcionario$folhasArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$folhasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pontos<T extends Funcionario$pontosArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$pontosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    asos<T extends Funcionario$asosArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$asosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly ownerId: FieldRef<"Funcionario", 'String'>
    readonly id: FieldRef<"Funcionario", 'String'>
    readonly codigo: FieldRef<"Funcionario", 'String'>
    readonly empresaId: FieldRef<"Funcionario", 'String'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly cpf: FieldRef<"Funcionario", 'String'>
    readonly cargoId: FieldRef<"Funcionario", 'String'>
    readonly salarioBase: FieldRef<"Funcionario", 'Float'>
    readonly dependentes: FieldRef<"Funcionario", 'Int'>
    readonly dataAdmissao: FieldRef<"Funcionario", 'DateTime'>
    readonly createdAt: FieldRef<"Funcionario", 'DateTime'>
    readonly updatedAt: FieldRef<"Funcionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario.folhas
   */
  export type Funcionario$folhasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    where?: FolhaPagamentoWhereInput
    orderBy?: FolhaPagamentoOrderByWithRelationInput | FolhaPagamentoOrderByWithRelationInput[]
    cursor?: FolhaPagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolhaPagamentoScalarFieldEnum | FolhaPagamentoScalarFieldEnum[]
  }

  /**
   * Funcionario.pontos
   */
  export type Funcionario$pontosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    where?: RegistroPontoWhereInput
    orderBy?: RegistroPontoOrderByWithRelationInput | RegistroPontoOrderByWithRelationInput[]
    cursor?: RegistroPontoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroPontoScalarFieldEnum | RegistroPontoScalarFieldEnum[]
  }

  /**
   * Funcionario.asos
   */
  export type Funcionario$asosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    where?: RegistroASOWhereInput
    orderBy?: RegistroASOOrderByWithRelationInput | RegistroASOOrderByWithRelationInput[]
    cursor?: RegistroASOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroASOScalarFieldEnum | RegistroASOScalarFieldEnum[]
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model RegistroPonto
   */

  export type AggregateRegistroPonto = {
    _count: RegistroPontoCountAggregateOutputType | null
    _min: RegistroPontoMinAggregateOutputType | null
    _max: RegistroPontoMaxAggregateOutputType | null
  }

  export type RegistroPontoMinAggregateOutputType = {
    id: string | null
    funcionarioId: string | null
    data: Date | null
    entrada: string | null
    saidaAlmoco: string | null
    retornoAlmoco: string | null
    saida: string | null
    horasExtras: string | null
    status: $Enums.StatusPonto | null
    createdAt: Date | null
  }

  export type RegistroPontoMaxAggregateOutputType = {
    id: string | null
    funcionarioId: string | null
    data: Date | null
    entrada: string | null
    saidaAlmoco: string | null
    retornoAlmoco: string | null
    saida: string | null
    horasExtras: string | null
    status: $Enums.StatusPonto | null
    createdAt: Date | null
  }

  export type RegistroPontoCountAggregateOutputType = {
    id: number
    funcionarioId: number
    data: number
    entrada: number
    saidaAlmoco: number
    retornoAlmoco: number
    saida: number
    horasExtras: number
    status: number
    createdAt: number
    _all: number
  }


  export type RegistroPontoMinAggregateInputType = {
    id?: true
    funcionarioId?: true
    data?: true
    entrada?: true
    saidaAlmoco?: true
    retornoAlmoco?: true
    saida?: true
    horasExtras?: true
    status?: true
    createdAt?: true
  }

  export type RegistroPontoMaxAggregateInputType = {
    id?: true
    funcionarioId?: true
    data?: true
    entrada?: true
    saidaAlmoco?: true
    retornoAlmoco?: true
    saida?: true
    horasExtras?: true
    status?: true
    createdAt?: true
  }

  export type RegistroPontoCountAggregateInputType = {
    id?: true
    funcionarioId?: true
    data?: true
    entrada?: true
    saidaAlmoco?: true
    retornoAlmoco?: true
    saida?: true
    horasExtras?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RegistroPontoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroPonto to aggregate.
     */
    where?: RegistroPontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroPontos to fetch.
     */
    orderBy?: RegistroPontoOrderByWithRelationInput | RegistroPontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroPontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroPontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroPontos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroPontos
    **/
    _count?: true | RegistroPontoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroPontoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroPontoMaxAggregateInputType
  }

  export type GetRegistroPontoAggregateType<T extends RegistroPontoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroPonto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroPonto[P]>
      : GetScalarType<T[P], AggregateRegistroPonto[P]>
  }




  export type RegistroPontoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroPontoWhereInput
    orderBy?: RegistroPontoOrderByWithAggregationInput | RegistroPontoOrderByWithAggregationInput[]
    by: RegistroPontoScalarFieldEnum[] | RegistroPontoScalarFieldEnum
    having?: RegistroPontoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroPontoCountAggregateInputType | true
    _min?: RegistroPontoMinAggregateInputType
    _max?: RegistroPontoMaxAggregateInputType
  }

  export type RegistroPontoGroupByOutputType = {
    id: string
    funcionarioId: string
    data: Date
    entrada: string
    saidaAlmoco: string
    retornoAlmoco: string
    saida: string
    horasExtras: string
    status: $Enums.StatusPonto
    createdAt: Date
    _count: RegistroPontoCountAggregateOutputType | null
    _min: RegistroPontoMinAggregateOutputType | null
    _max: RegistroPontoMaxAggregateOutputType | null
  }

  type GetRegistroPontoGroupByPayload<T extends RegistroPontoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroPontoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroPontoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroPontoGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroPontoGroupByOutputType[P]>
        }
      >
    >


  export type RegistroPontoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    funcionarioId?: boolean
    data?: boolean
    entrada?: boolean
    saidaAlmoco?: boolean
    retornoAlmoco?: boolean
    saida?: boolean
    horasExtras?: boolean
    status?: boolean
    createdAt?: boolean
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroPonto"]>



  export type RegistroPontoSelectScalar = {
    id?: boolean
    funcionarioId?: boolean
    data?: boolean
    entrada?: boolean
    saidaAlmoco?: boolean
    retornoAlmoco?: boolean
    saida?: boolean
    horasExtras?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RegistroPontoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "funcionarioId" | "data" | "entrada" | "saidaAlmoco" | "retornoAlmoco" | "saida" | "horasExtras" | "status" | "createdAt", ExtArgs["result"]["registroPonto"]>
  export type RegistroPontoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }

  export type $RegistroPontoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroPonto"
    objects: {
      funcionario: Prisma.$FuncionarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      funcionarioId: string
      data: Date
      entrada: string
      saidaAlmoco: string
      retornoAlmoco: string
      saida: string
      horasExtras: string
      status: $Enums.StatusPonto
      createdAt: Date
    }, ExtArgs["result"]["registroPonto"]>
    composites: {}
  }

  type RegistroPontoGetPayload<S extends boolean | null | undefined | RegistroPontoDefaultArgs> = $Result.GetResult<Prisma.$RegistroPontoPayload, S>

  type RegistroPontoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroPontoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroPontoCountAggregateInputType | true
    }

  export interface RegistroPontoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroPonto'], meta: { name: 'RegistroPonto' } }
    /**
     * Find zero or one RegistroPonto that matches the filter.
     * @param {RegistroPontoFindUniqueArgs} args - Arguments to find a RegistroPonto
     * @example
     * // Get one RegistroPonto
     * const registroPonto = await prisma.registroPonto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroPontoFindUniqueArgs>(args: SelectSubset<T, RegistroPontoFindUniqueArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroPonto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroPontoFindUniqueOrThrowArgs} args - Arguments to find a RegistroPonto
     * @example
     * // Get one RegistroPonto
     * const registroPonto = await prisma.registroPonto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroPontoFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroPontoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroPonto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroPontoFindFirstArgs} args - Arguments to find a RegistroPonto
     * @example
     * // Get one RegistroPonto
     * const registroPonto = await prisma.registroPonto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroPontoFindFirstArgs>(args?: SelectSubset<T, RegistroPontoFindFirstArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroPonto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroPontoFindFirstOrThrowArgs} args - Arguments to find a RegistroPonto
     * @example
     * // Get one RegistroPonto
     * const registroPonto = await prisma.registroPonto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroPontoFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroPontoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroPontos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroPontoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroPontos
     * const registroPontos = await prisma.registroPonto.findMany()
     * 
     * // Get first 10 RegistroPontos
     * const registroPontos = await prisma.registroPonto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroPontoWithIdOnly = await prisma.registroPonto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroPontoFindManyArgs>(args?: SelectSubset<T, RegistroPontoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroPonto.
     * @param {RegistroPontoCreateArgs} args - Arguments to create a RegistroPonto.
     * @example
     * // Create one RegistroPonto
     * const RegistroPonto = await prisma.registroPonto.create({
     *   data: {
     *     // ... data to create a RegistroPonto
     *   }
     * })
     * 
     */
    create<T extends RegistroPontoCreateArgs>(args: SelectSubset<T, RegistroPontoCreateArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroPontos.
     * @param {RegistroPontoCreateManyArgs} args - Arguments to create many RegistroPontos.
     * @example
     * // Create many RegistroPontos
     * const registroPonto = await prisma.registroPonto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroPontoCreateManyArgs>(args?: SelectSubset<T, RegistroPontoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegistroPonto.
     * @param {RegistroPontoDeleteArgs} args - Arguments to delete one RegistroPonto.
     * @example
     * // Delete one RegistroPonto
     * const RegistroPonto = await prisma.registroPonto.delete({
     *   where: {
     *     // ... filter to delete one RegistroPonto
     *   }
     * })
     * 
     */
    delete<T extends RegistroPontoDeleteArgs>(args: SelectSubset<T, RegistroPontoDeleteArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroPonto.
     * @param {RegistroPontoUpdateArgs} args - Arguments to update one RegistroPonto.
     * @example
     * // Update one RegistroPonto
     * const registroPonto = await prisma.registroPonto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroPontoUpdateArgs>(args: SelectSubset<T, RegistroPontoUpdateArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroPontos.
     * @param {RegistroPontoDeleteManyArgs} args - Arguments to filter RegistroPontos to delete.
     * @example
     * // Delete a few RegistroPontos
     * const { count } = await prisma.registroPonto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroPontoDeleteManyArgs>(args?: SelectSubset<T, RegistroPontoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroPontos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroPontoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroPontos
     * const registroPonto = await prisma.registroPonto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroPontoUpdateManyArgs>(args: SelectSubset<T, RegistroPontoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistroPonto.
     * @param {RegistroPontoUpsertArgs} args - Arguments to update or create a RegistroPonto.
     * @example
     * // Update or create a RegistroPonto
     * const registroPonto = await prisma.registroPonto.upsert({
     *   create: {
     *     // ... data to create a RegistroPonto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroPonto we want to update
     *   }
     * })
     */
    upsert<T extends RegistroPontoUpsertArgs>(args: SelectSubset<T, RegistroPontoUpsertArgs<ExtArgs>>): Prisma__RegistroPontoClient<$Result.GetResult<Prisma.$RegistroPontoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroPontos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroPontoCountArgs} args - Arguments to filter RegistroPontos to count.
     * @example
     * // Count the number of RegistroPontos
     * const count = await prisma.registroPonto.count({
     *   where: {
     *     // ... the filter for the RegistroPontos we want to count
     *   }
     * })
    **/
    count<T extends RegistroPontoCountArgs>(
      args?: Subset<T, RegistroPontoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroPontoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroPonto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroPontoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroPontoAggregateArgs>(args: Subset<T, RegistroPontoAggregateArgs>): Prisma.PrismaPromise<GetRegistroPontoAggregateType<T>>

    /**
     * Group by RegistroPonto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroPontoGroupByArgs} args - Group by arguments.
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
      T extends RegistroPontoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroPontoGroupByArgs['orderBy'] }
        : { orderBy?: RegistroPontoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroPontoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroPontoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroPonto model
   */
  readonly fields: RegistroPontoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroPonto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroPontoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends FuncionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionarioDefaultArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistroPonto model
   */
  interface RegistroPontoFieldRefs {
    readonly id: FieldRef<"RegistroPonto", 'String'>
    readonly funcionarioId: FieldRef<"RegistroPonto", 'String'>
    readonly data: FieldRef<"RegistroPonto", 'DateTime'>
    readonly entrada: FieldRef<"RegistroPonto", 'String'>
    readonly saidaAlmoco: FieldRef<"RegistroPonto", 'String'>
    readonly retornoAlmoco: FieldRef<"RegistroPonto", 'String'>
    readonly saida: FieldRef<"RegistroPonto", 'String'>
    readonly horasExtras: FieldRef<"RegistroPonto", 'String'>
    readonly status: FieldRef<"RegistroPonto", 'StatusPonto'>
    readonly createdAt: FieldRef<"RegistroPonto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroPonto findUnique
   */
  export type RegistroPontoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroPonto to fetch.
     */
    where: RegistroPontoWhereUniqueInput
  }

  /**
   * RegistroPonto findUniqueOrThrow
   */
  export type RegistroPontoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroPonto to fetch.
     */
    where: RegistroPontoWhereUniqueInput
  }

  /**
   * RegistroPonto findFirst
   */
  export type RegistroPontoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroPonto to fetch.
     */
    where?: RegistroPontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroPontos to fetch.
     */
    orderBy?: RegistroPontoOrderByWithRelationInput | RegistroPontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroPontos.
     */
    cursor?: RegistroPontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroPontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroPontos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroPontos.
     */
    distinct?: RegistroPontoScalarFieldEnum | RegistroPontoScalarFieldEnum[]
  }

  /**
   * RegistroPonto findFirstOrThrow
   */
  export type RegistroPontoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroPonto to fetch.
     */
    where?: RegistroPontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroPontos to fetch.
     */
    orderBy?: RegistroPontoOrderByWithRelationInput | RegistroPontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroPontos.
     */
    cursor?: RegistroPontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroPontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroPontos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroPontos.
     */
    distinct?: RegistroPontoScalarFieldEnum | RegistroPontoScalarFieldEnum[]
  }

  /**
   * RegistroPonto findMany
   */
  export type RegistroPontoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroPontos to fetch.
     */
    where?: RegistroPontoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroPontos to fetch.
     */
    orderBy?: RegistroPontoOrderByWithRelationInput | RegistroPontoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroPontos.
     */
    cursor?: RegistroPontoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroPontos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroPontos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroPontos.
     */
    distinct?: RegistroPontoScalarFieldEnum | RegistroPontoScalarFieldEnum[]
  }

  /**
   * RegistroPonto create
   */
  export type RegistroPontoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroPonto.
     */
    data: XOR<RegistroPontoCreateInput, RegistroPontoUncheckedCreateInput>
  }

  /**
   * RegistroPonto createMany
   */
  export type RegistroPontoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroPontos.
     */
    data: RegistroPontoCreateManyInput | RegistroPontoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroPonto update
   */
  export type RegistroPontoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroPonto.
     */
    data: XOR<RegistroPontoUpdateInput, RegistroPontoUncheckedUpdateInput>
    /**
     * Choose, which RegistroPonto to update.
     */
    where: RegistroPontoWhereUniqueInput
  }

  /**
   * RegistroPonto updateMany
   */
  export type RegistroPontoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroPontos.
     */
    data: XOR<RegistroPontoUpdateManyMutationInput, RegistroPontoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroPontos to update
     */
    where?: RegistroPontoWhereInput
    /**
     * Limit how many RegistroPontos to update.
     */
    limit?: number
  }

  /**
   * RegistroPonto upsert
   */
  export type RegistroPontoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroPonto to update in case it exists.
     */
    where: RegistroPontoWhereUniqueInput
    /**
     * In case the RegistroPonto found by the `where` argument doesn't exist, create a new RegistroPonto with this data.
     */
    create: XOR<RegistroPontoCreateInput, RegistroPontoUncheckedCreateInput>
    /**
     * In case the RegistroPonto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroPontoUpdateInput, RegistroPontoUncheckedUpdateInput>
  }

  /**
   * RegistroPonto delete
   */
  export type RegistroPontoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
    /**
     * Filter which RegistroPonto to delete.
     */
    where: RegistroPontoWhereUniqueInput
  }

  /**
   * RegistroPonto deleteMany
   */
  export type RegistroPontoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroPontos to delete
     */
    where?: RegistroPontoWhereInput
    /**
     * Limit how many RegistroPontos to delete.
     */
    limit?: number
  }

  /**
   * RegistroPonto without action
   */
  export type RegistroPontoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroPonto
     */
    select?: RegistroPontoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroPonto
     */
    omit?: RegistroPontoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroPontoInclude<ExtArgs> | null
  }


  /**
   * Model RegistroASO
   */

  export type AggregateRegistroASO = {
    _count: RegistroASOCountAggregateOutputType | null
    _min: RegistroASOMinAggregateOutputType | null
    _max: RegistroASOMaxAggregateOutputType | null
  }

  export type RegistroASOMinAggregateOutputType = {
    id: string | null
    funcionarioId: string | null
    tipo: string | null
    medico: string | null
    data: Date | null
    resultado: $Enums.ResultadoASO | null
    createdAt: Date | null
  }

  export type RegistroASOMaxAggregateOutputType = {
    id: string | null
    funcionarioId: string | null
    tipo: string | null
    medico: string | null
    data: Date | null
    resultado: $Enums.ResultadoASO | null
    createdAt: Date | null
  }

  export type RegistroASOCountAggregateOutputType = {
    id: number
    funcionarioId: number
    tipo: number
    medico: number
    data: number
    resultado: number
    createdAt: number
    _all: number
  }


  export type RegistroASOMinAggregateInputType = {
    id?: true
    funcionarioId?: true
    tipo?: true
    medico?: true
    data?: true
    resultado?: true
    createdAt?: true
  }

  export type RegistroASOMaxAggregateInputType = {
    id?: true
    funcionarioId?: true
    tipo?: true
    medico?: true
    data?: true
    resultado?: true
    createdAt?: true
  }

  export type RegistroASOCountAggregateInputType = {
    id?: true
    funcionarioId?: true
    tipo?: true
    medico?: true
    data?: true
    resultado?: true
    createdAt?: true
    _all?: true
  }

  export type RegistroASOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroASO to aggregate.
     */
    where?: RegistroASOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroASOS to fetch.
     */
    orderBy?: RegistroASOOrderByWithRelationInput | RegistroASOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroASOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroASOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroASOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroASOS
    **/
    _count?: true | RegistroASOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroASOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroASOMaxAggregateInputType
  }

  export type GetRegistroASOAggregateType<T extends RegistroASOAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroASO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroASO[P]>
      : GetScalarType<T[P], AggregateRegistroASO[P]>
  }




  export type RegistroASOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroASOWhereInput
    orderBy?: RegistroASOOrderByWithAggregationInput | RegistroASOOrderByWithAggregationInput[]
    by: RegistroASOScalarFieldEnum[] | RegistroASOScalarFieldEnum
    having?: RegistroASOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroASOCountAggregateInputType | true
    _min?: RegistroASOMinAggregateInputType
    _max?: RegistroASOMaxAggregateInputType
  }

  export type RegistroASOGroupByOutputType = {
    id: string
    funcionarioId: string
    tipo: string
    medico: string
    data: Date
    resultado: $Enums.ResultadoASO
    createdAt: Date
    _count: RegistroASOCountAggregateOutputType | null
    _min: RegistroASOMinAggregateOutputType | null
    _max: RegistroASOMaxAggregateOutputType | null
  }

  type GetRegistroASOGroupByPayload<T extends RegistroASOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroASOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroASOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroASOGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroASOGroupByOutputType[P]>
        }
      >
    >


  export type RegistroASOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    funcionarioId?: boolean
    tipo?: boolean
    medico?: boolean
    data?: boolean
    resultado?: boolean
    createdAt?: boolean
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroASO"]>



  export type RegistroASOSelectScalar = {
    id?: boolean
    funcionarioId?: boolean
    tipo?: boolean
    medico?: boolean
    data?: boolean
    resultado?: boolean
    createdAt?: boolean
  }

  export type RegistroASOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "funcionarioId" | "tipo" | "medico" | "data" | "resultado" | "createdAt", ExtArgs["result"]["registroASO"]>
  export type RegistroASOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }

  export type $RegistroASOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroASO"
    objects: {
      funcionario: Prisma.$FuncionarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      funcionarioId: string
      tipo: string
      medico: string
      data: Date
      resultado: $Enums.ResultadoASO
      createdAt: Date
    }, ExtArgs["result"]["registroASO"]>
    composites: {}
  }

  type RegistroASOGetPayload<S extends boolean | null | undefined | RegistroASODefaultArgs> = $Result.GetResult<Prisma.$RegistroASOPayload, S>

  type RegistroASOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroASOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroASOCountAggregateInputType | true
    }

  export interface RegistroASODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroASO'], meta: { name: 'RegistroASO' } }
    /**
     * Find zero or one RegistroASO that matches the filter.
     * @param {RegistroASOFindUniqueArgs} args - Arguments to find a RegistroASO
     * @example
     * // Get one RegistroASO
     * const registroASO = await prisma.registroASO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroASOFindUniqueArgs>(args: SelectSubset<T, RegistroASOFindUniqueArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroASO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroASOFindUniqueOrThrowArgs} args - Arguments to find a RegistroASO
     * @example
     * // Get one RegistroASO
     * const registroASO = await prisma.registroASO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroASOFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroASOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroASO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroASOFindFirstArgs} args - Arguments to find a RegistroASO
     * @example
     * // Get one RegistroASO
     * const registroASO = await prisma.registroASO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroASOFindFirstArgs>(args?: SelectSubset<T, RegistroASOFindFirstArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroASO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroASOFindFirstOrThrowArgs} args - Arguments to find a RegistroASO
     * @example
     * // Get one RegistroASO
     * const registroASO = await prisma.registroASO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroASOFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroASOFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroASOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroASOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroASOS
     * const registroASOS = await prisma.registroASO.findMany()
     * 
     * // Get first 10 RegistroASOS
     * const registroASOS = await prisma.registroASO.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroASOWithIdOnly = await prisma.registroASO.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroASOFindManyArgs>(args?: SelectSubset<T, RegistroASOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroASO.
     * @param {RegistroASOCreateArgs} args - Arguments to create a RegistroASO.
     * @example
     * // Create one RegistroASO
     * const RegistroASO = await prisma.registroASO.create({
     *   data: {
     *     // ... data to create a RegistroASO
     *   }
     * })
     * 
     */
    create<T extends RegistroASOCreateArgs>(args: SelectSubset<T, RegistroASOCreateArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroASOS.
     * @param {RegistroASOCreateManyArgs} args - Arguments to create many RegistroASOS.
     * @example
     * // Create many RegistroASOS
     * const registroASO = await prisma.registroASO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroASOCreateManyArgs>(args?: SelectSubset<T, RegistroASOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegistroASO.
     * @param {RegistroASODeleteArgs} args - Arguments to delete one RegistroASO.
     * @example
     * // Delete one RegistroASO
     * const RegistroASO = await prisma.registroASO.delete({
     *   where: {
     *     // ... filter to delete one RegistroASO
     *   }
     * })
     * 
     */
    delete<T extends RegistroASODeleteArgs>(args: SelectSubset<T, RegistroASODeleteArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroASO.
     * @param {RegistroASOUpdateArgs} args - Arguments to update one RegistroASO.
     * @example
     * // Update one RegistroASO
     * const registroASO = await prisma.registroASO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroASOUpdateArgs>(args: SelectSubset<T, RegistroASOUpdateArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroASOS.
     * @param {RegistroASODeleteManyArgs} args - Arguments to filter RegistroASOS to delete.
     * @example
     * // Delete a few RegistroASOS
     * const { count } = await prisma.registroASO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroASODeleteManyArgs>(args?: SelectSubset<T, RegistroASODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroASOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroASOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroASOS
     * const registroASO = await prisma.registroASO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroASOUpdateManyArgs>(args: SelectSubset<T, RegistroASOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegistroASO.
     * @param {RegistroASOUpsertArgs} args - Arguments to update or create a RegistroASO.
     * @example
     * // Update or create a RegistroASO
     * const registroASO = await prisma.registroASO.upsert({
     *   create: {
     *     // ... data to create a RegistroASO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroASO we want to update
     *   }
     * })
     */
    upsert<T extends RegistroASOUpsertArgs>(args: SelectSubset<T, RegistroASOUpsertArgs<ExtArgs>>): Prisma__RegistroASOClient<$Result.GetResult<Prisma.$RegistroASOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroASOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroASOCountArgs} args - Arguments to filter RegistroASOS to count.
     * @example
     * // Count the number of RegistroASOS
     * const count = await prisma.registroASO.count({
     *   where: {
     *     // ... the filter for the RegistroASOS we want to count
     *   }
     * })
    **/
    count<T extends RegistroASOCountArgs>(
      args?: Subset<T, RegistroASOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroASOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroASO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroASOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroASOAggregateArgs>(args: Subset<T, RegistroASOAggregateArgs>): Prisma.PrismaPromise<GetRegistroASOAggregateType<T>>

    /**
     * Group by RegistroASO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroASOGroupByArgs} args - Group by arguments.
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
      T extends RegistroASOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroASOGroupByArgs['orderBy'] }
        : { orderBy?: RegistroASOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroASOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroASOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroASO model
   */
  readonly fields: RegistroASOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroASO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroASOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends FuncionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionarioDefaultArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistroASO model
   */
  interface RegistroASOFieldRefs {
    readonly id: FieldRef<"RegistroASO", 'String'>
    readonly funcionarioId: FieldRef<"RegistroASO", 'String'>
    readonly tipo: FieldRef<"RegistroASO", 'String'>
    readonly medico: FieldRef<"RegistroASO", 'String'>
    readonly data: FieldRef<"RegistroASO", 'DateTime'>
    readonly resultado: FieldRef<"RegistroASO", 'ResultadoASO'>
    readonly createdAt: FieldRef<"RegistroASO", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroASO findUnique
   */
  export type RegistroASOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * Filter, which RegistroASO to fetch.
     */
    where: RegistroASOWhereUniqueInput
  }

  /**
   * RegistroASO findUniqueOrThrow
   */
  export type RegistroASOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * Filter, which RegistroASO to fetch.
     */
    where: RegistroASOWhereUniqueInput
  }

  /**
   * RegistroASO findFirst
   */
  export type RegistroASOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * Filter, which RegistroASO to fetch.
     */
    where?: RegistroASOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroASOS to fetch.
     */
    orderBy?: RegistroASOOrderByWithRelationInput | RegistroASOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroASOS.
     */
    cursor?: RegistroASOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroASOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroASOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroASOS.
     */
    distinct?: RegistroASOScalarFieldEnum | RegistroASOScalarFieldEnum[]
  }

  /**
   * RegistroASO findFirstOrThrow
   */
  export type RegistroASOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * Filter, which RegistroASO to fetch.
     */
    where?: RegistroASOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroASOS to fetch.
     */
    orderBy?: RegistroASOOrderByWithRelationInput | RegistroASOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroASOS.
     */
    cursor?: RegistroASOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroASOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroASOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroASOS.
     */
    distinct?: RegistroASOScalarFieldEnum | RegistroASOScalarFieldEnum[]
  }

  /**
   * RegistroASO findMany
   */
  export type RegistroASOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * Filter, which RegistroASOS to fetch.
     */
    where?: RegistroASOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroASOS to fetch.
     */
    orderBy?: RegistroASOOrderByWithRelationInput | RegistroASOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroASOS.
     */
    cursor?: RegistroASOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroASOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroASOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroASOS.
     */
    distinct?: RegistroASOScalarFieldEnum | RegistroASOScalarFieldEnum[]
  }

  /**
   * RegistroASO create
   */
  export type RegistroASOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroASO.
     */
    data: XOR<RegistroASOCreateInput, RegistroASOUncheckedCreateInput>
  }

  /**
   * RegistroASO createMany
   */
  export type RegistroASOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroASOS.
     */
    data: RegistroASOCreateManyInput | RegistroASOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroASO update
   */
  export type RegistroASOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroASO.
     */
    data: XOR<RegistroASOUpdateInput, RegistroASOUncheckedUpdateInput>
    /**
     * Choose, which RegistroASO to update.
     */
    where: RegistroASOWhereUniqueInput
  }

  /**
   * RegistroASO updateMany
   */
  export type RegistroASOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroASOS.
     */
    data: XOR<RegistroASOUpdateManyMutationInput, RegistroASOUncheckedUpdateManyInput>
    /**
     * Filter which RegistroASOS to update
     */
    where?: RegistroASOWhereInput
    /**
     * Limit how many RegistroASOS to update.
     */
    limit?: number
  }

  /**
   * RegistroASO upsert
   */
  export type RegistroASOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroASO to update in case it exists.
     */
    where: RegistroASOWhereUniqueInput
    /**
     * In case the RegistroASO found by the `where` argument doesn't exist, create a new RegistroASO with this data.
     */
    create: XOR<RegistroASOCreateInput, RegistroASOUncheckedCreateInput>
    /**
     * In case the RegistroASO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroASOUpdateInput, RegistroASOUncheckedUpdateInput>
  }

  /**
   * RegistroASO delete
   */
  export type RegistroASODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
    /**
     * Filter which RegistroASO to delete.
     */
    where: RegistroASOWhereUniqueInput
  }

  /**
   * RegistroASO deleteMany
   */
  export type RegistroASODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroASOS to delete
     */
    where?: RegistroASOWhereInput
    /**
     * Limit how many RegistroASOS to delete.
     */
    limit?: number
  }

  /**
   * RegistroASO without action
   */
  export type RegistroASODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroASO
     */
    select?: RegistroASOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroASO
     */
    omit?: RegistroASOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroASOInclude<ExtArgs> | null
  }


  /**
   * Model EventoFolha
   */

  export type AggregateEventoFolha = {
    _count: EventoFolhaCountAggregateOutputType | null
    _avg: EventoFolhaAvgAggregateOutputType | null
    _sum: EventoFolhaSumAggregateOutputType | null
    _min: EventoFolhaMinAggregateOutputType | null
    _max: EventoFolhaMaxAggregateOutputType | null
  }

  export type EventoFolhaAvgAggregateOutputType = {
    percentualFixa: number | null
  }

  export type EventoFolhaSumAggregateOutputType = {
    percentualFixa: number | null
  }

  export type EventoFolhaMinAggregateOutputType = {
    codigo: string | null
    nome: string | null
    tipo: $Enums.TipoEvento | null
    percentualFixa: number | null
    incideINSS: boolean | null
    incideIRRF: boolean | null
    incideFGTS: boolean | null
    descricaoDidatica: string | null
  }

  export type EventoFolhaMaxAggregateOutputType = {
    codigo: string | null
    nome: string | null
    tipo: $Enums.TipoEvento | null
    percentualFixa: number | null
    incideINSS: boolean | null
    incideIRRF: boolean | null
    incideFGTS: boolean | null
    descricaoDidatica: string | null
  }

  export type EventoFolhaCountAggregateOutputType = {
    codigo: number
    nome: number
    tipo: number
    percentualFixa: number
    incideINSS: number
    incideIRRF: number
    incideFGTS: number
    descricaoDidatica: number
    _all: number
  }


  export type EventoFolhaAvgAggregateInputType = {
    percentualFixa?: true
  }

  export type EventoFolhaSumAggregateInputType = {
    percentualFixa?: true
  }

  export type EventoFolhaMinAggregateInputType = {
    codigo?: true
    nome?: true
    tipo?: true
    percentualFixa?: true
    incideINSS?: true
    incideIRRF?: true
    incideFGTS?: true
    descricaoDidatica?: true
  }

  export type EventoFolhaMaxAggregateInputType = {
    codigo?: true
    nome?: true
    tipo?: true
    percentualFixa?: true
    incideINSS?: true
    incideIRRF?: true
    incideFGTS?: true
    descricaoDidatica?: true
  }

  export type EventoFolhaCountAggregateInputType = {
    codigo?: true
    nome?: true
    tipo?: true
    percentualFixa?: true
    incideINSS?: true
    incideIRRF?: true
    incideFGTS?: true
    descricaoDidatica?: true
    _all?: true
  }

  export type EventoFolhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventoFolha to aggregate.
     */
    where?: EventoFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoFolhas to fetch.
     */
    orderBy?: EventoFolhaOrderByWithRelationInput | EventoFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventoFolhas
    **/
    _count?: true | EventoFolhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoFolhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoFolhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoFolhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoFolhaMaxAggregateInputType
  }

  export type GetEventoFolhaAggregateType<T extends EventoFolhaAggregateArgs> = {
        [P in keyof T & keyof AggregateEventoFolha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventoFolha[P]>
      : GetScalarType<T[P], AggregateEventoFolha[P]>
  }




  export type EventoFolhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoFolhaWhereInput
    orderBy?: EventoFolhaOrderByWithAggregationInput | EventoFolhaOrderByWithAggregationInput[]
    by: EventoFolhaScalarFieldEnum[] | EventoFolhaScalarFieldEnum
    having?: EventoFolhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoFolhaCountAggregateInputType | true
    _avg?: EventoFolhaAvgAggregateInputType
    _sum?: EventoFolhaSumAggregateInputType
    _min?: EventoFolhaMinAggregateInputType
    _max?: EventoFolhaMaxAggregateInputType
  }

  export type EventoFolhaGroupByOutputType = {
    codigo: string
    nome: string
    tipo: $Enums.TipoEvento
    percentualFixa: number | null
    incideINSS: boolean
    incideIRRF: boolean
    incideFGTS: boolean
    descricaoDidatica: string
    _count: EventoFolhaCountAggregateOutputType | null
    _avg: EventoFolhaAvgAggregateOutputType | null
    _sum: EventoFolhaSumAggregateOutputType | null
    _min: EventoFolhaMinAggregateOutputType | null
    _max: EventoFolhaMaxAggregateOutputType | null
  }

  type GetEventoFolhaGroupByPayload<T extends EventoFolhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoFolhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoFolhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoFolhaGroupByOutputType[P]>
            : GetScalarType<T[P], EventoFolhaGroupByOutputType[P]>
        }
      >
    >


  export type EventoFolhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    tipo?: boolean
    percentualFixa?: boolean
    incideINSS?: boolean
    incideIRRF?: boolean
    incideFGTS?: boolean
    descricaoDidatica?: boolean
    itens?: boolean | EventoFolha$itensArgs<ExtArgs>
    _count?: boolean | EventoFolhaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventoFolha"]>



  export type EventoFolhaSelectScalar = {
    codigo?: boolean
    nome?: boolean
    tipo?: boolean
    percentualFixa?: boolean
    incideINSS?: boolean
    incideIRRF?: boolean
    incideFGTS?: boolean
    descricaoDidatica?: boolean
  }

  export type EventoFolhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "nome" | "tipo" | "percentualFixa" | "incideINSS" | "incideIRRF" | "incideFGTS" | "descricaoDidatica", ExtArgs["result"]["eventoFolha"]>
  export type EventoFolhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | EventoFolha$itensArgs<ExtArgs>
    _count?: boolean | EventoFolhaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventoFolhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventoFolha"
    objects: {
      itens: Prisma.$ItemFolhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: string
      nome: string
      tipo: $Enums.TipoEvento
      percentualFixa: number | null
      incideINSS: boolean
      incideIRRF: boolean
      incideFGTS: boolean
      descricaoDidatica: string
    }, ExtArgs["result"]["eventoFolha"]>
    composites: {}
  }

  type EventoFolhaGetPayload<S extends boolean | null | undefined | EventoFolhaDefaultArgs> = $Result.GetResult<Prisma.$EventoFolhaPayload, S>

  type EventoFolhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFolhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoFolhaCountAggregateInputType | true
    }

  export interface EventoFolhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventoFolha'], meta: { name: 'EventoFolha' } }
    /**
     * Find zero or one EventoFolha that matches the filter.
     * @param {EventoFolhaFindUniqueArgs} args - Arguments to find a EventoFolha
     * @example
     * // Get one EventoFolha
     * const eventoFolha = await prisma.eventoFolha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFolhaFindUniqueArgs>(args: SelectSubset<T, EventoFolhaFindUniqueArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventoFolha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFolhaFindUniqueOrThrowArgs} args - Arguments to find a EventoFolha
     * @example
     * // Get one EventoFolha
     * const eventoFolha = await prisma.eventoFolha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFolhaFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFolhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoFolha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFolhaFindFirstArgs} args - Arguments to find a EventoFolha
     * @example
     * // Get one EventoFolha
     * const eventoFolha = await prisma.eventoFolha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFolhaFindFirstArgs>(args?: SelectSubset<T, EventoFolhaFindFirstArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoFolha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFolhaFindFirstOrThrowArgs} args - Arguments to find a EventoFolha
     * @example
     * // Get one EventoFolha
     * const eventoFolha = await prisma.eventoFolha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFolhaFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFolhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoFolhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFolhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventoFolhas
     * const eventoFolhas = await prisma.eventoFolha.findMany()
     * 
     * // Get first 10 EventoFolhas
     * const eventoFolhas = await prisma.eventoFolha.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const eventoFolhaWithCodigoOnly = await prisma.eventoFolha.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends EventoFolhaFindManyArgs>(args?: SelectSubset<T, EventoFolhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventoFolha.
     * @param {EventoFolhaCreateArgs} args - Arguments to create a EventoFolha.
     * @example
     * // Create one EventoFolha
     * const EventoFolha = await prisma.eventoFolha.create({
     *   data: {
     *     // ... data to create a EventoFolha
     *   }
     * })
     * 
     */
    create<T extends EventoFolhaCreateArgs>(args: SelectSubset<T, EventoFolhaCreateArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventoFolhas.
     * @param {EventoFolhaCreateManyArgs} args - Arguments to create many EventoFolhas.
     * @example
     * // Create many EventoFolhas
     * const eventoFolha = await prisma.eventoFolha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoFolhaCreateManyArgs>(args?: SelectSubset<T, EventoFolhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventoFolha.
     * @param {EventoFolhaDeleteArgs} args - Arguments to delete one EventoFolha.
     * @example
     * // Delete one EventoFolha
     * const EventoFolha = await prisma.eventoFolha.delete({
     *   where: {
     *     // ... filter to delete one EventoFolha
     *   }
     * })
     * 
     */
    delete<T extends EventoFolhaDeleteArgs>(args: SelectSubset<T, EventoFolhaDeleteArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventoFolha.
     * @param {EventoFolhaUpdateArgs} args - Arguments to update one EventoFolha.
     * @example
     * // Update one EventoFolha
     * const eventoFolha = await prisma.eventoFolha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoFolhaUpdateArgs>(args: SelectSubset<T, EventoFolhaUpdateArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventoFolhas.
     * @param {EventoFolhaDeleteManyArgs} args - Arguments to filter EventoFolhas to delete.
     * @example
     * // Delete a few EventoFolhas
     * const { count } = await prisma.eventoFolha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoFolhaDeleteManyArgs>(args?: SelectSubset<T, EventoFolhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoFolhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFolhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventoFolhas
     * const eventoFolha = await prisma.eventoFolha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoFolhaUpdateManyArgs>(args: SelectSubset<T, EventoFolhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventoFolha.
     * @param {EventoFolhaUpsertArgs} args - Arguments to update or create a EventoFolha.
     * @example
     * // Update or create a EventoFolha
     * const eventoFolha = await prisma.eventoFolha.upsert({
     *   create: {
     *     // ... data to create a EventoFolha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventoFolha we want to update
     *   }
     * })
     */
    upsert<T extends EventoFolhaUpsertArgs>(args: SelectSubset<T, EventoFolhaUpsertArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventoFolhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFolhaCountArgs} args - Arguments to filter EventoFolhas to count.
     * @example
     * // Count the number of EventoFolhas
     * const count = await prisma.eventoFolha.count({
     *   where: {
     *     // ... the filter for the EventoFolhas we want to count
     *   }
     * })
    **/
    count<T extends EventoFolhaCountArgs>(
      args?: Subset<T, EventoFolhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoFolhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventoFolha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFolhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoFolhaAggregateArgs>(args: Subset<T, EventoFolhaAggregateArgs>): Prisma.PrismaPromise<GetEventoFolhaAggregateType<T>>

    /**
     * Group by EventoFolha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFolhaGroupByArgs} args - Group by arguments.
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
      T extends EventoFolhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoFolhaGroupByArgs['orderBy'] }
        : { orderBy?: EventoFolhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoFolhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoFolhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventoFolha model
   */
  readonly fields: EventoFolhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventoFolha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoFolhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends EventoFolha$itensArgs<ExtArgs> = {}>(args?: Subset<T, EventoFolha$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventoFolha model
   */
  interface EventoFolhaFieldRefs {
    readonly codigo: FieldRef<"EventoFolha", 'String'>
    readonly nome: FieldRef<"EventoFolha", 'String'>
    readonly tipo: FieldRef<"EventoFolha", 'TipoEvento'>
    readonly percentualFixa: FieldRef<"EventoFolha", 'Float'>
    readonly incideINSS: FieldRef<"EventoFolha", 'Boolean'>
    readonly incideIRRF: FieldRef<"EventoFolha", 'Boolean'>
    readonly incideFGTS: FieldRef<"EventoFolha", 'Boolean'>
    readonly descricaoDidatica: FieldRef<"EventoFolha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventoFolha findUnique
   */
  export type EventoFolhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * Filter, which EventoFolha to fetch.
     */
    where: EventoFolhaWhereUniqueInput
  }

  /**
   * EventoFolha findUniqueOrThrow
   */
  export type EventoFolhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * Filter, which EventoFolha to fetch.
     */
    where: EventoFolhaWhereUniqueInput
  }

  /**
   * EventoFolha findFirst
   */
  export type EventoFolhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * Filter, which EventoFolha to fetch.
     */
    where?: EventoFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoFolhas to fetch.
     */
    orderBy?: EventoFolhaOrderByWithRelationInput | EventoFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventoFolhas.
     */
    cursor?: EventoFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventoFolhas.
     */
    distinct?: EventoFolhaScalarFieldEnum | EventoFolhaScalarFieldEnum[]
  }

  /**
   * EventoFolha findFirstOrThrow
   */
  export type EventoFolhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * Filter, which EventoFolha to fetch.
     */
    where?: EventoFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoFolhas to fetch.
     */
    orderBy?: EventoFolhaOrderByWithRelationInput | EventoFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventoFolhas.
     */
    cursor?: EventoFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventoFolhas.
     */
    distinct?: EventoFolhaScalarFieldEnum | EventoFolhaScalarFieldEnum[]
  }

  /**
   * EventoFolha findMany
   */
  export type EventoFolhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * Filter, which EventoFolhas to fetch.
     */
    where?: EventoFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoFolhas to fetch.
     */
    orderBy?: EventoFolhaOrderByWithRelationInput | EventoFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventoFolhas.
     */
    cursor?: EventoFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventoFolhas.
     */
    distinct?: EventoFolhaScalarFieldEnum | EventoFolhaScalarFieldEnum[]
  }

  /**
   * EventoFolha create
   */
  export type EventoFolhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * The data needed to create a EventoFolha.
     */
    data: XOR<EventoFolhaCreateInput, EventoFolhaUncheckedCreateInput>
  }

  /**
   * EventoFolha createMany
   */
  export type EventoFolhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventoFolhas.
     */
    data: EventoFolhaCreateManyInput | EventoFolhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventoFolha update
   */
  export type EventoFolhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * The data needed to update a EventoFolha.
     */
    data: XOR<EventoFolhaUpdateInput, EventoFolhaUncheckedUpdateInput>
    /**
     * Choose, which EventoFolha to update.
     */
    where: EventoFolhaWhereUniqueInput
  }

  /**
   * EventoFolha updateMany
   */
  export type EventoFolhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventoFolhas.
     */
    data: XOR<EventoFolhaUpdateManyMutationInput, EventoFolhaUncheckedUpdateManyInput>
    /**
     * Filter which EventoFolhas to update
     */
    where?: EventoFolhaWhereInput
    /**
     * Limit how many EventoFolhas to update.
     */
    limit?: number
  }

  /**
   * EventoFolha upsert
   */
  export type EventoFolhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * The filter to search for the EventoFolha to update in case it exists.
     */
    where: EventoFolhaWhereUniqueInput
    /**
     * In case the EventoFolha found by the `where` argument doesn't exist, create a new EventoFolha with this data.
     */
    create: XOR<EventoFolhaCreateInput, EventoFolhaUncheckedCreateInput>
    /**
     * In case the EventoFolha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoFolhaUpdateInput, EventoFolhaUncheckedUpdateInput>
  }

  /**
   * EventoFolha delete
   */
  export type EventoFolhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
    /**
     * Filter which EventoFolha to delete.
     */
    where: EventoFolhaWhereUniqueInput
  }

  /**
   * EventoFolha deleteMany
   */
  export type EventoFolhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventoFolhas to delete
     */
    where?: EventoFolhaWhereInput
    /**
     * Limit how many EventoFolhas to delete.
     */
    limit?: number
  }

  /**
   * EventoFolha.itens
   */
  export type EventoFolha$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    where?: ItemFolhaWhereInput
    orderBy?: ItemFolhaOrderByWithRelationInput | ItemFolhaOrderByWithRelationInput[]
    cursor?: ItemFolhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemFolhaScalarFieldEnum | ItemFolhaScalarFieldEnum[]
  }

  /**
   * EventoFolha without action
   */
  export type EventoFolhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoFolha
     */
    select?: EventoFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoFolha
     */
    omit?: EventoFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoFolhaInclude<ExtArgs> | null
  }


  /**
   * Model FolhaPagamento
   */

  export type AggregateFolhaPagamento = {
    _count: FolhaPagamentoCountAggregateOutputType | null
    _avg: FolhaPagamentoAvgAggregateOutputType | null
    _sum: FolhaPagamentoSumAggregateOutputType | null
    _min: FolhaPagamentoMinAggregateOutputType | null
    _max: FolhaPagamentoMaxAggregateOutputType | null
  }

  export type FolhaPagamentoAvgAggregateOutputType = {
    totalProventos: number | null
    totalDescontos: number | null
    salarioLiquido: number | null
    fgtsDoMes: number | null
  }

  export type FolhaPagamentoSumAggregateOutputType = {
    totalProventos: number | null
    totalDescontos: number | null
    salarioLiquido: number | null
    fgtsDoMes: number | null
  }

  export type FolhaPagamentoMinAggregateOutputType = {
    id: string | null
    funcionarioId: string | null
    mesReferencia: string | null
    totalProventos: number | null
    totalDescontos: number | null
    salarioLiquido: number | null
    fgtsDoMes: number | null
    createdAt: Date | null
  }

  export type FolhaPagamentoMaxAggregateOutputType = {
    id: string | null
    funcionarioId: string | null
    mesReferencia: string | null
    totalProventos: number | null
    totalDescontos: number | null
    salarioLiquido: number | null
    fgtsDoMes: number | null
    createdAt: Date | null
  }

  export type FolhaPagamentoCountAggregateOutputType = {
    id: number
    funcionarioId: number
    mesReferencia: number
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt: number
    _all: number
  }


  export type FolhaPagamentoAvgAggregateInputType = {
    totalProventos?: true
    totalDescontos?: true
    salarioLiquido?: true
    fgtsDoMes?: true
  }

  export type FolhaPagamentoSumAggregateInputType = {
    totalProventos?: true
    totalDescontos?: true
    salarioLiquido?: true
    fgtsDoMes?: true
  }

  export type FolhaPagamentoMinAggregateInputType = {
    id?: true
    funcionarioId?: true
    mesReferencia?: true
    totalProventos?: true
    totalDescontos?: true
    salarioLiquido?: true
    fgtsDoMes?: true
    createdAt?: true
  }

  export type FolhaPagamentoMaxAggregateInputType = {
    id?: true
    funcionarioId?: true
    mesReferencia?: true
    totalProventos?: true
    totalDescontos?: true
    salarioLiquido?: true
    fgtsDoMes?: true
    createdAt?: true
  }

  export type FolhaPagamentoCountAggregateInputType = {
    id?: true
    funcionarioId?: true
    mesReferencia?: true
    totalProventos?: true
    totalDescontos?: true
    salarioLiquido?: true
    fgtsDoMes?: true
    createdAt?: true
    _all?: true
  }

  export type FolhaPagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FolhaPagamento to aggregate.
     */
    where?: FolhaPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolhaPagamentos to fetch.
     */
    orderBy?: FolhaPagamentoOrderByWithRelationInput | FolhaPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolhaPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolhaPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolhaPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FolhaPagamentos
    **/
    _count?: true | FolhaPagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolhaPagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolhaPagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolhaPagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolhaPagamentoMaxAggregateInputType
  }

  export type GetFolhaPagamentoAggregateType<T extends FolhaPagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateFolhaPagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolhaPagamento[P]>
      : GetScalarType<T[P], AggregateFolhaPagamento[P]>
  }




  export type FolhaPagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolhaPagamentoWhereInput
    orderBy?: FolhaPagamentoOrderByWithAggregationInput | FolhaPagamentoOrderByWithAggregationInput[]
    by: FolhaPagamentoScalarFieldEnum[] | FolhaPagamentoScalarFieldEnum
    having?: FolhaPagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolhaPagamentoCountAggregateInputType | true
    _avg?: FolhaPagamentoAvgAggregateInputType
    _sum?: FolhaPagamentoSumAggregateInputType
    _min?: FolhaPagamentoMinAggregateInputType
    _max?: FolhaPagamentoMaxAggregateInputType
  }

  export type FolhaPagamentoGroupByOutputType = {
    id: string
    funcionarioId: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt: Date
    _count: FolhaPagamentoCountAggregateOutputType | null
    _avg: FolhaPagamentoAvgAggregateOutputType | null
    _sum: FolhaPagamentoSumAggregateOutputType | null
    _min: FolhaPagamentoMinAggregateOutputType | null
    _max: FolhaPagamentoMaxAggregateOutputType | null
  }

  type GetFolhaPagamentoGroupByPayload<T extends FolhaPagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolhaPagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolhaPagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolhaPagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], FolhaPagamentoGroupByOutputType[P]>
        }
      >
    >


  export type FolhaPagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    funcionarioId?: boolean
    mesReferencia?: boolean
    totalProventos?: boolean
    totalDescontos?: boolean
    salarioLiquido?: boolean
    fgtsDoMes?: boolean
    createdAt?: boolean
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
    itens?: boolean | FolhaPagamento$itensArgs<ExtArgs>
    _count?: boolean | FolhaPagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folhaPagamento"]>



  export type FolhaPagamentoSelectScalar = {
    id?: boolean
    funcionarioId?: boolean
    mesReferencia?: boolean
    totalProventos?: boolean
    totalDescontos?: boolean
    salarioLiquido?: boolean
    fgtsDoMes?: boolean
    createdAt?: boolean
  }

  export type FolhaPagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "funcionarioId" | "mesReferencia" | "totalProventos" | "totalDescontos" | "salarioLiquido" | "fgtsDoMes" | "createdAt", ExtArgs["result"]["folhaPagamento"]>
  export type FolhaPagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
    itens?: boolean | FolhaPagamento$itensArgs<ExtArgs>
    _count?: boolean | FolhaPagamentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FolhaPagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FolhaPagamento"
    objects: {
      funcionario: Prisma.$FuncionarioPayload<ExtArgs>
      itens: Prisma.$ItemFolhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      funcionarioId: string
      mesReferencia: string
      totalProventos: number
      totalDescontos: number
      salarioLiquido: number
      fgtsDoMes: number
      createdAt: Date
    }, ExtArgs["result"]["folhaPagamento"]>
    composites: {}
  }

  type FolhaPagamentoGetPayload<S extends boolean | null | undefined | FolhaPagamentoDefaultArgs> = $Result.GetResult<Prisma.$FolhaPagamentoPayload, S>

  type FolhaPagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolhaPagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolhaPagamentoCountAggregateInputType | true
    }

  export interface FolhaPagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FolhaPagamento'], meta: { name: 'FolhaPagamento' } }
    /**
     * Find zero or one FolhaPagamento that matches the filter.
     * @param {FolhaPagamentoFindUniqueArgs} args - Arguments to find a FolhaPagamento
     * @example
     * // Get one FolhaPagamento
     * const folhaPagamento = await prisma.folhaPagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolhaPagamentoFindUniqueArgs>(args: SelectSubset<T, FolhaPagamentoFindUniqueArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FolhaPagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolhaPagamentoFindUniqueOrThrowArgs} args - Arguments to find a FolhaPagamento
     * @example
     * // Get one FolhaPagamento
     * const folhaPagamento = await prisma.folhaPagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolhaPagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, FolhaPagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FolhaPagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolhaPagamentoFindFirstArgs} args - Arguments to find a FolhaPagamento
     * @example
     * // Get one FolhaPagamento
     * const folhaPagamento = await prisma.folhaPagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolhaPagamentoFindFirstArgs>(args?: SelectSubset<T, FolhaPagamentoFindFirstArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FolhaPagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolhaPagamentoFindFirstOrThrowArgs} args - Arguments to find a FolhaPagamento
     * @example
     * // Get one FolhaPagamento
     * const folhaPagamento = await prisma.folhaPagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolhaPagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, FolhaPagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FolhaPagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolhaPagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FolhaPagamentos
     * const folhaPagamentos = await prisma.folhaPagamento.findMany()
     * 
     * // Get first 10 FolhaPagamentos
     * const folhaPagamentos = await prisma.folhaPagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folhaPagamentoWithIdOnly = await prisma.folhaPagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolhaPagamentoFindManyArgs>(args?: SelectSubset<T, FolhaPagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FolhaPagamento.
     * @param {FolhaPagamentoCreateArgs} args - Arguments to create a FolhaPagamento.
     * @example
     * // Create one FolhaPagamento
     * const FolhaPagamento = await prisma.folhaPagamento.create({
     *   data: {
     *     // ... data to create a FolhaPagamento
     *   }
     * })
     * 
     */
    create<T extends FolhaPagamentoCreateArgs>(args: SelectSubset<T, FolhaPagamentoCreateArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FolhaPagamentos.
     * @param {FolhaPagamentoCreateManyArgs} args - Arguments to create many FolhaPagamentos.
     * @example
     * // Create many FolhaPagamentos
     * const folhaPagamento = await prisma.folhaPagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolhaPagamentoCreateManyArgs>(args?: SelectSubset<T, FolhaPagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FolhaPagamento.
     * @param {FolhaPagamentoDeleteArgs} args - Arguments to delete one FolhaPagamento.
     * @example
     * // Delete one FolhaPagamento
     * const FolhaPagamento = await prisma.folhaPagamento.delete({
     *   where: {
     *     // ... filter to delete one FolhaPagamento
     *   }
     * })
     * 
     */
    delete<T extends FolhaPagamentoDeleteArgs>(args: SelectSubset<T, FolhaPagamentoDeleteArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FolhaPagamento.
     * @param {FolhaPagamentoUpdateArgs} args - Arguments to update one FolhaPagamento.
     * @example
     * // Update one FolhaPagamento
     * const folhaPagamento = await prisma.folhaPagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolhaPagamentoUpdateArgs>(args: SelectSubset<T, FolhaPagamentoUpdateArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FolhaPagamentos.
     * @param {FolhaPagamentoDeleteManyArgs} args - Arguments to filter FolhaPagamentos to delete.
     * @example
     * // Delete a few FolhaPagamentos
     * const { count } = await prisma.folhaPagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolhaPagamentoDeleteManyArgs>(args?: SelectSubset<T, FolhaPagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FolhaPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolhaPagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FolhaPagamentos
     * const folhaPagamento = await prisma.folhaPagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolhaPagamentoUpdateManyArgs>(args: SelectSubset<T, FolhaPagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FolhaPagamento.
     * @param {FolhaPagamentoUpsertArgs} args - Arguments to update or create a FolhaPagamento.
     * @example
     * // Update or create a FolhaPagamento
     * const folhaPagamento = await prisma.folhaPagamento.upsert({
     *   create: {
     *     // ... data to create a FolhaPagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FolhaPagamento we want to update
     *   }
     * })
     */
    upsert<T extends FolhaPagamentoUpsertArgs>(args: SelectSubset<T, FolhaPagamentoUpsertArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FolhaPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolhaPagamentoCountArgs} args - Arguments to filter FolhaPagamentos to count.
     * @example
     * // Count the number of FolhaPagamentos
     * const count = await prisma.folhaPagamento.count({
     *   where: {
     *     // ... the filter for the FolhaPagamentos we want to count
     *   }
     * })
    **/
    count<T extends FolhaPagamentoCountArgs>(
      args?: Subset<T, FolhaPagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolhaPagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FolhaPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolhaPagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolhaPagamentoAggregateArgs>(args: Subset<T, FolhaPagamentoAggregateArgs>): Prisma.PrismaPromise<GetFolhaPagamentoAggregateType<T>>

    /**
     * Group by FolhaPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolhaPagamentoGroupByArgs} args - Group by arguments.
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
      T extends FolhaPagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolhaPagamentoGroupByArgs['orderBy'] }
        : { orderBy?: FolhaPagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FolhaPagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolhaPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FolhaPagamento model
   */
  readonly fields: FolhaPagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FolhaPagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolhaPagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends FuncionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionarioDefaultArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends FolhaPagamento$itensArgs<ExtArgs> = {}>(args?: Subset<T, FolhaPagamento$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FolhaPagamento model
   */
  interface FolhaPagamentoFieldRefs {
    readonly id: FieldRef<"FolhaPagamento", 'String'>
    readonly funcionarioId: FieldRef<"FolhaPagamento", 'String'>
    readonly mesReferencia: FieldRef<"FolhaPagamento", 'String'>
    readonly totalProventos: FieldRef<"FolhaPagamento", 'Float'>
    readonly totalDescontos: FieldRef<"FolhaPagamento", 'Float'>
    readonly salarioLiquido: FieldRef<"FolhaPagamento", 'Float'>
    readonly fgtsDoMes: FieldRef<"FolhaPagamento", 'Float'>
    readonly createdAt: FieldRef<"FolhaPagamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FolhaPagamento findUnique
   */
  export type FolhaPagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which FolhaPagamento to fetch.
     */
    where: FolhaPagamentoWhereUniqueInput
  }

  /**
   * FolhaPagamento findUniqueOrThrow
   */
  export type FolhaPagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which FolhaPagamento to fetch.
     */
    where: FolhaPagamentoWhereUniqueInput
  }

  /**
   * FolhaPagamento findFirst
   */
  export type FolhaPagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which FolhaPagamento to fetch.
     */
    where?: FolhaPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolhaPagamentos to fetch.
     */
    orderBy?: FolhaPagamentoOrderByWithRelationInput | FolhaPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FolhaPagamentos.
     */
    cursor?: FolhaPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolhaPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolhaPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FolhaPagamentos.
     */
    distinct?: FolhaPagamentoScalarFieldEnum | FolhaPagamentoScalarFieldEnum[]
  }

  /**
   * FolhaPagamento findFirstOrThrow
   */
  export type FolhaPagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which FolhaPagamento to fetch.
     */
    where?: FolhaPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolhaPagamentos to fetch.
     */
    orderBy?: FolhaPagamentoOrderByWithRelationInput | FolhaPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FolhaPagamentos.
     */
    cursor?: FolhaPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolhaPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolhaPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FolhaPagamentos.
     */
    distinct?: FolhaPagamentoScalarFieldEnum | FolhaPagamentoScalarFieldEnum[]
  }

  /**
   * FolhaPagamento findMany
   */
  export type FolhaPagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * Filter, which FolhaPagamentos to fetch.
     */
    where?: FolhaPagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FolhaPagamentos to fetch.
     */
    orderBy?: FolhaPagamentoOrderByWithRelationInput | FolhaPagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FolhaPagamentos.
     */
    cursor?: FolhaPagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FolhaPagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FolhaPagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FolhaPagamentos.
     */
    distinct?: FolhaPagamentoScalarFieldEnum | FolhaPagamentoScalarFieldEnum[]
  }

  /**
   * FolhaPagamento create
   */
  export type FolhaPagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a FolhaPagamento.
     */
    data: XOR<FolhaPagamentoCreateInput, FolhaPagamentoUncheckedCreateInput>
  }

  /**
   * FolhaPagamento createMany
   */
  export type FolhaPagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FolhaPagamentos.
     */
    data: FolhaPagamentoCreateManyInput | FolhaPagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FolhaPagamento update
   */
  export type FolhaPagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a FolhaPagamento.
     */
    data: XOR<FolhaPagamentoUpdateInput, FolhaPagamentoUncheckedUpdateInput>
    /**
     * Choose, which FolhaPagamento to update.
     */
    where: FolhaPagamentoWhereUniqueInput
  }

  /**
   * FolhaPagamento updateMany
   */
  export type FolhaPagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FolhaPagamentos.
     */
    data: XOR<FolhaPagamentoUpdateManyMutationInput, FolhaPagamentoUncheckedUpdateManyInput>
    /**
     * Filter which FolhaPagamentos to update
     */
    where?: FolhaPagamentoWhereInput
    /**
     * Limit how many FolhaPagamentos to update.
     */
    limit?: number
  }

  /**
   * FolhaPagamento upsert
   */
  export type FolhaPagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the FolhaPagamento to update in case it exists.
     */
    where: FolhaPagamentoWhereUniqueInput
    /**
     * In case the FolhaPagamento found by the `where` argument doesn't exist, create a new FolhaPagamento with this data.
     */
    create: XOR<FolhaPagamentoCreateInput, FolhaPagamentoUncheckedCreateInput>
    /**
     * In case the FolhaPagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolhaPagamentoUpdateInput, FolhaPagamentoUncheckedUpdateInput>
  }

  /**
   * FolhaPagamento delete
   */
  export type FolhaPagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
    /**
     * Filter which FolhaPagamento to delete.
     */
    where: FolhaPagamentoWhereUniqueInput
  }

  /**
   * FolhaPagamento deleteMany
   */
  export type FolhaPagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FolhaPagamentos to delete
     */
    where?: FolhaPagamentoWhereInput
    /**
     * Limit how many FolhaPagamentos to delete.
     */
    limit?: number
  }

  /**
   * FolhaPagamento.itens
   */
  export type FolhaPagamento$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    where?: ItemFolhaWhereInput
    orderBy?: ItemFolhaOrderByWithRelationInput | ItemFolhaOrderByWithRelationInput[]
    cursor?: ItemFolhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemFolhaScalarFieldEnum | ItemFolhaScalarFieldEnum[]
  }

  /**
   * FolhaPagamento without action
   */
  export type FolhaPagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolhaPagamento
     */
    select?: FolhaPagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FolhaPagamento
     */
    omit?: FolhaPagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolhaPagamentoInclude<ExtArgs> | null
  }


  /**
   * Model ItemFolha
   */

  export type AggregateItemFolha = {
    _count: ItemFolhaCountAggregateOutputType | null
    _avg: ItemFolhaAvgAggregateOutputType | null
    _sum: ItemFolhaSumAggregateOutputType | null
    _min: ItemFolhaMinAggregateOutputType | null
    _max: ItemFolhaMaxAggregateOutputType | null
  }

  export type ItemFolhaAvgAggregateOutputType = {
    valorCalculado: number | null
  }

  export type ItemFolhaSumAggregateOutputType = {
    valorCalculado: number | null
  }

  export type ItemFolhaMinAggregateOutputType = {
    id: string | null
    folhaId: string | null
    codigoEvento: string | null
    tipo: $Enums.TipoEvento | null
    referencia: string | null
    valorCalculado: number | null
    memoriaCalculo: string | null
  }

  export type ItemFolhaMaxAggregateOutputType = {
    id: string | null
    folhaId: string | null
    codigoEvento: string | null
    tipo: $Enums.TipoEvento | null
    referencia: string | null
    valorCalculado: number | null
    memoriaCalculo: string | null
  }

  export type ItemFolhaCountAggregateOutputType = {
    id: number
    folhaId: number
    codigoEvento: number
    tipo: number
    referencia: number
    valorCalculado: number
    memoriaCalculo: number
    _all: number
  }


  export type ItemFolhaAvgAggregateInputType = {
    valorCalculado?: true
  }

  export type ItemFolhaSumAggregateInputType = {
    valorCalculado?: true
  }

  export type ItemFolhaMinAggregateInputType = {
    id?: true
    folhaId?: true
    codigoEvento?: true
    tipo?: true
    referencia?: true
    valorCalculado?: true
    memoriaCalculo?: true
  }

  export type ItemFolhaMaxAggregateInputType = {
    id?: true
    folhaId?: true
    codigoEvento?: true
    tipo?: true
    referencia?: true
    valorCalculado?: true
    memoriaCalculo?: true
  }

  export type ItemFolhaCountAggregateInputType = {
    id?: true
    folhaId?: true
    codigoEvento?: true
    tipo?: true
    referencia?: true
    valorCalculado?: true
    memoriaCalculo?: true
    _all?: true
  }

  export type ItemFolhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemFolha to aggregate.
     */
    where?: ItemFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemFolhas to fetch.
     */
    orderBy?: ItemFolhaOrderByWithRelationInput | ItemFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemFolhas
    **/
    _count?: true | ItemFolhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemFolhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemFolhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemFolhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemFolhaMaxAggregateInputType
  }

  export type GetItemFolhaAggregateType<T extends ItemFolhaAggregateArgs> = {
        [P in keyof T & keyof AggregateItemFolha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemFolha[P]>
      : GetScalarType<T[P], AggregateItemFolha[P]>
  }




  export type ItemFolhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemFolhaWhereInput
    orderBy?: ItemFolhaOrderByWithAggregationInput | ItemFolhaOrderByWithAggregationInput[]
    by: ItemFolhaScalarFieldEnum[] | ItemFolhaScalarFieldEnum
    having?: ItemFolhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemFolhaCountAggregateInputType | true
    _avg?: ItemFolhaAvgAggregateInputType
    _sum?: ItemFolhaSumAggregateInputType
    _min?: ItemFolhaMinAggregateInputType
    _max?: ItemFolhaMaxAggregateInputType
  }

  export type ItemFolhaGroupByOutputType = {
    id: string
    folhaId: string
    codigoEvento: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
    _count: ItemFolhaCountAggregateOutputType | null
    _avg: ItemFolhaAvgAggregateOutputType | null
    _sum: ItemFolhaSumAggregateOutputType | null
    _min: ItemFolhaMinAggregateOutputType | null
    _max: ItemFolhaMaxAggregateOutputType | null
  }

  type GetItemFolhaGroupByPayload<T extends ItemFolhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemFolhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemFolhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemFolhaGroupByOutputType[P]>
            : GetScalarType<T[P], ItemFolhaGroupByOutputType[P]>
        }
      >
    >


  export type ItemFolhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folhaId?: boolean
    codigoEvento?: boolean
    tipo?: boolean
    referencia?: boolean
    valorCalculado?: boolean
    memoriaCalculo?: boolean
    folha?: boolean | FolhaPagamentoDefaultArgs<ExtArgs>
    evento?: boolean | EventoFolhaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemFolha"]>



  export type ItemFolhaSelectScalar = {
    id?: boolean
    folhaId?: boolean
    codigoEvento?: boolean
    tipo?: boolean
    referencia?: boolean
    valorCalculado?: boolean
    memoriaCalculo?: boolean
  }

  export type ItemFolhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "folhaId" | "codigoEvento" | "tipo" | "referencia" | "valorCalculado" | "memoriaCalculo", ExtArgs["result"]["itemFolha"]>
  export type ItemFolhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folha?: boolean | FolhaPagamentoDefaultArgs<ExtArgs>
    evento?: boolean | EventoFolhaDefaultArgs<ExtArgs>
  }

  export type $ItemFolhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemFolha"
    objects: {
      folha: Prisma.$FolhaPagamentoPayload<ExtArgs>
      evento: Prisma.$EventoFolhaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      folhaId: string
      codigoEvento: string
      tipo: $Enums.TipoEvento
      referencia: string
      valorCalculado: number
      memoriaCalculo: string
    }, ExtArgs["result"]["itemFolha"]>
    composites: {}
  }

  type ItemFolhaGetPayload<S extends boolean | null | undefined | ItemFolhaDefaultArgs> = $Result.GetResult<Prisma.$ItemFolhaPayload, S>

  type ItemFolhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFolhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemFolhaCountAggregateInputType | true
    }

  export interface ItemFolhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemFolha'], meta: { name: 'ItemFolha' } }
    /**
     * Find zero or one ItemFolha that matches the filter.
     * @param {ItemFolhaFindUniqueArgs} args - Arguments to find a ItemFolha
     * @example
     * // Get one ItemFolha
     * const itemFolha = await prisma.itemFolha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFolhaFindUniqueArgs>(args: SelectSubset<T, ItemFolhaFindUniqueArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemFolha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFolhaFindUniqueOrThrowArgs} args - Arguments to find a ItemFolha
     * @example
     * // Get one ItemFolha
     * const itemFolha = await prisma.itemFolha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFolhaFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFolhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemFolha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFolhaFindFirstArgs} args - Arguments to find a ItemFolha
     * @example
     * // Get one ItemFolha
     * const itemFolha = await prisma.itemFolha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFolhaFindFirstArgs>(args?: SelectSubset<T, ItemFolhaFindFirstArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemFolha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFolhaFindFirstOrThrowArgs} args - Arguments to find a ItemFolha
     * @example
     * // Get one ItemFolha
     * const itemFolha = await prisma.itemFolha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFolhaFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFolhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemFolhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFolhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemFolhas
     * const itemFolhas = await prisma.itemFolha.findMany()
     * 
     * // Get first 10 ItemFolhas
     * const itemFolhas = await prisma.itemFolha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemFolhaWithIdOnly = await prisma.itemFolha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFolhaFindManyArgs>(args?: SelectSubset<T, ItemFolhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemFolha.
     * @param {ItemFolhaCreateArgs} args - Arguments to create a ItemFolha.
     * @example
     * // Create one ItemFolha
     * const ItemFolha = await prisma.itemFolha.create({
     *   data: {
     *     // ... data to create a ItemFolha
     *   }
     * })
     * 
     */
    create<T extends ItemFolhaCreateArgs>(args: SelectSubset<T, ItemFolhaCreateArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemFolhas.
     * @param {ItemFolhaCreateManyArgs} args - Arguments to create many ItemFolhas.
     * @example
     * // Create many ItemFolhas
     * const itemFolha = await prisma.itemFolha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemFolhaCreateManyArgs>(args?: SelectSubset<T, ItemFolhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemFolha.
     * @param {ItemFolhaDeleteArgs} args - Arguments to delete one ItemFolha.
     * @example
     * // Delete one ItemFolha
     * const ItemFolha = await prisma.itemFolha.delete({
     *   where: {
     *     // ... filter to delete one ItemFolha
     *   }
     * })
     * 
     */
    delete<T extends ItemFolhaDeleteArgs>(args: SelectSubset<T, ItemFolhaDeleteArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemFolha.
     * @param {ItemFolhaUpdateArgs} args - Arguments to update one ItemFolha.
     * @example
     * // Update one ItemFolha
     * const itemFolha = await prisma.itemFolha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemFolhaUpdateArgs>(args: SelectSubset<T, ItemFolhaUpdateArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemFolhas.
     * @param {ItemFolhaDeleteManyArgs} args - Arguments to filter ItemFolhas to delete.
     * @example
     * // Delete a few ItemFolhas
     * const { count } = await prisma.itemFolha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemFolhaDeleteManyArgs>(args?: SelectSubset<T, ItemFolhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemFolhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFolhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemFolhas
     * const itemFolha = await prisma.itemFolha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemFolhaUpdateManyArgs>(args: SelectSubset<T, ItemFolhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemFolha.
     * @param {ItemFolhaUpsertArgs} args - Arguments to update or create a ItemFolha.
     * @example
     * // Update or create a ItemFolha
     * const itemFolha = await prisma.itemFolha.upsert({
     *   create: {
     *     // ... data to create a ItemFolha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemFolha we want to update
     *   }
     * })
     */
    upsert<T extends ItemFolhaUpsertArgs>(args: SelectSubset<T, ItemFolhaUpsertArgs<ExtArgs>>): Prisma__ItemFolhaClient<$Result.GetResult<Prisma.$ItemFolhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemFolhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFolhaCountArgs} args - Arguments to filter ItemFolhas to count.
     * @example
     * // Count the number of ItemFolhas
     * const count = await prisma.itemFolha.count({
     *   where: {
     *     // ... the filter for the ItemFolhas we want to count
     *   }
     * })
    **/
    count<T extends ItemFolhaCountArgs>(
      args?: Subset<T, ItemFolhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemFolhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemFolha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFolhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemFolhaAggregateArgs>(args: Subset<T, ItemFolhaAggregateArgs>): Prisma.PrismaPromise<GetItemFolhaAggregateType<T>>

    /**
     * Group by ItemFolha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFolhaGroupByArgs} args - Group by arguments.
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
      T extends ItemFolhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemFolhaGroupByArgs['orderBy'] }
        : { orderBy?: ItemFolhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemFolhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemFolhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemFolha model
   */
  readonly fields: ItemFolhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemFolha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemFolhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folha<T extends FolhaPagamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FolhaPagamentoDefaultArgs<ExtArgs>>): Prisma__FolhaPagamentoClient<$Result.GetResult<Prisma.$FolhaPagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evento<T extends EventoFolhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoFolhaDefaultArgs<ExtArgs>>): Prisma__EventoFolhaClient<$Result.GetResult<Prisma.$EventoFolhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemFolha model
   */
  interface ItemFolhaFieldRefs {
    readonly id: FieldRef<"ItemFolha", 'String'>
    readonly folhaId: FieldRef<"ItemFolha", 'String'>
    readonly codigoEvento: FieldRef<"ItemFolha", 'String'>
    readonly tipo: FieldRef<"ItemFolha", 'TipoEvento'>
    readonly referencia: FieldRef<"ItemFolha", 'String'>
    readonly valorCalculado: FieldRef<"ItemFolha", 'Float'>
    readonly memoriaCalculo: FieldRef<"ItemFolha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemFolha findUnique
   */
  export type ItemFolhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * Filter, which ItemFolha to fetch.
     */
    where: ItemFolhaWhereUniqueInput
  }

  /**
   * ItemFolha findUniqueOrThrow
   */
  export type ItemFolhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * Filter, which ItemFolha to fetch.
     */
    where: ItemFolhaWhereUniqueInput
  }

  /**
   * ItemFolha findFirst
   */
  export type ItemFolhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * Filter, which ItemFolha to fetch.
     */
    where?: ItemFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemFolhas to fetch.
     */
    orderBy?: ItemFolhaOrderByWithRelationInput | ItemFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemFolhas.
     */
    cursor?: ItemFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemFolhas.
     */
    distinct?: ItemFolhaScalarFieldEnum | ItemFolhaScalarFieldEnum[]
  }

  /**
   * ItemFolha findFirstOrThrow
   */
  export type ItemFolhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * Filter, which ItemFolha to fetch.
     */
    where?: ItemFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemFolhas to fetch.
     */
    orderBy?: ItemFolhaOrderByWithRelationInput | ItemFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemFolhas.
     */
    cursor?: ItemFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemFolhas.
     */
    distinct?: ItemFolhaScalarFieldEnum | ItemFolhaScalarFieldEnum[]
  }

  /**
   * ItemFolha findMany
   */
  export type ItemFolhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * Filter, which ItemFolhas to fetch.
     */
    where?: ItemFolhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemFolhas to fetch.
     */
    orderBy?: ItemFolhaOrderByWithRelationInput | ItemFolhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemFolhas.
     */
    cursor?: ItemFolhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemFolhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemFolhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemFolhas.
     */
    distinct?: ItemFolhaScalarFieldEnum | ItemFolhaScalarFieldEnum[]
  }

  /**
   * ItemFolha create
   */
  export type ItemFolhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemFolha.
     */
    data: XOR<ItemFolhaCreateInput, ItemFolhaUncheckedCreateInput>
  }

  /**
   * ItemFolha createMany
   */
  export type ItemFolhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemFolhas.
     */
    data: ItemFolhaCreateManyInput | ItemFolhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemFolha update
   */
  export type ItemFolhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemFolha.
     */
    data: XOR<ItemFolhaUpdateInput, ItemFolhaUncheckedUpdateInput>
    /**
     * Choose, which ItemFolha to update.
     */
    where: ItemFolhaWhereUniqueInput
  }

  /**
   * ItemFolha updateMany
   */
  export type ItemFolhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemFolhas.
     */
    data: XOR<ItemFolhaUpdateManyMutationInput, ItemFolhaUncheckedUpdateManyInput>
    /**
     * Filter which ItemFolhas to update
     */
    where?: ItemFolhaWhereInput
    /**
     * Limit how many ItemFolhas to update.
     */
    limit?: number
  }

  /**
   * ItemFolha upsert
   */
  export type ItemFolhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemFolha to update in case it exists.
     */
    where: ItemFolhaWhereUniqueInput
    /**
     * In case the ItemFolha found by the `where` argument doesn't exist, create a new ItemFolha with this data.
     */
    create: XOR<ItemFolhaCreateInput, ItemFolhaUncheckedCreateInput>
    /**
     * In case the ItemFolha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemFolhaUpdateInput, ItemFolhaUncheckedUpdateInput>
  }

  /**
   * ItemFolha delete
   */
  export type ItemFolhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
    /**
     * Filter which ItemFolha to delete.
     */
    where: ItemFolhaWhereUniqueInput
  }

  /**
   * ItemFolha deleteMany
   */
  export type ItemFolhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemFolhas to delete
     */
    where?: ItemFolhaWhereInput
    /**
     * Limit how many ItemFolhas to delete.
     */
    limit?: number
  }

  /**
   * ItemFolha without action
   */
  export type ItemFolhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemFolha
     */
    select?: ItemFolhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemFolha
     */
    omit?: ItemFolhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemFolhaInclude<ExtArgs> | null
  }


  /**
   * Model Turma
   */

  export type AggregateTurma = {
    _count: TurmaCountAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  export type TurmaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    createdAt: Date | null
  }

  export type TurmaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    createdAt: Date | null
  }

  export type TurmaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    _all: number
  }


  export type TurmaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
  }

  export type TurmaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
  }

  export type TurmaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    _all?: true
  }

  export type TurmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turma to aggregate.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turmas
    **/
    _count?: true | TurmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurmaMaxAggregateInputType
  }

  export type GetTurmaAggregateType<T extends TurmaAggregateArgs> = {
        [P in keyof T & keyof AggregateTurma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurma[P]>
      : GetScalarType<T[P], AggregateTurma[P]>
  }




  export type TurmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurmaWhereInput
    orderBy?: TurmaOrderByWithAggregationInput | TurmaOrderByWithAggregationInput[]
    by: TurmaScalarFieldEnum[] | TurmaScalarFieldEnum
    having?: TurmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurmaCountAggregateInputType | true
    _min?: TurmaMinAggregateInputType
    _max?: TurmaMaxAggregateInputType
  }

  export type TurmaGroupByOutputType = {
    id: string
    nome: string
    createdAt: Date
    _count: TurmaCountAggregateOutputType | null
    _min: TurmaMinAggregateOutputType | null
    _max: TurmaMaxAggregateOutputType | null
  }

  type GetTurmaGroupByPayload<T extends TurmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurmaGroupByOutputType[P]>
            : GetScalarType<T[P], TurmaGroupByOutputType[P]>
        }
      >
    >


  export type TurmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    activities?: boolean | Turma$activitiesArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turma"]>



  export type TurmaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
  }

  export type TurmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt", ExtArgs["result"]["turma"]>
  export type TurmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunos?: boolean | Turma$alunosArgs<ExtArgs>
    activities?: boolean | Turma$activitiesArgs<ExtArgs>
    _count?: boolean | TurmaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TurmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turma"
    objects: {
      alunos: Prisma.$AlunoPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      createdAt: Date
    }, ExtArgs["result"]["turma"]>
    composites: {}
  }

  type TurmaGetPayload<S extends boolean | null | undefined | TurmaDefaultArgs> = $Result.GetResult<Prisma.$TurmaPayload, S>

  type TurmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurmaCountAggregateInputType | true
    }

  export interface TurmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turma'], meta: { name: 'Turma' } }
    /**
     * Find zero or one Turma that matches the filter.
     * @param {TurmaFindUniqueArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurmaFindUniqueArgs>(args: SelectSubset<T, TurmaFindUniqueArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurmaFindUniqueOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurmaFindUniqueOrThrowArgs>(args: SelectSubset<T, TurmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurmaFindFirstArgs>(args?: SelectSubset<T, TurmaFindFirstArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindFirstOrThrowArgs} args - Arguments to find a Turma
     * @example
     * // Get one Turma
     * const turma = await prisma.turma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurmaFindFirstOrThrowArgs>(args?: SelectSubset<T, TurmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turmas
     * const turmas = await prisma.turma.findMany()
     * 
     * // Get first 10 Turmas
     * const turmas = await prisma.turma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turmaWithIdOnly = await prisma.turma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurmaFindManyArgs>(args?: SelectSubset<T, TurmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turma.
     * @param {TurmaCreateArgs} args - Arguments to create a Turma.
     * @example
     * // Create one Turma
     * const Turma = await prisma.turma.create({
     *   data: {
     *     // ... data to create a Turma
     *   }
     * })
     * 
     */
    create<T extends TurmaCreateArgs>(args: SelectSubset<T, TurmaCreateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turmas.
     * @param {TurmaCreateManyArgs} args - Arguments to create many Turmas.
     * @example
     * // Create many Turmas
     * const turma = await prisma.turma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurmaCreateManyArgs>(args?: SelectSubset<T, TurmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turma.
     * @param {TurmaDeleteArgs} args - Arguments to delete one Turma.
     * @example
     * // Delete one Turma
     * const Turma = await prisma.turma.delete({
     *   where: {
     *     // ... filter to delete one Turma
     *   }
     * })
     * 
     */
    delete<T extends TurmaDeleteArgs>(args: SelectSubset<T, TurmaDeleteArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turma.
     * @param {TurmaUpdateArgs} args - Arguments to update one Turma.
     * @example
     * // Update one Turma
     * const turma = await prisma.turma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurmaUpdateArgs>(args: SelectSubset<T, TurmaUpdateArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turmas.
     * @param {TurmaDeleteManyArgs} args - Arguments to filter Turmas to delete.
     * @example
     * // Delete a few Turmas
     * const { count } = await prisma.turma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurmaDeleteManyArgs>(args?: SelectSubset<T, TurmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turmas
     * const turma = await prisma.turma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurmaUpdateManyArgs>(args: SelectSubset<T, TurmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turma.
     * @param {TurmaUpsertArgs} args - Arguments to update or create a Turma.
     * @example
     * // Update or create a Turma
     * const turma = await prisma.turma.upsert({
     *   create: {
     *     // ... data to create a Turma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turma we want to update
     *   }
     * })
     */
    upsert<T extends TurmaUpsertArgs>(args: SelectSubset<T, TurmaUpsertArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaCountArgs} args - Arguments to filter Turmas to count.
     * @example
     * // Count the number of Turmas
     * const count = await prisma.turma.count({
     *   where: {
     *     // ... the filter for the Turmas we want to count
     *   }
     * })
    **/
    count<T extends TurmaCountArgs>(
      args?: Subset<T, TurmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurmaAggregateArgs>(args: Subset<T, TurmaAggregateArgs>): Prisma.PrismaPromise<GetTurmaAggregateType<T>>

    /**
     * Group by Turma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurmaGroupByArgs} args - Group by arguments.
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
      T extends TurmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurmaGroupByArgs['orderBy'] }
        : { orderBy?: TurmaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turma model
   */
  readonly fields: TurmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alunos<T extends Turma$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Turma$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Turma$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Turma$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turma model
   */
  interface TurmaFieldRefs {
    readonly id: FieldRef<"Turma", 'String'>
    readonly nome: FieldRef<"Turma", 'String'>
    readonly createdAt: FieldRef<"Turma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turma findUnique
   */
  export type TurmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findUniqueOrThrow
   */
  export type TurmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma findFirst
   */
  export type TurmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findFirstOrThrow
   */
  export type TurmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turma to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma findMany
   */
  export type TurmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter, which Turmas to fetch.
     */
    where?: TurmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turmas to fetch.
     */
    orderBy?: TurmaOrderByWithRelationInput | TurmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turmas.
     */
    cursor?: TurmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turmas.
     */
    distinct?: TurmaScalarFieldEnum | TurmaScalarFieldEnum[]
  }

  /**
   * Turma create
   */
  export type TurmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Turma.
     */
    data: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
  }

  /**
   * Turma createMany
   */
  export type TurmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turmas.
     */
    data: TurmaCreateManyInput | TurmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turma update
   */
  export type TurmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Turma.
     */
    data: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
    /**
     * Choose, which Turma to update.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma updateMany
   */
  export type TurmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turmas.
     */
    data: XOR<TurmaUpdateManyMutationInput, TurmaUncheckedUpdateManyInput>
    /**
     * Filter which Turmas to update
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to update.
     */
    limit?: number
  }

  /**
   * Turma upsert
   */
  export type TurmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Turma to update in case it exists.
     */
    where: TurmaWhereUniqueInput
    /**
     * In case the Turma found by the `where` argument doesn't exist, create a new Turma with this data.
     */
    create: XOR<TurmaCreateInput, TurmaUncheckedCreateInput>
    /**
     * In case the Turma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurmaUpdateInput, TurmaUncheckedUpdateInput>
  }

  /**
   * Turma delete
   */
  export type TurmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    /**
     * Filter which Turma to delete.
     */
    where: TurmaWhereUniqueInput
  }

  /**
   * Turma deleteMany
   */
  export type TurmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turmas to delete
     */
    where?: TurmaWhereInput
    /**
     * Limit how many Turmas to delete.
     */
    limit?: number
  }

  /**
   * Turma.alunos
   */
  export type Turma$alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Turma.activities
   */
  export type Turma$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Turma without action
   */
  export type TurmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
  }


  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    matricula: string | null
    senhaHash: string | null
    turmaId: string | null
    createdAt: Date | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    matricula: string | null
    senhaHash: string | null
    turmaId: string | null
    createdAt: Date | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    nome: number
    matricula: number
    senhaHash: number
    turmaId: number
    createdAt: number
    _all: number
  }


  export type AlunoMinAggregateInputType = {
    id?: true
    nome?: true
    matricula?: true
    senhaHash?: true
    turmaId?: true
    createdAt?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    nome?: true
    matricula?: true
    senhaHash?: true
    turmaId?: true
    createdAt?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    nome?: true
    matricula?: true
    senhaHash?: true
    turmaId?: true
    createdAt?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: string
    nome: string
    matricula: string
    senhaHash: string | null
    turmaId: string
    createdAt: Date
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    matricula?: boolean
    senhaHash?: boolean
    turmaId?: boolean
    createdAt?: boolean
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    conclusoes?: boolean | Aluno$conclusoesArgs<ExtArgs>
    notificacoes?: boolean | Aluno$notificacoesArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>



  export type AlunoSelectScalar = {
    id?: boolean
    nome?: boolean
    matricula?: boolean
    senhaHash?: boolean
    turmaId?: boolean
    createdAt?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "matricula" | "senhaHash" | "turmaId" | "createdAt", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turma?: boolean | TurmaDefaultArgs<ExtArgs>
    conclusoes?: boolean | Aluno$conclusoesArgs<ExtArgs>
    notificacoes?: boolean | Aluno$notificacoesArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      turma: Prisma.$TurmaPayload<ExtArgs>
      conclusoes: Prisma.$AtividadeConclusaoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      matricula: string
      senhaHash: string | null
      turmaId: string
      createdAt: Date
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turma<T extends TurmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurmaDefaultArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conclusoes<T extends Aluno$conclusoesArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$conclusoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends Aluno$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'String'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly matricula: FieldRef<"Aluno", 'String'>
    readonly senhaHash: FieldRef<"Aluno", 'String'>
    readonly turmaId: FieldRef<"Aluno", 'String'>
    readonly createdAt: FieldRef<"Aluno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.conclusoes
   */
  export type Aluno$conclusoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    where?: AtividadeConclusaoWhereInput
    orderBy?: AtividadeConclusaoOrderByWithRelationInput | AtividadeConclusaoOrderByWithRelationInput[]
    cursor?: AtividadeConclusaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeConclusaoScalarFieldEnum | AtividadeConclusaoScalarFieldEnum[]
  }

  /**
   * Aluno.notificacoes
   */
  export type Aluno$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model AtividadeConclusao
   */

  export type AggregateAtividadeConclusao = {
    _count: AtividadeConclusaoCountAggregateOutputType | null
    _min: AtividadeConclusaoMinAggregateOutputType | null
    _max: AtividadeConclusaoMaxAggregateOutputType | null
  }

  export type AtividadeConclusaoMinAggregateOutputType = {
    id: string | null
    activityId: string | null
    alunoId: string | null
    concluidaEm: Date | null
  }

  export type AtividadeConclusaoMaxAggregateOutputType = {
    id: string | null
    activityId: string | null
    alunoId: string | null
    concluidaEm: Date | null
  }

  export type AtividadeConclusaoCountAggregateOutputType = {
    id: number
    activityId: number
    alunoId: number
    concluidaEm: number
    _all: number
  }


  export type AtividadeConclusaoMinAggregateInputType = {
    id?: true
    activityId?: true
    alunoId?: true
    concluidaEm?: true
  }

  export type AtividadeConclusaoMaxAggregateInputType = {
    id?: true
    activityId?: true
    alunoId?: true
    concluidaEm?: true
  }

  export type AtividadeConclusaoCountAggregateInputType = {
    id?: true
    activityId?: true
    alunoId?: true
    concluidaEm?: true
    _all?: true
  }

  export type AtividadeConclusaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeConclusao to aggregate.
     */
    where?: AtividadeConclusaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeConclusaos to fetch.
     */
    orderBy?: AtividadeConclusaoOrderByWithRelationInput | AtividadeConclusaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeConclusaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeConclusaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeConclusaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtividadeConclusaos
    **/
    _count?: true | AtividadeConclusaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeConclusaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeConclusaoMaxAggregateInputType
  }

  export type GetAtividadeConclusaoAggregateType<T extends AtividadeConclusaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividadeConclusao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividadeConclusao[P]>
      : GetScalarType<T[P], AggregateAtividadeConclusao[P]>
  }




  export type AtividadeConclusaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeConclusaoWhereInput
    orderBy?: AtividadeConclusaoOrderByWithAggregationInput | AtividadeConclusaoOrderByWithAggregationInput[]
    by: AtividadeConclusaoScalarFieldEnum[] | AtividadeConclusaoScalarFieldEnum
    having?: AtividadeConclusaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeConclusaoCountAggregateInputType | true
    _min?: AtividadeConclusaoMinAggregateInputType
    _max?: AtividadeConclusaoMaxAggregateInputType
  }

  export type AtividadeConclusaoGroupByOutputType = {
    id: string
    activityId: string
    alunoId: string
    concluidaEm: Date
    _count: AtividadeConclusaoCountAggregateOutputType | null
    _min: AtividadeConclusaoMinAggregateOutputType | null
    _max: AtividadeConclusaoMaxAggregateOutputType | null
  }

  type GetAtividadeConclusaoGroupByPayload<T extends AtividadeConclusaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeConclusaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeConclusaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeConclusaoGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeConclusaoGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeConclusaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    alunoId?: boolean
    concluidaEm?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividadeConclusao"]>



  export type AtividadeConclusaoSelectScalar = {
    id?: boolean
    activityId?: boolean
    alunoId?: boolean
    concluidaEm?: boolean
  }

  export type AtividadeConclusaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityId" | "alunoId" | "concluidaEm", ExtArgs["result"]["atividadeConclusao"]>
  export type AtividadeConclusaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $AtividadeConclusaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtividadeConclusao"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activityId: string
      alunoId: string
      concluidaEm: Date
    }, ExtArgs["result"]["atividadeConclusao"]>
    composites: {}
  }

  type AtividadeConclusaoGetPayload<S extends boolean | null | undefined | AtividadeConclusaoDefaultArgs> = $Result.GetResult<Prisma.$AtividadeConclusaoPayload, S>

  type AtividadeConclusaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtividadeConclusaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeConclusaoCountAggregateInputType | true
    }

  export interface AtividadeConclusaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtividadeConclusao'], meta: { name: 'AtividadeConclusao' } }
    /**
     * Find zero or one AtividadeConclusao that matches the filter.
     * @param {AtividadeConclusaoFindUniqueArgs} args - Arguments to find a AtividadeConclusao
     * @example
     * // Get one AtividadeConclusao
     * const atividadeConclusao = await prisma.atividadeConclusao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeConclusaoFindUniqueArgs>(args: SelectSubset<T, AtividadeConclusaoFindUniqueArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtividadeConclusao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtividadeConclusaoFindUniqueOrThrowArgs} args - Arguments to find a AtividadeConclusao
     * @example
     * // Get one AtividadeConclusao
     * const atividadeConclusao = await prisma.atividadeConclusao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeConclusaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeConclusaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtividadeConclusao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeConclusaoFindFirstArgs} args - Arguments to find a AtividadeConclusao
     * @example
     * // Get one AtividadeConclusao
     * const atividadeConclusao = await prisma.atividadeConclusao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeConclusaoFindFirstArgs>(args?: SelectSubset<T, AtividadeConclusaoFindFirstArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtividadeConclusao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeConclusaoFindFirstOrThrowArgs} args - Arguments to find a AtividadeConclusao
     * @example
     * // Get one AtividadeConclusao
     * const atividadeConclusao = await prisma.atividadeConclusao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeConclusaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeConclusaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtividadeConclusaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeConclusaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtividadeConclusaos
     * const atividadeConclusaos = await prisma.atividadeConclusao.findMany()
     * 
     * // Get first 10 AtividadeConclusaos
     * const atividadeConclusaos = await prisma.atividadeConclusao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeConclusaoWithIdOnly = await prisma.atividadeConclusao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeConclusaoFindManyArgs>(args?: SelectSubset<T, AtividadeConclusaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtividadeConclusao.
     * @param {AtividadeConclusaoCreateArgs} args - Arguments to create a AtividadeConclusao.
     * @example
     * // Create one AtividadeConclusao
     * const AtividadeConclusao = await prisma.atividadeConclusao.create({
     *   data: {
     *     // ... data to create a AtividadeConclusao
     *   }
     * })
     * 
     */
    create<T extends AtividadeConclusaoCreateArgs>(args: SelectSubset<T, AtividadeConclusaoCreateArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtividadeConclusaos.
     * @param {AtividadeConclusaoCreateManyArgs} args - Arguments to create many AtividadeConclusaos.
     * @example
     * // Create many AtividadeConclusaos
     * const atividadeConclusao = await prisma.atividadeConclusao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeConclusaoCreateManyArgs>(args?: SelectSubset<T, AtividadeConclusaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AtividadeConclusao.
     * @param {AtividadeConclusaoDeleteArgs} args - Arguments to delete one AtividadeConclusao.
     * @example
     * // Delete one AtividadeConclusao
     * const AtividadeConclusao = await prisma.atividadeConclusao.delete({
     *   where: {
     *     // ... filter to delete one AtividadeConclusao
     *   }
     * })
     * 
     */
    delete<T extends AtividadeConclusaoDeleteArgs>(args: SelectSubset<T, AtividadeConclusaoDeleteArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtividadeConclusao.
     * @param {AtividadeConclusaoUpdateArgs} args - Arguments to update one AtividadeConclusao.
     * @example
     * // Update one AtividadeConclusao
     * const atividadeConclusao = await prisma.atividadeConclusao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeConclusaoUpdateArgs>(args: SelectSubset<T, AtividadeConclusaoUpdateArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtividadeConclusaos.
     * @param {AtividadeConclusaoDeleteManyArgs} args - Arguments to filter AtividadeConclusaos to delete.
     * @example
     * // Delete a few AtividadeConclusaos
     * const { count } = await prisma.atividadeConclusao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeConclusaoDeleteManyArgs>(args?: SelectSubset<T, AtividadeConclusaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtividadeConclusaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeConclusaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtividadeConclusaos
     * const atividadeConclusao = await prisma.atividadeConclusao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeConclusaoUpdateManyArgs>(args: SelectSubset<T, AtividadeConclusaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AtividadeConclusao.
     * @param {AtividadeConclusaoUpsertArgs} args - Arguments to update or create a AtividadeConclusao.
     * @example
     * // Update or create a AtividadeConclusao
     * const atividadeConclusao = await prisma.atividadeConclusao.upsert({
     *   create: {
     *     // ... data to create a AtividadeConclusao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtividadeConclusao we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeConclusaoUpsertArgs>(args: SelectSubset<T, AtividadeConclusaoUpsertArgs<ExtArgs>>): Prisma__AtividadeConclusaoClient<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtividadeConclusaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeConclusaoCountArgs} args - Arguments to filter AtividadeConclusaos to count.
     * @example
     * // Count the number of AtividadeConclusaos
     * const count = await prisma.atividadeConclusao.count({
     *   where: {
     *     // ... the filter for the AtividadeConclusaos we want to count
     *   }
     * })
    **/
    count<T extends AtividadeConclusaoCountArgs>(
      args?: Subset<T, AtividadeConclusaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeConclusaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtividadeConclusao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeConclusaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeConclusaoAggregateArgs>(args: Subset<T, AtividadeConclusaoAggregateArgs>): Prisma.PrismaPromise<GetAtividadeConclusaoAggregateType<T>>

    /**
     * Group by AtividadeConclusao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeConclusaoGroupByArgs} args - Group by arguments.
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
      T extends AtividadeConclusaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeConclusaoGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeConclusaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeConclusaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeConclusaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtividadeConclusao model
   */
  readonly fields: AtividadeConclusaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtividadeConclusao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeConclusaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtividadeConclusao model
   */
  interface AtividadeConclusaoFieldRefs {
    readonly id: FieldRef<"AtividadeConclusao", 'String'>
    readonly activityId: FieldRef<"AtividadeConclusao", 'String'>
    readonly alunoId: FieldRef<"AtividadeConclusao", 'String'>
    readonly concluidaEm: FieldRef<"AtividadeConclusao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtividadeConclusao findUnique
   */
  export type AtividadeConclusaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeConclusao to fetch.
     */
    where: AtividadeConclusaoWhereUniqueInput
  }

  /**
   * AtividadeConclusao findUniqueOrThrow
   */
  export type AtividadeConclusaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeConclusao to fetch.
     */
    where: AtividadeConclusaoWhereUniqueInput
  }

  /**
   * AtividadeConclusao findFirst
   */
  export type AtividadeConclusaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeConclusao to fetch.
     */
    where?: AtividadeConclusaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeConclusaos to fetch.
     */
    orderBy?: AtividadeConclusaoOrderByWithRelationInput | AtividadeConclusaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeConclusaos.
     */
    cursor?: AtividadeConclusaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeConclusaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeConclusaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeConclusaos.
     */
    distinct?: AtividadeConclusaoScalarFieldEnum | AtividadeConclusaoScalarFieldEnum[]
  }

  /**
   * AtividadeConclusao findFirstOrThrow
   */
  export type AtividadeConclusaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeConclusao to fetch.
     */
    where?: AtividadeConclusaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeConclusaos to fetch.
     */
    orderBy?: AtividadeConclusaoOrderByWithRelationInput | AtividadeConclusaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtividadeConclusaos.
     */
    cursor?: AtividadeConclusaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeConclusaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeConclusaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeConclusaos.
     */
    distinct?: AtividadeConclusaoScalarFieldEnum | AtividadeConclusaoScalarFieldEnum[]
  }

  /**
   * AtividadeConclusao findMany
   */
  export type AtividadeConclusaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * Filter, which AtividadeConclusaos to fetch.
     */
    where?: AtividadeConclusaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtividadeConclusaos to fetch.
     */
    orderBy?: AtividadeConclusaoOrderByWithRelationInput | AtividadeConclusaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtividadeConclusaos.
     */
    cursor?: AtividadeConclusaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtividadeConclusaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtividadeConclusaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtividadeConclusaos.
     */
    distinct?: AtividadeConclusaoScalarFieldEnum | AtividadeConclusaoScalarFieldEnum[]
  }

  /**
   * AtividadeConclusao create
   */
  export type AtividadeConclusaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * The data needed to create a AtividadeConclusao.
     */
    data: XOR<AtividadeConclusaoCreateInput, AtividadeConclusaoUncheckedCreateInput>
  }

  /**
   * AtividadeConclusao createMany
   */
  export type AtividadeConclusaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtividadeConclusaos.
     */
    data: AtividadeConclusaoCreateManyInput | AtividadeConclusaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtividadeConclusao update
   */
  export type AtividadeConclusaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * The data needed to update a AtividadeConclusao.
     */
    data: XOR<AtividadeConclusaoUpdateInput, AtividadeConclusaoUncheckedUpdateInput>
    /**
     * Choose, which AtividadeConclusao to update.
     */
    where: AtividadeConclusaoWhereUniqueInput
  }

  /**
   * AtividadeConclusao updateMany
   */
  export type AtividadeConclusaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtividadeConclusaos.
     */
    data: XOR<AtividadeConclusaoUpdateManyMutationInput, AtividadeConclusaoUncheckedUpdateManyInput>
    /**
     * Filter which AtividadeConclusaos to update
     */
    where?: AtividadeConclusaoWhereInput
    /**
     * Limit how many AtividadeConclusaos to update.
     */
    limit?: number
  }

  /**
   * AtividadeConclusao upsert
   */
  export type AtividadeConclusaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * The filter to search for the AtividadeConclusao to update in case it exists.
     */
    where: AtividadeConclusaoWhereUniqueInput
    /**
     * In case the AtividadeConclusao found by the `where` argument doesn't exist, create a new AtividadeConclusao with this data.
     */
    create: XOR<AtividadeConclusaoCreateInput, AtividadeConclusaoUncheckedCreateInput>
    /**
     * In case the AtividadeConclusao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeConclusaoUpdateInput, AtividadeConclusaoUncheckedUpdateInput>
  }

  /**
   * AtividadeConclusao delete
   */
  export type AtividadeConclusaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    /**
     * Filter which AtividadeConclusao to delete.
     */
    where: AtividadeConclusaoWhereUniqueInput
  }

  /**
   * AtividadeConclusao deleteMany
   */
  export type AtividadeConclusaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtividadeConclusaos to delete
     */
    where?: AtividadeConclusaoWhereInput
    /**
     * Limit how many AtividadeConclusaos to delete.
     */
    limit?: number
  }

  /**
   * AtividadeConclusao without action
   */
  export type AtividadeConclusaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    mensagem: string | null
    tipo: $Enums.TipoNotificacao | null
    destino: $Enums.DestinoNotificacao | null
    alunoId: string | null
    lida: boolean | null
    createdAt: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    mensagem: string | null
    tipo: $Enums.TipoNotificacao | null
    destino: $Enums.DestinoNotificacao | null
    alunoId: string | null
    lida: boolean | null
    createdAt: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    mensagem: number
    tipo: number
    destino: number
    alunoId: number
    lida: number
    createdAt: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id?: true
    mensagem?: true
    tipo?: true
    destino?: true
    alunoId?: true
    lida?: true
    createdAt?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    mensagem?: true
    tipo?: true
    destino?: true
    alunoId?: true
    lida?: true
    createdAt?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    mensagem?: true
    tipo?: true
    destino?: true
    alunoId?: true
    lida?: true
    createdAt?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    destino: $Enums.DestinoNotificacao
    alunoId: string | null
    lida: boolean
    createdAt: Date
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    tipo?: boolean
    destino?: boolean
    alunoId?: boolean
    lida?: boolean
    createdAt?: boolean
    aluno?: boolean | Notificacao$alunoArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>



  export type NotificacaoSelectScalar = {
    id?: boolean
    mensagem?: boolean
    tipo?: boolean
    destino?: boolean
    alunoId?: boolean
    lida?: boolean
    createdAt?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensagem" | "tipo" | "destino" | "alunoId" | "lida" | "createdAt", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | Notificacao$alunoArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mensagem: string
      tipo: $Enums.TipoNotificacao
      destino: $Enums.DestinoNotificacao
      alunoId: string | null
      lida: boolean
      createdAt: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
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
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends Notificacao$alunoArgs<ExtArgs> = {}>(args?: Subset<T, Notificacao$alunoArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly tipo: FieldRef<"Notificacao", 'TipoNotificacao'>
    readonly destino: FieldRef<"Notificacao", 'DestinoNotificacao'>
    readonly alunoId: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao.aluno
   */
  export type Notificacao$alunoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    type: $Enums.TipoAtividade | null
    title: string | null
    statement: string | null
    instructions: string | null
    mechanism: $Enums.MecanismoAtividade | null
    className: string | null
    createdBy: string | null
    turmaId: string | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TipoAtividade | null
    title: string | null
    statement: string | null
    instructions: string | null
    mechanism: $Enums.MecanismoAtividade | null
    className: string | null
    createdBy: string | null
    turmaId: string | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    type: number
    title: number
    statement: number
    instructions: number
    mechanism: number
    className: number
    createdBy: number
    turmaId: number
    createdAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    statement?: true
    instructions?: true
    mechanism?: true
    className?: true
    createdBy?: true
    turmaId?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    statement?: true
    instructions?: true
    mechanism?: true
    className?: true
    createdBy?: true
    turmaId?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    statement?: true
    instructions?: true
    mechanism?: true
    className?: true
    createdBy?: true
    turmaId?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    turmaId: string | null
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    statement?: boolean
    instructions?: boolean
    mechanism?: boolean
    className?: boolean
    createdBy?: boolean
    turmaId?: boolean
    createdAt?: boolean
    turma?: boolean | Activity$turmaArgs<ExtArgs>
    conclusoes?: boolean | Activity$conclusoesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    statement?: boolean
    instructions?: boolean
    mechanism?: boolean
    className?: boolean
    createdBy?: boolean
    turmaId?: boolean
    createdAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "statement" | "instructions" | "mechanism" | "className" | "createdBy" | "turmaId" | "createdAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turma?: boolean | Activity$turmaArgs<ExtArgs>
    conclusoes?: boolean | Activity$conclusoesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      turma: Prisma.$TurmaPayload<ExtArgs> | null
      conclusoes: Prisma.$AtividadeConclusaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TipoAtividade
      title: string
      statement: string
      instructions: string
      mechanism: $Enums.MecanismoAtividade
      className: string
      createdBy: string
      turmaId: string | null
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turma<T extends Activity$turmaArgs<ExtArgs> = {}>(args?: Subset<T, Activity$turmaArgs<ExtArgs>>): Prisma__TurmaClient<$Result.GetResult<Prisma.$TurmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conclusoes<T extends Activity$conclusoesArgs<ExtArgs> = {}>(args?: Subset<T, Activity$conclusoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadeConclusaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'TipoAtividade'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly statement: FieldRef<"Activity", 'String'>
    readonly instructions: FieldRef<"Activity", 'String'>
    readonly mechanism: FieldRef<"Activity", 'MecanismoAtividade'>
    readonly className: FieldRef<"Activity", 'String'>
    readonly createdBy: FieldRef<"Activity", 'String'>
    readonly turmaId: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.turma
   */
  export type Activity$turmaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turma
     */
    select?: TurmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turma
     */
    omit?: TurmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurmaInclude<ExtArgs> | null
    where?: TurmaWhereInput
  }

  /**
   * Activity.conclusoes
   */
  export type Activity$conclusoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadeConclusao
     */
    select?: AtividadeConclusaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtividadeConclusao
     */
    omit?: AtividadeConclusaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeConclusaoInclude<ExtArgs> | null
    where?: AtividadeConclusaoWhereInput
    orderBy?: AtividadeConclusaoOrderByWithRelationInput | AtividadeConclusaoOrderByWithRelationInput[]
    cursor?: AtividadeConclusaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeConclusaoScalarFieldEnum | AtividadeConclusaoScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senhaHash: number
    _all: number
  }


  export type ProfessorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: string
    nome: string
    email: string
    senhaHash: string
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
  }, ExtArgs["result"]["professor"]>



  export type ProfessorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senhaHash", ExtArgs["result"]["professor"]>

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senhaHash: string
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'String'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
    readonly senhaHash: FieldRef<"Professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
  }


  /**
   * Model Sessao
   */

  export type AggregateSessao = {
    _count: SessaoCountAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  export type SessaoMinAggregateOutputType = {
    tokenHash: string | null
    userId: string | null
    role: string | null
    expiresAt: Date | null
  }

  export type SessaoMaxAggregateOutputType = {
    tokenHash: string | null
    userId: string | null
    role: string | null
    expiresAt: Date | null
  }

  export type SessaoCountAggregateOutputType = {
    tokenHash: number
    userId: number
    role: number
    expiresAt: number
    _all: number
  }


  export type SessaoMinAggregateInputType = {
    tokenHash?: true
    userId?: true
    role?: true
    expiresAt?: true
  }

  export type SessaoMaxAggregateInputType = {
    tokenHash?: true
    userId?: true
    role?: true
    expiresAt?: true
  }

  export type SessaoCountAggregateInputType = {
    tokenHash?: true
    userId?: true
    role?: true
    expiresAt?: true
    _all?: true
  }

  export type SessaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessao to aggregate.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessaos
    **/
    _count?: true | SessaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessaoMaxAggregateInputType
  }

  export type GetSessaoAggregateType<T extends SessaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSessao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessao[P]>
      : GetScalarType<T[P], AggregateSessao[P]>
  }




  export type SessaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithAggregationInput | SessaoOrderByWithAggregationInput[]
    by: SessaoScalarFieldEnum[] | SessaoScalarFieldEnum
    having?: SessaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessaoCountAggregateInputType | true
    _min?: SessaoMinAggregateInputType
    _max?: SessaoMaxAggregateInputType
  }

  export type SessaoGroupByOutputType = {
    tokenHash: string
    userId: string
    role: string
    expiresAt: Date
    _count: SessaoCountAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  type GetSessaoGroupByPayload<T extends SessaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessaoGroupByOutputType[P]>
            : GetScalarType<T[P], SessaoGroupByOutputType[P]>
        }
      >
    >


  export type SessaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenHash?: boolean
    userId?: boolean
    role?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["sessao"]>



  export type SessaoSelectScalar = {
    tokenHash?: boolean
    userId?: boolean
    role?: boolean
    expiresAt?: boolean
  }

  export type SessaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenHash" | "userId" | "role" | "expiresAt", ExtArgs["result"]["sessao"]>

  export type $SessaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tokenHash: string
      userId: string
      role: string
      expiresAt: Date
    }, ExtArgs["result"]["sessao"]>
    composites: {}
  }

  type SessaoGetPayload<S extends boolean | null | undefined | SessaoDefaultArgs> = $Result.GetResult<Prisma.$SessaoPayload, S>

  type SessaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessaoCountAggregateInputType | true
    }

  export interface SessaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessao'], meta: { name: 'Sessao' } }
    /**
     * Find zero or one Sessao that matches the filter.
     * @param {SessaoFindUniqueArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessaoFindUniqueArgs>(args: SelectSubset<T, SessaoFindUniqueArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessaoFindUniqueOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SessaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessaoFindFirstArgs>(args?: SelectSubset<T, SessaoFindFirstArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SessaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessaos
     * const sessaos = await prisma.sessao.findMany()
     * 
     * // Get first 10 Sessaos
     * const sessaos = await prisma.sessao.findMany({ take: 10 })
     * 
     * // Only select the `tokenHash`
     * const sessaoWithTokenHashOnly = await prisma.sessao.findMany({ select: { tokenHash: true } })
     * 
     */
    findMany<T extends SessaoFindManyArgs>(args?: SelectSubset<T, SessaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessao.
     * @param {SessaoCreateArgs} args - Arguments to create a Sessao.
     * @example
     * // Create one Sessao
     * const Sessao = await prisma.sessao.create({
     *   data: {
     *     // ... data to create a Sessao
     *   }
     * })
     * 
     */
    create<T extends SessaoCreateArgs>(args: SelectSubset<T, SessaoCreateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessaos.
     * @param {SessaoCreateManyArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessaoCreateManyArgs>(args?: SelectSubset<T, SessaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sessao.
     * @param {SessaoDeleteArgs} args - Arguments to delete one Sessao.
     * @example
     * // Delete one Sessao
     * const Sessao = await prisma.sessao.delete({
     *   where: {
     *     // ... filter to delete one Sessao
     *   }
     * })
     * 
     */
    delete<T extends SessaoDeleteArgs>(args: SelectSubset<T, SessaoDeleteArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessao.
     * @param {SessaoUpdateArgs} args - Arguments to update one Sessao.
     * @example
     * // Update one Sessao
     * const sessao = await prisma.sessao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessaoUpdateArgs>(args: SelectSubset<T, SessaoUpdateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessaos.
     * @param {SessaoDeleteManyArgs} args - Arguments to filter Sessaos to delete.
     * @example
     * // Delete a few Sessaos
     * const { count } = await prisma.sessao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessaoDeleteManyArgs>(args?: SelectSubset<T, SessaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessaoUpdateManyArgs>(args: SelectSubset<T, SessaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessao.
     * @param {SessaoUpsertArgs} args - Arguments to update or create a Sessao.
     * @example
     * // Update or create a Sessao
     * const sessao = await prisma.sessao.upsert({
     *   create: {
     *     // ... data to create a Sessao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessao we want to update
     *   }
     * })
     */
    upsert<T extends SessaoUpsertArgs>(args: SelectSubset<T, SessaoUpsertArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoCountArgs} args - Arguments to filter Sessaos to count.
     * @example
     * // Count the number of Sessaos
     * const count = await prisma.sessao.count({
     *   where: {
     *     // ... the filter for the Sessaos we want to count
     *   }
     * })
    **/
    count<T extends SessaoCountArgs>(
      args?: Subset<T, SessaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessaoAggregateArgs>(args: Subset<T, SessaoAggregateArgs>): Prisma.PrismaPromise<GetSessaoAggregateType<T>>

    /**
     * Group by Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoGroupByArgs} args - Group by arguments.
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
      T extends SessaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessaoGroupByArgs['orderBy'] }
        : { orderBy?: SessaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessao model
   */
  readonly fields: SessaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessao model
   */
  interface SessaoFieldRefs {
    readonly tokenHash: FieldRef<"Sessao", 'String'>
    readonly userId: FieldRef<"Sessao", 'String'>
    readonly role: FieldRef<"Sessao", 'String'>
    readonly expiresAt: FieldRef<"Sessao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sessao findUnique
   */
  export type SessaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findUniqueOrThrow
   */
  export type SessaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findFirst
   */
  export type SessaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findFirstOrThrow
   */
  export type SessaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findMany
   */
  export type SessaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Filter, which Sessaos to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao create
   */
  export type SessaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Sessao.
     */
    data: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
  }

  /**
   * Sessao createMany
   */
  export type SessaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessao update
   */
  export type SessaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Sessao.
     */
    data: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
    /**
     * Choose, which Sessao to update.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao updateMany
   */
  export type SessaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number
  }

  /**
   * Sessao upsert
   */
  export type SessaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Sessao to update in case it exists.
     */
    where: SessaoWhereUniqueInput
    /**
     * In case the Sessao found by the `where` argument doesn't exist, create a new Sessao with this data.
     */
    create: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
    /**
     * In case the Sessao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
  }

  /**
   * Sessao delete
   */
  export type SessaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Filter which Sessao to delete.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao deleteMany
   */
  export type SessaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessaos to delete
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to delete.
     */
    limit?: number
  }

  /**
   * Sessao without action
   */
  export type SessaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
  }


  /**
   * Model Trabalho
   */

  export type AggregateTrabalho = {
    _count: TrabalhoCountAggregateOutputType | null
    _min: TrabalhoMinAggregateOutputType | null
    _max: TrabalhoMaxAggregateOutputType | null
  }

  export type TrabalhoMinAggregateOutputType = {
    id: string | null
    alunoId: string | null
    tipo: string | null
    createdAt: Date | null
  }

  export type TrabalhoMaxAggregateOutputType = {
    id: string | null
    alunoId: string | null
    tipo: string | null
    createdAt: Date | null
  }

  export type TrabalhoCountAggregateOutputType = {
    id: number
    alunoId: number
    tipo: number
    dados: number
    createdAt: number
    _all: number
  }


  export type TrabalhoMinAggregateInputType = {
    id?: true
    alunoId?: true
    tipo?: true
    createdAt?: true
  }

  export type TrabalhoMaxAggregateInputType = {
    id?: true
    alunoId?: true
    tipo?: true
    createdAt?: true
  }

  export type TrabalhoCountAggregateInputType = {
    id?: true
    alunoId?: true
    tipo?: true
    dados?: true
    createdAt?: true
    _all?: true
  }

  export type TrabalhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trabalho to aggregate.
     */
    where?: TrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabalhos to fetch.
     */
    orderBy?: TrabalhoOrderByWithRelationInput | TrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trabalhos
    **/
    _count?: true | TrabalhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrabalhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrabalhoMaxAggregateInputType
  }

  export type GetTrabalhoAggregateType<T extends TrabalhoAggregateArgs> = {
        [P in keyof T & keyof AggregateTrabalho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrabalho[P]>
      : GetScalarType<T[P], AggregateTrabalho[P]>
  }




  export type TrabalhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrabalhoWhereInput
    orderBy?: TrabalhoOrderByWithAggregationInput | TrabalhoOrderByWithAggregationInput[]
    by: TrabalhoScalarFieldEnum[] | TrabalhoScalarFieldEnum
    having?: TrabalhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrabalhoCountAggregateInputType | true
    _min?: TrabalhoMinAggregateInputType
    _max?: TrabalhoMaxAggregateInputType
  }

  export type TrabalhoGroupByOutputType = {
    id: string
    alunoId: string
    tipo: string
    dados: JsonValue
    createdAt: Date
    _count: TrabalhoCountAggregateOutputType | null
    _min: TrabalhoMinAggregateOutputType | null
    _max: TrabalhoMaxAggregateOutputType | null
  }

  type GetTrabalhoGroupByPayload<T extends TrabalhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrabalhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrabalhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrabalhoGroupByOutputType[P]>
            : GetScalarType<T[P], TrabalhoGroupByOutputType[P]>
        }
      >
    >


  export type TrabalhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoId?: boolean
    tipo?: boolean
    dados?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["trabalho"]>



  export type TrabalhoSelectScalar = {
    id?: boolean
    alunoId?: boolean
    tipo?: boolean
    dados?: boolean
    createdAt?: boolean
  }

  export type TrabalhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoId" | "tipo" | "dados" | "createdAt", ExtArgs["result"]["trabalho"]>

  export type $TrabalhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trabalho"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alunoId: string
      tipo: string
      dados: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["trabalho"]>
    composites: {}
  }

  type TrabalhoGetPayload<S extends boolean | null | undefined | TrabalhoDefaultArgs> = $Result.GetResult<Prisma.$TrabalhoPayload, S>

  type TrabalhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrabalhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrabalhoCountAggregateInputType | true
    }

  export interface TrabalhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trabalho'], meta: { name: 'Trabalho' } }
    /**
     * Find zero or one Trabalho that matches the filter.
     * @param {TrabalhoFindUniqueArgs} args - Arguments to find a Trabalho
     * @example
     * // Get one Trabalho
     * const trabalho = await prisma.trabalho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrabalhoFindUniqueArgs>(args: SelectSubset<T, TrabalhoFindUniqueArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trabalho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrabalhoFindUniqueOrThrowArgs} args - Arguments to find a Trabalho
     * @example
     * // Get one Trabalho
     * const trabalho = await prisma.trabalho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrabalhoFindUniqueOrThrowArgs>(args: SelectSubset<T, TrabalhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabalho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoFindFirstArgs} args - Arguments to find a Trabalho
     * @example
     * // Get one Trabalho
     * const trabalho = await prisma.trabalho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrabalhoFindFirstArgs>(args?: SelectSubset<T, TrabalhoFindFirstArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabalho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoFindFirstOrThrowArgs} args - Arguments to find a Trabalho
     * @example
     * // Get one Trabalho
     * const trabalho = await prisma.trabalho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrabalhoFindFirstOrThrowArgs>(args?: SelectSubset<T, TrabalhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trabalhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trabalhos
     * const trabalhos = await prisma.trabalho.findMany()
     * 
     * // Get first 10 Trabalhos
     * const trabalhos = await prisma.trabalho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trabalhoWithIdOnly = await prisma.trabalho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrabalhoFindManyArgs>(args?: SelectSubset<T, TrabalhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trabalho.
     * @param {TrabalhoCreateArgs} args - Arguments to create a Trabalho.
     * @example
     * // Create one Trabalho
     * const Trabalho = await prisma.trabalho.create({
     *   data: {
     *     // ... data to create a Trabalho
     *   }
     * })
     * 
     */
    create<T extends TrabalhoCreateArgs>(args: SelectSubset<T, TrabalhoCreateArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trabalhos.
     * @param {TrabalhoCreateManyArgs} args - Arguments to create many Trabalhos.
     * @example
     * // Create many Trabalhos
     * const trabalho = await prisma.trabalho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrabalhoCreateManyArgs>(args?: SelectSubset<T, TrabalhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trabalho.
     * @param {TrabalhoDeleteArgs} args - Arguments to delete one Trabalho.
     * @example
     * // Delete one Trabalho
     * const Trabalho = await prisma.trabalho.delete({
     *   where: {
     *     // ... filter to delete one Trabalho
     *   }
     * })
     * 
     */
    delete<T extends TrabalhoDeleteArgs>(args: SelectSubset<T, TrabalhoDeleteArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trabalho.
     * @param {TrabalhoUpdateArgs} args - Arguments to update one Trabalho.
     * @example
     * // Update one Trabalho
     * const trabalho = await prisma.trabalho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrabalhoUpdateArgs>(args: SelectSubset<T, TrabalhoUpdateArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trabalhos.
     * @param {TrabalhoDeleteManyArgs} args - Arguments to filter Trabalhos to delete.
     * @example
     * // Delete a few Trabalhos
     * const { count } = await prisma.trabalho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrabalhoDeleteManyArgs>(args?: SelectSubset<T, TrabalhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trabalhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trabalhos
     * const trabalho = await prisma.trabalho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrabalhoUpdateManyArgs>(args: SelectSubset<T, TrabalhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trabalho.
     * @param {TrabalhoUpsertArgs} args - Arguments to update or create a Trabalho.
     * @example
     * // Update or create a Trabalho
     * const trabalho = await prisma.trabalho.upsert({
     *   create: {
     *     // ... data to create a Trabalho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trabalho we want to update
     *   }
     * })
     */
    upsert<T extends TrabalhoUpsertArgs>(args: SelectSubset<T, TrabalhoUpsertArgs<ExtArgs>>): Prisma__TrabalhoClient<$Result.GetResult<Prisma.$TrabalhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trabalhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoCountArgs} args - Arguments to filter Trabalhos to count.
     * @example
     * // Count the number of Trabalhos
     * const count = await prisma.trabalho.count({
     *   where: {
     *     // ... the filter for the Trabalhos we want to count
     *   }
     * })
    **/
    count<T extends TrabalhoCountArgs>(
      args?: Subset<T, TrabalhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrabalhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trabalho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrabalhoAggregateArgs>(args: Subset<T, TrabalhoAggregateArgs>): Prisma.PrismaPromise<GetTrabalhoAggregateType<T>>

    /**
     * Group by Trabalho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabalhoGroupByArgs} args - Group by arguments.
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
      T extends TrabalhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrabalhoGroupByArgs['orderBy'] }
        : { orderBy?: TrabalhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrabalhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrabalhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trabalho model
   */
  readonly fields: TrabalhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trabalho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrabalhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trabalho model
   */
  interface TrabalhoFieldRefs {
    readonly id: FieldRef<"Trabalho", 'String'>
    readonly alunoId: FieldRef<"Trabalho", 'String'>
    readonly tipo: FieldRef<"Trabalho", 'String'>
    readonly dados: FieldRef<"Trabalho", 'Json'>
    readonly createdAt: FieldRef<"Trabalho", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trabalho findUnique
   */
  export type TrabalhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * Filter, which Trabalho to fetch.
     */
    where: TrabalhoWhereUniqueInput
  }

  /**
   * Trabalho findUniqueOrThrow
   */
  export type TrabalhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * Filter, which Trabalho to fetch.
     */
    where: TrabalhoWhereUniqueInput
  }

  /**
   * Trabalho findFirst
   */
  export type TrabalhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * Filter, which Trabalho to fetch.
     */
    where?: TrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabalhos to fetch.
     */
    orderBy?: TrabalhoOrderByWithRelationInput | TrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trabalhos.
     */
    cursor?: TrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trabalhos.
     */
    distinct?: TrabalhoScalarFieldEnum | TrabalhoScalarFieldEnum[]
  }

  /**
   * Trabalho findFirstOrThrow
   */
  export type TrabalhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * Filter, which Trabalho to fetch.
     */
    where?: TrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabalhos to fetch.
     */
    orderBy?: TrabalhoOrderByWithRelationInput | TrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trabalhos.
     */
    cursor?: TrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trabalhos.
     */
    distinct?: TrabalhoScalarFieldEnum | TrabalhoScalarFieldEnum[]
  }

  /**
   * Trabalho findMany
   */
  export type TrabalhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * Filter, which Trabalhos to fetch.
     */
    where?: TrabalhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trabalhos to fetch.
     */
    orderBy?: TrabalhoOrderByWithRelationInput | TrabalhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trabalhos.
     */
    cursor?: TrabalhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trabalhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trabalhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trabalhos.
     */
    distinct?: TrabalhoScalarFieldEnum | TrabalhoScalarFieldEnum[]
  }

  /**
   * Trabalho create
   */
  export type TrabalhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * The data needed to create a Trabalho.
     */
    data: XOR<TrabalhoCreateInput, TrabalhoUncheckedCreateInput>
  }

  /**
   * Trabalho createMany
   */
  export type TrabalhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trabalhos.
     */
    data: TrabalhoCreateManyInput | TrabalhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trabalho update
   */
  export type TrabalhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * The data needed to update a Trabalho.
     */
    data: XOR<TrabalhoUpdateInput, TrabalhoUncheckedUpdateInput>
    /**
     * Choose, which Trabalho to update.
     */
    where: TrabalhoWhereUniqueInput
  }

  /**
   * Trabalho updateMany
   */
  export type TrabalhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trabalhos.
     */
    data: XOR<TrabalhoUpdateManyMutationInput, TrabalhoUncheckedUpdateManyInput>
    /**
     * Filter which Trabalhos to update
     */
    where?: TrabalhoWhereInput
    /**
     * Limit how many Trabalhos to update.
     */
    limit?: number
  }

  /**
   * Trabalho upsert
   */
  export type TrabalhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * The filter to search for the Trabalho to update in case it exists.
     */
    where: TrabalhoWhereUniqueInput
    /**
     * In case the Trabalho found by the `where` argument doesn't exist, create a new Trabalho with this data.
     */
    create: XOR<TrabalhoCreateInput, TrabalhoUncheckedCreateInput>
    /**
     * In case the Trabalho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrabalhoUpdateInput, TrabalhoUncheckedUpdateInput>
  }

  /**
   * Trabalho delete
   */
  export type TrabalhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
    /**
     * Filter which Trabalho to delete.
     */
    where: TrabalhoWhereUniqueInput
  }

  /**
   * Trabalho deleteMany
   */
  export type TrabalhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trabalhos to delete
     */
    where?: TrabalhoWhereInput
    /**
     * Limit how many Trabalhos to delete.
     */
    limit?: number
  }

  /**
   * Trabalho without action
   */
  export type TrabalhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabalho
     */
    select?: TrabalhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trabalho
     */
    omit?: TrabalhoOmit<ExtArgs> | null
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


  export const EmpresaScalarFieldEnum: {
    ownerId: 'ownerId',
    id: 'id',
    razaoSocial: 'razaoSocial',
    nomeFantasia: 'nomeFantasia',
    cnpj: 'cnpj',
    cidadeUF: 'cidadeUF',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const SetorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    empresaId: 'empresaId'
  };

  export type SetorScalarFieldEnum = (typeof SetorScalarFieldEnum)[keyof typeof SetorScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    ownerId: 'ownerId',
    id: 'id',
    codigo: 'codigo',
    titulo: 'titulo',
    salarioBase: 'salarioBase',
    jornadaMensal: 'jornadaMensal',
    adicionalInsalubridade: 'adicionalInsalubridade',
    adicionalPericulosidade: 'adicionalPericulosidade'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    ownerId: 'ownerId',
    id: 'id',
    codigo: 'codigo',
    empresaId: 'empresaId',
    nome: 'nome',
    cpf: 'cpf',
    cargoId: 'cargoId',
    salarioBase: 'salarioBase',
    dependentes: 'dependentes',
    dataAdmissao: 'dataAdmissao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const RegistroPontoScalarFieldEnum: {
    id: 'id',
    funcionarioId: 'funcionarioId',
    data: 'data',
    entrada: 'entrada',
    saidaAlmoco: 'saidaAlmoco',
    retornoAlmoco: 'retornoAlmoco',
    saida: 'saida',
    horasExtras: 'horasExtras',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RegistroPontoScalarFieldEnum = (typeof RegistroPontoScalarFieldEnum)[keyof typeof RegistroPontoScalarFieldEnum]


  export const RegistroASOScalarFieldEnum: {
    id: 'id',
    funcionarioId: 'funcionarioId',
    tipo: 'tipo',
    medico: 'medico',
    data: 'data',
    resultado: 'resultado',
    createdAt: 'createdAt'
  };

  export type RegistroASOScalarFieldEnum = (typeof RegistroASOScalarFieldEnum)[keyof typeof RegistroASOScalarFieldEnum]


  export const EventoFolhaScalarFieldEnum: {
    codigo: 'codigo',
    nome: 'nome',
    tipo: 'tipo',
    percentualFixa: 'percentualFixa',
    incideINSS: 'incideINSS',
    incideIRRF: 'incideIRRF',
    incideFGTS: 'incideFGTS',
    descricaoDidatica: 'descricaoDidatica'
  };

  export type EventoFolhaScalarFieldEnum = (typeof EventoFolhaScalarFieldEnum)[keyof typeof EventoFolhaScalarFieldEnum]


  export const FolhaPagamentoScalarFieldEnum: {
    id: 'id',
    funcionarioId: 'funcionarioId',
    mesReferencia: 'mesReferencia',
    totalProventos: 'totalProventos',
    totalDescontos: 'totalDescontos',
    salarioLiquido: 'salarioLiquido',
    fgtsDoMes: 'fgtsDoMes',
    createdAt: 'createdAt'
  };

  export type FolhaPagamentoScalarFieldEnum = (typeof FolhaPagamentoScalarFieldEnum)[keyof typeof FolhaPagamentoScalarFieldEnum]


  export const ItemFolhaScalarFieldEnum: {
    id: 'id',
    folhaId: 'folhaId',
    codigoEvento: 'codigoEvento',
    tipo: 'tipo',
    referencia: 'referencia',
    valorCalculado: 'valorCalculado',
    memoriaCalculo: 'memoriaCalculo'
  };

  export type ItemFolhaScalarFieldEnum = (typeof ItemFolhaScalarFieldEnum)[keyof typeof ItemFolhaScalarFieldEnum]


  export const TurmaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt'
  };

  export type TurmaScalarFieldEnum = (typeof TurmaScalarFieldEnum)[keyof typeof TurmaScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    matricula: 'matricula',
    senhaHash: 'senhaHash',
    turmaId: 'turmaId',
    createdAt: 'createdAt'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const AtividadeConclusaoScalarFieldEnum: {
    id: 'id',
    activityId: 'activityId',
    alunoId: 'alunoId',
    concluidaEm: 'concluidaEm'
  };

  export type AtividadeConclusaoScalarFieldEnum = (typeof AtividadeConclusaoScalarFieldEnum)[keyof typeof AtividadeConclusaoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    tipo: 'tipo',
    destino: 'destino',
    alunoId: 'alunoId',
    lida: 'lida',
    createdAt: 'createdAt'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    statement: 'statement',
    instructions: 'instructions',
    mechanism: 'mechanism',
    className: 'className',
    createdBy: 'createdBy',
    turmaId: 'turmaId',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const SessaoScalarFieldEnum: {
    tokenHash: 'tokenHash',
    userId: 'userId',
    role: 'role',
    expiresAt: 'expiresAt'
  };

  export type SessaoScalarFieldEnum = (typeof SessaoScalarFieldEnum)[keyof typeof SessaoScalarFieldEnum]


  export const TrabalhoScalarFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    tipo: 'tipo',
    dados: 'dados',
    createdAt: 'createdAt'
  };

  export type TrabalhoScalarFieldEnum = (typeof TrabalhoScalarFieldEnum)[keyof typeof TrabalhoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmpresaOrderByRelevanceFieldEnum: {
    ownerId: 'ownerId',
    id: 'id',
    razaoSocial: 'razaoSocial',
    nomeFantasia: 'nomeFantasia',
    cnpj: 'cnpj',
    cidadeUF: 'cidadeUF'
  };

  export type EmpresaOrderByRelevanceFieldEnum = (typeof EmpresaOrderByRelevanceFieldEnum)[keyof typeof EmpresaOrderByRelevanceFieldEnum]


  export const SetorOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    empresaId: 'empresaId'
  };

  export type SetorOrderByRelevanceFieldEnum = (typeof SetorOrderByRelevanceFieldEnum)[keyof typeof SetorOrderByRelevanceFieldEnum]


  export const CargoOrderByRelevanceFieldEnum: {
    ownerId: 'ownerId',
    id: 'id',
    codigo: 'codigo',
    titulo: 'titulo'
  };

  export type CargoOrderByRelevanceFieldEnum = (typeof CargoOrderByRelevanceFieldEnum)[keyof typeof CargoOrderByRelevanceFieldEnum]


  export const FuncionarioOrderByRelevanceFieldEnum: {
    ownerId: 'ownerId',
    id: 'id',
    codigo: 'codigo',
    empresaId: 'empresaId',
    nome: 'nome',
    cpf: 'cpf',
    cargoId: 'cargoId'
  };

  export type FuncionarioOrderByRelevanceFieldEnum = (typeof FuncionarioOrderByRelevanceFieldEnum)[keyof typeof FuncionarioOrderByRelevanceFieldEnum]


  export const RegistroPontoOrderByRelevanceFieldEnum: {
    id: 'id',
    funcionarioId: 'funcionarioId',
    entrada: 'entrada',
    saidaAlmoco: 'saidaAlmoco',
    retornoAlmoco: 'retornoAlmoco',
    saida: 'saida',
    horasExtras: 'horasExtras'
  };

  export type RegistroPontoOrderByRelevanceFieldEnum = (typeof RegistroPontoOrderByRelevanceFieldEnum)[keyof typeof RegistroPontoOrderByRelevanceFieldEnum]


  export const RegistroASOOrderByRelevanceFieldEnum: {
    id: 'id',
    funcionarioId: 'funcionarioId',
    tipo: 'tipo',
    medico: 'medico'
  };

  export type RegistroASOOrderByRelevanceFieldEnum = (typeof RegistroASOOrderByRelevanceFieldEnum)[keyof typeof RegistroASOOrderByRelevanceFieldEnum]


  export const EventoFolhaOrderByRelevanceFieldEnum: {
    codigo: 'codigo',
    nome: 'nome',
    descricaoDidatica: 'descricaoDidatica'
  };

  export type EventoFolhaOrderByRelevanceFieldEnum = (typeof EventoFolhaOrderByRelevanceFieldEnum)[keyof typeof EventoFolhaOrderByRelevanceFieldEnum]


  export const FolhaPagamentoOrderByRelevanceFieldEnum: {
    id: 'id',
    funcionarioId: 'funcionarioId',
    mesReferencia: 'mesReferencia'
  };

  export type FolhaPagamentoOrderByRelevanceFieldEnum = (typeof FolhaPagamentoOrderByRelevanceFieldEnum)[keyof typeof FolhaPagamentoOrderByRelevanceFieldEnum]


  export const ItemFolhaOrderByRelevanceFieldEnum: {
    id: 'id',
    folhaId: 'folhaId',
    codigoEvento: 'codigoEvento',
    referencia: 'referencia',
    memoriaCalculo: 'memoriaCalculo'
  };

  export type ItemFolhaOrderByRelevanceFieldEnum = (typeof ItemFolhaOrderByRelevanceFieldEnum)[keyof typeof ItemFolhaOrderByRelevanceFieldEnum]


  export const TurmaOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type TurmaOrderByRelevanceFieldEnum = (typeof TurmaOrderByRelevanceFieldEnum)[keyof typeof TurmaOrderByRelevanceFieldEnum]


  export const AlunoOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    matricula: 'matricula',
    senhaHash: 'senhaHash',
    turmaId: 'turmaId'
  };

  export type AlunoOrderByRelevanceFieldEnum = (typeof AlunoOrderByRelevanceFieldEnum)[keyof typeof AlunoOrderByRelevanceFieldEnum]


  export const AtividadeConclusaoOrderByRelevanceFieldEnum: {
    id: 'id',
    activityId: 'activityId',
    alunoId: 'alunoId'
  };

  export type AtividadeConclusaoOrderByRelevanceFieldEnum = (typeof AtividadeConclusaoOrderByRelevanceFieldEnum)[keyof typeof AtividadeConclusaoOrderByRelevanceFieldEnum]


  export const NotificacaoOrderByRelevanceFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    alunoId: 'alunoId'
  };

  export type NotificacaoOrderByRelevanceFieldEnum = (typeof NotificacaoOrderByRelevanceFieldEnum)[keyof typeof NotificacaoOrderByRelevanceFieldEnum]


  export const ActivityOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    statement: 'statement',
    instructions: 'instructions',
    className: 'className',
    createdBy: 'createdBy',
    turmaId: 'turmaId'
  };

  export type ActivityOrderByRelevanceFieldEnum = (typeof ActivityOrderByRelevanceFieldEnum)[keyof typeof ActivityOrderByRelevanceFieldEnum]


  export const ProfessorOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash'
  };

  export type ProfessorOrderByRelevanceFieldEnum = (typeof ProfessorOrderByRelevanceFieldEnum)[keyof typeof ProfessorOrderByRelevanceFieldEnum]


  export const SessaoOrderByRelevanceFieldEnum: {
    tokenHash: 'tokenHash',
    userId: 'userId',
    role: 'role'
  };

  export type SessaoOrderByRelevanceFieldEnum = (typeof SessaoOrderByRelevanceFieldEnum)[keyof typeof SessaoOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const TrabalhoOrderByRelevanceFieldEnum: {
    id: 'id',
    alunoId: 'alunoId',
    tipo: 'tipo'
  };

  export type TrabalhoOrderByRelevanceFieldEnum = (typeof TrabalhoOrderByRelevanceFieldEnum)[keyof typeof TrabalhoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusPonto'
   */
  export type EnumStatusPontoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPonto'>
    


  /**
   * Reference to a field of type 'ResultadoASO'
   */
  export type EnumResultadoASOFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResultadoASO'>
    


  /**
   * Reference to a field of type 'TipoEvento'
   */
  export type EnumTipoEventoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEvento'>
    


  /**
   * Reference to a field of type 'TipoNotificacao'
   */
  export type EnumTipoNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoNotificacao'>
    


  /**
   * Reference to a field of type 'DestinoNotificacao'
   */
  export type EnumDestinoNotificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DestinoNotificacao'>
    


  /**
   * Reference to a field of type 'TipoAtividade'
   */
  export type EnumTipoAtividadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAtividade'>
    


  /**
   * Reference to a field of type 'MecanismoAtividade'
   */
  export type EnumMecanismoAtividadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MecanismoAtividade'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    ownerId?: StringFilter<"Empresa"> | string
    id?: StringFilter<"Empresa"> | string
    razaoSocial?: StringFilter<"Empresa"> | string
    nomeFantasia?: StringNullableFilter<"Empresa"> | string | null
    cnpj?: StringFilter<"Empresa"> | string
    cidadeUF?: StringNullableFilter<"Empresa"> | string | null
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
    setores?: SetorListRelationFilter
    funcionarios?: FuncionarioListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    ownerId?: SortOrder
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    cidadeUF?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    setores?: SetorOrderByRelationAggregateInput
    funcionarios?: FuncionarioOrderByRelationAggregateInput
    _relevance?: EmpresaOrderByRelevanceInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId_cnpj?: EmpresaOwnerIdCnpjCompoundUniqueInput
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    ownerId?: StringFilter<"Empresa"> | string
    razaoSocial?: StringFilter<"Empresa"> | string
    nomeFantasia?: StringNullableFilter<"Empresa"> | string | null
    cnpj?: StringFilter<"Empresa"> | string
    cidadeUF?: StringNullableFilter<"Empresa"> | string | null
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
    setores?: SetorListRelationFilter
    funcionarios?: FuncionarioListRelationFilter
  }, "id" | "ownerId_cnpj">

  export type EmpresaOrderByWithAggregationInput = {
    ownerId?: SortOrder
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    cidadeUF?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    ownerId?: StringWithAggregatesFilter<"Empresa"> | string
    id?: StringWithAggregatesFilter<"Empresa"> | string
    razaoSocial?: StringWithAggregatesFilter<"Empresa"> | string
    nomeFantasia?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    cnpj?: StringWithAggregatesFilter<"Empresa"> | string
    cidadeUF?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type SetorWhereInput = {
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    id?: StringFilter<"Setor"> | string
    nome?: StringFilter<"Setor"> | string
    empresaId?: StringFilter<"Setor"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type SetorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    _relevance?: SetorOrderByRelevanceInput
  }

  export type SetorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    nome?: StringFilter<"Setor"> | string
    empresaId?: StringFilter<"Setor"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id">

  export type SetorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    _count?: SetorCountOrderByAggregateInput
    _max?: SetorMaxOrderByAggregateInput
    _min?: SetorMinOrderByAggregateInput
  }

  export type SetorScalarWhereWithAggregatesInput = {
    AND?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    OR?: SetorScalarWhereWithAggregatesInput[]
    NOT?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setor"> | string
    nome?: StringWithAggregatesFilter<"Setor"> | string
    empresaId?: StringWithAggregatesFilter<"Setor"> | string
  }

  export type CargoWhereInput = {
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    ownerId?: StringFilter<"Cargo"> | string
    id?: StringFilter<"Cargo"> | string
    codigo?: StringFilter<"Cargo"> | string
    titulo?: StringFilter<"Cargo"> | string
    salarioBase?: FloatFilter<"Cargo"> | number
    jornadaMensal?: IntFilter<"Cargo"> | number
    adicionalInsalubridade?: BoolFilter<"Cargo"> | boolean
    adicionalPericulosidade?: BoolFilter<"Cargo"> | boolean
    funcionarios?: FuncionarioListRelationFilter
  }

  export type CargoOrderByWithRelationInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    salarioBase?: SortOrder
    jornadaMensal?: SortOrder
    adicionalInsalubridade?: SortOrder
    adicionalPericulosidade?: SortOrder
    funcionarios?: FuncionarioOrderByRelationAggregateInput
    _relevance?: CargoOrderByRelevanceInput
  }

  export type CargoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId_codigo?: CargoOwnerIdCodigoCompoundUniqueInput
    AND?: CargoWhereInput | CargoWhereInput[]
    OR?: CargoWhereInput[]
    NOT?: CargoWhereInput | CargoWhereInput[]
    ownerId?: StringFilter<"Cargo"> | string
    codigo?: StringFilter<"Cargo"> | string
    titulo?: StringFilter<"Cargo"> | string
    salarioBase?: FloatFilter<"Cargo"> | number
    jornadaMensal?: IntFilter<"Cargo"> | number
    adicionalInsalubridade?: BoolFilter<"Cargo"> | boolean
    adicionalPericulosidade?: BoolFilter<"Cargo"> | boolean
    funcionarios?: FuncionarioListRelationFilter
  }, "id" | "ownerId_codigo">

  export type CargoOrderByWithAggregationInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    salarioBase?: SortOrder
    jornadaMensal?: SortOrder
    adicionalInsalubridade?: SortOrder
    adicionalPericulosidade?: SortOrder
    _count?: CargoCountOrderByAggregateInput
    _avg?: CargoAvgOrderByAggregateInput
    _max?: CargoMaxOrderByAggregateInput
    _min?: CargoMinOrderByAggregateInput
    _sum?: CargoSumOrderByAggregateInput
  }

  export type CargoScalarWhereWithAggregatesInput = {
    AND?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    OR?: CargoScalarWhereWithAggregatesInput[]
    NOT?: CargoScalarWhereWithAggregatesInput | CargoScalarWhereWithAggregatesInput[]
    ownerId?: StringWithAggregatesFilter<"Cargo"> | string
    id?: StringWithAggregatesFilter<"Cargo"> | string
    codigo?: StringWithAggregatesFilter<"Cargo"> | string
    titulo?: StringWithAggregatesFilter<"Cargo"> | string
    salarioBase?: FloatWithAggregatesFilter<"Cargo"> | number
    jornadaMensal?: IntWithAggregatesFilter<"Cargo"> | number
    adicionalInsalubridade?: BoolWithAggregatesFilter<"Cargo"> | boolean
    adicionalPericulosidade?: BoolWithAggregatesFilter<"Cargo"> | boolean
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    ownerId?: StringFilter<"Funcionario"> | string
    id?: StringFilter<"Funcionario"> | string
    codigo?: StringFilter<"Funcionario"> | string
    empresaId?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    cpf?: StringFilter<"Funcionario"> | string
    cargoId?: StringFilter<"Funcionario"> | string
    salarioBase?: FloatFilter<"Funcionario"> | number
    dependentes?: IntFilter<"Funcionario"> | number
    dataAdmissao?: DateTimeFilter<"Funcionario"> | Date | string
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    cargo?: XOR<CargoScalarRelationFilter, CargoWhereInput>
    folhas?: FolhaPagamentoListRelationFilter
    pontos?: RegistroPontoListRelationFilter
    asos?: RegistroASOListRelationFilter
  }

  export type FuncionarioOrderByWithRelationInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargoId?: SortOrder
    salarioBase?: SortOrder
    dependentes?: SortOrder
    dataAdmissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    cargo?: CargoOrderByWithRelationInput
    folhas?: FolhaPagamentoOrderByRelationAggregateInput
    pontos?: RegistroPontoOrderByRelationAggregateInput
    asos?: RegistroASOOrderByRelationAggregateInput
    _relevance?: FuncionarioOrderByRelevanceInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId_codigo?: FuncionarioOwnerIdCodigoCompoundUniqueInput
    ownerId_cpf?: FuncionarioOwnerIdCpfCompoundUniqueInput
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    ownerId?: StringFilter<"Funcionario"> | string
    codigo?: StringFilter<"Funcionario"> | string
    empresaId?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    cpf?: StringFilter<"Funcionario"> | string
    cargoId?: StringFilter<"Funcionario"> | string
    salarioBase?: FloatFilter<"Funcionario"> | number
    dependentes?: IntFilter<"Funcionario"> | number
    dataAdmissao?: DateTimeFilter<"Funcionario"> | Date | string
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    cargo?: XOR<CargoScalarRelationFilter, CargoWhereInput>
    folhas?: FolhaPagamentoListRelationFilter
    pontos?: RegistroPontoListRelationFilter
    asos?: RegistroASOListRelationFilter
  }, "id" | "ownerId_codigo" | "ownerId_cpf">

  export type FuncionarioOrderByWithAggregationInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargoId?: SortOrder
    salarioBase?: SortOrder
    dependentes?: SortOrder
    dataAdmissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    ownerId?: StringWithAggregatesFilter<"Funcionario"> | string
    id?: StringWithAggregatesFilter<"Funcionario"> | string
    codigo?: StringWithAggregatesFilter<"Funcionario"> | string
    empresaId?: StringWithAggregatesFilter<"Funcionario"> | string
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    cpf?: StringWithAggregatesFilter<"Funcionario"> | string
    cargoId?: StringWithAggregatesFilter<"Funcionario"> | string
    salarioBase?: FloatWithAggregatesFilter<"Funcionario"> | number
    dependentes?: IntWithAggregatesFilter<"Funcionario"> | number
    dataAdmissao?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
  }

  export type RegistroPontoWhereInput = {
    AND?: RegistroPontoWhereInput | RegistroPontoWhereInput[]
    OR?: RegistroPontoWhereInput[]
    NOT?: RegistroPontoWhereInput | RegistroPontoWhereInput[]
    id?: StringFilter<"RegistroPonto"> | string
    funcionarioId?: StringFilter<"RegistroPonto"> | string
    data?: DateTimeFilter<"RegistroPonto"> | Date | string
    entrada?: StringFilter<"RegistroPonto"> | string
    saidaAlmoco?: StringFilter<"RegistroPonto"> | string
    retornoAlmoco?: StringFilter<"RegistroPonto"> | string
    saida?: StringFilter<"RegistroPonto"> | string
    horasExtras?: StringFilter<"RegistroPonto"> | string
    status?: EnumStatusPontoFilter<"RegistroPonto"> | $Enums.StatusPonto
    createdAt?: DateTimeFilter<"RegistroPonto"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
  }

  export type RegistroPontoOrderByWithRelationInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    data?: SortOrder
    entrada?: SortOrder
    saidaAlmoco?: SortOrder
    retornoAlmoco?: SortOrder
    saida?: SortOrder
    horasExtras?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    funcionario?: FuncionarioOrderByWithRelationInput
    _relevance?: RegistroPontoOrderByRelevanceInput
  }

  export type RegistroPontoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroPontoWhereInput | RegistroPontoWhereInput[]
    OR?: RegistroPontoWhereInput[]
    NOT?: RegistroPontoWhereInput | RegistroPontoWhereInput[]
    funcionarioId?: StringFilter<"RegistroPonto"> | string
    data?: DateTimeFilter<"RegistroPonto"> | Date | string
    entrada?: StringFilter<"RegistroPonto"> | string
    saidaAlmoco?: StringFilter<"RegistroPonto"> | string
    retornoAlmoco?: StringFilter<"RegistroPonto"> | string
    saida?: StringFilter<"RegistroPonto"> | string
    horasExtras?: StringFilter<"RegistroPonto"> | string
    status?: EnumStatusPontoFilter<"RegistroPonto"> | $Enums.StatusPonto
    createdAt?: DateTimeFilter<"RegistroPonto"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
  }, "id">

  export type RegistroPontoOrderByWithAggregationInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    data?: SortOrder
    entrada?: SortOrder
    saidaAlmoco?: SortOrder
    retornoAlmoco?: SortOrder
    saida?: SortOrder
    horasExtras?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RegistroPontoCountOrderByAggregateInput
    _max?: RegistroPontoMaxOrderByAggregateInput
    _min?: RegistroPontoMinOrderByAggregateInput
  }

  export type RegistroPontoScalarWhereWithAggregatesInput = {
    AND?: RegistroPontoScalarWhereWithAggregatesInput | RegistroPontoScalarWhereWithAggregatesInput[]
    OR?: RegistroPontoScalarWhereWithAggregatesInput[]
    NOT?: RegistroPontoScalarWhereWithAggregatesInput | RegistroPontoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroPonto"> | string
    funcionarioId?: StringWithAggregatesFilter<"RegistroPonto"> | string
    data?: DateTimeWithAggregatesFilter<"RegistroPonto"> | Date | string
    entrada?: StringWithAggregatesFilter<"RegistroPonto"> | string
    saidaAlmoco?: StringWithAggregatesFilter<"RegistroPonto"> | string
    retornoAlmoco?: StringWithAggregatesFilter<"RegistroPonto"> | string
    saida?: StringWithAggregatesFilter<"RegistroPonto"> | string
    horasExtras?: StringWithAggregatesFilter<"RegistroPonto"> | string
    status?: EnumStatusPontoWithAggregatesFilter<"RegistroPonto"> | $Enums.StatusPonto
    createdAt?: DateTimeWithAggregatesFilter<"RegistroPonto"> | Date | string
  }

  export type RegistroASOWhereInput = {
    AND?: RegistroASOWhereInput | RegistroASOWhereInput[]
    OR?: RegistroASOWhereInput[]
    NOT?: RegistroASOWhereInput | RegistroASOWhereInput[]
    id?: StringFilter<"RegistroASO"> | string
    funcionarioId?: StringFilter<"RegistroASO"> | string
    tipo?: StringFilter<"RegistroASO"> | string
    medico?: StringFilter<"RegistroASO"> | string
    data?: DateTimeFilter<"RegistroASO"> | Date | string
    resultado?: EnumResultadoASOFilter<"RegistroASO"> | $Enums.ResultadoASO
    createdAt?: DateTimeFilter<"RegistroASO"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
  }

  export type RegistroASOOrderByWithRelationInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    tipo?: SortOrder
    medico?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
    funcionario?: FuncionarioOrderByWithRelationInput
    _relevance?: RegistroASOOrderByRelevanceInput
  }

  export type RegistroASOWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroASOWhereInput | RegistroASOWhereInput[]
    OR?: RegistroASOWhereInput[]
    NOT?: RegistroASOWhereInput | RegistroASOWhereInput[]
    funcionarioId?: StringFilter<"RegistroASO"> | string
    tipo?: StringFilter<"RegistroASO"> | string
    medico?: StringFilter<"RegistroASO"> | string
    data?: DateTimeFilter<"RegistroASO"> | Date | string
    resultado?: EnumResultadoASOFilter<"RegistroASO"> | $Enums.ResultadoASO
    createdAt?: DateTimeFilter<"RegistroASO"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
  }, "id">

  export type RegistroASOOrderByWithAggregationInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    tipo?: SortOrder
    medico?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
    _count?: RegistroASOCountOrderByAggregateInput
    _max?: RegistroASOMaxOrderByAggregateInput
    _min?: RegistroASOMinOrderByAggregateInput
  }

  export type RegistroASOScalarWhereWithAggregatesInput = {
    AND?: RegistroASOScalarWhereWithAggregatesInput | RegistroASOScalarWhereWithAggregatesInput[]
    OR?: RegistroASOScalarWhereWithAggregatesInput[]
    NOT?: RegistroASOScalarWhereWithAggregatesInput | RegistroASOScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroASO"> | string
    funcionarioId?: StringWithAggregatesFilter<"RegistroASO"> | string
    tipo?: StringWithAggregatesFilter<"RegistroASO"> | string
    medico?: StringWithAggregatesFilter<"RegistroASO"> | string
    data?: DateTimeWithAggregatesFilter<"RegistroASO"> | Date | string
    resultado?: EnumResultadoASOWithAggregatesFilter<"RegistroASO"> | $Enums.ResultadoASO
    createdAt?: DateTimeWithAggregatesFilter<"RegistroASO"> | Date | string
  }

  export type EventoFolhaWhereInput = {
    AND?: EventoFolhaWhereInput | EventoFolhaWhereInput[]
    OR?: EventoFolhaWhereInput[]
    NOT?: EventoFolhaWhereInput | EventoFolhaWhereInput[]
    codigo?: StringFilter<"EventoFolha"> | string
    nome?: StringFilter<"EventoFolha"> | string
    tipo?: EnumTipoEventoFilter<"EventoFolha"> | $Enums.TipoEvento
    percentualFixa?: FloatNullableFilter<"EventoFolha"> | number | null
    incideINSS?: BoolFilter<"EventoFolha"> | boolean
    incideIRRF?: BoolFilter<"EventoFolha"> | boolean
    incideFGTS?: BoolFilter<"EventoFolha"> | boolean
    descricaoDidatica?: StringFilter<"EventoFolha"> | string
    itens?: ItemFolhaListRelationFilter
  }

  export type EventoFolhaOrderByWithRelationInput = {
    codigo?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    percentualFixa?: SortOrderInput | SortOrder
    incideINSS?: SortOrder
    incideIRRF?: SortOrder
    incideFGTS?: SortOrder
    descricaoDidatica?: SortOrder
    itens?: ItemFolhaOrderByRelationAggregateInput
    _relevance?: EventoFolhaOrderByRelevanceInput
  }

  export type EventoFolhaWhereUniqueInput = Prisma.AtLeast<{
    codigo?: string
    AND?: EventoFolhaWhereInput | EventoFolhaWhereInput[]
    OR?: EventoFolhaWhereInput[]
    NOT?: EventoFolhaWhereInput | EventoFolhaWhereInput[]
    nome?: StringFilter<"EventoFolha"> | string
    tipo?: EnumTipoEventoFilter<"EventoFolha"> | $Enums.TipoEvento
    percentualFixa?: FloatNullableFilter<"EventoFolha"> | number | null
    incideINSS?: BoolFilter<"EventoFolha"> | boolean
    incideIRRF?: BoolFilter<"EventoFolha"> | boolean
    incideFGTS?: BoolFilter<"EventoFolha"> | boolean
    descricaoDidatica?: StringFilter<"EventoFolha"> | string
    itens?: ItemFolhaListRelationFilter
  }, "codigo">

  export type EventoFolhaOrderByWithAggregationInput = {
    codigo?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    percentualFixa?: SortOrderInput | SortOrder
    incideINSS?: SortOrder
    incideIRRF?: SortOrder
    incideFGTS?: SortOrder
    descricaoDidatica?: SortOrder
    _count?: EventoFolhaCountOrderByAggregateInput
    _avg?: EventoFolhaAvgOrderByAggregateInput
    _max?: EventoFolhaMaxOrderByAggregateInput
    _min?: EventoFolhaMinOrderByAggregateInput
    _sum?: EventoFolhaSumOrderByAggregateInput
  }

  export type EventoFolhaScalarWhereWithAggregatesInput = {
    AND?: EventoFolhaScalarWhereWithAggregatesInput | EventoFolhaScalarWhereWithAggregatesInput[]
    OR?: EventoFolhaScalarWhereWithAggregatesInput[]
    NOT?: EventoFolhaScalarWhereWithAggregatesInput | EventoFolhaScalarWhereWithAggregatesInput[]
    codigo?: StringWithAggregatesFilter<"EventoFolha"> | string
    nome?: StringWithAggregatesFilter<"EventoFolha"> | string
    tipo?: EnumTipoEventoWithAggregatesFilter<"EventoFolha"> | $Enums.TipoEvento
    percentualFixa?: FloatNullableWithAggregatesFilter<"EventoFolha"> | number | null
    incideINSS?: BoolWithAggregatesFilter<"EventoFolha"> | boolean
    incideIRRF?: BoolWithAggregatesFilter<"EventoFolha"> | boolean
    incideFGTS?: BoolWithAggregatesFilter<"EventoFolha"> | boolean
    descricaoDidatica?: StringWithAggregatesFilter<"EventoFolha"> | string
  }

  export type FolhaPagamentoWhereInput = {
    AND?: FolhaPagamentoWhereInput | FolhaPagamentoWhereInput[]
    OR?: FolhaPagamentoWhereInput[]
    NOT?: FolhaPagamentoWhereInput | FolhaPagamentoWhereInput[]
    id?: StringFilter<"FolhaPagamento"> | string
    funcionarioId?: StringFilter<"FolhaPagamento"> | string
    mesReferencia?: StringFilter<"FolhaPagamento"> | string
    totalProventos?: FloatFilter<"FolhaPagamento"> | number
    totalDescontos?: FloatFilter<"FolhaPagamento"> | number
    salarioLiquido?: FloatFilter<"FolhaPagamento"> | number
    fgtsDoMes?: FloatFilter<"FolhaPagamento"> | number
    createdAt?: DateTimeFilter<"FolhaPagamento"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
    itens?: ItemFolhaListRelationFilter
  }

  export type FolhaPagamentoOrderByWithRelationInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    mesReferencia?: SortOrder
    totalProventos?: SortOrder
    totalDescontos?: SortOrder
    salarioLiquido?: SortOrder
    fgtsDoMes?: SortOrder
    createdAt?: SortOrder
    funcionario?: FuncionarioOrderByWithRelationInput
    itens?: ItemFolhaOrderByRelationAggregateInput
    _relevance?: FolhaPagamentoOrderByRelevanceInput
  }

  export type FolhaPagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    funcionarioId_mesReferencia?: FolhaPagamentoFuncionarioIdMesReferenciaCompoundUniqueInput
    AND?: FolhaPagamentoWhereInput | FolhaPagamentoWhereInput[]
    OR?: FolhaPagamentoWhereInput[]
    NOT?: FolhaPagamentoWhereInput | FolhaPagamentoWhereInput[]
    funcionarioId?: StringFilter<"FolhaPagamento"> | string
    mesReferencia?: StringFilter<"FolhaPagamento"> | string
    totalProventos?: FloatFilter<"FolhaPagamento"> | number
    totalDescontos?: FloatFilter<"FolhaPagamento"> | number
    salarioLiquido?: FloatFilter<"FolhaPagamento"> | number
    fgtsDoMes?: FloatFilter<"FolhaPagamento"> | number
    createdAt?: DateTimeFilter<"FolhaPagamento"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
    itens?: ItemFolhaListRelationFilter
  }, "id" | "funcionarioId_mesReferencia">

  export type FolhaPagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    mesReferencia?: SortOrder
    totalProventos?: SortOrder
    totalDescontos?: SortOrder
    salarioLiquido?: SortOrder
    fgtsDoMes?: SortOrder
    createdAt?: SortOrder
    _count?: FolhaPagamentoCountOrderByAggregateInput
    _avg?: FolhaPagamentoAvgOrderByAggregateInput
    _max?: FolhaPagamentoMaxOrderByAggregateInput
    _min?: FolhaPagamentoMinOrderByAggregateInput
    _sum?: FolhaPagamentoSumOrderByAggregateInput
  }

  export type FolhaPagamentoScalarWhereWithAggregatesInput = {
    AND?: FolhaPagamentoScalarWhereWithAggregatesInput | FolhaPagamentoScalarWhereWithAggregatesInput[]
    OR?: FolhaPagamentoScalarWhereWithAggregatesInput[]
    NOT?: FolhaPagamentoScalarWhereWithAggregatesInput | FolhaPagamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FolhaPagamento"> | string
    funcionarioId?: StringWithAggregatesFilter<"FolhaPagamento"> | string
    mesReferencia?: StringWithAggregatesFilter<"FolhaPagamento"> | string
    totalProventos?: FloatWithAggregatesFilter<"FolhaPagamento"> | number
    totalDescontos?: FloatWithAggregatesFilter<"FolhaPagamento"> | number
    salarioLiquido?: FloatWithAggregatesFilter<"FolhaPagamento"> | number
    fgtsDoMes?: FloatWithAggregatesFilter<"FolhaPagamento"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FolhaPagamento"> | Date | string
  }

  export type ItemFolhaWhereInput = {
    AND?: ItemFolhaWhereInput | ItemFolhaWhereInput[]
    OR?: ItemFolhaWhereInput[]
    NOT?: ItemFolhaWhereInput | ItemFolhaWhereInput[]
    id?: StringFilter<"ItemFolha"> | string
    folhaId?: StringFilter<"ItemFolha"> | string
    codigoEvento?: StringFilter<"ItemFolha"> | string
    tipo?: EnumTipoEventoFilter<"ItemFolha"> | $Enums.TipoEvento
    referencia?: StringFilter<"ItemFolha"> | string
    valorCalculado?: FloatFilter<"ItemFolha"> | number
    memoriaCalculo?: StringFilter<"ItemFolha"> | string
    folha?: XOR<FolhaPagamentoScalarRelationFilter, FolhaPagamentoWhereInput>
    evento?: XOR<EventoFolhaScalarRelationFilter, EventoFolhaWhereInput>
  }

  export type ItemFolhaOrderByWithRelationInput = {
    id?: SortOrder
    folhaId?: SortOrder
    codigoEvento?: SortOrder
    tipo?: SortOrder
    referencia?: SortOrder
    valorCalculado?: SortOrder
    memoriaCalculo?: SortOrder
    folha?: FolhaPagamentoOrderByWithRelationInput
    evento?: EventoFolhaOrderByWithRelationInput
    _relevance?: ItemFolhaOrderByRelevanceInput
  }

  export type ItemFolhaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemFolhaWhereInput | ItemFolhaWhereInput[]
    OR?: ItemFolhaWhereInput[]
    NOT?: ItemFolhaWhereInput | ItemFolhaWhereInput[]
    folhaId?: StringFilter<"ItemFolha"> | string
    codigoEvento?: StringFilter<"ItemFolha"> | string
    tipo?: EnumTipoEventoFilter<"ItemFolha"> | $Enums.TipoEvento
    referencia?: StringFilter<"ItemFolha"> | string
    valorCalculado?: FloatFilter<"ItemFolha"> | number
    memoriaCalculo?: StringFilter<"ItemFolha"> | string
    folha?: XOR<FolhaPagamentoScalarRelationFilter, FolhaPagamentoWhereInput>
    evento?: XOR<EventoFolhaScalarRelationFilter, EventoFolhaWhereInput>
  }, "id">

  export type ItemFolhaOrderByWithAggregationInput = {
    id?: SortOrder
    folhaId?: SortOrder
    codigoEvento?: SortOrder
    tipo?: SortOrder
    referencia?: SortOrder
    valorCalculado?: SortOrder
    memoriaCalculo?: SortOrder
    _count?: ItemFolhaCountOrderByAggregateInput
    _avg?: ItemFolhaAvgOrderByAggregateInput
    _max?: ItemFolhaMaxOrderByAggregateInput
    _min?: ItemFolhaMinOrderByAggregateInput
    _sum?: ItemFolhaSumOrderByAggregateInput
  }

  export type ItemFolhaScalarWhereWithAggregatesInput = {
    AND?: ItemFolhaScalarWhereWithAggregatesInput | ItemFolhaScalarWhereWithAggregatesInput[]
    OR?: ItemFolhaScalarWhereWithAggregatesInput[]
    NOT?: ItemFolhaScalarWhereWithAggregatesInput | ItemFolhaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemFolha"> | string
    folhaId?: StringWithAggregatesFilter<"ItemFolha"> | string
    codigoEvento?: StringWithAggregatesFilter<"ItemFolha"> | string
    tipo?: EnumTipoEventoWithAggregatesFilter<"ItemFolha"> | $Enums.TipoEvento
    referencia?: StringWithAggregatesFilter<"ItemFolha"> | string
    valorCalculado?: FloatWithAggregatesFilter<"ItemFolha"> | number
    memoriaCalculo?: StringWithAggregatesFilter<"ItemFolha"> | string
  }

  export type TurmaWhereInput = {
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    id?: StringFilter<"Turma"> | string
    nome?: StringFilter<"Turma"> | string
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    alunos?: AlunoListRelationFilter
    activities?: ActivityListRelationFilter
  }

  export type TurmaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    alunos?: AlunoOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    _relevance?: TurmaOrderByRelevanceInput
  }

  export type TurmaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurmaWhereInput | TurmaWhereInput[]
    OR?: TurmaWhereInput[]
    NOT?: TurmaWhereInput | TurmaWhereInput[]
    nome?: StringFilter<"Turma"> | string
    createdAt?: DateTimeFilter<"Turma"> | Date | string
    alunos?: AlunoListRelationFilter
    activities?: ActivityListRelationFilter
  }, "id">

  export type TurmaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    _count?: TurmaCountOrderByAggregateInput
    _max?: TurmaMaxOrderByAggregateInput
    _min?: TurmaMinOrderByAggregateInput
  }

  export type TurmaScalarWhereWithAggregatesInput = {
    AND?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    OR?: TurmaScalarWhereWithAggregatesInput[]
    NOT?: TurmaScalarWhereWithAggregatesInput | TurmaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turma"> | string
    nome?: StringWithAggregatesFilter<"Turma"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Turma"> | Date | string
  }

  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    matricula?: StringFilter<"Aluno"> | string
    senhaHash?: StringNullableFilter<"Aluno"> | string | null
    turmaId?: StringFilter<"Aluno"> | string
    createdAt?: DateTimeFilter<"Aluno"> | Date | string
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
    conclusoes?: AtividadeConclusaoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    senhaHash?: SortOrderInput | SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
    turma?: TurmaOrderByWithRelationInput
    conclusoes?: AtividadeConclusaoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
    _relevance?: AlunoOrderByRelevanceInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matricula?: string
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    senhaHash?: StringNullableFilter<"Aluno"> | string | null
    turmaId?: StringFilter<"Aluno"> | string
    createdAt?: DateTimeFilter<"Aluno"> | Date | string
    turma?: XOR<TurmaScalarRelationFilter, TurmaWhereInput>
    conclusoes?: AtividadeConclusaoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "matricula">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    senhaHash?: SortOrderInput | SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aluno"> | string
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    matricula?: StringWithAggregatesFilter<"Aluno"> | string
    senhaHash?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    turmaId?: StringWithAggregatesFilter<"Aluno"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
  }

  export type AtividadeConclusaoWhereInput = {
    AND?: AtividadeConclusaoWhereInput | AtividadeConclusaoWhereInput[]
    OR?: AtividadeConclusaoWhereInput[]
    NOT?: AtividadeConclusaoWhereInput | AtividadeConclusaoWhereInput[]
    id?: StringFilter<"AtividadeConclusao"> | string
    activityId?: StringFilter<"AtividadeConclusao"> | string
    alunoId?: StringFilter<"AtividadeConclusao"> | string
    concluidaEm?: DateTimeFilter<"AtividadeConclusao"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type AtividadeConclusaoOrderByWithRelationInput = {
    id?: SortOrder
    activityId?: SortOrder
    alunoId?: SortOrder
    concluidaEm?: SortOrder
    activity?: ActivityOrderByWithRelationInput
    aluno?: AlunoOrderByWithRelationInput
    _relevance?: AtividadeConclusaoOrderByRelevanceInput
  }

  export type AtividadeConclusaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    activityId_alunoId?: AtividadeConclusaoActivityIdAlunoIdCompoundUniqueInput
    AND?: AtividadeConclusaoWhereInput | AtividadeConclusaoWhereInput[]
    OR?: AtividadeConclusaoWhereInput[]
    NOT?: AtividadeConclusaoWhereInput | AtividadeConclusaoWhereInput[]
    activityId?: StringFilter<"AtividadeConclusao"> | string
    alunoId?: StringFilter<"AtividadeConclusao"> | string
    concluidaEm?: DateTimeFilter<"AtividadeConclusao"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id" | "activityId_alunoId">

  export type AtividadeConclusaoOrderByWithAggregationInput = {
    id?: SortOrder
    activityId?: SortOrder
    alunoId?: SortOrder
    concluidaEm?: SortOrder
    _count?: AtividadeConclusaoCountOrderByAggregateInput
    _max?: AtividadeConclusaoMaxOrderByAggregateInput
    _min?: AtividadeConclusaoMinOrderByAggregateInput
  }

  export type AtividadeConclusaoScalarWhereWithAggregatesInput = {
    AND?: AtividadeConclusaoScalarWhereWithAggregatesInput | AtividadeConclusaoScalarWhereWithAggregatesInput[]
    OR?: AtividadeConclusaoScalarWhereWithAggregatesInput[]
    NOT?: AtividadeConclusaoScalarWhereWithAggregatesInput | AtividadeConclusaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AtividadeConclusao"> | string
    activityId?: StringWithAggregatesFilter<"AtividadeConclusao"> | string
    alunoId?: StringWithAggregatesFilter<"AtividadeConclusao"> | string
    concluidaEm?: DateTimeWithAggregatesFilter<"AtividadeConclusao"> | Date | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFilter<"Notificacao"> | $Enums.DestinoNotificacao
    alunoId?: StringNullableFilter<"Notificacao"> | string | null
    lida?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    aluno?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    destino?: SortOrder
    alunoId?: SortOrderInput | SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
    _relevance?: NotificacaoOrderByRelevanceInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFilter<"Notificacao"> | $Enums.DestinoNotificacao
    alunoId?: StringNullableFilter<"Notificacao"> | string | null
    lida?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    aluno?: XOR<AlunoNullableScalarRelationFilter, AlunoWhereInput> | null
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    destino?: SortOrder
    alunoId?: SortOrderInput | SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoWithAggregatesFilter<"Notificacao"> | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoWithAggregatesFilter<"Notificacao"> | $Enums.DestinoNotificacao
    alunoId?: StringNullableWithAggregatesFilter<"Notificacao"> | string | null
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: EnumTipoAtividadeFilter<"Activity"> | $Enums.TipoAtividade
    title?: StringFilter<"Activity"> | string
    statement?: StringFilter<"Activity"> | string
    instructions?: StringFilter<"Activity"> | string
    mechanism?: EnumMecanismoAtividadeFilter<"Activity"> | $Enums.MecanismoAtividade
    className?: StringFilter<"Activity"> | string
    createdBy?: StringFilter<"Activity"> | string
    turmaId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    turma?: XOR<TurmaNullableScalarRelationFilter, TurmaWhereInput> | null
    conclusoes?: AtividadeConclusaoListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    statement?: SortOrder
    instructions?: SortOrder
    mechanism?: SortOrder
    className?: SortOrder
    createdBy?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    turma?: TurmaOrderByWithRelationInput
    conclusoes?: AtividadeConclusaoOrderByRelationAggregateInput
    _relevance?: ActivityOrderByRelevanceInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    type?: EnumTipoAtividadeFilter<"Activity"> | $Enums.TipoAtividade
    title?: StringFilter<"Activity"> | string
    statement?: StringFilter<"Activity"> | string
    instructions?: StringFilter<"Activity"> | string
    mechanism?: EnumMecanismoAtividadeFilter<"Activity"> | $Enums.MecanismoAtividade
    className?: StringFilter<"Activity"> | string
    createdBy?: StringFilter<"Activity"> | string
    turmaId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    turma?: XOR<TurmaNullableScalarRelationFilter, TurmaWhereInput> | null
    conclusoes?: AtividadeConclusaoListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    statement?: SortOrder
    instructions?: SortOrder
    mechanism?: SortOrder
    className?: SortOrder
    createdBy?: SortOrder
    turmaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    type?: EnumTipoAtividadeWithAggregatesFilter<"Activity"> | $Enums.TipoAtividade
    title?: StringWithAggregatesFilter<"Activity"> | string
    statement?: StringWithAggregatesFilter<"Activity"> | string
    instructions?: StringWithAggregatesFilter<"Activity"> | string
    mechanism?: EnumMecanismoAtividadeWithAggregatesFilter<"Activity"> | $Enums.MecanismoAtividade
    className?: StringWithAggregatesFilter<"Activity"> | string
    createdBy?: StringWithAggregatesFilter<"Activity"> | string
    turmaId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: StringFilter<"Professor"> | string
    nome?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    senhaHash?: StringFilter<"Professor"> | string
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    _relevance?: ProfessorOrderByRelevanceInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    senhaHash?: StringFilter<"Professor"> | string
  }, "id" | "email">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Professor"> | string
    nome?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringWithAggregatesFilter<"Professor"> | string
    senhaHash?: StringWithAggregatesFilter<"Professor"> | string
  }

  export type SessaoWhereInput = {
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    tokenHash?: StringFilter<"Sessao"> | string
    userId?: StringFilter<"Sessao"> | string
    role?: StringFilter<"Sessao"> | string
    expiresAt?: DateTimeFilter<"Sessao"> | Date | string
  }

  export type SessaoOrderByWithRelationInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
    _relevance?: SessaoOrderByRelevanceInput
  }

  export type SessaoWhereUniqueInput = Prisma.AtLeast<{
    tokenHash?: string
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    userId?: StringFilter<"Sessao"> | string
    role?: StringFilter<"Sessao"> | string
    expiresAt?: DateTimeFilter<"Sessao"> | Date | string
  }, "tokenHash">

  export type SessaoOrderByWithAggregationInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
    _count?: SessaoCountOrderByAggregateInput
    _max?: SessaoMaxOrderByAggregateInput
    _min?: SessaoMinOrderByAggregateInput
  }

  export type SessaoScalarWhereWithAggregatesInput = {
    AND?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    OR?: SessaoScalarWhereWithAggregatesInput[]
    NOT?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    tokenHash?: StringWithAggregatesFilter<"Sessao"> | string
    userId?: StringWithAggregatesFilter<"Sessao"> | string
    role?: StringWithAggregatesFilter<"Sessao"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Sessao"> | Date | string
  }

  export type TrabalhoWhereInput = {
    AND?: TrabalhoWhereInput | TrabalhoWhereInput[]
    OR?: TrabalhoWhereInput[]
    NOT?: TrabalhoWhereInput | TrabalhoWhereInput[]
    id?: StringFilter<"Trabalho"> | string
    alunoId?: StringFilter<"Trabalho"> | string
    tipo?: StringFilter<"Trabalho"> | string
    dados?: JsonFilter<"Trabalho">
    createdAt?: DateTimeFilter<"Trabalho"> | Date | string
  }

  export type TrabalhoOrderByWithRelationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    tipo?: SortOrder
    dados?: SortOrder
    createdAt?: SortOrder
    _relevance?: TrabalhoOrderByRelevanceInput
  }

  export type TrabalhoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrabalhoWhereInput | TrabalhoWhereInput[]
    OR?: TrabalhoWhereInput[]
    NOT?: TrabalhoWhereInput | TrabalhoWhereInput[]
    alunoId?: StringFilter<"Trabalho"> | string
    tipo?: StringFilter<"Trabalho"> | string
    dados?: JsonFilter<"Trabalho">
    createdAt?: DateTimeFilter<"Trabalho"> | Date | string
  }, "id">

  export type TrabalhoOrderByWithAggregationInput = {
    id?: SortOrder
    alunoId?: SortOrder
    tipo?: SortOrder
    dados?: SortOrder
    createdAt?: SortOrder
    _count?: TrabalhoCountOrderByAggregateInput
    _max?: TrabalhoMaxOrderByAggregateInput
    _min?: TrabalhoMinOrderByAggregateInput
  }

  export type TrabalhoScalarWhereWithAggregatesInput = {
    AND?: TrabalhoScalarWhereWithAggregatesInput | TrabalhoScalarWhereWithAggregatesInput[]
    OR?: TrabalhoScalarWhereWithAggregatesInput[]
    NOT?: TrabalhoScalarWhereWithAggregatesInput | TrabalhoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trabalho"> | string
    alunoId?: StringWithAggregatesFilter<"Trabalho"> | string
    tipo?: StringWithAggregatesFilter<"Trabalho"> | string
    dados?: JsonWithAggregatesFilter<"Trabalho">
    createdAt?: DateTimeWithAggregatesFilter<"Trabalho"> | Date | string
  }

  export type EmpresaCreateInput = {
    ownerId?: string
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    cidadeUF?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setores?: SetorCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    ownerId?: string
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    cidadeUF?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setores?: SetorUncheckedCreateNestedManyWithoutEmpresaInput
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setores?: SetorUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setores?: SetorUncheckedUpdateManyWithoutEmpresaNestedInput
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    ownerId?: string
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    cidadeUF?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetorCreateInput = {
    id?: string
    nome: string
    empresa: EmpresaCreateNestedOneWithoutSetoresInput
  }

  export type SetorUncheckedCreateInput = {
    id?: string
    nome: string
    empresaId: string
  }

  export type SetorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutSetoresNestedInput
  }

  export type SetorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type SetorCreateManyInput = {
    id?: string
    nome: string
    empresaId: string
  }

  export type SetorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type SetorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type CargoCreateInput = {
    ownerId?: string
    id?: string
    codigo: string
    titulo: string
    salarioBase: number
    jornadaMensal: number
    adicionalInsalubridade?: boolean
    adicionalPericulosidade?: boolean
    funcionarios?: FuncionarioCreateNestedManyWithoutCargoInput
  }

  export type CargoUncheckedCreateInput = {
    ownerId?: string
    id?: string
    codigo: string
    titulo: string
    salarioBase: number
    jornadaMensal: number
    adicionalInsalubridade?: boolean
    adicionalPericulosidade?: boolean
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutCargoInput
  }

  export type CargoUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    jornadaMensal?: IntFieldUpdateOperationsInput | number
    adicionalInsalubridade?: BoolFieldUpdateOperationsInput | boolean
    adicionalPericulosidade?: BoolFieldUpdateOperationsInput | boolean
    funcionarios?: FuncionarioUpdateManyWithoutCargoNestedInput
  }

  export type CargoUncheckedUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    jornadaMensal?: IntFieldUpdateOperationsInput | number
    adicionalInsalubridade?: BoolFieldUpdateOperationsInput | boolean
    adicionalPericulosidade?: BoolFieldUpdateOperationsInput | boolean
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type CargoCreateManyInput = {
    ownerId?: string
    id?: string
    codigo: string
    titulo: string
    salarioBase: number
    jornadaMensal: number
    adicionalInsalubridade?: boolean
    adicionalPericulosidade?: boolean
  }

  export type CargoUpdateManyMutationInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    jornadaMensal?: IntFieldUpdateOperationsInput | number
    adicionalInsalubridade?: BoolFieldUpdateOperationsInput | boolean
    adicionalPericulosidade?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CargoUncheckedUpdateManyInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    jornadaMensal?: IntFieldUpdateOperationsInput | number
    adicionalInsalubridade?: BoolFieldUpdateOperationsInput | boolean
    adicionalPericulosidade?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionarioCreateInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutFuncionariosInput
    cargo: CargoCreateNestedOneWithoutFuncionariosInput
    folhas?: FolhaPagamentoCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateInput = {
    ownerId?: string
    id?: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    folhas?: FolhaPagamentoUncheckedCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoUncheckedCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput
    cargo?: CargoUpdateOneRequiredWithoutFuncionariosNestedInput
    folhas?: FolhaPagamentoUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargoId?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folhas?: FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUncheckedUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioCreateManyInput = {
    ownerId?: string
    id?: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUpdateManyMutationInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargoId?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroPontoCreateInput = {
    id?: string
    data: Date | string
    entrada: string
    saidaAlmoco: string
    retornoAlmoco: string
    saida: string
    horasExtras?: string
    status?: $Enums.StatusPonto
    createdAt?: Date | string
    funcionario: FuncionarioCreateNestedOneWithoutPontosInput
  }

  export type RegistroPontoUncheckedCreateInput = {
    id?: string
    funcionarioId: string
    data: Date | string
    entrada: string
    saidaAlmoco: string
    retornoAlmoco: string
    saida: string
    horasExtras?: string
    status?: $Enums.StatusPonto
    createdAt?: Date | string
  }

  export type RegistroPontoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    entrada?: StringFieldUpdateOperationsInput | string
    saidaAlmoco?: StringFieldUpdateOperationsInput | string
    retornoAlmoco?: StringFieldUpdateOperationsInput | string
    saida?: StringFieldUpdateOperationsInput | string
    horasExtras?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPontoFieldUpdateOperationsInput | $Enums.StatusPonto
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: FuncionarioUpdateOneRequiredWithoutPontosNestedInput
  }

  export type RegistroPontoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    entrada?: StringFieldUpdateOperationsInput | string
    saidaAlmoco?: StringFieldUpdateOperationsInput | string
    retornoAlmoco?: StringFieldUpdateOperationsInput | string
    saida?: StringFieldUpdateOperationsInput | string
    horasExtras?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPontoFieldUpdateOperationsInput | $Enums.StatusPonto
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroPontoCreateManyInput = {
    id?: string
    funcionarioId: string
    data: Date | string
    entrada: string
    saidaAlmoco: string
    retornoAlmoco: string
    saida: string
    horasExtras?: string
    status?: $Enums.StatusPonto
    createdAt?: Date | string
  }

  export type RegistroPontoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    entrada?: StringFieldUpdateOperationsInput | string
    saidaAlmoco?: StringFieldUpdateOperationsInput | string
    retornoAlmoco?: StringFieldUpdateOperationsInput | string
    saida?: StringFieldUpdateOperationsInput | string
    horasExtras?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPontoFieldUpdateOperationsInput | $Enums.StatusPonto
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroPontoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    entrada?: StringFieldUpdateOperationsInput | string
    saidaAlmoco?: StringFieldUpdateOperationsInput | string
    retornoAlmoco?: StringFieldUpdateOperationsInput | string
    saida?: StringFieldUpdateOperationsInput | string
    horasExtras?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPontoFieldUpdateOperationsInput | $Enums.StatusPonto
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroASOCreateInput = {
    id?: string
    tipo: string
    medico: string
    data: Date | string
    resultado?: $Enums.ResultadoASO
    createdAt?: Date | string
    funcionario: FuncionarioCreateNestedOneWithoutAsosInput
  }

  export type RegistroASOUncheckedCreateInput = {
    id?: string
    funcionarioId: string
    tipo: string
    medico: string
    data: Date | string
    resultado?: $Enums.ResultadoASO
    createdAt?: Date | string
  }

  export type RegistroASOUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    medico?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: EnumResultadoASOFieldUpdateOperationsInput | $Enums.ResultadoASO
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: FuncionarioUpdateOneRequiredWithoutAsosNestedInput
  }

  export type RegistroASOUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    medico?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: EnumResultadoASOFieldUpdateOperationsInput | $Enums.ResultadoASO
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroASOCreateManyInput = {
    id?: string
    funcionarioId: string
    tipo: string
    medico: string
    data: Date | string
    resultado?: $Enums.ResultadoASO
    createdAt?: Date | string
  }

  export type RegistroASOUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    medico?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: EnumResultadoASOFieldUpdateOperationsInput | $Enums.ResultadoASO
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroASOUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    medico?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: EnumResultadoASOFieldUpdateOperationsInput | $Enums.ResultadoASO
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoFolhaCreateInput = {
    codigo: string
    nome: string
    tipo: $Enums.TipoEvento
    percentualFixa?: number | null
    incideINSS?: boolean
    incideIRRF?: boolean
    incideFGTS?: boolean
    descricaoDidatica: string
    itens?: ItemFolhaCreateNestedManyWithoutEventoInput
  }

  export type EventoFolhaUncheckedCreateInput = {
    codigo: string
    nome: string
    tipo: $Enums.TipoEvento
    percentualFixa?: number | null
    incideINSS?: boolean
    incideIRRF?: boolean
    incideFGTS?: boolean
    descricaoDidatica: string
    itens?: ItemFolhaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoFolhaUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    percentualFixa?: NullableFloatFieldUpdateOperationsInput | number | null
    incideINSS?: BoolFieldUpdateOperationsInput | boolean
    incideIRRF?: BoolFieldUpdateOperationsInput | boolean
    incideFGTS?: BoolFieldUpdateOperationsInput | boolean
    descricaoDidatica?: StringFieldUpdateOperationsInput | string
    itens?: ItemFolhaUpdateManyWithoutEventoNestedInput
  }

  export type EventoFolhaUncheckedUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    percentualFixa?: NullableFloatFieldUpdateOperationsInput | number | null
    incideINSS?: BoolFieldUpdateOperationsInput | boolean
    incideIRRF?: BoolFieldUpdateOperationsInput | boolean
    incideFGTS?: BoolFieldUpdateOperationsInput | boolean
    descricaoDidatica?: StringFieldUpdateOperationsInput | string
    itens?: ItemFolhaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoFolhaCreateManyInput = {
    codigo: string
    nome: string
    tipo: $Enums.TipoEvento
    percentualFixa?: number | null
    incideINSS?: boolean
    incideIRRF?: boolean
    incideFGTS?: boolean
    descricaoDidatica: string
  }

  export type EventoFolhaUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    percentualFixa?: NullableFloatFieldUpdateOperationsInput | number | null
    incideINSS?: BoolFieldUpdateOperationsInput | boolean
    incideIRRF?: BoolFieldUpdateOperationsInput | boolean
    incideFGTS?: BoolFieldUpdateOperationsInput | boolean
    descricaoDidatica?: StringFieldUpdateOperationsInput | string
  }

  export type EventoFolhaUncheckedUpdateManyInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    percentualFixa?: NullableFloatFieldUpdateOperationsInput | number | null
    incideINSS?: BoolFieldUpdateOperationsInput | boolean
    incideIRRF?: BoolFieldUpdateOperationsInput | boolean
    incideFGTS?: BoolFieldUpdateOperationsInput | boolean
    descricaoDidatica?: StringFieldUpdateOperationsInput | string
  }

  export type FolhaPagamentoCreateInput = {
    id?: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
    funcionario: FuncionarioCreateNestedOneWithoutFolhasInput
    itens?: ItemFolhaCreateNestedManyWithoutFolhaInput
  }

  export type FolhaPagamentoUncheckedCreateInput = {
    id?: string
    funcionarioId: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
    itens?: ItemFolhaUncheckedCreateNestedManyWithoutFolhaInput
  }

  export type FolhaPagamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: FuncionarioUpdateOneRequiredWithoutFolhasNestedInput
    itens?: ItemFolhaUpdateManyWithoutFolhaNestedInput
  }

  export type FolhaPagamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemFolhaUncheckedUpdateManyWithoutFolhaNestedInput
  }

  export type FolhaPagamentoCreateManyInput = {
    id?: string
    funcionarioId: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
  }

  export type FolhaPagamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolhaPagamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemFolhaCreateInput = {
    id?: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
    folha: FolhaPagamentoCreateNestedOneWithoutItensInput
    evento: EventoFolhaCreateNestedOneWithoutItensInput
  }

  export type ItemFolhaUncheckedCreateInput = {
    id?: string
    folhaId: string
    codigoEvento: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
  }

  export type ItemFolhaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
    folha?: FolhaPagamentoUpdateOneRequiredWithoutItensNestedInput
    evento?: EventoFolhaUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemFolhaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    folhaId?: StringFieldUpdateOperationsInput | string
    codigoEvento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
  }

  export type ItemFolhaCreateManyInput = {
    id?: string
    folhaId: string
    codigoEvento: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
  }

  export type ItemFolhaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
  }

  export type ItemFolhaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    folhaId?: StringFieldUpdateOperationsInput | string
    codigoEvento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
  }

  export type TurmaCreateInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
    activities?: ActivityCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
    activities?: ActivityUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
    activities?: ActivityUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaCreateManyInput = {
    id?: string
    nome: string
    createdAt?: Date | string
  }

  export type TurmaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurmaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoCreateInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    createdAt?: Date | string
    turma: TurmaCreateNestedOneWithoutAlunosInput
    conclusoes?: AtividadeConclusaoCreateNestedManyWithoutAlunoInput
    notificacoes?: NotificacaoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    turmaId: string
    createdAt?: Date | string
    conclusoes?: AtividadeConclusaoUncheckedCreateNestedManyWithoutAlunoInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneRequiredWithoutAlunosNestedInput
    conclusoes?: AtividadeConclusaoUpdateManyWithoutAlunoNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conclusoes?: AtividadeConclusaoUncheckedUpdateManyWithoutAlunoNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    turmaId: string
    createdAt?: Date | string
  }

  export type AlunoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeConclusaoCreateInput = {
    id?: string
    concluidaEm?: Date | string
    activity: ActivityCreateNestedOneWithoutConclusoesInput
    aluno: AlunoCreateNestedOneWithoutConclusoesInput
  }

  export type AtividadeConclusaoUncheckedCreateInput = {
    id?: string
    activityId: string
    alunoId: string
    concluidaEm?: Date | string
  }

  export type AtividadeConclusaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutConclusoesNestedInput
    aluno?: AlunoUpdateOneRequiredWithoutConclusoesNestedInput
  }

  export type AtividadeConclusaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeConclusaoCreateManyInput = {
    id?: string
    activityId: string
    alunoId: string
    concluidaEm?: Date | string
  }

  export type AtividadeConclusaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeConclusaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateInput = {
    id?: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    destino: $Enums.DestinoNotificacao
    lida?: boolean
    createdAt?: Date | string
    aluno?: AlunoCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    destino: $Enums.DestinoNotificacao
    alunoId?: string | null
    lida?: boolean
    createdAt?: Date | string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFieldUpdateOperationsInput | $Enums.DestinoNotificacao
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFieldUpdateOperationsInput | $Enums.DestinoNotificacao
    alunoId?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    destino: $Enums.DestinoNotificacao
    alunoId?: string | null
    lida?: boolean
    createdAt?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFieldUpdateOperationsInput | $Enums.DestinoNotificacao
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFieldUpdateOperationsInput | $Enums.DestinoNotificacao
    alunoId?: NullableStringFieldUpdateOperationsInput | string | null
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    createdAt?: Date | string
    turma?: TurmaCreateNestedOneWithoutActivitiesInput
    conclusoes?: AtividadeConclusaoCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    turmaId?: string | null
    createdAt?: Date | string
    conclusoes?: AtividadeConclusaoUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneWithoutActivitiesNestedInput
    conclusoes?: AtividadeConclusaoUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conclusoes?: AtividadeConclusaoUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    turmaId?: string | null
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
  }

  export type ProfessorUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
  }

  export type ProfessorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateManyInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
  }

  export type ProfessorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
  }

  export type SessaoCreateInput = {
    tokenHash: string
    userId: string
    role: string
    expiresAt: Date | string
  }

  export type SessaoUncheckedCreateInput = {
    tokenHash: string
    userId: string
    role: string
    expiresAt: Date | string
  }

  export type SessaoUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoUncheckedUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoCreateManyInput = {
    tokenHash: string
    userId: string
    role: string
    expiresAt: Date | string
  }

  export type SessaoUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoUncheckedUpdateManyInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabalhoCreateInput = {
    id?: string
    alunoId: string
    tipo: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TrabalhoUncheckedCreateInput = {
    id?: string
    alunoId: string
    tipo: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TrabalhoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabalhoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabalhoCreateManyInput = {
    id?: string
    alunoId: string
    tipo: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TrabalhoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrabalhoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SetorListRelationFilter = {
    every?: SetorWhereInput
    some?: SetorWhereInput
    none?: SetorWhereInput
  }

  export type FuncionarioListRelationFilter = {
    every?: FuncionarioWhereInput
    some?: FuncionarioWhereInput
    none?: FuncionarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SetorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaOrderByRelevanceInput = {
    fields: EmpresaOrderByRelevanceFieldEnum | EmpresaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmpresaOwnerIdCnpjCompoundUniqueInput = {
    ownerId: string
    cnpj: string
  }

  export type EmpresaCountOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    cidadeUF?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    cidadeUF?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    razaoSocial?: SortOrder
    nomeFantasia?: SortOrder
    cnpj?: SortOrder
    cidadeUF?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type SetorOrderByRelevanceInput = {
    fields: SetorOrderByRelevanceFieldEnum | SetorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SetorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
  }

  export type SetorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
  }

  export type SetorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CargoOrderByRelevanceInput = {
    fields: CargoOrderByRelevanceFieldEnum | CargoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CargoOwnerIdCodigoCompoundUniqueInput = {
    ownerId: string
    codigo: string
  }

  export type CargoCountOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    salarioBase?: SortOrder
    jornadaMensal?: SortOrder
    adicionalInsalubridade?: SortOrder
    adicionalPericulosidade?: SortOrder
  }

  export type CargoAvgOrderByAggregateInput = {
    salarioBase?: SortOrder
    jornadaMensal?: SortOrder
  }

  export type CargoMaxOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    salarioBase?: SortOrder
    jornadaMensal?: SortOrder
    adicionalInsalubridade?: SortOrder
    adicionalPericulosidade?: SortOrder
  }

  export type CargoMinOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    titulo?: SortOrder
    salarioBase?: SortOrder
    jornadaMensal?: SortOrder
    adicionalInsalubridade?: SortOrder
    adicionalPericulosidade?: SortOrder
  }

  export type CargoSumOrderByAggregateInput = {
    salarioBase?: SortOrder
    jornadaMensal?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CargoScalarRelationFilter = {
    is?: CargoWhereInput
    isNot?: CargoWhereInput
  }

  export type FolhaPagamentoListRelationFilter = {
    every?: FolhaPagamentoWhereInput
    some?: FolhaPagamentoWhereInput
    none?: FolhaPagamentoWhereInput
  }

  export type RegistroPontoListRelationFilter = {
    every?: RegistroPontoWhereInput
    some?: RegistroPontoWhereInput
    none?: RegistroPontoWhereInput
  }

  export type RegistroASOListRelationFilter = {
    every?: RegistroASOWhereInput
    some?: RegistroASOWhereInput
    none?: RegistroASOWhereInput
  }

  export type FolhaPagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroPontoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroASOOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionarioOrderByRelevanceInput = {
    fields: FuncionarioOrderByRelevanceFieldEnum | FuncionarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FuncionarioOwnerIdCodigoCompoundUniqueInput = {
    ownerId: string
    codigo: string
  }

  export type FuncionarioOwnerIdCpfCompoundUniqueInput = {
    ownerId: string
    cpf: string
  }

  export type FuncionarioCountOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargoId?: SortOrder
    salarioBase?: SortOrder
    dependentes?: SortOrder
    dataAdmissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    salarioBase?: SortOrder
    dependentes?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargoId?: SortOrder
    salarioBase?: SortOrder
    dependentes?: SortOrder
    dataAdmissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    ownerId?: SortOrder
    id?: SortOrder
    codigo?: SortOrder
    empresaId?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    cargoId?: SortOrder
    salarioBase?: SortOrder
    dependentes?: SortOrder
    dataAdmissao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    salarioBase?: SortOrder
    dependentes?: SortOrder
  }

  export type EnumStatusPontoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPonto | EnumStatusPontoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPonto[]
    notIn?: $Enums.StatusPonto[]
    not?: NestedEnumStatusPontoFilter<$PrismaModel> | $Enums.StatusPonto
  }

  export type FuncionarioScalarRelationFilter = {
    is?: FuncionarioWhereInput
    isNot?: FuncionarioWhereInput
  }

  export type RegistroPontoOrderByRelevanceInput = {
    fields: RegistroPontoOrderByRelevanceFieldEnum | RegistroPontoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegistroPontoCountOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    data?: SortOrder
    entrada?: SortOrder
    saidaAlmoco?: SortOrder
    retornoAlmoco?: SortOrder
    saida?: SortOrder
    horasExtras?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroPontoMaxOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    data?: SortOrder
    entrada?: SortOrder
    saidaAlmoco?: SortOrder
    retornoAlmoco?: SortOrder
    saida?: SortOrder
    horasExtras?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroPontoMinOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    data?: SortOrder
    entrada?: SortOrder
    saidaAlmoco?: SortOrder
    retornoAlmoco?: SortOrder
    saida?: SortOrder
    horasExtras?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusPontoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPonto | EnumStatusPontoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPonto[]
    notIn?: $Enums.StatusPonto[]
    not?: NestedEnumStatusPontoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPonto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPontoFilter<$PrismaModel>
    _max?: NestedEnumStatusPontoFilter<$PrismaModel>
  }

  export type EnumResultadoASOFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoASO | EnumResultadoASOFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoASO[]
    notIn?: $Enums.ResultadoASO[]
    not?: NestedEnumResultadoASOFilter<$PrismaModel> | $Enums.ResultadoASO
  }

  export type RegistroASOOrderByRelevanceInput = {
    fields: RegistroASOOrderByRelevanceFieldEnum | RegistroASOOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegistroASOCountOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    tipo?: SortOrder
    medico?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroASOMaxOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    tipo?: SortOrder
    medico?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistroASOMinOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    tipo?: SortOrder
    medico?: SortOrder
    data?: SortOrder
    resultado?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumResultadoASOWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoASO | EnumResultadoASOFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoASO[]
    notIn?: $Enums.ResultadoASO[]
    not?: NestedEnumResultadoASOWithAggregatesFilter<$PrismaModel> | $Enums.ResultadoASO
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultadoASOFilter<$PrismaModel>
    _max?: NestedEnumResultadoASOFilter<$PrismaModel>
  }

  export type EnumTipoEventoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEvento | EnumTipoEventoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEvento[]
    notIn?: $Enums.TipoEvento[]
    not?: NestedEnumTipoEventoFilter<$PrismaModel> | $Enums.TipoEvento
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ItemFolhaListRelationFilter = {
    every?: ItemFolhaWhereInput
    some?: ItemFolhaWhereInput
    none?: ItemFolhaWhereInput
  }

  export type ItemFolhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoFolhaOrderByRelevanceInput = {
    fields: EventoFolhaOrderByRelevanceFieldEnum | EventoFolhaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventoFolhaCountOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    percentualFixa?: SortOrder
    incideINSS?: SortOrder
    incideIRRF?: SortOrder
    incideFGTS?: SortOrder
    descricaoDidatica?: SortOrder
  }

  export type EventoFolhaAvgOrderByAggregateInput = {
    percentualFixa?: SortOrder
  }

  export type EventoFolhaMaxOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    percentualFixa?: SortOrder
    incideINSS?: SortOrder
    incideIRRF?: SortOrder
    incideFGTS?: SortOrder
    descricaoDidatica?: SortOrder
  }

  export type EventoFolhaMinOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    percentualFixa?: SortOrder
    incideINSS?: SortOrder
    incideIRRF?: SortOrder
    incideFGTS?: SortOrder
    descricaoDidatica?: SortOrder
  }

  export type EventoFolhaSumOrderByAggregateInput = {
    percentualFixa?: SortOrder
  }

  export type EnumTipoEventoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEvento | EnumTipoEventoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEvento[]
    notIn?: $Enums.TipoEvento[]
    not?: NestedEnumTipoEventoWithAggregatesFilter<$PrismaModel> | $Enums.TipoEvento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEventoFilter<$PrismaModel>
    _max?: NestedEnumTipoEventoFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FolhaPagamentoOrderByRelevanceInput = {
    fields: FolhaPagamentoOrderByRelevanceFieldEnum | FolhaPagamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FolhaPagamentoFuncionarioIdMesReferenciaCompoundUniqueInput = {
    funcionarioId: string
    mesReferencia: string
  }

  export type FolhaPagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    mesReferencia?: SortOrder
    totalProventos?: SortOrder
    totalDescontos?: SortOrder
    salarioLiquido?: SortOrder
    fgtsDoMes?: SortOrder
    createdAt?: SortOrder
  }

  export type FolhaPagamentoAvgOrderByAggregateInput = {
    totalProventos?: SortOrder
    totalDescontos?: SortOrder
    salarioLiquido?: SortOrder
    fgtsDoMes?: SortOrder
  }

  export type FolhaPagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    mesReferencia?: SortOrder
    totalProventos?: SortOrder
    totalDescontos?: SortOrder
    salarioLiquido?: SortOrder
    fgtsDoMes?: SortOrder
    createdAt?: SortOrder
  }

  export type FolhaPagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    funcionarioId?: SortOrder
    mesReferencia?: SortOrder
    totalProventos?: SortOrder
    totalDescontos?: SortOrder
    salarioLiquido?: SortOrder
    fgtsDoMes?: SortOrder
    createdAt?: SortOrder
  }

  export type FolhaPagamentoSumOrderByAggregateInput = {
    totalProventos?: SortOrder
    totalDescontos?: SortOrder
    salarioLiquido?: SortOrder
    fgtsDoMes?: SortOrder
  }

  export type FolhaPagamentoScalarRelationFilter = {
    is?: FolhaPagamentoWhereInput
    isNot?: FolhaPagamentoWhereInput
  }

  export type EventoFolhaScalarRelationFilter = {
    is?: EventoFolhaWhereInput
    isNot?: EventoFolhaWhereInput
  }

  export type ItemFolhaOrderByRelevanceInput = {
    fields: ItemFolhaOrderByRelevanceFieldEnum | ItemFolhaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ItemFolhaCountOrderByAggregateInput = {
    id?: SortOrder
    folhaId?: SortOrder
    codigoEvento?: SortOrder
    tipo?: SortOrder
    referencia?: SortOrder
    valorCalculado?: SortOrder
    memoriaCalculo?: SortOrder
  }

  export type ItemFolhaAvgOrderByAggregateInput = {
    valorCalculado?: SortOrder
  }

  export type ItemFolhaMaxOrderByAggregateInput = {
    id?: SortOrder
    folhaId?: SortOrder
    codigoEvento?: SortOrder
    tipo?: SortOrder
    referencia?: SortOrder
    valorCalculado?: SortOrder
    memoriaCalculo?: SortOrder
  }

  export type ItemFolhaMinOrderByAggregateInput = {
    id?: SortOrder
    folhaId?: SortOrder
    codigoEvento?: SortOrder
    tipo?: SortOrder
    referencia?: SortOrder
    valorCalculado?: SortOrder
    memoriaCalculo?: SortOrder
  }

  export type ItemFolhaSumOrderByAggregateInput = {
    valorCalculado?: SortOrder
  }

  export type AlunoListRelationFilter = {
    every?: AlunoWhereInput
    some?: AlunoWhereInput
    none?: AlunoWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type AlunoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurmaOrderByRelevanceInput = {
    fields: TurmaOrderByRelevanceFieldEnum | TurmaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TurmaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type TurmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type TurmaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type TurmaScalarRelationFilter = {
    is?: TurmaWhereInput
    isNot?: TurmaWhereInput
  }

  export type AtividadeConclusaoListRelationFilter = {
    every?: AtividadeConclusaoWhereInput
    some?: AtividadeConclusaoWhereInput
    none?: AtividadeConclusaoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type AtividadeConclusaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoOrderByRelevanceInput = {
    fields: AlunoOrderByRelevanceFieldEnum | AlunoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    senhaHash?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    senhaHash?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    senhaHash?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type AlunoScalarRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type AtividadeConclusaoOrderByRelevanceInput = {
    fields: AtividadeConclusaoOrderByRelevanceFieldEnum | AtividadeConclusaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AtividadeConclusaoActivityIdAlunoIdCompoundUniqueInput = {
    activityId: string
    alunoId: string
  }

  export type AtividadeConclusaoCountOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    alunoId?: SortOrder
    concluidaEm?: SortOrder
  }

  export type AtividadeConclusaoMaxOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    alunoId?: SortOrder
    concluidaEm?: SortOrder
  }

  export type AtividadeConclusaoMinOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    alunoId?: SortOrder
    concluidaEm?: SortOrder
  }

  export type EnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[]
    notIn?: $Enums.TipoNotificacao[]
    not?: NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao
  }

  export type EnumDestinoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinoNotificacao | EnumDestinoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.DestinoNotificacao[]
    notIn?: $Enums.DestinoNotificacao[]
    not?: NestedEnumDestinoNotificacaoFilter<$PrismaModel> | $Enums.DestinoNotificacao
  }

  export type AlunoNullableScalarRelationFilter = {
    is?: AlunoWhereInput | null
    isNot?: AlunoWhereInput | null
  }

  export type NotificacaoOrderByRelevanceInput = {
    fields: NotificacaoOrderByRelevanceFieldEnum | NotificacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    destino?: SortOrder
    alunoId?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    destino?: SortOrder
    alunoId?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    destino?: SortOrder
    alunoId?: SortOrder
    lida?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[]
    notIn?: $Enums.TipoNotificacao[]
    not?: NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
  }

  export type EnumDestinoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinoNotificacao | EnumDestinoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.DestinoNotificacao[]
    notIn?: $Enums.DestinoNotificacao[]
    not?: NestedEnumDestinoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.DestinoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDestinoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumDestinoNotificacaoFilter<$PrismaModel>
  }

  export type EnumTipoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[]
    notIn?: $Enums.TipoAtividade[]
    not?: NestedEnumTipoAtividadeFilter<$PrismaModel> | $Enums.TipoAtividade
  }

  export type EnumMecanismoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.MecanismoAtividade | EnumMecanismoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.MecanismoAtividade[]
    notIn?: $Enums.MecanismoAtividade[]
    not?: NestedEnumMecanismoAtividadeFilter<$PrismaModel> | $Enums.MecanismoAtividade
  }

  export type TurmaNullableScalarRelationFilter = {
    is?: TurmaWhereInput | null
    isNot?: TurmaWhereInput | null
  }

  export type ActivityOrderByRelevanceInput = {
    fields: ActivityOrderByRelevanceFieldEnum | ActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    statement?: SortOrder
    instructions?: SortOrder
    mechanism?: SortOrder
    className?: SortOrder
    createdBy?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    statement?: SortOrder
    instructions?: SortOrder
    mechanism?: SortOrder
    className?: SortOrder
    createdBy?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    statement?: SortOrder
    instructions?: SortOrder
    mechanism?: SortOrder
    className?: SortOrder
    createdBy?: SortOrder
    turmaId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTipoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[]
    notIn?: $Enums.TipoAtividade[]
    not?: NestedEnumTipoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumTipoAtividadeFilter<$PrismaModel>
  }

  export type EnumMecanismoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MecanismoAtividade | EnumMecanismoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.MecanismoAtividade[]
    notIn?: $Enums.MecanismoAtividade[]
    not?: NestedEnumMecanismoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.MecanismoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMecanismoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumMecanismoAtividadeFilter<$PrismaModel>
  }

  export type ProfessorOrderByRelevanceInput = {
    fields: ProfessorOrderByRelevanceFieldEnum | ProfessorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
  }

  export type SessaoOrderByRelevanceInput = {
    fields: SessaoOrderByRelevanceFieldEnum | SessaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessaoCountOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessaoMaxOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessaoMinOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    expiresAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TrabalhoOrderByRelevanceInput = {
    fields: TrabalhoOrderByRelevanceFieldEnum | TrabalhoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrabalhoCountOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    tipo?: SortOrder
    dados?: SortOrder
    createdAt?: SortOrder
  }

  export type TrabalhoMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
  }

  export type TrabalhoMinOrderByAggregateInput = {
    id?: SortOrder
    alunoId?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SetorCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<SetorCreateWithoutEmpresaInput, SetorUncheckedCreateWithoutEmpresaInput> | SetorCreateWithoutEmpresaInput[] | SetorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SetorCreateOrConnectWithoutEmpresaInput | SetorCreateOrConnectWithoutEmpresaInput[]
    createMany?: SetorCreateManyEmpresaInputEnvelope
    connect?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
  }

  export type FuncionarioCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type SetorUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<SetorCreateWithoutEmpresaInput, SetorUncheckedCreateWithoutEmpresaInput> | SetorCreateWithoutEmpresaInput[] | SetorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SetorCreateOrConnectWithoutEmpresaInput | SetorCreateOrConnectWithoutEmpresaInput[]
    createMany?: SetorCreateManyEmpresaInputEnvelope
    connect?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
  }

  export type FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SetorUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<SetorCreateWithoutEmpresaInput, SetorUncheckedCreateWithoutEmpresaInput> | SetorCreateWithoutEmpresaInput[] | SetorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SetorCreateOrConnectWithoutEmpresaInput | SetorCreateOrConnectWithoutEmpresaInput[]
    upsert?: SetorUpsertWithWhereUniqueWithoutEmpresaInput | SetorUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: SetorCreateManyEmpresaInputEnvelope
    set?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    disconnect?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    delete?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    connect?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    update?: SetorUpdateWithWhereUniqueWithoutEmpresaInput | SetorUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: SetorUpdateManyWithWhereWithoutEmpresaInput | SetorUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: SetorScalarWhereInput | SetorScalarWhereInput[]
  }

  export type FuncionarioUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput | FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput | FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutEmpresaInput | FuncionarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type SetorUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<SetorCreateWithoutEmpresaInput, SetorUncheckedCreateWithoutEmpresaInput> | SetorCreateWithoutEmpresaInput[] | SetorUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: SetorCreateOrConnectWithoutEmpresaInput | SetorCreateOrConnectWithoutEmpresaInput[]
    upsert?: SetorUpsertWithWhereUniqueWithoutEmpresaInput | SetorUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: SetorCreateManyEmpresaInputEnvelope
    set?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    disconnect?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    delete?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    connect?: SetorWhereUniqueInput | SetorWhereUniqueInput[]
    update?: SetorUpdateWithWhereUniqueWithoutEmpresaInput | SetorUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: SetorUpdateManyWithWhereWithoutEmpresaInput | SetorUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: SetorScalarWhereInput | SetorScalarWhereInput[]
  }

  export type FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput> | FuncionarioCreateWithoutEmpresaInput[] | FuncionarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutEmpresaInput | FuncionarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput | FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: FuncionarioCreateManyEmpresaInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput | FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutEmpresaInput | FuncionarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutSetoresInput = {
    create?: XOR<EmpresaCreateWithoutSetoresInput, EmpresaUncheckedCreateWithoutSetoresInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutSetoresInput
    connect?: EmpresaWhereUniqueInput
  }

  export type EmpresaUpdateOneRequiredWithoutSetoresNestedInput = {
    create?: XOR<EmpresaCreateWithoutSetoresInput, EmpresaUncheckedCreateWithoutSetoresInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutSetoresInput
    upsert?: EmpresaUpsertWithoutSetoresInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutSetoresInput, EmpresaUpdateWithoutSetoresInput>, EmpresaUncheckedUpdateWithoutSetoresInput>
  }

  export type FuncionarioCreateNestedManyWithoutCargoInput = {
    create?: XOR<FuncionarioCreateWithoutCargoInput, FuncionarioUncheckedCreateWithoutCargoInput> | FuncionarioCreateWithoutCargoInput[] | FuncionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCargoInput | FuncionarioCreateOrConnectWithoutCargoInput[]
    createMany?: FuncionarioCreateManyCargoInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type FuncionarioUncheckedCreateNestedManyWithoutCargoInput = {
    create?: XOR<FuncionarioCreateWithoutCargoInput, FuncionarioUncheckedCreateWithoutCargoInput> | FuncionarioCreateWithoutCargoInput[] | FuncionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCargoInput | FuncionarioCreateOrConnectWithoutCargoInput[]
    createMany?: FuncionarioCreateManyCargoInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FuncionarioUpdateManyWithoutCargoNestedInput = {
    create?: XOR<FuncionarioCreateWithoutCargoInput, FuncionarioUncheckedCreateWithoutCargoInput> | FuncionarioCreateWithoutCargoInput[] | FuncionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCargoInput | FuncionarioCreateOrConnectWithoutCargoInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutCargoInput | FuncionarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: FuncionarioCreateManyCargoInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutCargoInput | FuncionarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutCargoInput | FuncionarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type FuncionarioUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: XOR<FuncionarioCreateWithoutCargoInput, FuncionarioUncheckedCreateWithoutCargoInput> | FuncionarioCreateWithoutCargoInput[] | FuncionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCargoInput | FuncionarioCreateOrConnectWithoutCargoInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutCargoInput | FuncionarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: FuncionarioCreateManyCargoInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutCargoInput | FuncionarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutCargoInput | FuncionarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutFuncionariosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type CargoCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<CargoCreateWithoutFuncionariosInput, CargoUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutFuncionariosInput
    connect?: CargoWhereUniqueInput
  }

  export type FolhaPagamentoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<FolhaPagamentoCreateWithoutFuncionarioInput, FolhaPagamentoUncheckedCreateWithoutFuncionarioInput> | FolhaPagamentoCreateWithoutFuncionarioInput[] | FolhaPagamentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: FolhaPagamentoCreateOrConnectWithoutFuncionarioInput | FolhaPagamentoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: FolhaPagamentoCreateManyFuncionarioInputEnvelope
    connect?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
  }

  export type RegistroPontoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<RegistroPontoCreateWithoutFuncionarioInput, RegistroPontoUncheckedCreateWithoutFuncionarioInput> | RegistroPontoCreateWithoutFuncionarioInput[] | RegistroPontoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroPontoCreateOrConnectWithoutFuncionarioInput | RegistroPontoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: RegistroPontoCreateManyFuncionarioInputEnvelope
    connect?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
  }

  export type RegistroASOCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<RegistroASOCreateWithoutFuncionarioInput, RegistroASOUncheckedCreateWithoutFuncionarioInput> | RegistroASOCreateWithoutFuncionarioInput[] | RegistroASOUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroASOCreateOrConnectWithoutFuncionarioInput | RegistroASOCreateOrConnectWithoutFuncionarioInput[]
    createMany?: RegistroASOCreateManyFuncionarioInputEnvelope
    connect?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
  }

  export type FolhaPagamentoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<FolhaPagamentoCreateWithoutFuncionarioInput, FolhaPagamentoUncheckedCreateWithoutFuncionarioInput> | FolhaPagamentoCreateWithoutFuncionarioInput[] | FolhaPagamentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: FolhaPagamentoCreateOrConnectWithoutFuncionarioInput | FolhaPagamentoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: FolhaPagamentoCreateManyFuncionarioInputEnvelope
    connect?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
  }

  export type RegistroPontoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<RegistroPontoCreateWithoutFuncionarioInput, RegistroPontoUncheckedCreateWithoutFuncionarioInput> | RegistroPontoCreateWithoutFuncionarioInput[] | RegistroPontoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroPontoCreateOrConnectWithoutFuncionarioInput | RegistroPontoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: RegistroPontoCreateManyFuncionarioInputEnvelope
    connect?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
  }

  export type RegistroASOUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<RegistroASOCreateWithoutFuncionarioInput, RegistroASOUncheckedCreateWithoutFuncionarioInput> | RegistroASOCreateWithoutFuncionarioInput[] | RegistroASOUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroASOCreateOrConnectWithoutFuncionarioInput | RegistroASOCreateOrConnectWithoutFuncionarioInput[]
    createMany?: RegistroASOCreateManyFuncionarioInputEnvelope
    connect?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
  }

  export type EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput = {
    create?: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutFuncionariosInput
    upsert?: EmpresaUpsertWithoutFuncionariosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutFuncionariosInput, EmpresaUpdateWithoutFuncionariosInput>, EmpresaUncheckedUpdateWithoutFuncionariosInput>
  }

  export type CargoUpdateOneRequiredWithoutFuncionariosNestedInput = {
    create?: XOR<CargoCreateWithoutFuncionariosInput, CargoUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: CargoCreateOrConnectWithoutFuncionariosInput
    upsert?: CargoUpsertWithoutFuncionariosInput
    connect?: CargoWhereUniqueInput
    update?: XOR<XOR<CargoUpdateToOneWithWhereWithoutFuncionariosInput, CargoUpdateWithoutFuncionariosInput>, CargoUncheckedUpdateWithoutFuncionariosInput>
  }

  export type FolhaPagamentoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<FolhaPagamentoCreateWithoutFuncionarioInput, FolhaPagamentoUncheckedCreateWithoutFuncionarioInput> | FolhaPagamentoCreateWithoutFuncionarioInput[] | FolhaPagamentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: FolhaPagamentoCreateOrConnectWithoutFuncionarioInput | FolhaPagamentoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: FolhaPagamentoUpsertWithWhereUniqueWithoutFuncionarioInput | FolhaPagamentoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: FolhaPagamentoCreateManyFuncionarioInputEnvelope
    set?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    disconnect?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    delete?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    connect?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    update?: FolhaPagamentoUpdateWithWhereUniqueWithoutFuncionarioInput | FolhaPagamentoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: FolhaPagamentoUpdateManyWithWhereWithoutFuncionarioInput | FolhaPagamentoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: FolhaPagamentoScalarWhereInput | FolhaPagamentoScalarWhereInput[]
  }

  export type RegistroPontoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<RegistroPontoCreateWithoutFuncionarioInput, RegistroPontoUncheckedCreateWithoutFuncionarioInput> | RegistroPontoCreateWithoutFuncionarioInput[] | RegistroPontoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroPontoCreateOrConnectWithoutFuncionarioInput | RegistroPontoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: RegistroPontoUpsertWithWhereUniqueWithoutFuncionarioInput | RegistroPontoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: RegistroPontoCreateManyFuncionarioInputEnvelope
    set?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    disconnect?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    delete?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    connect?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    update?: RegistroPontoUpdateWithWhereUniqueWithoutFuncionarioInput | RegistroPontoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: RegistroPontoUpdateManyWithWhereWithoutFuncionarioInput | RegistroPontoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: RegistroPontoScalarWhereInput | RegistroPontoScalarWhereInput[]
  }

  export type RegistroASOUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<RegistroASOCreateWithoutFuncionarioInput, RegistroASOUncheckedCreateWithoutFuncionarioInput> | RegistroASOCreateWithoutFuncionarioInput[] | RegistroASOUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroASOCreateOrConnectWithoutFuncionarioInput | RegistroASOCreateOrConnectWithoutFuncionarioInput[]
    upsert?: RegistroASOUpsertWithWhereUniqueWithoutFuncionarioInput | RegistroASOUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: RegistroASOCreateManyFuncionarioInputEnvelope
    set?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    disconnect?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    delete?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    connect?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    update?: RegistroASOUpdateWithWhereUniqueWithoutFuncionarioInput | RegistroASOUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: RegistroASOUpdateManyWithWhereWithoutFuncionarioInput | RegistroASOUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: RegistroASOScalarWhereInput | RegistroASOScalarWhereInput[]
  }

  export type FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<FolhaPagamentoCreateWithoutFuncionarioInput, FolhaPagamentoUncheckedCreateWithoutFuncionarioInput> | FolhaPagamentoCreateWithoutFuncionarioInput[] | FolhaPagamentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: FolhaPagamentoCreateOrConnectWithoutFuncionarioInput | FolhaPagamentoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: FolhaPagamentoUpsertWithWhereUniqueWithoutFuncionarioInput | FolhaPagamentoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: FolhaPagamentoCreateManyFuncionarioInputEnvelope
    set?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    disconnect?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    delete?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    connect?: FolhaPagamentoWhereUniqueInput | FolhaPagamentoWhereUniqueInput[]
    update?: FolhaPagamentoUpdateWithWhereUniqueWithoutFuncionarioInput | FolhaPagamentoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: FolhaPagamentoUpdateManyWithWhereWithoutFuncionarioInput | FolhaPagamentoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: FolhaPagamentoScalarWhereInput | FolhaPagamentoScalarWhereInput[]
  }

  export type RegistroPontoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<RegistroPontoCreateWithoutFuncionarioInput, RegistroPontoUncheckedCreateWithoutFuncionarioInput> | RegistroPontoCreateWithoutFuncionarioInput[] | RegistroPontoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroPontoCreateOrConnectWithoutFuncionarioInput | RegistroPontoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: RegistroPontoUpsertWithWhereUniqueWithoutFuncionarioInput | RegistroPontoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: RegistroPontoCreateManyFuncionarioInputEnvelope
    set?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    disconnect?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    delete?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    connect?: RegistroPontoWhereUniqueInput | RegistroPontoWhereUniqueInput[]
    update?: RegistroPontoUpdateWithWhereUniqueWithoutFuncionarioInput | RegistroPontoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: RegistroPontoUpdateManyWithWhereWithoutFuncionarioInput | RegistroPontoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: RegistroPontoScalarWhereInput | RegistroPontoScalarWhereInput[]
  }

  export type RegistroASOUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<RegistroASOCreateWithoutFuncionarioInput, RegistroASOUncheckedCreateWithoutFuncionarioInput> | RegistroASOCreateWithoutFuncionarioInput[] | RegistroASOUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: RegistroASOCreateOrConnectWithoutFuncionarioInput | RegistroASOCreateOrConnectWithoutFuncionarioInput[]
    upsert?: RegistroASOUpsertWithWhereUniqueWithoutFuncionarioInput | RegistroASOUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: RegistroASOCreateManyFuncionarioInputEnvelope
    set?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    disconnect?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    delete?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    connect?: RegistroASOWhereUniqueInput | RegistroASOWhereUniqueInput[]
    update?: RegistroASOUpdateWithWhereUniqueWithoutFuncionarioInput | RegistroASOUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: RegistroASOUpdateManyWithWhereWithoutFuncionarioInput | RegistroASOUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: RegistroASOScalarWhereInput | RegistroASOScalarWhereInput[]
  }

  export type FuncionarioCreateNestedOneWithoutPontosInput = {
    create?: XOR<FuncionarioCreateWithoutPontosInput, FuncionarioUncheckedCreateWithoutPontosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutPontosInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type EnumStatusPontoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPonto
  }

  export type FuncionarioUpdateOneRequiredWithoutPontosNestedInput = {
    create?: XOR<FuncionarioCreateWithoutPontosInput, FuncionarioUncheckedCreateWithoutPontosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutPontosInput
    upsert?: FuncionarioUpsertWithoutPontosInput
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutPontosInput, FuncionarioUpdateWithoutPontosInput>, FuncionarioUncheckedUpdateWithoutPontosInput>
  }

  export type FuncionarioCreateNestedOneWithoutAsosInput = {
    create?: XOR<FuncionarioCreateWithoutAsosInput, FuncionarioUncheckedCreateWithoutAsosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutAsosInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type EnumResultadoASOFieldUpdateOperationsInput = {
    set?: $Enums.ResultadoASO
  }

  export type FuncionarioUpdateOneRequiredWithoutAsosNestedInput = {
    create?: XOR<FuncionarioCreateWithoutAsosInput, FuncionarioUncheckedCreateWithoutAsosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutAsosInput
    upsert?: FuncionarioUpsertWithoutAsosInput
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutAsosInput, FuncionarioUpdateWithoutAsosInput>, FuncionarioUncheckedUpdateWithoutAsosInput>
  }

  export type ItemFolhaCreateNestedManyWithoutEventoInput = {
    create?: XOR<ItemFolhaCreateWithoutEventoInput, ItemFolhaUncheckedCreateWithoutEventoInput> | ItemFolhaCreateWithoutEventoInput[] | ItemFolhaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutEventoInput | ItemFolhaCreateOrConnectWithoutEventoInput[]
    createMany?: ItemFolhaCreateManyEventoInputEnvelope
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
  }

  export type ItemFolhaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<ItemFolhaCreateWithoutEventoInput, ItemFolhaUncheckedCreateWithoutEventoInput> | ItemFolhaCreateWithoutEventoInput[] | ItemFolhaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutEventoInput | ItemFolhaCreateOrConnectWithoutEventoInput[]
    createMany?: ItemFolhaCreateManyEventoInputEnvelope
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
  }

  export type EnumTipoEventoFieldUpdateOperationsInput = {
    set?: $Enums.TipoEvento
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemFolhaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ItemFolhaCreateWithoutEventoInput, ItemFolhaUncheckedCreateWithoutEventoInput> | ItemFolhaCreateWithoutEventoInput[] | ItemFolhaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutEventoInput | ItemFolhaCreateOrConnectWithoutEventoInput[]
    upsert?: ItemFolhaUpsertWithWhereUniqueWithoutEventoInput | ItemFolhaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ItemFolhaCreateManyEventoInputEnvelope
    set?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    disconnect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    delete?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    update?: ItemFolhaUpdateWithWhereUniqueWithoutEventoInput | ItemFolhaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ItemFolhaUpdateManyWithWhereWithoutEventoInput | ItemFolhaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ItemFolhaScalarWhereInput | ItemFolhaScalarWhereInput[]
  }

  export type ItemFolhaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ItemFolhaCreateWithoutEventoInput, ItemFolhaUncheckedCreateWithoutEventoInput> | ItemFolhaCreateWithoutEventoInput[] | ItemFolhaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutEventoInput | ItemFolhaCreateOrConnectWithoutEventoInput[]
    upsert?: ItemFolhaUpsertWithWhereUniqueWithoutEventoInput | ItemFolhaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ItemFolhaCreateManyEventoInputEnvelope
    set?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    disconnect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    delete?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    update?: ItemFolhaUpdateWithWhereUniqueWithoutEventoInput | ItemFolhaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ItemFolhaUpdateManyWithWhereWithoutEventoInput | ItemFolhaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ItemFolhaScalarWhereInput | ItemFolhaScalarWhereInput[]
  }

  export type FuncionarioCreateNestedOneWithoutFolhasInput = {
    create?: XOR<FuncionarioCreateWithoutFolhasInput, FuncionarioUncheckedCreateWithoutFolhasInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutFolhasInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type ItemFolhaCreateNestedManyWithoutFolhaInput = {
    create?: XOR<ItemFolhaCreateWithoutFolhaInput, ItemFolhaUncheckedCreateWithoutFolhaInput> | ItemFolhaCreateWithoutFolhaInput[] | ItemFolhaUncheckedCreateWithoutFolhaInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutFolhaInput | ItemFolhaCreateOrConnectWithoutFolhaInput[]
    createMany?: ItemFolhaCreateManyFolhaInputEnvelope
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
  }

  export type ItemFolhaUncheckedCreateNestedManyWithoutFolhaInput = {
    create?: XOR<ItemFolhaCreateWithoutFolhaInput, ItemFolhaUncheckedCreateWithoutFolhaInput> | ItemFolhaCreateWithoutFolhaInput[] | ItemFolhaUncheckedCreateWithoutFolhaInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutFolhaInput | ItemFolhaCreateOrConnectWithoutFolhaInput[]
    createMany?: ItemFolhaCreateManyFolhaInputEnvelope
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
  }

  export type FuncionarioUpdateOneRequiredWithoutFolhasNestedInput = {
    create?: XOR<FuncionarioCreateWithoutFolhasInput, FuncionarioUncheckedCreateWithoutFolhasInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutFolhasInput
    upsert?: FuncionarioUpsertWithoutFolhasInput
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutFolhasInput, FuncionarioUpdateWithoutFolhasInput>, FuncionarioUncheckedUpdateWithoutFolhasInput>
  }

  export type ItemFolhaUpdateManyWithoutFolhaNestedInput = {
    create?: XOR<ItemFolhaCreateWithoutFolhaInput, ItemFolhaUncheckedCreateWithoutFolhaInput> | ItemFolhaCreateWithoutFolhaInput[] | ItemFolhaUncheckedCreateWithoutFolhaInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutFolhaInput | ItemFolhaCreateOrConnectWithoutFolhaInput[]
    upsert?: ItemFolhaUpsertWithWhereUniqueWithoutFolhaInput | ItemFolhaUpsertWithWhereUniqueWithoutFolhaInput[]
    createMany?: ItemFolhaCreateManyFolhaInputEnvelope
    set?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    disconnect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    delete?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    update?: ItemFolhaUpdateWithWhereUniqueWithoutFolhaInput | ItemFolhaUpdateWithWhereUniqueWithoutFolhaInput[]
    updateMany?: ItemFolhaUpdateManyWithWhereWithoutFolhaInput | ItemFolhaUpdateManyWithWhereWithoutFolhaInput[]
    deleteMany?: ItemFolhaScalarWhereInput | ItemFolhaScalarWhereInput[]
  }

  export type ItemFolhaUncheckedUpdateManyWithoutFolhaNestedInput = {
    create?: XOR<ItemFolhaCreateWithoutFolhaInput, ItemFolhaUncheckedCreateWithoutFolhaInput> | ItemFolhaCreateWithoutFolhaInput[] | ItemFolhaUncheckedCreateWithoutFolhaInput[]
    connectOrCreate?: ItemFolhaCreateOrConnectWithoutFolhaInput | ItemFolhaCreateOrConnectWithoutFolhaInput[]
    upsert?: ItemFolhaUpsertWithWhereUniqueWithoutFolhaInput | ItemFolhaUpsertWithWhereUniqueWithoutFolhaInput[]
    createMany?: ItemFolhaCreateManyFolhaInputEnvelope
    set?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    disconnect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    delete?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    connect?: ItemFolhaWhereUniqueInput | ItemFolhaWhereUniqueInput[]
    update?: ItemFolhaUpdateWithWhereUniqueWithoutFolhaInput | ItemFolhaUpdateWithWhereUniqueWithoutFolhaInput[]
    updateMany?: ItemFolhaUpdateManyWithWhereWithoutFolhaInput | ItemFolhaUpdateManyWithWhereWithoutFolhaInput[]
    deleteMany?: ItemFolhaScalarWhereInput | ItemFolhaScalarWhereInput[]
  }

  export type FolhaPagamentoCreateNestedOneWithoutItensInput = {
    create?: XOR<FolhaPagamentoCreateWithoutItensInput, FolhaPagamentoUncheckedCreateWithoutItensInput>
    connectOrCreate?: FolhaPagamentoCreateOrConnectWithoutItensInput
    connect?: FolhaPagamentoWhereUniqueInput
  }

  export type EventoFolhaCreateNestedOneWithoutItensInput = {
    create?: XOR<EventoFolhaCreateWithoutItensInput, EventoFolhaUncheckedCreateWithoutItensInput>
    connectOrCreate?: EventoFolhaCreateOrConnectWithoutItensInput
    connect?: EventoFolhaWhereUniqueInput
  }

  export type FolhaPagamentoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<FolhaPagamentoCreateWithoutItensInput, FolhaPagamentoUncheckedCreateWithoutItensInput>
    connectOrCreate?: FolhaPagamentoCreateOrConnectWithoutItensInput
    upsert?: FolhaPagamentoUpsertWithoutItensInput
    connect?: FolhaPagamentoWhereUniqueInput
    update?: XOR<XOR<FolhaPagamentoUpdateToOneWithWhereWithoutItensInput, FolhaPagamentoUpdateWithoutItensInput>, FolhaPagamentoUncheckedUpdateWithoutItensInput>
  }

  export type EventoFolhaUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<EventoFolhaCreateWithoutItensInput, EventoFolhaUncheckedCreateWithoutItensInput>
    connectOrCreate?: EventoFolhaCreateOrConnectWithoutItensInput
    upsert?: EventoFolhaUpsertWithoutItensInput
    connect?: EventoFolhaWhereUniqueInput
    update?: XOR<XOR<EventoFolhaUpdateToOneWithWhereWithoutItensInput, EventoFolhaUpdateWithoutItensInput>, EventoFolhaUncheckedUpdateWithoutItensInput>
  }

  export type AlunoCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ActivityCreateWithoutTurmaInput, ActivityUncheckedCreateWithoutTurmaInput> | ActivityCreateWithoutTurmaInput[] | ActivityUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTurmaInput | ActivityCreateOrConnectWithoutTurmaInput[]
    createMany?: ActivityCreateManyTurmaInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type AlunoUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutTurmaInput = {
    create?: XOR<ActivityCreateWithoutTurmaInput, ActivityUncheckedCreateWithoutTurmaInput> | ActivityCreateWithoutTurmaInput[] | ActivityUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTurmaInput | ActivityCreateOrConnectWithoutTurmaInput[]
    createMany?: ActivityCreateManyTurmaInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type AlunoUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutTurmaInput | AlunoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutTurmaInput | AlunoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutTurmaInput | AlunoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ActivityCreateWithoutTurmaInput, ActivityUncheckedCreateWithoutTurmaInput> | ActivityCreateWithoutTurmaInput[] | ActivityUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTurmaInput | ActivityCreateOrConnectWithoutTurmaInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutTurmaInput | ActivityUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ActivityCreateManyTurmaInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutTurmaInput | ActivityUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutTurmaInput | ActivityUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type AlunoUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput> | AlunoCreateWithoutTurmaInput[] | AlunoUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutTurmaInput | AlunoCreateOrConnectWithoutTurmaInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutTurmaInput | AlunoUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: AlunoCreateManyTurmaInputEnvelope
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutTurmaInput | AlunoUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutTurmaInput | AlunoUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutTurmaNestedInput = {
    create?: XOR<ActivityCreateWithoutTurmaInput, ActivityUncheckedCreateWithoutTurmaInput> | ActivityCreateWithoutTurmaInput[] | ActivityUncheckedCreateWithoutTurmaInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutTurmaInput | ActivityCreateOrConnectWithoutTurmaInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutTurmaInput | ActivityUpsertWithWhereUniqueWithoutTurmaInput[]
    createMany?: ActivityCreateManyTurmaInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutTurmaInput | ActivityUpdateWithWhereUniqueWithoutTurmaInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutTurmaInput | ActivityUpdateManyWithWhereWithoutTurmaInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type TurmaCreateNestedOneWithoutAlunosInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    connect?: TurmaWhereUniqueInput
  }

  export type AtividadeConclusaoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutAlunoInput, AtividadeConclusaoUncheckedCreateWithoutAlunoInput> | AtividadeConclusaoCreateWithoutAlunoInput[] | AtividadeConclusaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutAlunoInput | AtividadeConclusaoCreateOrConnectWithoutAlunoInput[]
    createMany?: AtividadeConclusaoCreateManyAlunoInputEnvelope
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<NotificacaoCreateWithoutAlunoInput, NotificacaoUncheckedCreateWithoutAlunoInput> | NotificacaoCreateWithoutAlunoInput[] | NotificacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutAlunoInput | NotificacaoCreateOrConnectWithoutAlunoInput[]
    createMany?: NotificacaoCreateManyAlunoInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type AtividadeConclusaoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutAlunoInput, AtividadeConclusaoUncheckedCreateWithoutAlunoInput> | AtividadeConclusaoCreateWithoutAlunoInput[] | AtividadeConclusaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutAlunoInput | AtividadeConclusaoCreateOrConnectWithoutAlunoInput[]
    createMany?: AtividadeConclusaoCreateManyAlunoInputEnvelope
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<NotificacaoCreateWithoutAlunoInput, NotificacaoUncheckedCreateWithoutAlunoInput> | NotificacaoCreateWithoutAlunoInput[] | NotificacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutAlunoInput | NotificacaoCreateOrConnectWithoutAlunoInput[]
    createMany?: NotificacaoCreateManyAlunoInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type TurmaUpdateOneRequiredWithoutAlunosNestedInput = {
    create?: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutAlunosInput
    upsert?: TurmaUpsertWithoutAlunosInput
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutAlunosInput, TurmaUpdateWithoutAlunosInput>, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type AtividadeConclusaoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutAlunoInput, AtividadeConclusaoUncheckedCreateWithoutAlunoInput> | AtividadeConclusaoCreateWithoutAlunoInput[] | AtividadeConclusaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutAlunoInput | AtividadeConclusaoCreateOrConnectWithoutAlunoInput[]
    upsert?: AtividadeConclusaoUpsertWithWhereUniqueWithoutAlunoInput | AtividadeConclusaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AtividadeConclusaoCreateManyAlunoInputEnvelope
    set?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    disconnect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    delete?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    update?: AtividadeConclusaoUpdateWithWhereUniqueWithoutAlunoInput | AtividadeConclusaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AtividadeConclusaoUpdateManyWithWhereWithoutAlunoInput | AtividadeConclusaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AtividadeConclusaoScalarWhereInput | AtividadeConclusaoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<NotificacaoCreateWithoutAlunoInput, NotificacaoUncheckedCreateWithoutAlunoInput> | NotificacaoCreateWithoutAlunoInput[] | NotificacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutAlunoInput | NotificacaoCreateOrConnectWithoutAlunoInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutAlunoInput | NotificacaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: NotificacaoCreateManyAlunoInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutAlunoInput | NotificacaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutAlunoInput | NotificacaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type AtividadeConclusaoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutAlunoInput, AtividadeConclusaoUncheckedCreateWithoutAlunoInput> | AtividadeConclusaoCreateWithoutAlunoInput[] | AtividadeConclusaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutAlunoInput | AtividadeConclusaoCreateOrConnectWithoutAlunoInput[]
    upsert?: AtividadeConclusaoUpsertWithWhereUniqueWithoutAlunoInput | AtividadeConclusaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AtividadeConclusaoCreateManyAlunoInputEnvelope
    set?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    disconnect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    delete?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    update?: AtividadeConclusaoUpdateWithWhereUniqueWithoutAlunoInput | AtividadeConclusaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AtividadeConclusaoUpdateManyWithWhereWithoutAlunoInput | AtividadeConclusaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AtividadeConclusaoScalarWhereInput | AtividadeConclusaoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<NotificacaoCreateWithoutAlunoInput, NotificacaoUncheckedCreateWithoutAlunoInput> | NotificacaoCreateWithoutAlunoInput[] | NotificacaoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutAlunoInput | NotificacaoCreateOrConnectWithoutAlunoInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutAlunoInput | NotificacaoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: NotificacaoCreateManyAlunoInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutAlunoInput | NotificacaoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutAlunoInput | NotificacaoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type ActivityCreateNestedOneWithoutConclusoesInput = {
    create?: XOR<ActivityCreateWithoutConclusoesInput, ActivityUncheckedCreateWithoutConclusoesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutConclusoesInput
    connect?: ActivityWhereUniqueInput
  }

  export type AlunoCreateNestedOneWithoutConclusoesInput = {
    create?: XOR<AlunoCreateWithoutConclusoesInput, AlunoUncheckedCreateWithoutConclusoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutConclusoesInput
    connect?: AlunoWhereUniqueInput
  }

  export type ActivityUpdateOneRequiredWithoutConclusoesNestedInput = {
    create?: XOR<ActivityCreateWithoutConclusoesInput, ActivityUncheckedCreateWithoutConclusoesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutConclusoesInput
    upsert?: ActivityUpsertWithoutConclusoesInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutConclusoesInput, ActivityUpdateWithoutConclusoesInput>, ActivityUncheckedUpdateWithoutConclusoesInput>
  }

  export type AlunoUpdateOneRequiredWithoutConclusoesNestedInput = {
    create?: XOR<AlunoCreateWithoutConclusoesInput, AlunoUncheckedCreateWithoutConclusoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutConclusoesInput
    upsert?: AlunoUpsertWithoutConclusoesInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutConclusoesInput, AlunoUpdateWithoutConclusoesInput>, AlunoUncheckedUpdateWithoutConclusoesInput>
  }

  export type AlunoCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<AlunoCreateWithoutNotificacoesInput, AlunoUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutNotificacoesInput
    connect?: AlunoWhereUniqueInput
  }

  export type EnumTipoNotificacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoNotificacao
  }

  export type EnumDestinoNotificacaoFieldUpdateOperationsInput = {
    set?: $Enums.DestinoNotificacao
  }

  export type AlunoUpdateOneWithoutNotificacoesNestedInput = {
    create?: XOR<AlunoCreateWithoutNotificacoesInput, AlunoUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutNotificacoesInput
    upsert?: AlunoUpsertWithoutNotificacoesInput
    disconnect?: AlunoWhereInput | boolean
    delete?: AlunoWhereInput | boolean
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutNotificacoesInput, AlunoUpdateWithoutNotificacoesInput>, AlunoUncheckedUpdateWithoutNotificacoesInput>
  }

  export type TurmaCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<TurmaCreateWithoutActivitiesInput, TurmaUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutActivitiesInput
    connect?: TurmaWhereUniqueInput
  }

  export type AtividadeConclusaoCreateNestedManyWithoutActivityInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutActivityInput, AtividadeConclusaoUncheckedCreateWithoutActivityInput> | AtividadeConclusaoCreateWithoutActivityInput[] | AtividadeConclusaoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutActivityInput | AtividadeConclusaoCreateOrConnectWithoutActivityInput[]
    createMany?: AtividadeConclusaoCreateManyActivityInputEnvelope
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
  }

  export type AtividadeConclusaoUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutActivityInput, AtividadeConclusaoUncheckedCreateWithoutActivityInput> | AtividadeConclusaoCreateWithoutActivityInput[] | AtividadeConclusaoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutActivityInput | AtividadeConclusaoCreateOrConnectWithoutActivityInput[]
    createMany?: AtividadeConclusaoCreateManyActivityInputEnvelope
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
  }

  export type EnumTipoAtividadeFieldUpdateOperationsInput = {
    set?: $Enums.TipoAtividade
  }

  export type EnumMecanismoAtividadeFieldUpdateOperationsInput = {
    set?: $Enums.MecanismoAtividade
  }

  export type TurmaUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<TurmaCreateWithoutActivitiesInput, TurmaUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: TurmaCreateOrConnectWithoutActivitiesInput
    upsert?: TurmaUpsertWithoutActivitiesInput
    disconnect?: TurmaWhereInput | boolean
    delete?: TurmaWhereInput | boolean
    connect?: TurmaWhereUniqueInput
    update?: XOR<XOR<TurmaUpdateToOneWithWhereWithoutActivitiesInput, TurmaUpdateWithoutActivitiesInput>, TurmaUncheckedUpdateWithoutActivitiesInput>
  }

  export type AtividadeConclusaoUpdateManyWithoutActivityNestedInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutActivityInput, AtividadeConclusaoUncheckedCreateWithoutActivityInput> | AtividadeConclusaoCreateWithoutActivityInput[] | AtividadeConclusaoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutActivityInput | AtividadeConclusaoCreateOrConnectWithoutActivityInput[]
    upsert?: AtividadeConclusaoUpsertWithWhereUniqueWithoutActivityInput | AtividadeConclusaoUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: AtividadeConclusaoCreateManyActivityInputEnvelope
    set?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    disconnect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    delete?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    update?: AtividadeConclusaoUpdateWithWhereUniqueWithoutActivityInput | AtividadeConclusaoUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: AtividadeConclusaoUpdateManyWithWhereWithoutActivityInput | AtividadeConclusaoUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: AtividadeConclusaoScalarWhereInput | AtividadeConclusaoScalarWhereInput[]
  }

  export type AtividadeConclusaoUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<AtividadeConclusaoCreateWithoutActivityInput, AtividadeConclusaoUncheckedCreateWithoutActivityInput> | AtividadeConclusaoCreateWithoutActivityInput[] | AtividadeConclusaoUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: AtividadeConclusaoCreateOrConnectWithoutActivityInput | AtividadeConclusaoCreateOrConnectWithoutActivityInput[]
    upsert?: AtividadeConclusaoUpsertWithWhereUniqueWithoutActivityInput | AtividadeConclusaoUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: AtividadeConclusaoCreateManyActivityInputEnvelope
    set?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    disconnect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    delete?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    connect?: AtividadeConclusaoWhereUniqueInput | AtividadeConclusaoWhereUniqueInput[]
    update?: AtividadeConclusaoUpdateWithWhereUniqueWithoutActivityInput | AtividadeConclusaoUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: AtividadeConclusaoUpdateManyWithWhereWithoutActivityInput | AtividadeConclusaoUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: AtividadeConclusaoScalarWhereInput | AtividadeConclusaoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusPontoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPonto | EnumStatusPontoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPonto[]
    notIn?: $Enums.StatusPonto[]
    not?: NestedEnumStatusPontoFilter<$PrismaModel> | $Enums.StatusPonto
  }

  export type NestedEnumStatusPontoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPonto | EnumStatusPontoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPonto[]
    notIn?: $Enums.StatusPonto[]
    not?: NestedEnumStatusPontoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPonto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPontoFilter<$PrismaModel>
    _max?: NestedEnumStatusPontoFilter<$PrismaModel>
  }

  export type NestedEnumResultadoASOFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoASO | EnumResultadoASOFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoASO[]
    notIn?: $Enums.ResultadoASO[]
    not?: NestedEnumResultadoASOFilter<$PrismaModel> | $Enums.ResultadoASO
  }

  export type NestedEnumResultadoASOWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResultadoASO | EnumResultadoASOFieldRefInput<$PrismaModel>
    in?: $Enums.ResultadoASO[]
    notIn?: $Enums.ResultadoASO[]
    not?: NestedEnumResultadoASOWithAggregatesFilter<$PrismaModel> | $Enums.ResultadoASO
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResultadoASOFilter<$PrismaModel>
    _max?: NestedEnumResultadoASOFilter<$PrismaModel>
  }

  export type NestedEnumTipoEventoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEvento | EnumTipoEventoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEvento[]
    notIn?: $Enums.TipoEvento[]
    not?: NestedEnumTipoEventoFilter<$PrismaModel> | $Enums.TipoEvento
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoEventoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEvento | EnumTipoEventoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEvento[]
    notIn?: $Enums.TipoEvento[]
    not?: NestedEnumTipoEventoWithAggregatesFilter<$PrismaModel> | $Enums.TipoEvento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEventoFilter<$PrismaModel>
    _max?: NestedEnumTipoEventoFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[]
    notIn?: $Enums.TipoNotificacao[]
    not?: NestedEnumTipoNotificacaoFilter<$PrismaModel> | $Enums.TipoNotificacao
  }

  export type NestedEnumDestinoNotificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinoNotificacao | EnumDestinoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.DestinoNotificacao[]
    notIn?: $Enums.DestinoNotificacao[]
    not?: NestedEnumDestinoNotificacaoFilter<$PrismaModel> | $Enums.DestinoNotificacao
  }

  export type NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoNotificacao | EnumTipoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoNotificacao[]
    notIn?: $Enums.TipoNotificacao[]
    not?: NestedEnumTipoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoNotificacaoFilter<$PrismaModel>
  }

  export type NestedEnumDestinoNotificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DestinoNotificacao | EnumDestinoNotificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.DestinoNotificacao[]
    notIn?: $Enums.DestinoNotificacao[]
    not?: NestedEnumDestinoNotificacaoWithAggregatesFilter<$PrismaModel> | $Enums.DestinoNotificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDestinoNotificacaoFilter<$PrismaModel>
    _max?: NestedEnumDestinoNotificacaoFilter<$PrismaModel>
  }

  export type NestedEnumTipoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[]
    notIn?: $Enums.TipoAtividade[]
    not?: NestedEnumTipoAtividadeFilter<$PrismaModel> | $Enums.TipoAtividade
  }

  export type NestedEnumMecanismoAtividadeFilter<$PrismaModel = never> = {
    equals?: $Enums.MecanismoAtividade | EnumMecanismoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.MecanismoAtividade[]
    notIn?: $Enums.MecanismoAtividade[]
    not?: NestedEnumMecanismoAtividadeFilter<$PrismaModel> | $Enums.MecanismoAtividade
  }

  export type NestedEnumTipoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAtividade | EnumTipoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAtividade[]
    notIn?: $Enums.TipoAtividade[]
    not?: NestedEnumTipoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumTipoAtividadeFilter<$PrismaModel>
  }

  export type NestedEnumMecanismoAtividadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MecanismoAtividade | EnumMecanismoAtividadeFieldRefInput<$PrismaModel>
    in?: $Enums.MecanismoAtividade[]
    notIn?: $Enums.MecanismoAtividade[]
    not?: NestedEnumMecanismoAtividadeWithAggregatesFilter<$PrismaModel> | $Enums.MecanismoAtividade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMecanismoAtividadeFilter<$PrismaModel>
    _max?: NestedEnumMecanismoAtividadeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SetorCreateWithoutEmpresaInput = {
    id?: string
    nome: string
  }

  export type SetorUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome: string
  }

  export type SetorCreateOrConnectWithoutEmpresaInput = {
    where: SetorWhereUniqueInput
    create: XOR<SetorCreateWithoutEmpresaInput, SetorUncheckedCreateWithoutEmpresaInput>
  }

  export type SetorCreateManyEmpresaInputEnvelope = {
    data: SetorCreateManyEmpresaInput | SetorCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type FuncionarioCreateWithoutEmpresaInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cargo: CargoCreateNestedOneWithoutFuncionariosInput
    folhas?: FolhaPagamentoCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateWithoutEmpresaInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    folhas?: FolhaPagamentoUncheckedCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoUncheckedCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioCreateOrConnectWithoutEmpresaInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput>
  }

  export type FuncionarioCreateManyEmpresaInputEnvelope = {
    data: FuncionarioCreateManyEmpresaInput | FuncionarioCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type SetorUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: SetorWhereUniqueInput
    update: XOR<SetorUpdateWithoutEmpresaInput, SetorUncheckedUpdateWithoutEmpresaInput>
    create: XOR<SetorCreateWithoutEmpresaInput, SetorUncheckedCreateWithoutEmpresaInput>
  }

  export type SetorUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: SetorWhereUniqueInput
    data: XOR<SetorUpdateWithoutEmpresaInput, SetorUncheckedUpdateWithoutEmpresaInput>
  }

  export type SetorUpdateManyWithWhereWithoutEmpresaInput = {
    where: SetorScalarWhereInput
    data: XOR<SetorUpdateManyMutationInput, SetorUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type SetorScalarWhereInput = {
    AND?: SetorScalarWhereInput | SetorScalarWhereInput[]
    OR?: SetorScalarWhereInput[]
    NOT?: SetorScalarWhereInput | SetorScalarWhereInput[]
    id?: StringFilter<"Setor"> | string
    nome?: StringFilter<"Setor"> | string
    empresaId?: StringFilter<"Setor"> | string
  }

  export type FuncionarioUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: FuncionarioWhereUniqueInput
    update: XOR<FuncionarioUpdateWithoutEmpresaInput, FuncionarioUncheckedUpdateWithoutEmpresaInput>
    create: XOR<FuncionarioCreateWithoutEmpresaInput, FuncionarioUncheckedCreateWithoutEmpresaInput>
  }

  export type FuncionarioUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: FuncionarioWhereUniqueInput
    data: XOR<FuncionarioUpdateWithoutEmpresaInput, FuncionarioUncheckedUpdateWithoutEmpresaInput>
  }

  export type FuncionarioUpdateManyWithWhereWithoutEmpresaInput = {
    where: FuncionarioScalarWhereInput
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type FuncionarioScalarWhereInput = {
    AND?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    OR?: FuncionarioScalarWhereInput[]
    NOT?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    ownerId?: StringFilter<"Funcionario"> | string
    id?: StringFilter<"Funcionario"> | string
    codigo?: StringFilter<"Funcionario"> | string
    empresaId?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    cpf?: StringFilter<"Funcionario"> | string
    cargoId?: StringFilter<"Funcionario"> | string
    salarioBase?: FloatFilter<"Funcionario"> | number
    dependentes?: IntFilter<"Funcionario"> | number
    dataAdmissao?: DateTimeFilter<"Funcionario"> | Date | string
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
  }

  export type EmpresaCreateWithoutSetoresInput = {
    ownerId?: string
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    cidadeUF?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    funcionarios?: FuncionarioCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutSetoresInput = {
    ownerId?: string
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    cidadeUF?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutSetoresInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutSetoresInput, EmpresaUncheckedCreateWithoutSetoresInput>
  }

  export type EmpresaUpsertWithoutSetoresInput = {
    update: XOR<EmpresaUpdateWithoutSetoresInput, EmpresaUncheckedUpdateWithoutSetoresInput>
    create: XOR<EmpresaCreateWithoutSetoresInput, EmpresaUncheckedCreateWithoutSetoresInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutSetoresInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutSetoresInput, EmpresaUncheckedUpdateWithoutSetoresInput>
  }

  export type EmpresaUpdateWithoutSetoresInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: FuncionarioUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutSetoresInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type FuncionarioCreateWithoutCargoInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutFuncionariosInput
    folhas?: FolhaPagamentoCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateWithoutCargoInput = {
    ownerId?: string
    id?: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    folhas?: FolhaPagamentoUncheckedCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoUncheckedCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioCreateOrConnectWithoutCargoInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutCargoInput, FuncionarioUncheckedCreateWithoutCargoInput>
  }

  export type FuncionarioCreateManyCargoInputEnvelope = {
    data: FuncionarioCreateManyCargoInput | FuncionarioCreateManyCargoInput[]
    skipDuplicates?: boolean
  }

  export type FuncionarioUpsertWithWhereUniqueWithoutCargoInput = {
    where: FuncionarioWhereUniqueInput
    update: XOR<FuncionarioUpdateWithoutCargoInput, FuncionarioUncheckedUpdateWithoutCargoInput>
    create: XOR<FuncionarioCreateWithoutCargoInput, FuncionarioUncheckedCreateWithoutCargoInput>
  }

  export type FuncionarioUpdateWithWhereUniqueWithoutCargoInput = {
    where: FuncionarioWhereUniqueInput
    data: XOR<FuncionarioUpdateWithoutCargoInput, FuncionarioUncheckedUpdateWithoutCargoInput>
  }

  export type FuncionarioUpdateManyWithWhereWithoutCargoInput = {
    where: FuncionarioScalarWhereInput
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyWithoutCargoInput>
  }

  export type EmpresaCreateWithoutFuncionariosInput = {
    ownerId?: string
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    cidadeUF?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setores?: SetorCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutFuncionariosInput = {
    ownerId?: string
    id?: string
    razaoSocial: string
    nomeFantasia?: string | null
    cnpj: string
    cidadeUF?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    setores?: SetorUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutFuncionariosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
  }

  export type CargoCreateWithoutFuncionariosInput = {
    ownerId?: string
    id?: string
    codigo: string
    titulo: string
    salarioBase: number
    jornadaMensal: number
    adicionalInsalubridade?: boolean
    adicionalPericulosidade?: boolean
  }

  export type CargoUncheckedCreateWithoutFuncionariosInput = {
    ownerId?: string
    id?: string
    codigo: string
    titulo: string
    salarioBase: number
    jornadaMensal: number
    adicionalInsalubridade?: boolean
    adicionalPericulosidade?: boolean
  }

  export type CargoCreateOrConnectWithoutFuncionariosInput = {
    where: CargoWhereUniqueInput
    create: XOR<CargoCreateWithoutFuncionariosInput, CargoUncheckedCreateWithoutFuncionariosInput>
  }

  export type FolhaPagamentoCreateWithoutFuncionarioInput = {
    id?: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
    itens?: ItemFolhaCreateNestedManyWithoutFolhaInput
  }

  export type FolhaPagamentoUncheckedCreateWithoutFuncionarioInput = {
    id?: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
    itens?: ItemFolhaUncheckedCreateNestedManyWithoutFolhaInput
  }

  export type FolhaPagamentoCreateOrConnectWithoutFuncionarioInput = {
    where: FolhaPagamentoWhereUniqueInput
    create: XOR<FolhaPagamentoCreateWithoutFuncionarioInput, FolhaPagamentoUncheckedCreateWithoutFuncionarioInput>
  }

  export type FolhaPagamentoCreateManyFuncionarioInputEnvelope = {
    data: FolhaPagamentoCreateManyFuncionarioInput | FolhaPagamentoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type RegistroPontoCreateWithoutFuncionarioInput = {
    id?: string
    data: Date | string
    entrada: string
    saidaAlmoco: string
    retornoAlmoco: string
    saida: string
    horasExtras?: string
    status?: $Enums.StatusPonto
    createdAt?: Date | string
  }

  export type RegistroPontoUncheckedCreateWithoutFuncionarioInput = {
    id?: string
    data: Date | string
    entrada: string
    saidaAlmoco: string
    retornoAlmoco: string
    saida: string
    horasExtras?: string
    status?: $Enums.StatusPonto
    createdAt?: Date | string
  }

  export type RegistroPontoCreateOrConnectWithoutFuncionarioInput = {
    where: RegistroPontoWhereUniqueInput
    create: XOR<RegistroPontoCreateWithoutFuncionarioInput, RegistroPontoUncheckedCreateWithoutFuncionarioInput>
  }

  export type RegistroPontoCreateManyFuncionarioInputEnvelope = {
    data: RegistroPontoCreateManyFuncionarioInput | RegistroPontoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type RegistroASOCreateWithoutFuncionarioInput = {
    id?: string
    tipo: string
    medico: string
    data: Date | string
    resultado?: $Enums.ResultadoASO
    createdAt?: Date | string
  }

  export type RegistroASOUncheckedCreateWithoutFuncionarioInput = {
    id?: string
    tipo: string
    medico: string
    data: Date | string
    resultado?: $Enums.ResultadoASO
    createdAt?: Date | string
  }

  export type RegistroASOCreateOrConnectWithoutFuncionarioInput = {
    where: RegistroASOWhereUniqueInput
    create: XOR<RegistroASOCreateWithoutFuncionarioInput, RegistroASOUncheckedCreateWithoutFuncionarioInput>
  }

  export type RegistroASOCreateManyFuncionarioInputEnvelope = {
    data: RegistroASOCreateManyFuncionarioInput | RegistroASOCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutFuncionariosInput = {
    update: XOR<EmpresaUpdateWithoutFuncionariosInput, EmpresaUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<EmpresaCreateWithoutFuncionariosInput, EmpresaUncheckedCreateWithoutFuncionariosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutFuncionariosInput, EmpresaUncheckedUpdateWithoutFuncionariosInput>
  }

  export type EmpresaUpdateWithoutFuncionariosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setores?: SetorUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutFuncionariosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cidadeUF?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setores?: SetorUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type CargoUpsertWithoutFuncionariosInput = {
    update: XOR<CargoUpdateWithoutFuncionariosInput, CargoUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<CargoCreateWithoutFuncionariosInput, CargoUncheckedCreateWithoutFuncionariosInput>
    where?: CargoWhereInput
  }

  export type CargoUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: CargoWhereInput
    data: XOR<CargoUpdateWithoutFuncionariosInput, CargoUncheckedUpdateWithoutFuncionariosInput>
  }

  export type CargoUpdateWithoutFuncionariosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    jornadaMensal?: IntFieldUpdateOperationsInput | number
    adicionalInsalubridade?: BoolFieldUpdateOperationsInput | boolean
    adicionalPericulosidade?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CargoUncheckedUpdateWithoutFuncionariosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    jornadaMensal?: IntFieldUpdateOperationsInput | number
    adicionalInsalubridade?: BoolFieldUpdateOperationsInput | boolean
    adicionalPericulosidade?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FolhaPagamentoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: FolhaPagamentoWhereUniqueInput
    update: XOR<FolhaPagamentoUpdateWithoutFuncionarioInput, FolhaPagamentoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<FolhaPagamentoCreateWithoutFuncionarioInput, FolhaPagamentoUncheckedCreateWithoutFuncionarioInput>
  }

  export type FolhaPagamentoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: FolhaPagamentoWhereUniqueInput
    data: XOR<FolhaPagamentoUpdateWithoutFuncionarioInput, FolhaPagamentoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type FolhaPagamentoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: FolhaPagamentoScalarWhereInput
    data: XOR<FolhaPagamentoUpdateManyMutationInput, FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type FolhaPagamentoScalarWhereInput = {
    AND?: FolhaPagamentoScalarWhereInput | FolhaPagamentoScalarWhereInput[]
    OR?: FolhaPagamentoScalarWhereInput[]
    NOT?: FolhaPagamentoScalarWhereInput | FolhaPagamentoScalarWhereInput[]
    id?: StringFilter<"FolhaPagamento"> | string
    funcionarioId?: StringFilter<"FolhaPagamento"> | string
    mesReferencia?: StringFilter<"FolhaPagamento"> | string
    totalProventos?: FloatFilter<"FolhaPagamento"> | number
    totalDescontos?: FloatFilter<"FolhaPagamento"> | number
    salarioLiquido?: FloatFilter<"FolhaPagamento"> | number
    fgtsDoMes?: FloatFilter<"FolhaPagamento"> | number
    createdAt?: DateTimeFilter<"FolhaPagamento"> | Date | string
  }

  export type RegistroPontoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: RegistroPontoWhereUniqueInput
    update: XOR<RegistroPontoUpdateWithoutFuncionarioInput, RegistroPontoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<RegistroPontoCreateWithoutFuncionarioInput, RegistroPontoUncheckedCreateWithoutFuncionarioInput>
  }

  export type RegistroPontoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: RegistroPontoWhereUniqueInput
    data: XOR<RegistroPontoUpdateWithoutFuncionarioInput, RegistroPontoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type RegistroPontoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: RegistroPontoScalarWhereInput
    data: XOR<RegistroPontoUpdateManyMutationInput, RegistroPontoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type RegistroPontoScalarWhereInput = {
    AND?: RegistroPontoScalarWhereInput | RegistroPontoScalarWhereInput[]
    OR?: RegistroPontoScalarWhereInput[]
    NOT?: RegistroPontoScalarWhereInput | RegistroPontoScalarWhereInput[]
    id?: StringFilter<"RegistroPonto"> | string
    funcionarioId?: StringFilter<"RegistroPonto"> | string
    data?: DateTimeFilter<"RegistroPonto"> | Date | string
    entrada?: StringFilter<"RegistroPonto"> | string
    saidaAlmoco?: StringFilter<"RegistroPonto"> | string
    retornoAlmoco?: StringFilter<"RegistroPonto"> | string
    saida?: StringFilter<"RegistroPonto"> | string
    horasExtras?: StringFilter<"RegistroPonto"> | string
    status?: EnumStatusPontoFilter<"RegistroPonto"> | $Enums.StatusPonto
    createdAt?: DateTimeFilter<"RegistroPonto"> | Date | string
  }

  export type RegistroASOUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: RegistroASOWhereUniqueInput
    update: XOR<RegistroASOUpdateWithoutFuncionarioInput, RegistroASOUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<RegistroASOCreateWithoutFuncionarioInput, RegistroASOUncheckedCreateWithoutFuncionarioInput>
  }

  export type RegistroASOUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: RegistroASOWhereUniqueInput
    data: XOR<RegistroASOUpdateWithoutFuncionarioInput, RegistroASOUncheckedUpdateWithoutFuncionarioInput>
  }

  export type RegistroASOUpdateManyWithWhereWithoutFuncionarioInput = {
    where: RegistroASOScalarWhereInput
    data: XOR<RegistroASOUpdateManyMutationInput, RegistroASOUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type RegistroASOScalarWhereInput = {
    AND?: RegistroASOScalarWhereInput | RegistroASOScalarWhereInput[]
    OR?: RegistroASOScalarWhereInput[]
    NOT?: RegistroASOScalarWhereInput | RegistroASOScalarWhereInput[]
    id?: StringFilter<"RegistroASO"> | string
    funcionarioId?: StringFilter<"RegistroASO"> | string
    tipo?: StringFilter<"RegistroASO"> | string
    medico?: StringFilter<"RegistroASO"> | string
    data?: DateTimeFilter<"RegistroASO"> | Date | string
    resultado?: EnumResultadoASOFilter<"RegistroASO"> | $Enums.ResultadoASO
    createdAt?: DateTimeFilter<"RegistroASO"> | Date | string
  }

  export type FuncionarioCreateWithoutPontosInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutFuncionariosInput
    cargo: CargoCreateNestedOneWithoutFuncionariosInput
    folhas?: FolhaPagamentoCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateWithoutPontosInput = {
    ownerId?: string
    id?: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    folhas?: FolhaPagamentoUncheckedCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioCreateOrConnectWithoutPontosInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutPontosInput, FuncionarioUncheckedCreateWithoutPontosInput>
  }

  export type FuncionarioUpsertWithoutPontosInput = {
    update: XOR<FuncionarioUpdateWithoutPontosInput, FuncionarioUncheckedUpdateWithoutPontosInput>
    create: XOR<FuncionarioCreateWithoutPontosInput, FuncionarioUncheckedCreateWithoutPontosInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutPontosInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutPontosInput, FuncionarioUncheckedUpdateWithoutPontosInput>
  }

  export type FuncionarioUpdateWithoutPontosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput
    cargo?: CargoUpdateOneRequiredWithoutFuncionariosNestedInput
    folhas?: FolhaPagamentoUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutPontosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargoId?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folhas?: FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioCreateWithoutAsosInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutFuncionariosInput
    cargo: CargoCreateNestedOneWithoutFuncionariosInput
    folhas?: FolhaPagamentoCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateWithoutAsosInput = {
    ownerId?: string
    id?: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    folhas?: FolhaPagamentoUncheckedCreateNestedManyWithoutFuncionarioInput
    pontos?: RegistroPontoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioCreateOrConnectWithoutAsosInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutAsosInput, FuncionarioUncheckedCreateWithoutAsosInput>
  }

  export type FuncionarioUpsertWithoutAsosInput = {
    update: XOR<FuncionarioUpdateWithoutAsosInput, FuncionarioUncheckedUpdateWithoutAsosInput>
    create: XOR<FuncionarioCreateWithoutAsosInput, FuncionarioUncheckedCreateWithoutAsosInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutAsosInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutAsosInput, FuncionarioUncheckedUpdateWithoutAsosInput>
  }

  export type FuncionarioUpdateWithoutAsosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput
    cargo?: CargoUpdateOneRequiredWithoutFuncionariosNestedInput
    folhas?: FolhaPagamentoUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutAsosInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargoId?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folhas?: FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type ItemFolhaCreateWithoutEventoInput = {
    id?: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
    folha: FolhaPagamentoCreateNestedOneWithoutItensInput
  }

  export type ItemFolhaUncheckedCreateWithoutEventoInput = {
    id?: string
    folhaId: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
  }

  export type ItemFolhaCreateOrConnectWithoutEventoInput = {
    where: ItemFolhaWhereUniqueInput
    create: XOR<ItemFolhaCreateWithoutEventoInput, ItemFolhaUncheckedCreateWithoutEventoInput>
  }

  export type ItemFolhaCreateManyEventoInputEnvelope = {
    data: ItemFolhaCreateManyEventoInput | ItemFolhaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type ItemFolhaUpsertWithWhereUniqueWithoutEventoInput = {
    where: ItemFolhaWhereUniqueInput
    update: XOR<ItemFolhaUpdateWithoutEventoInput, ItemFolhaUncheckedUpdateWithoutEventoInput>
    create: XOR<ItemFolhaCreateWithoutEventoInput, ItemFolhaUncheckedCreateWithoutEventoInput>
  }

  export type ItemFolhaUpdateWithWhereUniqueWithoutEventoInput = {
    where: ItemFolhaWhereUniqueInput
    data: XOR<ItemFolhaUpdateWithoutEventoInput, ItemFolhaUncheckedUpdateWithoutEventoInput>
  }

  export type ItemFolhaUpdateManyWithWhereWithoutEventoInput = {
    where: ItemFolhaScalarWhereInput
    data: XOR<ItemFolhaUpdateManyMutationInput, ItemFolhaUncheckedUpdateManyWithoutEventoInput>
  }

  export type ItemFolhaScalarWhereInput = {
    AND?: ItemFolhaScalarWhereInput | ItemFolhaScalarWhereInput[]
    OR?: ItemFolhaScalarWhereInput[]
    NOT?: ItemFolhaScalarWhereInput | ItemFolhaScalarWhereInput[]
    id?: StringFilter<"ItemFolha"> | string
    folhaId?: StringFilter<"ItemFolha"> | string
    codigoEvento?: StringFilter<"ItemFolha"> | string
    tipo?: EnumTipoEventoFilter<"ItemFolha"> | $Enums.TipoEvento
    referencia?: StringFilter<"ItemFolha"> | string
    valorCalculado?: FloatFilter<"ItemFolha"> | number
    memoriaCalculo?: StringFilter<"ItemFolha"> | string
  }

  export type FuncionarioCreateWithoutFolhasInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutFuncionariosInput
    cargo: CargoCreateNestedOneWithoutFuncionariosInput
    pontos?: RegistroPontoCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateWithoutFolhasInput = {
    ownerId?: string
    id?: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    pontos?: RegistroPontoUncheckedCreateNestedManyWithoutFuncionarioInput
    asos?: RegistroASOUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioCreateOrConnectWithoutFolhasInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutFolhasInput, FuncionarioUncheckedCreateWithoutFolhasInput>
  }

  export type ItemFolhaCreateWithoutFolhaInput = {
    id?: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
    evento: EventoFolhaCreateNestedOneWithoutItensInput
  }

  export type ItemFolhaUncheckedCreateWithoutFolhaInput = {
    id?: string
    codigoEvento: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
  }

  export type ItemFolhaCreateOrConnectWithoutFolhaInput = {
    where: ItemFolhaWhereUniqueInput
    create: XOR<ItemFolhaCreateWithoutFolhaInput, ItemFolhaUncheckedCreateWithoutFolhaInput>
  }

  export type ItemFolhaCreateManyFolhaInputEnvelope = {
    data: ItemFolhaCreateManyFolhaInput | ItemFolhaCreateManyFolhaInput[]
    skipDuplicates?: boolean
  }

  export type FuncionarioUpsertWithoutFolhasInput = {
    update: XOR<FuncionarioUpdateWithoutFolhasInput, FuncionarioUncheckedUpdateWithoutFolhasInput>
    create: XOR<FuncionarioCreateWithoutFolhasInput, FuncionarioUncheckedCreateWithoutFolhasInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutFolhasInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutFolhasInput, FuncionarioUncheckedUpdateWithoutFolhasInput>
  }

  export type FuncionarioUpdateWithoutFolhasInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput
    cargo?: CargoUpdateOneRequiredWithoutFuncionariosNestedInput
    pontos?: RegistroPontoUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutFolhasInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargoId?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pontos?: RegistroPontoUncheckedUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type ItemFolhaUpsertWithWhereUniqueWithoutFolhaInput = {
    where: ItemFolhaWhereUniqueInput
    update: XOR<ItemFolhaUpdateWithoutFolhaInput, ItemFolhaUncheckedUpdateWithoutFolhaInput>
    create: XOR<ItemFolhaCreateWithoutFolhaInput, ItemFolhaUncheckedCreateWithoutFolhaInput>
  }

  export type ItemFolhaUpdateWithWhereUniqueWithoutFolhaInput = {
    where: ItemFolhaWhereUniqueInput
    data: XOR<ItemFolhaUpdateWithoutFolhaInput, ItemFolhaUncheckedUpdateWithoutFolhaInput>
  }

  export type ItemFolhaUpdateManyWithWhereWithoutFolhaInput = {
    where: ItemFolhaScalarWhereInput
    data: XOR<ItemFolhaUpdateManyMutationInput, ItemFolhaUncheckedUpdateManyWithoutFolhaInput>
  }

  export type FolhaPagamentoCreateWithoutItensInput = {
    id?: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
    funcionario: FuncionarioCreateNestedOneWithoutFolhasInput
  }

  export type FolhaPagamentoUncheckedCreateWithoutItensInput = {
    id?: string
    funcionarioId: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
  }

  export type FolhaPagamentoCreateOrConnectWithoutItensInput = {
    where: FolhaPagamentoWhereUniqueInput
    create: XOR<FolhaPagamentoCreateWithoutItensInput, FolhaPagamentoUncheckedCreateWithoutItensInput>
  }

  export type EventoFolhaCreateWithoutItensInput = {
    codigo: string
    nome: string
    tipo: $Enums.TipoEvento
    percentualFixa?: number | null
    incideINSS?: boolean
    incideIRRF?: boolean
    incideFGTS?: boolean
    descricaoDidatica: string
  }

  export type EventoFolhaUncheckedCreateWithoutItensInput = {
    codigo: string
    nome: string
    tipo: $Enums.TipoEvento
    percentualFixa?: number | null
    incideINSS?: boolean
    incideIRRF?: boolean
    incideFGTS?: boolean
    descricaoDidatica: string
  }

  export type EventoFolhaCreateOrConnectWithoutItensInput = {
    where: EventoFolhaWhereUniqueInput
    create: XOR<EventoFolhaCreateWithoutItensInput, EventoFolhaUncheckedCreateWithoutItensInput>
  }

  export type FolhaPagamentoUpsertWithoutItensInput = {
    update: XOR<FolhaPagamentoUpdateWithoutItensInput, FolhaPagamentoUncheckedUpdateWithoutItensInput>
    create: XOR<FolhaPagamentoCreateWithoutItensInput, FolhaPagamentoUncheckedCreateWithoutItensInput>
    where?: FolhaPagamentoWhereInput
  }

  export type FolhaPagamentoUpdateToOneWithWhereWithoutItensInput = {
    where?: FolhaPagamentoWhereInput
    data: XOR<FolhaPagamentoUpdateWithoutItensInput, FolhaPagamentoUncheckedUpdateWithoutItensInput>
  }

  export type FolhaPagamentoUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: FuncionarioUpdateOneRequiredWithoutFolhasNestedInput
  }

  export type FolhaPagamentoUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoFolhaUpsertWithoutItensInput = {
    update: XOR<EventoFolhaUpdateWithoutItensInput, EventoFolhaUncheckedUpdateWithoutItensInput>
    create: XOR<EventoFolhaCreateWithoutItensInput, EventoFolhaUncheckedCreateWithoutItensInput>
    where?: EventoFolhaWhereInput
  }

  export type EventoFolhaUpdateToOneWithWhereWithoutItensInput = {
    where?: EventoFolhaWhereInput
    data: XOR<EventoFolhaUpdateWithoutItensInput, EventoFolhaUncheckedUpdateWithoutItensInput>
  }

  export type EventoFolhaUpdateWithoutItensInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    percentualFixa?: NullableFloatFieldUpdateOperationsInput | number | null
    incideINSS?: BoolFieldUpdateOperationsInput | boolean
    incideIRRF?: BoolFieldUpdateOperationsInput | boolean
    incideFGTS?: BoolFieldUpdateOperationsInput | boolean
    descricaoDidatica?: StringFieldUpdateOperationsInput | string
  }

  export type EventoFolhaUncheckedUpdateWithoutItensInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    percentualFixa?: NullableFloatFieldUpdateOperationsInput | number | null
    incideINSS?: BoolFieldUpdateOperationsInput | boolean
    incideIRRF?: BoolFieldUpdateOperationsInput | boolean
    incideFGTS?: BoolFieldUpdateOperationsInput | boolean
    descricaoDidatica?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoCreateWithoutTurmaInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    createdAt?: Date | string
    conclusoes?: AtividadeConclusaoCreateNestedManyWithoutAlunoInput
    notificacoes?: NotificacaoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutTurmaInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    createdAt?: Date | string
    conclusoes?: AtividadeConclusaoUncheckedCreateNestedManyWithoutAlunoInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoCreateManyTurmaInputEnvelope = {
    data: AlunoCreateManyTurmaInput | AlunoCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutTurmaInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    createdAt?: Date | string
    conclusoes?: AtividadeConclusaoCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutTurmaInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    createdAt?: Date | string
    conclusoes?: AtividadeConclusaoUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutTurmaInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutTurmaInput, ActivityUncheckedCreateWithoutTurmaInput>
  }

  export type ActivityCreateManyTurmaInputEnvelope = {
    data: ActivityCreateManyTurmaInput | ActivityCreateManyTurmaInput[]
    skipDuplicates?: boolean
  }

  export type AlunoUpsertWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
    create: XOR<AlunoCreateWithoutTurmaInput, AlunoUncheckedCreateWithoutTurmaInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutTurmaInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutTurmaInput, AlunoUncheckedUpdateWithoutTurmaInput>
  }

  export type AlunoUpdateManyWithWhereWithoutTurmaInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutTurmaInput>
  }

  export type AlunoScalarWhereInput = {
    AND?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    OR?: AlunoScalarWhereInput[]
    NOT?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    id?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    matricula?: StringFilter<"Aluno"> | string
    senhaHash?: StringNullableFilter<"Aluno"> | string | null
    turmaId?: StringFilter<"Aluno"> | string
    createdAt?: DateTimeFilter<"Aluno"> | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutTurmaInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutTurmaInput, ActivityUncheckedUpdateWithoutTurmaInput>
    create: XOR<ActivityCreateWithoutTurmaInput, ActivityUncheckedCreateWithoutTurmaInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutTurmaInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutTurmaInput, ActivityUncheckedUpdateWithoutTurmaInput>
  }

  export type ActivityUpdateManyWithWhereWithoutTurmaInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutTurmaInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: EnumTipoAtividadeFilter<"Activity"> | $Enums.TipoAtividade
    title?: StringFilter<"Activity"> | string
    statement?: StringFilter<"Activity"> | string
    instructions?: StringFilter<"Activity"> | string
    mechanism?: EnumMecanismoAtividadeFilter<"Activity"> | $Enums.MecanismoAtividade
    className?: StringFilter<"Activity"> | string
    createdBy?: StringFilter<"Activity"> | string
    turmaId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type TurmaCreateWithoutAlunosInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    activities?: ActivityCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutAlunosInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutAlunosInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
  }

  export type AtividadeConclusaoCreateWithoutAlunoInput = {
    id?: string
    concluidaEm?: Date | string
    activity: ActivityCreateNestedOneWithoutConclusoesInput
  }

  export type AtividadeConclusaoUncheckedCreateWithoutAlunoInput = {
    id?: string
    activityId: string
    concluidaEm?: Date | string
  }

  export type AtividadeConclusaoCreateOrConnectWithoutAlunoInput = {
    where: AtividadeConclusaoWhereUniqueInput
    create: XOR<AtividadeConclusaoCreateWithoutAlunoInput, AtividadeConclusaoUncheckedCreateWithoutAlunoInput>
  }

  export type AtividadeConclusaoCreateManyAlunoInputEnvelope = {
    data: AtividadeConclusaoCreateManyAlunoInput | AtividadeConclusaoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutAlunoInput = {
    id?: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    destino: $Enums.DestinoNotificacao
    lida?: boolean
    createdAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutAlunoInput = {
    id?: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    destino: $Enums.DestinoNotificacao
    lida?: boolean
    createdAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutAlunoInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutAlunoInput, NotificacaoUncheckedCreateWithoutAlunoInput>
  }

  export type NotificacaoCreateManyAlunoInputEnvelope = {
    data: NotificacaoCreateManyAlunoInput | NotificacaoCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithoutAlunosInput = {
    update: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
    create: XOR<TurmaCreateWithoutAlunosInput, TurmaUncheckedCreateWithoutAlunosInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutAlunosInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutAlunosInput, TurmaUncheckedUpdateWithoutAlunosInput>
  }

  export type TurmaUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type AtividadeConclusaoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: AtividadeConclusaoWhereUniqueInput
    update: XOR<AtividadeConclusaoUpdateWithoutAlunoInput, AtividadeConclusaoUncheckedUpdateWithoutAlunoInput>
    create: XOR<AtividadeConclusaoCreateWithoutAlunoInput, AtividadeConclusaoUncheckedCreateWithoutAlunoInput>
  }

  export type AtividadeConclusaoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: AtividadeConclusaoWhereUniqueInput
    data: XOR<AtividadeConclusaoUpdateWithoutAlunoInput, AtividadeConclusaoUncheckedUpdateWithoutAlunoInput>
  }

  export type AtividadeConclusaoUpdateManyWithWhereWithoutAlunoInput = {
    where: AtividadeConclusaoScalarWhereInput
    data: XOR<AtividadeConclusaoUpdateManyMutationInput, AtividadeConclusaoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type AtividadeConclusaoScalarWhereInput = {
    AND?: AtividadeConclusaoScalarWhereInput | AtividadeConclusaoScalarWhereInput[]
    OR?: AtividadeConclusaoScalarWhereInput[]
    NOT?: AtividadeConclusaoScalarWhereInput | AtividadeConclusaoScalarWhereInput[]
    id?: StringFilter<"AtividadeConclusao"> | string
    activityId?: StringFilter<"AtividadeConclusao"> | string
    alunoId?: StringFilter<"AtividadeConclusao"> | string
    concluidaEm?: DateTimeFilter<"AtividadeConclusao"> | Date | string
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutAlunoInput, NotificacaoUncheckedUpdateWithoutAlunoInput>
    create: XOR<NotificacaoCreateWithoutAlunoInput, NotificacaoUncheckedCreateWithoutAlunoInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutAlunoInput, NotificacaoUncheckedUpdateWithoutAlunoInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutAlunoInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: EnumTipoNotificacaoFilter<"Notificacao"> | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFilter<"Notificacao"> | $Enums.DestinoNotificacao
    alunoId?: StringNullableFilter<"Notificacao"> | string | null
    lida?: BoolFilter<"Notificacao"> | boolean
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type ActivityCreateWithoutConclusoesInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    createdAt?: Date | string
    turma?: TurmaCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutConclusoesInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    turmaId?: string | null
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutConclusoesInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutConclusoesInput, ActivityUncheckedCreateWithoutConclusoesInput>
  }

  export type AlunoCreateWithoutConclusoesInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    createdAt?: Date | string
    turma: TurmaCreateNestedOneWithoutAlunosInput
    notificacoes?: NotificacaoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutConclusoesInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    turmaId: string
    createdAt?: Date | string
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutConclusoesInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutConclusoesInput, AlunoUncheckedCreateWithoutConclusoesInput>
  }

  export type ActivityUpsertWithoutConclusoesInput = {
    update: XOR<ActivityUpdateWithoutConclusoesInput, ActivityUncheckedUpdateWithoutConclusoesInput>
    create: XOR<ActivityCreateWithoutConclusoesInput, ActivityUncheckedCreateWithoutConclusoesInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutConclusoesInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutConclusoesInput, ActivityUncheckedUpdateWithoutConclusoesInput>
  }

  export type ActivityUpdateWithoutConclusoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutConclusoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    turmaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUpsertWithoutConclusoesInput = {
    update: XOR<AlunoUpdateWithoutConclusoesInput, AlunoUncheckedUpdateWithoutConclusoesInput>
    create: XOR<AlunoCreateWithoutConclusoesInput, AlunoUncheckedCreateWithoutConclusoesInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutConclusoesInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutConclusoesInput, AlunoUncheckedUpdateWithoutConclusoesInput>
  }

  export type AlunoUpdateWithoutConclusoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneRequiredWithoutAlunosNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutConclusoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    createdAt?: Date | string
    turma: TurmaCreateNestedOneWithoutAlunosInput
    conclusoes?: AtividadeConclusaoCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    turmaId: string
    createdAt?: Date | string
    conclusoes?: AtividadeConclusaoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutNotificacoesInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutNotificacoesInput, AlunoUncheckedCreateWithoutNotificacoesInput>
  }

  export type AlunoUpsertWithoutNotificacoesInput = {
    update: XOR<AlunoUpdateWithoutNotificacoesInput, AlunoUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<AlunoCreateWithoutNotificacoesInput, AlunoUncheckedCreateWithoutNotificacoesInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutNotificacoesInput, AlunoUncheckedUpdateWithoutNotificacoesInput>
  }

  export type AlunoUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turma?: TurmaUpdateOneRequiredWithoutAlunosNestedInput
    conclusoes?: AtividadeConclusaoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    turmaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conclusoes?: AtividadeConclusaoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type TurmaCreateWithoutActivitiesInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    alunos?: AlunoCreateNestedManyWithoutTurmaInput
  }

  export type TurmaUncheckedCreateWithoutActivitiesInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    alunos?: AlunoUncheckedCreateNestedManyWithoutTurmaInput
  }

  export type TurmaCreateOrConnectWithoutActivitiesInput = {
    where: TurmaWhereUniqueInput
    create: XOR<TurmaCreateWithoutActivitiesInput, TurmaUncheckedCreateWithoutActivitiesInput>
  }

  export type AtividadeConclusaoCreateWithoutActivityInput = {
    id?: string
    concluidaEm?: Date | string
    aluno: AlunoCreateNestedOneWithoutConclusoesInput
  }

  export type AtividadeConclusaoUncheckedCreateWithoutActivityInput = {
    id?: string
    alunoId: string
    concluidaEm?: Date | string
  }

  export type AtividadeConclusaoCreateOrConnectWithoutActivityInput = {
    where: AtividadeConclusaoWhereUniqueInput
    create: XOR<AtividadeConclusaoCreateWithoutActivityInput, AtividadeConclusaoUncheckedCreateWithoutActivityInput>
  }

  export type AtividadeConclusaoCreateManyActivityInputEnvelope = {
    data: AtividadeConclusaoCreateManyActivityInput | AtividadeConclusaoCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type TurmaUpsertWithoutActivitiesInput = {
    update: XOR<TurmaUpdateWithoutActivitiesInput, TurmaUncheckedUpdateWithoutActivitiesInput>
    create: XOR<TurmaCreateWithoutActivitiesInput, TurmaUncheckedCreateWithoutActivitiesInput>
    where?: TurmaWhereInput
  }

  export type TurmaUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: TurmaWhereInput
    data: XOR<TurmaUpdateWithoutActivitiesInput, TurmaUncheckedUpdateWithoutActivitiesInput>
  }

  export type TurmaUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUpdateManyWithoutTurmaNestedInput
  }

  export type TurmaUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alunos?: AlunoUncheckedUpdateManyWithoutTurmaNestedInput
  }

  export type AtividadeConclusaoUpsertWithWhereUniqueWithoutActivityInput = {
    where: AtividadeConclusaoWhereUniqueInput
    update: XOR<AtividadeConclusaoUpdateWithoutActivityInput, AtividadeConclusaoUncheckedUpdateWithoutActivityInput>
    create: XOR<AtividadeConclusaoCreateWithoutActivityInput, AtividadeConclusaoUncheckedCreateWithoutActivityInput>
  }

  export type AtividadeConclusaoUpdateWithWhereUniqueWithoutActivityInput = {
    where: AtividadeConclusaoWhereUniqueInput
    data: XOR<AtividadeConclusaoUpdateWithoutActivityInput, AtividadeConclusaoUncheckedUpdateWithoutActivityInput>
  }

  export type AtividadeConclusaoUpdateManyWithWhereWithoutActivityInput = {
    where: AtividadeConclusaoScalarWhereInput
    data: XOR<AtividadeConclusaoUpdateManyMutationInput, AtividadeConclusaoUncheckedUpdateManyWithoutActivityInput>
  }

  export type SetorCreateManyEmpresaInput = {
    id?: string
    nome: string
  }

  export type FuncionarioCreateManyEmpresaInput = {
    ownerId?: string
    id?: string
    codigo: string
    nome: string
    cpf: string
    cargoId: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetorUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type SetorUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type SetorUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUpdateWithoutEmpresaInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cargo?: CargoUpdateOneRequiredWithoutFuncionariosNestedInput
    folhas?: FolhaPagamentoUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutEmpresaInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargoId?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folhas?: FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUncheckedUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateManyWithoutEmpresaInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargoId?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateManyCargoInput = {
    ownerId?: string
    id?: string
    codigo: string
    empresaId: string
    nome: string
    cpf: string
    salarioBase: number
    dependentes?: number
    dataAdmissao: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUpdateWithoutCargoInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutFuncionariosNestedInput
    folhas?: FolhaPagamentoUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutCargoInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folhas?: FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioNestedInput
    pontos?: RegistroPontoUncheckedUpdateManyWithoutFuncionarioNestedInput
    asos?: RegistroASOUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateManyWithoutCargoInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    salarioBase?: FloatFieldUpdateOperationsInput | number
    dependentes?: IntFieldUpdateOperationsInput | number
    dataAdmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolhaPagamentoCreateManyFuncionarioInput = {
    id?: string
    mesReferencia: string
    totalProventos: number
    totalDescontos: number
    salarioLiquido: number
    fgtsDoMes: number
    createdAt?: Date | string
  }

  export type RegistroPontoCreateManyFuncionarioInput = {
    id?: string
    data: Date | string
    entrada: string
    saidaAlmoco: string
    retornoAlmoco: string
    saida: string
    horasExtras?: string
    status?: $Enums.StatusPonto
    createdAt?: Date | string
  }

  export type RegistroASOCreateManyFuncionarioInput = {
    id?: string
    tipo: string
    medico: string
    data: Date | string
    resultado?: $Enums.ResultadoASO
    createdAt?: Date | string
  }

  export type FolhaPagamentoUpdateWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemFolhaUpdateManyWithoutFolhaNestedInput
  }

  export type FolhaPagamentoUncheckedUpdateWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemFolhaUncheckedUpdateManyWithoutFolhaNestedInput
  }

  export type FolhaPagamentoUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesReferencia?: StringFieldUpdateOperationsInput | string
    totalProventos?: FloatFieldUpdateOperationsInput | number
    totalDescontos?: FloatFieldUpdateOperationsInput | number
    salarioLiquido?: FloatFieldUpdateOperationsInput | number
    fgtsDoMes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroPontoUpdateWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    entrada?: StringFieldUpdateOperationsInput | string
    saidaAlmoco?: StringFieldUpdateOperationsInput | string
    retornoAlmoco?: StringFieldUpdateOperationsInput | string
    saida?: StringFieldUpdateOperationsInput | string
    horasExtras?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPontoFieldUpdateOperationsInput | $Enums.StatusPonto
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroPontoUncheckedUpdateWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    entrada?: StringFieldUpdateOperationsInput | string
    saidaAlmoco?: StringFieldUpdateOperationsInput | string
    retornoAlmoco?: StringFieldUpdateOperationsInput | string
    saida?: StringFieldUpdateOperationsInput | string
    horasExtras?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPontoFieldUpdateOperationsInput | $Enums.StatusPonto
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroPontoUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    entrada?: StringFieldUpdateOperationsInput | string
    saidaAlmoco?: StringFieldUpdateOperationsInput | string
    retornoAlmoco?: StringFieldUpdateOperationsInput | string
    saida?: StringFieldUpdateOperationsInput | string
    horasExtras?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPontoFieldUpdateOperationsInput | $Enums.StatusPonto
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroASOUpdateWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    medico?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: EnumResultadoASOFieldUpdateOperationsInput | $Enums.ResultadoASO
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroASOUncheckedUpdateWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    medico?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: EnumResultadoASOFieldUpdateOperationsInput | $Enums.ResultadoASO
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroASOUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    medico?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: EnumResultadoASOFieldUpdateOperationsInput | $Enums.ResultadoASO
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemFolhaCreateManyEventoInput = {
    id?: string
    folhaId: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
  }

  export type ItemFolhaUpdateWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
    folha?: FolhaPagamentoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemFolhaUncheckedUpdateWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    folhaId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
  }

  export type ItemFolhaUncheckedUpdateManyWithoutEventoInput = {
    id?: StringFieldUpdateOperationsInput | string
    folhaId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
  }

  export type ItemFolhaCreateManyFolhaInput = {
    id?: string
    codigoEvento: string
    tipo: $Enums.TipoEvento
    referencia: string
    valorCalculado: number
    memoriaCalculo: string
  }

  export type ItemFolhaUpdateWithoutFolhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
    evento?: EventoFolhaUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemFolhaUncheckedUpdateWithoutFolhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigoEvento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
  }

  export type ItemFolhaUncheckedUpdateManyWithoutFolhaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigoEvento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEventoFieldUpdateOperationsInput | $Enums.TipoEvento
    referencia?: StringFieldUpdateOperationsInput | string
    valorCalculado?: FloatFieldUpdateOperationsInput | number
    memoriaCalculo?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoCreateManyTurmaInput = {
    id?: string
    nome: string
    matricula: string
    senhaHash?: string | null
    createdAt?: Date | string
  }

  export type ActivityCreateManyTurmaInput = {
    id?: string
    type: $Enums.TipoAtividade
    title: string
    statement: string
    instructions: string
    mechanism: $Enums.MecanismoAtividade
    className: string
    createdBy: string
    createdAt?: Date | string
  }

  export type AlunoUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conclusoes?: AtividadeConclusaoUpdateManyWithoutAlunoNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conclusoes?: AtividadeConclusaoUncheckedUpdateManyWithoutAlunoNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateManyWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    senhaHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conclusoes?: AtividadeConclusaoUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conclusoes?: AtividadeConclusaoUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutTurmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTipoAtividadeFieldUpdateOperationsInput | $Enums.TipoAtividade
    title?: StringFieldUpdateOperationsInput | string
    statement?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    mechanism?: EnumMecanismoAtividadeFieldUpdateOperationsInput | $Enums.MecanismoAtividade
    className?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeConclusaoCreateManyAlunoInput = {
    id?: string
    activityId: string
    concluidaEm?: Date | string
  }

  export type NotificacaoCreateManyAlunoInput = {
    id?: string
    mensagem: string
    tipo: $Enums.TipoNotificacao
    destino: $Enums.DestinoNotificacao
    lida?: boolean
    createdAt?: Date | string
  }

  export type AtividadeConclusaoUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutConclusoesNestedInput
  }

  export type AtividadeConclusaoUncheckedUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeConclusaoUncheckedUpdateManyWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    activityId?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFieldUpdateOperationsInput | $Enums.DestinoNotificacao
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFieldUpdateOperationsInput | $Enums.DestinoNotificacao
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoNotificacaoFieldUpdateOperationsInput | $Enums.TipoNotificacao
    destino?: EnumDestinoNotificacaoFieldUpdateOperationsInput | $Enums.DestinoNotificacao
    lida?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeConclusaoCreateManyActivityInput = {
    id?: string
    alunoId: string
    concluidaEm?: Date | string
  }

  export type AtividadeConclusaoUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    aluno?: AlunoUpdateOneRequiredWithoutConclusoesNestedInput
  }

  export type AtividadeConclusaoUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtividadeConclusaoUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
    concluidaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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