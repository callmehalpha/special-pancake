import React, { useState } from "react";
import "./Exam.css";
import axios from "axios";

const Exam = () => {
  const [email, setEmail] = useState("");

  const handleJoin = () => {
    axios
      .post("https://hookpnp.site/api/newsletters/subscribe", { email })
      .then((response) => {
        console.log("API call successful:", response.data);

        setEmail("");
        // const modal = new bootstrap.Modal(
        //   document.getElementById("staticBackdrop")
        // );
        // modal.hide();
      })
      .catch((error) => {
        console.error("API call failed:", error);
      });
  };
  return (
    <nav class="navbar navbar-expand-lg static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./images/Logo.png" alt="..." width={180} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Stories
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Safety Tips
              </a>
            </li>
            <button
              type="button"
              class="btn download"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Join waiting list
            </button>
          </ul>
          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-md">
              <div class="modal-content">
                <div class="modal-header border-0">
                  <h5
                    class="modal-title w-100 text-center"
                    id="staticBackdropLabel"
                  >
                    Join waiting list
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-center">
                  <small className="small-f">
                    Be the first to know when we launch, and get exclusive
                    offers and goodies
                  </small>
                </div>
                <form>
                  <div class="mb-3">
                    <input
                      type="text"
                      className="form-control letter"
                      placeholder="Your email address here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </form>
                <div class="modal-footer border-0">
                  <button type="button" class="btn join" onClick={handleJoin}>
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Exam;
