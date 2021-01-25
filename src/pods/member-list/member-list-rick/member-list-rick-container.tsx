import React from "react";
import { useHistory } from "react-router-dom";
import { routesRick } from "../../../core/router";
import { MemberListRickComponent } from "./member-list-rick.component.";
import { useDebounce } from "use-debounce";
import { getMemberListRick } from "./member-list-rick.api";

export const MemberListRickContainer: React.FC = () => {
  const history = useHistory();
  const {
    memberListRick,
    loadMemberListRick,
    filter,
    setFilter,
  } = getMemberListRick();
  const [debounceFilterRick] = useDebounce(filter, 1000);

  React.useEffect(() => {
    loadMemberListRick();
  }, [debounceFilterRick]);

  const handleButtonEdit = (id: string) => {
    history.push(routesRick.memberDetailRick(id));
  };

  const handleValueFilter = (valueFilter) => {
    setFilter(valueFilter);
  };

  return (
    <>
      <MemberListRickComponent
        memberListRick={memberListRick}
        onClickButtonEdit={handleButtonEdit}
        onValueFilter={handleValueFilter}
      />
    </>
  );
};
