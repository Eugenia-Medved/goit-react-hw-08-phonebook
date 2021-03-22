import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelector } from '../../redux/contacts';

import s from './ContactList.module.css';
import PhoneList from './fade.module.css';

function ContactList({ items, onDeleteNumber }) {
  return (
    <TransitionGroup component="ol" className={s.list}>
      {items.map(item => (
        <CSSTransition key={item.id} timeout={250} classNames={PhoneList}>
          <li key={item.id} className={s.item}>
            <span>
              {item.name}:{item.number}
            </span>
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteNumber(item.id)}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const mapStateToProps = state => ({
  items: contactsSelector.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteNumber: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
