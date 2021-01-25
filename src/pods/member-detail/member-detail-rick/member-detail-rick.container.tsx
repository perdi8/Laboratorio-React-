import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { MemberDetailRickComponent } from "./member-detail-rick.component";

import {
  createDefaultMemberDetailRick,
  MemberDetailRickEntity,
} from "./member-detail-rick.vm";

interface RouteParams {
  id: string;
}

export const MemberDetailRickContainer: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const [member, setMember] = React.useState<MemberDetailRickEntity>(
    createDefaultMemberDetailRick()
  );

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMember(json);
      });
  }, []);

  const handleButtonGoBack = () => {
    history.goBack();
  };

  return (
    <MemberDetailRickComponent
      member={member}
      onClickBack={handleButtonGoBack}
    />
  );
};
