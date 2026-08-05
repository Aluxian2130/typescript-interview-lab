import type { Topic } from "@/shared/types";

export const typescriptTopics: Topic[] = [
  {
    id: "types-and-inference",
    title: "Types and inference",
    description:
      "Understand primitive types, annotations, literal inference, and when TypeScript can infer a type without help.",
    categoryId: "typescript",
    group: "Fundamentals",
    difficulty: "Beginner",
    estimatedMinutes: 8,
    tags: ["primitives", "inference", "literals"],
    keyPoints: [
      "Prefer inference for obvious local values and explicit types at public boundaries.",
      "const preserves a literal value more narrowly than let.",
      "TypeScript checks code at compile time; its types do not exist at runtime.",
    ],
    examples: [
      {
        title: "Inference and annotations",
        code: `const language = "TypeScript"; // inferred as "TypeScript"
let score = 10; // inferred as number

function double(value: number): number {
  return value * 2;
}`,
      },
    ],
    interviewTip:
      "Explain that inference reduces noise, while annotations document and enforce contracts at module boundaries.",
  },
  {
    id: "interfaces-and-type-aliases",
    title: "Interfaces and type aliases",
    description:
      "Model object shapes and understand the practical differences between interfaces and type aliases.",
    categoryId: "typescript",
    group: "Fundamentals",
    difficulty: "Beginner",
    estimatedMinutes: 10,
    tags: ["interface", "type", "objects"],
    keyPoints: [
      "Interfaces are well suited to object contracts and support declaration merging.",
      "Type aliases can represent unions, primitives, tuples, and mapped types.",
      "Both can extend or compose object shapes; consistency matters more than dogma.",
    ],
    examples: [
      {
        title: "Two ways to model data",
        code: `interface User {
  id: string;
  name: string;
}

type Status = "idle" | "loading" | "success" | "error";
type Admin = User & { permissions: string[] };`,
      },
    ],
    interviewTip:
      "A strong answer mentions declaration merging for interfaces and union support for type aliases.",
  },
  {
    id: "functions",
    title: "Typing functions",
    description:
      "Type parameters, return values, optional arguments, callbacks, and functions that never return.",
    categoryId: "typescript",
    group: "Fundamentals",
    difficulty: "Beginner",
    estimatedMinutes: 10,
    tags: ["functions", "callbacks", "void"],
    keyPoints: [
      "Required parameters must come before optional parameters.",
      "void means a caller should ignore the return value; never means completion is impossible.",
      "Function types describe both parameter and return-value contracts.",
    ],
    examples: [
      {
        title: "Function contracts",
        code: `type Formatter = (value: number) => string;

const formatScore: Formatter = (value) => String(value);

function fail(message: string): never {
  throw new Error(message);
}`,
      },
    ],
    interviewTip:
      "Be ready to distinguish void from never: one ignores a result, while the other cannot finish normally.",
  },
  {
    id: "unions-and-narrowing",
    title: "Unions and narrowing",
    description:
      "Represent multiple valid states and safely narrow them with runtime checks.",
    categoryId: "typescript",
    group: "Type Safety",
    difficulty: "Intermediate",
    estimatedMinutes: 12,
    tags: ["unions", "narrowing", "guards"],
    keyPoints: [
      "A union permits only operations shared by every member until it is narrowed.",
      "typeof, instanceof, equality checks, and the in operator are built-in guards.",
      "Control-flow analysis remembers narrowing through reachable code paths.",
    ],
    examples: [
      {
        title: "Narrow before use",
        code: `function formatId(id: string | number): string {
  if (typeof id === "number") {
    return id.toFixed(0);
  }

  return id.toUpperCase();
}`,
      },
    ],
    interviewTip:
      "Describe narrowing as connecting runtime evidence to a more specific compile-time type.",
  },
  {
    id: "unknown-any-never",
    title: "unknown, any, and never",
    description:
      "Choose safe escape hatches and use impossible types to make invalid states visible.",
    categoryId: "typescript",
    group: "Type Safety",
    difficulty: "Intermediate",
    estimatedMinutes: 10,
    tags: ["unknown", "any", "never"],
    keyPoints: [
      "any disables checking and spreads unsafety through dependent code.",
      "unknown accepts any value but requires narrowing before use.",
      "never represents a value that cannot exist and enables exhaustive checks.",
    ],
    examples: [
      {
        title: "Safely handle unknown data",
        code: `function getMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}`,
      },
    ],
    interviewTip:
      "Prefer unknown at untrusted boundaries such as caught errors, parsed JSON, and third-party input.",
  },
  {
    id: "type-guards",
    title: "Custom type guards",
    description:
      "Teach TypeScript about runtime validation with predicates and assertion functions.",
    categoryId: "typescript",
    group: "Type Safety",
    difficulty: "Intermediate",
    estimatedMinutes: 12,
    tags: ["predicates", "validation", "narrowing"],
    keyPoints: [
      "A predicate return type has the form value is SomeType.",
      "The implementation must genuinely validate the promised shape.",
      "Type assertions do not validate runtime data; guards can.",
    ],
    examples: [
      {
        title: "Predicate function",
        code: `interface User {
  id: string;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "string"
  );
}`,
      },
    ],
    interviewTip:
      "Point out that an incorrect predicate can lie to the compiler, so guards need careful tests.",
  },
  {
    id: "generics",
    title: "Generics and constraints",
    description:
      "Preserve relationships between input and output types without sacrificing reuse.",
    categoryId: "typescript",
    group: "Generics",
    difficulty: "Intermediate",
    estimatedMinutes: 14,
    tags: ["generics", "constraints", "inference"],
    keyPoints: [
      "A generic type parameter captures a type chosen at the call site.",
      "Constraints express capabilities a generic value must provide.",
      "Use generics when types are related, not merely to replace unknown.",
    ],
    examples: [
      {
        title: "Preserve the selected property type",
        code: `function getProperty<T, K extends keyof T>(
  object: T,
  key: K,
): T[K] {
  return object[key];
}

const name = getProperty({ id: 1, name: "Ada" }, "name");
// name is string`,
      },
    ],
    interviewTip:
      "Explain the relationship: K must be a key of T, so T[K] is the exact value type for that key.",
  },
  {
    id: "keyof-typeof-indexed-access",
    title: "keyof, typeof, and indexed access",
    description:
      "Derive types from existing values and object shapes instead of duplicating contracts.",
    categoryId: "typescript",
    group: "Generics",
    difficulty: "Intermediate",
    estimatedMinutes: 12,
    tags: ["keyof", "typeof", "indexed-access"],
    keyPoints: [
      "keyof produces a union of known property keys.",
      "typeof in a type position captures the static type of a value.",
      "T[K] looks up the value type associated with a key type.",
    ],
    examples: [
      {
        title: "Derive a union from data",
        code: `const roles = ["admin", "editor", "viewer"] as const;
type Role = (typeof roles)[number];

interface User {
  profile: { displayName: string };
}

type Profile = User["profile"];`,
      },
    ],
    interviewTip:
      "Deriving types from a source of truth prevents runtime values and manually maintained unions from drifting apart.",
  },
  {
    id: "utility-types",
    title: "Utility types",
    description:
      "Transform existing contracts with Partial, Required, Pick, Omit, Record, and related helpers.",
    categoryId: "typescript",
    group: "Type Transformations",
    difficulty: "Intermediate",
    estimatedMinutes: 14,
    tags: ["utility-types", "partial", "pick", "record"],
    keyPoints: [
      "Utility types create new types; they do not modify the source type.",
      "Pick and Omit select object properties, while Partial and Required alter optionality.",
      "Record models an object whose keys and values follow known types.",
    ],
    examples: [
      {
        title: "Derive API contracts",
        code: `interface User {
  id: string;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;
type UserUpdate = Partial<Omit<User, "id">>;
type UsersById = Record<string, User>;`,
      },
    ],
    interviewTip:
      "Show how deriving related contracts avoids repeating fields and keeps changes localized.",
  },
  {
    id: "discriminated-unions",
    title: "Discriminated unions",
    description:
      "Model state machines with a shared literal field and enforce exhaustive handling.",
    categoryId: "typescript",
    group: "Advanced Types",
    difficulty: "Advanced",
    estimatedMinutes: 14,
    tags: ["discriminated-unions", "exhaustiveness", "state"],
    keyPoints: [
      "Each member has a common discriminant with a unique literal value.",
      "Narrowing the discriminant exposes fields that belong to that member.",
      "A never check makes newly added variants produce a compiler error.",
    ],
    examples: [
      {
        title: "Exhaustive state handling",
        code: `type Result =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function render(result: Result): string {
  switch (result.status) {
    case "loading": return "Loading";
    case "success": return result.data;
    case "error": return result.message;
    default: {
      const exhaustive: never = result;
      return exhaustive;
    }
  }
}`,
      },
    ],
    interviewTip:
      "Use discriminated unions to make impossible combinations of fields impossible to represent.",
  },
  {
    id: "mapped-conditional-types",
    title: "Mapped and conditional types",
    description:
      "Generate properties from key unions and choose output types based on type relationships.",
    categoryId: "typescript",
    group: "Advanced Types",
    difficulty: "Advanced",
    estimatedMinutes: 16,
    tags: ["mapped-types", "conditional-types", "infer"],
    keyPoints: [
      "Mapped types iterate over keys using the in keyword.",
      "Conditional types use the form T extends U ? X : Y.",
      "infer introduces a type variable inside the true branch of a conditional type.",
    ],
    examples: [
      {
        title: "Transform and extract types",
        code: `type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type ElementType<T> =
  T extends readonly (infer Item)[] ? Item : never;

type Name = ElementType<string[]>; // string`,
      },
    ],
    interviewTip:
      "Start with the input-to-output transformation in plain language before explaining the syntax.",
  },
  {
    id: "async-types",
    title: "Promises and Awaited",
    description:
      "Type asynchronous functions, resolved values, and error boundaries accurately.",
    categoryId: "typescript",
    group: "Applied TypeScript",
    difficulty: "Intermediate",
    estimatedMinutes: 10,
    tags: ["promise", "async", "awaited"],
    keyPoints: [
      "An async function always returns a Promise.",
      "Awaited recursively unwraps Promise-like types.",
      "Caught errors should be treated as unknown until narrowed.",
    ],
    examples: [
      {
        title: "Derive resolved data",
        code: `async function fetchUser() {
  return { id: "1", name: "Ada" };
}

type User = Awaited<ReturnType<typeof fetchUser>>;

const loadUser = async (): Promise<User> => fetchUser();`,
      },
    ],
    interviewTip:
      "Mention that Promise<T> describes the eventual success value, not the type of a rejected error.",
  },
];
