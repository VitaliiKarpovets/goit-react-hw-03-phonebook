import { ContactData, DeleteBtn } from "./ContactsListItem.styled";

function ContactsListItem({ id, name, number, deleteContact }) {
  return (
    <>
      <ContactData>
        {name}: {number}
      </ContactData>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </>
  );
}

export default ContactsListItem;
