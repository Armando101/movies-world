export interface ICredits {
  cast: ICast[];
  crew: ICrew[];
  id: number;
}

export interface ICast {
  character?: string;
  id?: number;
  name?: string;
  originalName?: string;
  profile_path?: string;
  profileUrl?: string;
}

export interface ICrew {
  department?: string;
  id?: number;
  job?: string;
  name?: string;
  originalName?: string;
  profile_path?: string;
  profileUrl?: string;
}
