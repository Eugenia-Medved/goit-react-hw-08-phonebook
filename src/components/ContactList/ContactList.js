import React from 'react';
import { Button, ListItem, List } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelector } from '../../redux/contacts';

import s from './ContactList.module.css';
import PhoneList from './fade.module.css';

function ContactList({ items, onDeleteNumber }) {
  return (
    <TransitionGroup component={List}>
      {items.map(item => (
        <CSSTransition key={item.id} timeout={250} classNames={PhoneList}>
          <ListItem key={item.id} className={s.item}>
            <span>
              {item.name}:<span> </span>
              {item.number}
            </span>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => onDeleteNumber(item.id)}
            >
              Delete
            </Button>
          </ListItem>
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
