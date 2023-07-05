import React from 'react';

const Results = (props) => {
  const { total, url, wordCount, links } = props;

  const displayedLinks = links.slice(0, 5);

  const res = new Array(total).fill();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Results</h1>
      <table>
        <thead>
          <tr>
            <th>Domain Name</th>
            <th>Word Count</th>
            <th>Favourite</th>
            <th>Web-Links</th>
            <th>Media-Links</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>{url}</td>
            <td>{wordCount}</td>
            <td>{displayedLinks.join(', ')}</td>
            <td>Data</td>
          </tr> */}
          
          {res.map((_, i) => (
            <tr key={i}>
              <td>{url}</td>
              <td>{wordCount}</td>
              <td>data</td>
              <td>{displayedLinks}</td>
              <td>Data</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
