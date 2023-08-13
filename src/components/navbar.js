import * as React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 max-h-3 mt-5">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">SEC RVA</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a>Live</a>
          </li>
          <li tabindex="0">
            <a>
              Media
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100 z-10">
              <li>
                <a>Photo</a>
              </li>
              <li>
                <a>Video</a>
              </li>
            </ul>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;