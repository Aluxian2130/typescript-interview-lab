import type { Category } from "@/shared/types/Category";

import {
  Atom,
  Braces,
  FileCode2,
  Server,
  Database,
  Landmark,
  BrainCircuit,
  Network,
} from "lucide-react";

export const categories: Category[] = [
  {
    id: "react",
    title: "React",
    description: "Modern React fundamentals and advanced concepts.",
    icon: Atom,
    topicCount: 23,
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Static typing, generics, and advanced language features.",
    icon: Braces,
    topicCount: 31,
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Core language concepts and browser APIs.",
    icon: FileCode2,
    topicCount: 28,
  },
  {
    id: "node",
    title: "Node.js",
    description: "Server-side JavaScript and REST APIs.",
    icon: Server,
    topicCount: 18,
  },
  {
    id: "sql",
    title: "SQL",
    description: "Queries, indexing, joins, and optimization.",
    icon: Database,
    topicCount: 20,
  },
  {
    id: "palantir",
    title: "Palantir",
    description: "Foundry, Ontology, Functions, OSDK, and Workshop.",
    icon: Landmark,
    topicCount: 15,
  },
  {
    id: "algorithms",
    title: "Algorithms",
    description: "Data structures and coding interview problems.",
    icon: BrainCircuit,
    topicCount: 40,
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Distributed systems and scalable architectures.",
    icon: Network,
    topicCount: 22,
  },
];
