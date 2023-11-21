import React from "react";

function List({ Data, SearchItems }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {Data.filter((item) =>
          item.name.toLowerCase().startsWith(SearchItems.toLocaleLowerCase())
        ).map((data, index) => {
          return (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">Email : {data.email}</p>
                  <p className="card-text">Username : {data.username}</p>
                  <p className="card-text">Phone : {data.phone}</p>
                  <p className="card-text">
                    Website :{" "}
                    <a href={`https://${data.website}`} target="_blank">
                      {data.website}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
