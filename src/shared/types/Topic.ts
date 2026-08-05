export interface Topic {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  tags: string[];
}
