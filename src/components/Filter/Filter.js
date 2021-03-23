import shortid from 'shortid';
import { Input, FormLabel } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeFilter, contactsSelector } from '../../redux/contacts';

function Filter({ value, onChange }) {
  const findId = shortid.generate();
  return (
    <>
      <FormLabel for={findId}>Find contacts by name</FormLabel>
      <Input
        color="secondary"
        id={findId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const mapStateToProps = state => ({
  value: contactsSelector.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
