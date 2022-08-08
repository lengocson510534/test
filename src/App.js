import "./App.css";
import Header from "./components/Header";
import Icon from "./UI/Icon";

function App() {
  const icon = [
    { icon: "bx bxl-youtube", title: "youtube" },
    { icon: "bx bxl-facebook-circle", title: "facebook" },
    { icon: "bx bxl-instagram", title: "instagram" },
    { icon: "bx bxl-react", title: "react" },
    { icon: "bx bxl-javascript", title: "javascript" },
    { icon: "bx bxl-tailwind-css", title: "tailwindcss" },
    { icon: "bx bxl-css3", title: "css" },
    { icon: "bx bxl-html5", title: "html" },
    { icon: "bx bxl-redux", title: "redux" },
    { icon: "bx bxl-c-plus-plus", title: "c++" },
  ];
  return (
    <div>
      <Header />
      <div className="list__icon">
        {icon.map((item, index) => (
          <Icon icon={item.icon} key="index" title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
