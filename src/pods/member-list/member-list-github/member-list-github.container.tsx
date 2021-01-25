import React from "react";
import { useHistory } from "react-router-dom";
import { routesGitHub } from "../../../core/router";
import { getMemberListGithub } from "./member-list-github.api";
import { MemberListGithubComponent } from "./member-list-github.component";

export const MemberListGithubContainer: React.FC = () => {
  const history = useHistory();
  const {
    memberListGithub,
    filterContext,
    setFilterContext,
    setFilterValueContext,
    loadMemberListGithub,
  } = getMemberListGithub();

  React.useEffect(() => {
    loadMemberListGithub();
  }, [filterContext]);

  const handleFilterCompany = (filter: string) => {
    setFilterContext(filter);
    setFilterValueContext(filter);
  };

  const handleNavigation = (id) =>
    history.push(routesGitHub.memberDetailGitHub(id));

  return (
    <>
      <MemberListGithubComponent
        memberListGithub={memberListGithub}
        filterCompany={filterContext}
        onClickButtonFilter={handleFilterCompany}
        onClickButtonEdit={handleNavigation}
      />
    </>
  );
};
