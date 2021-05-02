import React, { useState } from "react";
import { ControlledMenu, MenuItem } from "@szhsin/react-menu";
import styled, { keyframes } from "styled-components";

interface NodeContextMenuProps {
  className?: string;
}

const UnstyledNodeContextMenu = (props: NodeContextMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  return (
    <div
      className={props.className}
      onContextMenu={(ev: React.MouseEvent) => {
        ev.preventDefault();
        setAnchorPoint({ x: ev.clientX, y: ev.clientY });
        setIsOpen(true);
        console.log(anchorPoint);
      }}
    >
      <ControlledMenu
        anchorPoint={anchorPoint}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <MenuItem>Hello</MenuItem>
      </ControlledMenu>
    </div>
  );
};

const rc_menu_show_slide_left = keyframes`
  from {
    opacity: 0;
    transform: translateX(0.75rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
const rc_menu_hide_slide_left = keyframes`
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translateX(0.75rem);
  }
`;
const rc_menu_show_slide_right = keyframes`
  from {
    opacity: 0;
    transform: translateX(-0.75rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
const rc_menu_hide_slide_right = keyframes`
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translateX(-0.75rem);
  }
`;
const rc_menu_show_slide_top = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
const rc_menu_hide_slide_top = keyframes`
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translateY(0.75rem);
  }
`;
const rc_menu_show_slide_bottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0.75rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
const rc_menu_hide_slide_bottom = keyframes`
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translateY(-0.75rem);
  }
`;

const NodeContextMenu = styled(UnstyledNodeContextMenu)`
  height: 100%;
  width: 100%;
  position: absolute;

  .rc-menu-container {
    position: absolute;
    width: 0px;
    height: 0px;
  }

  .rc-menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    box-sizing: border-box;
    width: max-content;
    position: absolute;
    z-index: 100;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .rc-menu:focus {
    outline: none;
  }
  .rc-menu--open,
  .rc-menu--closing {
    display: block;
  }
  .rc-menu__arrow {
    box-sizing: border-box;
    width: 0.75rem;
    height: 0.75rem;
    background-color: #fff;
    border: 1px solid transparent;
    border-left-color: rgba(0, 0, 0, 0.1);
    border-top-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: -1;
  }
  .rc-menu__arrow--dir-left {
    right: -0.375rem;
    transform: translateY(-50%) rotate(135deg);
  }
  .rc-menu__arrow--dir-right {
    left: -0.375rem;
    transform: translateY(-50%) rotate(-45deg);
  }
  .rc-menu__arrow--dir-top {
    bottom: -0.375rem;
    transform: translateX(-50%) rotate(-135deg);
  }
  .rc-menu__arrow--dir-bottom {
    top: -0.375rem;
    transform: translateX(-50%) rotate(45deg);
  }
  .rc-menu__item {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .rc-menu__item:focus {
    outline: none;
  }
  .rc-menu__item--hover {
    background-color: #ebebeb;
  }
  .rc-menu__item--focusable {
    cursor: default;
    background-color: inherit;
  }
  .rc-menu__item--disabled {
    cursor: default;
    color: #aaa;
  }
  .rc-menu__submenu {
    position: relative;
  }
  .rc-menu__group {
    box-sizing: border-box;
  }
  .rc-menu__radio-group {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .rc-menu__divider {
    height: 1px;
    margin: 0.5rem 0;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .rc-menu-button {
    box-sizing: border-box;
  }

  .rc-menu {
    user-select: none;
    color: #212529;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.133), 0 0.6px 2px rgba(0, 0, 0, 0.1);
    min-width: 10rem;
    padding: 0.5rem 0;
  }
  .rc-menu--open.rc-menu--dir-left {
    animation: ${rc_menu_show_slide_left} 0.15s ease-out;
  }
  .rc-menu--closing.rc-menu--dir-left {
    animation: ${rc_menu_hide_slide_left} 0.15s ease-in;
  }
  .rc-menu--open.rc-menu--dir-right {
    animation: ${rc_menu_show_slide_right} 0.15s ease-out;
  }
  .rc-menu--closing.rc-menu--dir-right {
    animation: ${rc_menu_hide_slide_right} 0.15s ease-in;
  }
  .rc-menu--open.rc-menu--dir-top {
    animation: ${rc_menu_show_slide_top} 0.15s ease-out;
  }
  .rc-menu--closing.rc-menu--dir-top {
    animation: ${rc_menu_hide_slide_top} 0.15s ease-in;
  }
  .rc-menu--open.rc-menu--dir-bottom {
    animation: ${rc_menu_show_slide_bottom} 0.15s ease-out;
  }
  .rc-menu--closing.rc-menu--dir-bottom {
    animation: ${rc_menu_hide_slide_bottom} 0.15s ease-in;
  }
  .rc-menu__item {
    position: relative;
    padding: 0.375rem 1.5rem;
  }
  .rc-menu--animation .rc-menu__item {
    transition-property: background-color, color;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }
  .rc-menu__item--active {
    color: #fff;
    background-color: #007bff;
  }
  .rc-menu__item--type-radio {
    padding-left: 2.2rem;
  }
  .rc-menu__item--type-radio::before {
    content: "○";
    position: absolute;
    left: 0.8rem;
    top: 0.55rem;
    font-size: 0.8rem;
  }
  .rc-menu__item--type-radio.rc-menu__item--checked::before {
    content: "●";
  }
  .rc-menu__item--type-checkbox {
    padding-left: 2.2rem;
  }
  .rc-menu__item--type-checkbox::before {
    position: absolute;
    left: 0.8rem;
  }
  .rc-menu__item--type-checkbox.rc-menu__item--checked::before {
    content: "✔";
  }
  .rc-menu__submenu > .rc-menu__item {
    padding-right: 2.5rem;
  }
  .rc-menu__submenu > .rc-menu__item::after {
    content: "❯";
    position: absolute;
    right: 1rem;
  }
  .rc-menu__header {
    color: #888;
    font-size: 0.8em;
    padding: 0.2rem 1.5rem;
    text-transform: uppercase;
  }
`;

export { NodeContextMenu };
