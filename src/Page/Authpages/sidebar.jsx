import { Link } from "react-router-dom";
const sidebar = () => {
  const SidebarOption = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "About", path: "/about" },
    { label: "Task", path: "/task" },
    { label: "Skill", path: "/skill" },
    { label: "Profile", path: "/profile" },
    { label: "Note", path: "/note" },
    { label: "Task", path: "/calender" },
    { label: "setting", path: "/setting" },
    { label: "Logout", path: "/logout" },
    
  ];
  return (
    <div className="flex flex-col">
      {SidebarOption.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default sidebar;
