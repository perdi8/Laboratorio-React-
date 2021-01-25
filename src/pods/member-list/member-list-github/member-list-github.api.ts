import React from 'react';
import { MyContext } from '../../../common-app/context/member-list-github-context';


export const getMemberListGithub = () => {
    const { filterValueContext, setFilterValueContext } = React.useContext(
        MyContext
      );
    const [filterContext, setFilterContext] = React.useState(filterValueContext);
    const [memberListGithub, setMemberListGithub] = React.useState([]);

    const loadMemberListGithub = () => {
        fetch(`https://api.github.com/orgs/${filterContext}/members`)
          .then((response) => response.json())
          .then((json) => setMemberListGithub(json));
      };

      return {memberListGithub, filterContext, setFilterContext, setFilterValueContext,loadMemberListGithub }
}

