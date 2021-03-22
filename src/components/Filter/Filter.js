import shortid from 'shortid';
import { connect } from 'react-redux';
import { changeFilter, contactsSelector } from '../../redux/contacts';

import s from './Filter.module.css';

function Filter({ value, onChange }) {
  const findId = shortid.generate();
  return (
    <>
      <label for={findId}>Find contacts by name</label>
      <input
        className={s.input}
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
