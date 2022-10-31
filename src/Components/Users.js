import React from "react";
import { useQuery } from "react-query";
import Loader from "./Shared/Loader";

import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  refetch();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user,index) => (
              <UserRow key={user._id} user={user} index={index}  refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
