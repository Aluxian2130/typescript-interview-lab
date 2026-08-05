export interface TopicExample {
  title: string;
  code: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  group: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedMinutes: number;
  tags: string[];
  keyPoints: string[];
  examples: TopicExample[];
  interviewTip: string;
}
