import axios from "axios";

export const fetchUsersData = async () => {
    const { data } = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );

    return data
}