import ContactsListItem from "../contactsListItem/ContactsListItem";
import { ListContainer, ListElement, List } from "./ContactsList.styled";

export default function ContactsList({ contacts, deleteContact }) {
  return (
    <>
      <ListContainer>
        <List>
          {contacts.map(({ id, name, number }) => (
            <ListElement key={id}>
              <ContactsListItem
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            </ListElement>
          ))}
        </List>
      </ListContainer>
    </>
  );
}
