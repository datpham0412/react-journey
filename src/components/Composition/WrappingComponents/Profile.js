import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Pham Tien Dat",
          imageId: "wribrw",
        }}
      />
    </Card>
  );
}
