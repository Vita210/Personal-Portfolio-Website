import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Experience", path: "/experience" },
    { label: "Project", path: "/project" },
];

const AppNavbar = () => {
    const location = useLocation();

    return (
        <Navbar bg="white" expand="md" className="py-3 shadow-sm" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
                    Flanella Joevita Vanling
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto gap-4">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end
                                    className={`nav-link-custom ${isActive ? "nav-link-active" : ""
                                        }`}
                                >
                                    {item.label}

                                    {isActive && (
                                        <motion.div
                                            className="nav-underline"
                                            layoutId="navbar-underline"
                                            transition={{
                                                // type: "spring",
                                                // stiffness: 500,
                                                // damping: 30,

                                                type: "tween",
                                                duration: 0.25,
                                            }}
                                        />
                                    )}
                                </NavLink>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;