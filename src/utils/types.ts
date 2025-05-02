export type Person = {
  id: string;
  name: string;
  age: number;
  gender: string;
  availability: string;
  tags: string[];
  description: string;
  profileImage: string;
  status: "online" | "offline";
  rating: number;
  sessions: number;
  helpedCount: number;
  returnRate: number;
  languages: string[];
  availabilitySchedule: Array<{ day: string; hours: string }>;
};
