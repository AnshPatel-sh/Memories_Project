// import React, { useState } from "react";
// import { Avatar, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/authSlice.js";

// import memories from "../../images/memories.png";
// import {
//   AppBarStyled,
//   HeadingStyled,
//   ImageStyled,
//   ToolbarStyled,
//   ProfileStyled,
//   UserNameStyled,
//   BrandContainerStyled,
//   PurpleStyled,
// } from "./styles";

// export function Navbar() {
//   const user = useSelector((state) => state.auth.authData);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/auth");
//   };

//   return (
//     <AppBarStyled position="static" color="inherit">
//       <BrandContainerStyled>
//         <HeadingStyled component={Link} to="/" variant="h2" align="center">
//           Memories
//         </HeadingStyled>
//         <ImageStyled src={memories} alt="icon" height="60" />
//       </BrandContainerStyled>
//       <ToolbarStyled>
//         {user?.result ? (
//           <ProfileStyled>
//             <PurpleStyled>
//               <Avatar alt={user.result.name} src={user.result.imageUrl}>
//                 {user.result.name.charAt(0)}
//               </Avatar>
//             </PurpleStyled>
//             <UserNameStyled variant="h6">{user?.result.name}</UserNameStyled>
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={handleLogout}
//             >
//               Logout
//             </Button>
//           </ProfileStyled>
//         ) : (
//           <Button
//             component={Link}
//             to="/auth"
//             variant="contained"
//             color="primary"
//           >
//             Sign In
//           </Button>
//         )}
//       </ToolbarStyled>
//     </AppBarStyled>
//   );
// }



import React from "react";
import { Avatar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice.js";

import memories from "../../images/memories.png";
import {
  AppBarStyled,
  HeadingStyled,
  ImageStyled,
  ToolbarStyled,
  ProfileStyled,
  UserNameStyled,
  BrandContainerStyled,
  PurpleStyled,
} from "./styles";

export function Navbar() {
  const user = useSelector((state) => state.auth.authData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("profile"); // Clear specific item from local storage
    navigate("/auth");
  };

  // Helper function to safely get the user's initial
  const getUserInitial = () => {
    if (user?.result?.name) {
      return user.result.name.charAt(0);
    }
    if (user?.result?.firstName) {
      return user.result.firstName.charAt(0);
    }
    return "?"; // Fallback if no name is available
  };

  return (
    <AppBarStyled position="static" color="inherit">
      <BrandContainerStyled>
        <HeadingStyled component={Link} to="/" variant="h2" align="center">
          Memories
        </HeadingStyled>
        <ImageStyled src={memories} alt="icon" height="60" />
      </BrandContainerStyled>
      <ToolbarStyled>
        {user?.result ? (
          <ProfileStyled>
            <PurpleStyled>
              <Avatar
                alt={user.result.name || user.result.firstName}
                src={user.result.imageUrl}
              >
                {getUserInitial()}
              </Avatar>
            </PurpleStyled>
            <UserNameStyled variant="h6">
              {user.result.name ||
                `${user.result.firstName} ${user.result.lastName}`}
            </UserNameStyled>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </ProfileStyled>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </ToolbarStyled>
    </AppBarStyled>
  );
}
