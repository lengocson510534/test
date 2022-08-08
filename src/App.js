import "./App.css";
import Header from "./components/Header";
import Icon from "./UI/Icon";

function App() {
  const icon = [
    { icon: "bx bxl-youtube" },
    { icon: "bx bxl-facebook-circle" },
    { icon: "bx bxl-instagram" },
  ];
  return (
    <div>
      <Header />
      <div className="list__icon">
        {icon.map((item, index) => (
          <Icon icon={item.icon} key="index" />
        ))}
      </div>
    </div>
  );
}

export default App;
