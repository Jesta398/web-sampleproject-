import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form">
      <div className="container pt-5">
        <div className="col-md-4 col-sm-12 mx-auto border border-secondary p-3 mb-5">
        <form className="mt-3">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="mb-3">
          <label for="" class="form-label">
               Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="mb-3">
          <label for="" class="form-label">
              Place
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Placee"
              aria-label="Place"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-success ">
            Submit
          </button>
        </form>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;