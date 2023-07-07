import "./mainsection.css";
interface MyComponentProps {
  message: string;
}
const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <div>{message}</div>;
}

function Main(props: any) {

  const myMessage = "We help you to bridge your aspirations and the exact opportunity here find the perfect job that you desreve and apply easily from wherever you want.";
  return (
    <section className="login-block">
      <div className="container">
        <div className="row rowh">
          <div className="col-8">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid imgh"
                    alt="Not found"
                    src="/assets//header.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <br></br>
                  <h2 className="my-fonth">{props.heading}</h2>
                  <p className="mytitle">{props.desc}</p>
                  {/* Write code to display the subheading as ""We help you to bridge your aspirations and the exact opportunity here find the perfect job that you desreve and apply easily from wherever you want." using props */}
                  
                  
                  <p className="my-fontp"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
