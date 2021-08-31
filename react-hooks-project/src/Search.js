import React from "react";

export function Search() {
  return (
    <div>
      <div className="search-input">
        <input type="text" placeholder="Search" />
      </div>
      <h1 className="h1">Search</h1>
      <div className="books">
        <table>
          <thead>
            <tr>
              <th className="title-col">
                <h2>Title</h2>
              </th>
              <th className="author-col">
                <h2>Author</h2>
              </th>
              <th className="year-col">
                <h2>Pub Year</h2>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
