import React from "react";

export default ({ categories, handleChange, handleSubmit }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      <div
        className="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div
          className="card-body"
          style={{
            padding: "40px"
          }}
        >
          <h1
            className="font-weight-bold"
            style={{
              padding: "10px"
            }}
          >
            New Product
          </h1>
          <h5 className="font-weight-normal">
            Create a new experience to your site.
          </h5>
        </div>
      </div>
      <form
        style={{
          padding: "40px",
          paddingBottom: "0px"
        }}
      >
        <div className="form-group">
          <label for="inputNameOfExperience">Name of experience</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            id="inputNameOfExperience"
            placeholder="Parachute in Dubai"
          />
        </div>
        <div class="form-group">
          <label for="inputSelect">Category</label>
          <select
            class="form-control"
            id="inputSelect"
            name="categoryId"
            onChange={handleChange}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {/* name y value para poder pasarlo por [e.target.name]: e.target.value*/}
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label for="inputDescription">Description</label>
          <input
            onChange={handleChange}
            name="description"
            type="text"
            className="form-control"
            id="inputDescription"
            placeholder="An extreme adventure of parachute..."
          />
        </div>
        <div className="form-group">
          <label for="inputImageUrl">Image URL</label>
          <input
            onChange={handleChange}
            name="img_1"
            type="text"
            className="form-control"
            id="inputImageUrl"
            placeholder="https://www..."
          />
        </div>
        <div className="form-group">
          <label for="inputImageUrl">Image 2 URL</label>
          <input
            onChange={handleChange}
            name="img_2"
            type="text"
            className="form-control"
            id="inputImageUrl"
            placeholder="https://www..."
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputPrice">Price</label>
            <input
              onChange={handleChange}
              name="price"
              type="number"
              className="form-control"
              id="inputPrice"
            />
          </div>

          <div
            className="form-group col-md-6"
            style={{
              paddingBottom: "20px"
            }}
          >
            <label for="inputStock">Stock</label>
            <input
              onChange={handleChange}
              name="stock"
              type="number"
              className="form-control"
              id="inputStock"
            />
          </div>
        </div>
      </form>
      <div
        class="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div class="card-body">
          <button
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6",
              marginBottom: "100px",
              width: "200px"
            }}
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
