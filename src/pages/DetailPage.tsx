import { ItemRow } from "@app/components/ItemRow";
import { Page } from "@app/components/Page";
import { EQ_DATE_FORMAT } from "@app/constants/dateConstants";
import { earthquakeDataStore } from "@app/store/RootStore";
import { IEQFeature } from "@app/types/EarthquakeDataTypes";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const DetailPage: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();

  const [EQData, setEQData] = useState<IEQFeature>();

  useEffect(() => {
    const findEQData = earthquakeDataStore.data?.features.find(
      (data) => data.id === id
    );

    setEQData(findEQData);
  }, []);

  return (
    <>
      {EQData && (
        <Container>
          <Page>
            <h1 className="title title-small center">
              {EQData.properties.title}
            </h1>

            <ItemRow label="Title" value={EQData.properties.title} />
            <ItemRow label="Magnitude" value={String(EQData.properties.mag)} />
            <ItemRow
              label="Time"
              value={dayjs(EQData.properties.time).format(EQ_DATE_FORMAT)}
            />
            <ItemRow label="Status" value={EQData.properties.status} />
            <ItemRow
              label="Tsunami"
              value={String(EQData.properties.tsunami)}
            />
            <ItemRow label="Type" value={String(EQData.properties.type)} />
          </Page>
        </Container>
      )}
    </>
  );
});

const Container = styled.div``;
