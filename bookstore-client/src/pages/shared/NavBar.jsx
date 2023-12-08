import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "flowbite-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isCartClicked, setIsCartClicked] = useState(false); // New state
    const { openCart, cartQuantity } = useShoppingCart();

    // toggle menu
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    const handleCartClick = () => {
        openCart();
        setIsCartClicked(true);
      };    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const closeCartMenu = () => {
        setIsCartClicked(false);
      };

    // navItems
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        // {link: "Contact", path: "/contact"},
        {link: "Shop", path: "/shop"},
        {link: "Blog", path: "/blog"},
        {link: "Dashboard", path: "/admin/dashboard"},
    ]

  return (
    <header sticky="top" className={'w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'}>
        <nav className={`py-4 lg:px-24 px-4 me-auto ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
                }`}>
            <div className="flex justify-between items-center text-base gap-8">
                {/*logo*/}
                <Link to="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link>

                {/* nav item for larage device */}
                <ul className="md:flex space-x-12 hidden navitems">
                {navItems.map(({ link, path }) => (
                    <Link
                        key={link}
                        to={path}
                        className="link block text-base cursor-pointer uppercase text-black hover:text-blue-700"
                    >
                {link}
              </Link>
            ))}
                </ul>

                <div className="space-x-12 hidden lg:flex items-center ">
            {cartQuantity > 0 && (
              <Button
                onClick={handleCartClick}
                className="rounded-circle bg-white-300"
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                }}
                variant="outline-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                </svg>

                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            )}

            <button onClick={closeCartMenu}>
              {" "}
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={() => {
                toggleMenu();
                setIsCartClicked(false); // Close cart menu when opening mobile menu
              }}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a
              href={path}
              key={link}
              onClick={() => {
                toggleMenu();
                closeCartMenu();
              }}
              className="block  text-white hover:text-gray-500"
            >
              {link}
            </a>
          ))}

          {/* Cart button for mobile */}
          {cartQuantity > 0 && (
            <Button
  onClick={() => {
    handleCartClick();
    toggleMenu();
  }}
  className="rounded-circle bg-white-300 mt-4"
  style={{
    width: "3rem",
    height: "3rem",
    position: "relative",
  }}
  variant="outline-primary"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
  </svg>

  <div
    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
    style={{
      color: "white",
      width: "1.5rem",
      height: "1.5rem",
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: "translate(25%, 25%)",
    }}
  >
    {cartQuantity}
  </div>
</Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;