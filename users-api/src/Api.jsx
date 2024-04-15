import { useEffect, useState } from "react";
import "./Api.css";
function Api() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users"; //apicall

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          // <li key={item.id}>
          //   ID : {item.id} <br />
          //   NAME : {item.name} <br />
          //   USERNAME : {item.username}
          //   <br />
          //   EMAIL : {item.email} <br />
          //   ADDRESS :
          //   <ul>
          //     <li>STREET : {item.address.street}</li>
          //     <li>SUITE : {item.address.suite}</li>
          //     <li>CITY : {item.address.city}</li>
          //     <li>ZIPCODE : {item.address.zipcode}</li>
          //     GEO :
          //     <ul>
          //       <li>LAT : {item.address.geo.lat}</li>
          //       <li>LNG : {item.address.geo.lng}</li>
          //     </ul>
          //   </ul>
          //   <li>PHONE : {item.phone}</li>
          //   <li>WEBSITE : {item.website}</li>
          //   COMPANY :
          //   <ul>
          //     <li>NAME : {item.company.name}</li>
          //     <li>CATCHPHRASE : {item.company.catchPhrase}</li>
          //     <li>BS : {item.company.bs}</li>
          //   </ul>
          // </li>
          <>
            <table key={item.id}>
              <tr>
                <th>ID - Name</th>
              </tr>
              <tr>
                <td>
                  <b>{item.id} :</b> {item.name}
                  <br />
                  <p></p>
                  <b>USERNAME :</b> {item.username}
                  <br />
                  <p></p>
                  <b>EMAIL :</b> {item.email} <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>ADDRESS :</b>
                  <ul>
                    <li>STREET : {item.address.street}</li>
                    <li>SUITE : {item.address.suite}</li>
                    <li>CITY : {item.address.city}</li>
                    <li>ZIPCODE : {item.address.zipcode}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <b>GEO :</b>
                  <ul>
                    <li>LAT : {item.address.geo.lat}</li>
                    <li>LNG : {item.address.geo.lng}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <b>PHONE :</b> {item.phone}
                  <br />
                  <p></p>
                  <b>WEBSITE :</b> {item.website}
                </td>
              </tr>
              <tr>
                <td>
                  <b>COMPANY : </b>
                  <br />
                  <ul>
                    <li>NAME : {item.company.name}</li>
                    <li>CATCHPHRASE : {item.company.catchPhrase}</li>
                    <li>BS : {item.company.bs}</li>
                  </ul>
                </td>
              </tr>
            </table>
            <br />
          </>
        ))}
    </div>
  );
}
export default Api;
