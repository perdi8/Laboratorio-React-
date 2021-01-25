import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { MemberDetailGithubComponent } from "./member-detail-github.component";
import {
  createDefaultMemberDetailGithub,
  MemberDetailGithubEntity,
} from "./member-detail-github.vm";

interface RouteParams {
  id: string;
}

export const MemberDetailGithubContainer: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const [member, setMember] = React.useState<MemberDetailGithubEntity>(
    createDefaultMemberDetailGithub()
  );

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  const handleButtonGoBack = () => {
    history.goBack();
  };

  return (
    <MemberDetailGithubComponent
      ParamsId={id}
      member={member}
      onClickBack={handleButtonGoBack}
    />
  );
};
