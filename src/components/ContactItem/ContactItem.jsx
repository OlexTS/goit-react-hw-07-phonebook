import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import {
  Item,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactItem.styled';

const ContactItem = ({ item: { name, phone, id } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <ContactName>
        {name}:<ContactNumber>{phone}</ContactNumber>
      </ContactName>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
