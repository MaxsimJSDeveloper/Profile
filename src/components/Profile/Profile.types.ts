interface Stats {
  followers: number;
  views: number;
  likes: number;
}

export interface User {
  readonly username: string;
  tag: string;
  readonly location: string;
  readonly avatar: string;
  readonly stats: Stats;
}

export interface ProfileProps {
  userData: User;
}
