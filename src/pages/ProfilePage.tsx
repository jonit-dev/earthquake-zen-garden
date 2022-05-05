import { ItemRow } from "@app/components/ItemRow";
import { Page } from "@app/components/Page";
import { userStore } from "@app/store/RootStore";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

export const ProfilePage: React.FC = observer(() => {
  const { user } = userStore;

  return (
    <Container>
      {user && (
        <Page>
          <h1 className="title center title-small">Profile</h1>

          <div className="columns">
            <div className="column">
              <img src={user.avatarImage} alt="profile image" />
            </div>
            <div className="column">
              <ItemRow label="First name" value={user.firstName} />
              <ItemRow label="Last name" value={user.lastName} />
              <ItemRow label="Phone" value={user.phone} />
              <ItemRow label="Email" value={user.email} />
              <ItemRow label="Bio" value={user.bio} />
            </div>
          </div>
        </Page>
      )}
    </Container>
  );
});

const Container = styled.div``;
