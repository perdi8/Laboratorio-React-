export interface MemberDetailGithubEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
  location: string;
}

export const createDefaultMemberDetailGithub = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
  avatar_url: "",
  public_repos: "",
  followers: "",
  location: "",
});
