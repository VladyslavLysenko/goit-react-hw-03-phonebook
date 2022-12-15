import React from 'react';
import PropTypes from 'prop-types';
import { Input, InnerWrap, SectionForm } from 'components/Form/Form.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <InnerWrap>
      <SectionForm>
        <label>
          Find contacts by Name
          <Input
            value={value}
            name="filter"
            onChange={evt => onChange(evt.currentTarget.value)}
            type="text"
            placeholder="Search contact..."
          />
        </label>
      </SectionForm>
    </InnerWrap>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
