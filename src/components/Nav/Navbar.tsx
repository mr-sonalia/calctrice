/* eslint-disable jsx-a11y/anchor-is-valid */
import { FormEvent, Fragment, useState, useRef, FC } from "react";
import { Link } from "react-router-dom";
import { useHotkeys } from "@mantine/hooks";
import { Tooltip, Button, Input, Modal } from "@mantine/core";

import NavLink from "./NavLink";
import navItems from "./NavItems";
import Search from "../Icons/Search";
import Logo from "../Icons/Logo";

const Navbar: FC = () => {
  const [modalOpen, setModalOpen]: [boolean, Function] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled]: [boolean, Function] = useState(true);
  const searchQueryRef = useRef<HTMLInputElement>(null);
  const searchQueryChangeHandler = () => {
    if (searchQueryRef.current!.value) setSubmitDisabled(false);
    else setSubmitDisabled(true);
  };

  const modalFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setModalOpen(false);

    console.log(searchQueryRef.current!.value);
  };

  useHotkeys([["ctrl+K", () => setModalOpen((prev: boolean) => !prev)]]);

  const mappedNavItems = navItems.map((item) => <NavLink key={item.id} path={item.path} text={item.text} />);

  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <ul className="nav-list">{mappedNavItems}</ul>
        <Tooltip label="Crtl+K" withArrow>
          <Button size="md" color="blue" variant="light" onClick={() => setModalOpen(true)}>
            <Search color="#228be6" />
          </Button>
        </Tooltip>
      </nav>
      <Modal
        size="lg"
        opened={modalOpen}
        transition={"slide-up"}
        transitionDuration={500}
        transitionTimingFunction="ease"
        onClose={() => setModalOpen(false)}
        hideCloseButton
      >
        <h4 className="headline__search mar-b-1">What are we looking for?</h4>
        <form onSubmit={modalFormSubmitHandler} className="search-modal">
          <Input size="xl" placeholder="Good life, IG.." ref={searchQueryRef} onChange={searchQueryChangeHandler} />
          <Button type="submit" size="xl" color="blue" variant="light" disabled={isSubmitDisabled}>
            <Search color="#228be6" />
          </Button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default Navbar;
