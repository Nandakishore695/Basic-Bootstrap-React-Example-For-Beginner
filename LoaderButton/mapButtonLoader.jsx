import React from 'react';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function MapButtonLoader() {
    const [loader, setLoader] = useState(false);
    const [indexLoader, setIndexLoader] = useState(null);
    const tsDistrict = [{ no: 0, district: "Adilabad" }, { no: 1, district: "Bhadradri Kothagudem" }, { no: 2, district: "Hyderabad" }, { no: 3, district: "Jagitial" },
    { no: 4, district: "Jangaon" }, { no: 5, district: "Jayashankar Bhupalapally" }, { no: 6, district: "Jogulamba Gadwal" }, { no: 7, district: "Kamareddy" }, { no: 8, district: "Karimnagar" },
    { no: 9, district: "Khammam" }];

    const handleSelect = (idx) => {
        debugger
       
            setLoader(true);
            setIndexLoader(idx);
      
       
    }

    return (
        <>
            <center>
                <h1>Secific Select Button Load</h1>
                <table className="table">
                    <thead>
                        <tr className="claim-head ">
                            <th scope="col" className="pool-data">
                                No.
                            </th>
                            <th scope="col" className="pool-data">
                                District Names
                            </th>
                            <th scope="col" className="pool-data">
                                Select
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(tsDistrict)}
                        {tsDistrict?.map((item, idx) => (
                            <tr key={idx}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    {item.district}
                                </td>
                                <td>

                                    <button onClick={() => handleSelect(idx)}>
                                        {loader && idx == indexLoader && (
                                            <Spinner
                                                animation="border"
                                                variant="dark"
                                                size="sm"
                                            ></Spinner>
                                        )}
                                        Click
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </>
    )
}
export default MapButtonLoader