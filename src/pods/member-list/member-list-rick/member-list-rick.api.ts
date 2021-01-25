import React from 'react';


export const getMemberListRick = () => {
   
    const [filter, setFilter] = React.useState("");
    const [memberListRick, setMemberListRick] = React.useState([]);

    const loadMemberListRick = () => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
        .then((response) => response.json())
        .then((json) => setMemberListRick(json.results));
      };

      return {memberListRick, filter, setFilter, loadMemberListRick }
}

