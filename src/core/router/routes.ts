import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  dashboard: string;
  memberListGitHub: string;
  memberListRick: string;
  memberDetailGitHub: string;
  memberDetailRick: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  dashboard: '/dashboard',
  memberListGitHub: '/memberListGitHub',
  memberListRick: '/memberListRick',
  memberDetailGitHub: '/memberDetailGithub/:id',
  memberDetailRick: '/memberDetailRick/:id',
};

interface RoutesGitHub extends Omit<SwitchRoutes, 'memberDetailGitHub'> {
  memberDetailGitHub: (id: string) => string;
}
interface RoutesRick extends Omit<SwitchRoutes, 'memberDetailRick'> {
  memberDetailRick: (id: string) => string;
}

export const routesGitHub: RoutesGitHub = {
  ...switchRoutes,
  memberDetailGitHub: id =>
    generatePath(switchRoutes.memberDetailGitHub, { id }),
};

export const routesRick: RoutesRick = {
  ...switchRoutes,
  memberDetailRick: id => generatePath(switchRoutes.memberDetailRick, { id }),
};
