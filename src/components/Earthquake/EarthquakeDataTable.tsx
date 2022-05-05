import { EQ_DATE_FORMAT } from "@app/constants/dateConstants";
import { earthquakeDataStore } from "@app/store/RootStore";
import { EQSortTypes } from "@app/types/EarthquakeDataTypes";
import dayjs from "dayjs";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../Icon";

interface ISortDirections {
  [prop: string]: EQSortTypes;
}

export const EarthquakeDataTable: React.FC = observer(() => {
  const [sortDirections, setSortDirections] = useState<ISortDirections>({
    title: "asc",
    mag: "asc",
    time: "asc",
  });

  const onRenderEQData = () => {
    return earthquakeDataStore?.data?.features.map((data) => (
      <tr key={data.id} data-testid="EQ-data-item">
        <td>
          <Link to={`/details/${data.id}`}>{data.properties.title}</Link>
        </td>
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
          <th
            data-testid="EQ-data-title-th"
            onClick={() => onSortData("title")}
          >
            Title <Icon name="fas fa-sort"></Icon>
          </th>
          <th data-testid="EQ-data-mag-th" onClick={() => onSortData("mag")}>
            Magnitude <Icon name="fas fa-sort"></Icon>
          </th>
          <th data-testid="EQ-data-time-th" onClick={() => onSortData("time")}>
            Time <Icon name="fas fa-sort"></Icon>
          </th>
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
