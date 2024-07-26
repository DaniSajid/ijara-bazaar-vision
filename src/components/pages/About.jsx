import './css/about.css'

const About = () => {
  return (
    <div className="container container-about mt-5">
    <div className="row">
      <div className="col-md-6">
        <img src="image1.jpg" alt="Service 1" className="img-fluid mb-4" />
      </div>
      <div className="col-md-6">
        <h2>How Are We?</h2>
        <p>The beginning of our journey was a hell hole. Turpis purus, gravida orci, fringilla. A ac id ligula sed odio. Consequat pharetra erat magna suspendisse id odio habitant... <a href="#">Read more</a></p>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-6">
        <h2>Choose Us For Best Services</h2>
        <p>We are nunc, lorem sit lorem urna, pretium dignissim. Id vel, quis dui donec dolor in. Phasellus aenean orci, bibendum. <a href="#">Read more</a></p>
      </div>
      <div className="col-md-6">
        <img src="image2.jpg" alt="Service 2" className="img-fluid mb-4" />
      </div>
    </div>

    <div className="row text-center my-5">
      <div className="col-12">
        <h3>We Install Or Repair All Brands</h3>
      </div>
      <div className="col-12 brands">
        <img src="brand1.png" alt="Brand 1" className="img-fluid mx-2" />
        <img src="brand2.png" alt="Brand 2" className="img-fluid mx-2" />
        <img src="brand3.png" alt="Brand 3" className="img-fluid mx-2" />
        <img src="brand4.png" alt="Brand 4" className="img-fluid mx-2" />
        <img src="brand5.png" alt="Brand 5" className="img-fluid mx-2" />
      </div>
    </div>

    <div className="row my-5">
      <div className="col-12 text-center">
        <h2>Our Happy Customers</h2>
      </div>
      <div className="col-md-4">
        <div className="testimonial">
          <p>We provide students with timely and tailored support and services. We offer culturally sensitive assessments, while honoring each student's learning and assessment needs."</p>
          <p><strong>Karma Samuel</strong><br />★★★★★</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial">
          <p>We provide students with timely and tailored support and services. We offer culturally sensitive assessments, while honoring each student's learning and assessment needs."</p>
          <p><strong>James Rodrigo</strong><br />★★★★★</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial">
          <p>We provide students with timely and tailored support and services. We offer culturally sensitive assessments, while honoring each student's learning and assessment needs."</p>
          <p><strong>James Rodrigo</strong><br />★★★★★</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
