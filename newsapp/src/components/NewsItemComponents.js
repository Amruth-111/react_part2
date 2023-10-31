import React from "react";

export default function NewsItemComponents(props) {
  let { title, titleDescription, imageURL, newsURL, author, date, source } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className=" badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img
          src={
            !imageURL
              ? "https://imgs.search.brave.com/2ZDhncsGzuIxAkSputY9UiolCx9dbSnDyshy9YVl2Tc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzU3LzMzLzM1/LzM2MF9GXzE1NzMz/MzU2M190Vzl4c0ln/YnlPMHZwTk52SGVr/bFdDcDVjaGg4T0Q3/OC5qcGc"
              : imageURL
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{titleDescription}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
