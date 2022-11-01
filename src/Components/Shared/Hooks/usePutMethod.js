import { useEffect, useState } from "react";

const usePutMethod = (user) => {
  const [putMethod, setPutMethod] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    console.log(currentUser);
    if (email) {
      fetch(
        ` https://smart-coffee-server-production.up.railway.app/users/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPutMethod(data);
        });
    }
  }, [user]);
  return [putMethod];
};

export default usePutMethod;
