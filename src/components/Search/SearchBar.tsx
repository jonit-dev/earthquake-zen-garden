import _ from "lodash";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FILTER_OPTIONS, SORT_OPTIONS } from "../../constants/searchConstants";
import { invoiceStore } from "../../store/RootStore";
import { Dropdown, IDropdownOption } from "../Dropdown";
import { IconButton } from "../IconButton";
import { SortingType } from "../types/InvoiceTypes";
import { FilterTag } from "./FilterTag";

export const SearchBar: React.FC = observer(() => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search.length >= 3) {
      _.debounce(() => {
        invoiceStore.searchInvoices(search);
      }, 200)();
    } else {
      invoiceStore.loadInvoices();
    }
  }, [search]);

  const onSort = (option: IDropdownOption) => {
    try {
      if (option.key && option.value) {
        invoiceStore.sortInvoices(option.key, option.value as SortingType);
      } else {
        throw new Error(
          "You must select a key and value for your options, when trying sort."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onFilter = (option: IDropdownOption) => {
    try {
      if (option.key && option.value) {
        invoiceStore.addActiveFilters({
          key: option.key,
          value: option.value,
        });
        // invoiceStore.searchInvoices(option.key, option.value as string);
      } else {
        throw new Error(
          "You must select a key and value for your options, when trying filter."
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onRenderFilterTags = () =>
    invoiceStore.activeFilters.map((filter) => (
      <FilterTag
        key={`${filter.key}_${filter.value}`}
        onDelete={() => {
          invoiceStore.removeActiveFilters(filter);
        }}
      >
        {filter.key + ": " + filter.value}
      </FilterTag>
    ));

  return (
    <>
      <Container className="columns">
        <div className="column is-four-fifths">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-rounded"
              type="text"
              placeholder="Search for an invoice by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
        <div className="column auto">
          <Dropdown options={SORT_OPTIONS} onOptionClick={onSort}>
            <IconButton iconName="fas fa-sort" />
          </Dropdown>
        </div>
        <div className="column auto">
          <Dropdown options={FILTER_OPTIONS} onOptionClick={onFilter}>
            <IconButton iconName="fas fa-filter" />
          </Dropdown>
        </div>
      </Container>
      <div className="columns">
        <div className="column filters">{onRenderFilterTags()}</div>
      </div>
    </>
  );
});

const Container = styled.div`
  .filters {
    display: flex;
    flex-direction: row;
  }
`;
