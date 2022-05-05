import { EQ_DATE_FORMAT } from "@app/constants/dateConstants";
import { earthquakeDataStore } from "@app/store/RootStore";
import { EQSortTypes } from "@app/types/EarthquakeDataTypes";
import dayjs from "dayjs";
import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";

interface IProps {}

interface ISortDirections {
  [prop: string]: EQSortTypes;
}

export const EarthquakeDataTable: React.FC<IProps> = observer((props) => {
  const [sortDirections, setSortDirections] = useState<ISortDirections>({
    title: "asc",
    mag: "asc",
    time: "asc",
  });

  const onRenderEQData = () => {
    return earthquakeDataStore?.data?.features.map((data) => (
      <tr key={data.id}>
        <td>{data.properties.title}</td>
        <td>{data.properties.mag}</td>
        <td>{dayjs(data.properties.time).format(EQ_DATE_FORMAT)}</td>
      </tr>
    ));
  };

  const onSortData = (attr: string) => {
    earthquakeDataStore.sortDate(attr, sortDirections[attr]);

    setSortDirections((prevState) => {
      return {
        ...prevState,
        [attr]: prevState[attr] === "asc" ? "desc" : "asc",
      };
    });
  };

  return (
    <Table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth center">
      <thead>
        <tr>
          <th onClick={() => onSortData("title")}>Title</th>
          <th onClick={() => onSortData("mag")}>Magnitude</th>
          <th onClick={() => onSortData("time")}>Time</th>
        </tr>
      </thead>

      <tbody>{onRenderEQData()}</tbody>
    </Table>
  );
});

const Table = styled.table`
  th {
    cursor: pointer;
  }
`;
