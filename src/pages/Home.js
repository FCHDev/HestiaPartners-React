import "../home.css";
import Header from "../components/Header";
import Speech from "../components/Speech";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Speech />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
