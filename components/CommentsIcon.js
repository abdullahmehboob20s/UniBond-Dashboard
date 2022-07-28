import React, { useState } from "react";
import CommentsDropdown from "./CommentsDropdown";
import IconButton from "./IconButton";

function CommentsIcon() {
  const [isOn, setOn] = useState(false);

  const userDropdownHandler = () => {
    setOn(true);
  };
  return (
    <IconButton
      icon="images/icons/commentsIcon.svg"
      onClick={userDropdownHandler}
    >
      <CommentsDropdown state={[isOn, setOn]} />
    </IconButton>
  );
}

export default CommentsIcon;
