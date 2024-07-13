interface Stats {
  followers: number;
  views: number;
  likes: number;
}

export interface User {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: Stats;
}

export interface ProfileProps {
  userData: User;
}
