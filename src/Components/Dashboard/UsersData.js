import React from "react";
import { useQuery } from "react-query";

const UsersData = () => {
  const { data: usersData, refetch } = useQuery("usersData", () =>
    fetch("  https://smart-coffee-server-production.up.railway.app/usersData", {
      method: "GET",
      headers: {},
    }).then((res) => res.json())
  );
  refetch();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.map((user, index) => (
              <tr>
                <th>{index + 1}.</th>
                <th>{user?.name}</th>
                <td>{user?.email}</td>
                <td>{user?.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersData;
