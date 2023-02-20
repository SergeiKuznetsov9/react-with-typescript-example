import axios from "axios";
import React, {useEffect, useState, FC} from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/types";

type UserItemPageParams = {
  id: string;
}

export const UserItemPage: FC = () => {
  const params = useParams<UserItemPageParams>();
  
  const [user, setUser] = useState<IUser | null>(null)

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        'https://jsonplaceholder.typicode.com/users/' + params.id
      );

      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [params]);







  return <div>
    ID: {user?.id}
    <br/>
    Name: {user?.name}
    <br/>
    Email: {user?.email}
    <br/>
    City: {user?.address.city}
    <br/>
    Street: {user?.address.street}
    <br/>
    Zipcode: {user?.address.zipcode}
    <br/>
  </div>;
};
