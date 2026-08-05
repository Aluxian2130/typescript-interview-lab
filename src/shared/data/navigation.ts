import type { NavigationItem } from "@/shared/types/NavigationItem";

import {
  Atom,
  BookOpen,
  BrainCircuit,
  Database,
  FileCode2,
  Home,
  Landmark,
  Network,
  Server,
} from "lucide-react";

export const navigation: NavigationItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    id: "react",
    title: "React",
    path: "/react",
    icon: Atom,
  },
  {
    id: "typescript",
    title: "TypeScript",
    path: "/typescript",
    icon: BookOpen,
  },
  {
    id: "javascript",
    title: "JavaScript",
    path: "/javascript",
    icon: FileCode2,
  },
  {
    id: "node",
    title: "Node.js",
    path: "/node",
    icon: Server,
  },
  {
    id: "sql",
    title: "SQL",
    path: "/sql",
    icon: Database,
  },
  {
    id: "palantir",
    title: "Palantir",
    path: "/palantir",
    icon: Landmark,
  },
  {
    id: "algorithms",
    title: "Algorithms",
    path: "/algorithms",
    icon: BrainCircuit,
  },
  {
    id: "system-design",
    title: "System Design",
    path: "/system-design",
    icon: Network,
  },
];
