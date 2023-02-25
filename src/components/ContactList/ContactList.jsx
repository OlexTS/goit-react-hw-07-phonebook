import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem item={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
