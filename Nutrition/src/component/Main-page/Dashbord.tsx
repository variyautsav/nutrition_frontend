import React, { useState } from "react";
import Sidebar from "../../Layout/Sidebar";
import { GiBodyHeight, GiWeightScale, GiStairsGoal } from "react-icons/gi";
import { Modal, Button, Form } from "react-bootstrap";

const Dashboard: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col col-lg-2">
          <section className="sidebar">
            <Sidebar />
          </section>
        </div>

        <div className="col col-lg-10">
          <section className="main-content">
            <div className="flex-grow-1">
              <nav className="navbar-main navbar-light bg-white shadow-sm px-4 d-flex justify-content-between">
                <h5 className="mb-0">
                  Hello, Adam! 👋
                  <h6 className="iner-text">
                    <br />Let's begin our journey to better health
                  </h6>
                </h5>

                <div
                  className="d-flex align-items-center justify-content-between p-2 rounded bg-white shadow-sm"
                  style={{ width: "250px" }}
                >
                  <div className="d-flex align-items-center">
                    <div className="profile-img d-flex justify-content-center align-items-center me-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                        alt="User"
                        className="rounded-circle"
                        width="40"
                        height="40"
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Adam Vasylenko</h6>
                      <small className="text-muted">Member</small>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            <div className="container mt-4">
              <div className="row g-4">
                {/* Weight Card */}
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="card p-3 text-center">
                    <h1 className="logoweight">
                      <GiWeightScale />
                    </h1>
                    <h2>Weight</h2>
                    <h2> kg</h2>
                  </div>
                </div>

                {/* Height Card */}
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="card p-3 text-center">
                    <h1 className="logoHeight">
                      <GiBodyHeight />
                    </h1>
                    <h1>Height</h1>
                    <h2>5.7</h2>
                  </div>
                </div>

                {/* Goal Card */}
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="card p-3 text-center">
                    <h1 className="logogoal">
                      <GiStairsGoal />
                    </h1>
                    <h2>Goal</h2>
                    <h2>  Kg</h2>
                  </div>
                </div>

                {/* Image Upload Card */}
                <div className="col-12 col-sm-4 ">
                  <div className="card p-3 text-center upload_card">
                    <h2 className="mt-4 mb-5">Check Your Food Details</h2>
                    <h6 className="mb-5">Upload a picture of your food to help achieve your goal</h6>
                    <div className="text text-center">
                      <label htmlFor="upload-button" className="btn btn-orange" style={{ backgroundColor: "orange", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Upload Image
                      </label>
                      <input
                        id="upload-button"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                      {image && <p className="mt-2">Uploaded: {image.name}</p>}
                    </div>
                  </div>
                </div>

                {/* Food Details Card */}
                <div className="col-12 col-sm-8">
                  <div className="card p-3 text-center">
                    <h2>Food Details</h2>
                    <h6>Protein :</h6>
                    <h6>Sugar :</h6>
                    <h6>Fat :</h6>
                    <h6>Total :</h6>
                    <h5>Result :</h5>
                    <div className="text text-center">
                      <button className="btnadd" style={{ backgroundColor: "orange", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px" }} onClick={() => setShowModal(true)}>
                        Add That on Meal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title  className="fw-bold">Meal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label  className="fw-bold">  Title</Form.Label>
              <Form.Control type="text" placeholder="Enter meal title" />
            </Form.Group>
            <Form.Group>
              <Form.Label  className="fw-bold">Uploaded Image</Form.Label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="form-control"
              />
              {image && <p className="mt-2">Uploaded: {image.name}</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label  className="fw-bold" >Meal Type</Form.Label>
              <Form.Select>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label  className="fw-bold">Day</Form.Label>
              <Form.Select>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="warning">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dashboard;
