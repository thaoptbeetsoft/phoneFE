function SmallBanner() {
    return ( 
        <section className="small-banner section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-banner">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2hUYGjBFz2H3qetuRiAUWI7szwznnrGNqA&usqp=CAU" alt="#" />{/*600x370*/}
          <div className="content">
            <p>Man's Collectons</p>
            <h3>Summer travel <br /> collection</h3>
            <a href="#">Discover Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-banner">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXo1CnhIz41aB0kKWRpBfjt2OQxu7c0Fh2Rg&usqp=CAU" alt="#" />
          <div className="content">
            <p>Bag Collectons</p>
            <h3>Awesome Bag <br /> 2020</h3>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="single-banner tab-height">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj76kJI9XMnnps58x96X9r2XJo2swOK88tKIlTi9x63aMJQZeJLCFW_VYMUuvrC_4Zd6Y&usqp=CAU" alt="#" />
          <div className="content">
            <p>Flash Sale</p>
            <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
            <a href="#">Discover Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     );
}

export default SmallBanner;