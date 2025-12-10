import InputText from "@/components/form/FormInputText";

const UserForm = () => {
  return (
    <>
      <InputText label="Name" name="name" placeholder="Enter Name" />
      <InputText label="Email" name="email" placeholder="Enter Email" />
      <InputText
        label="Phone Number"
        name="phone_No"
        placeholder="Enter Phone Number"
      />
    </>
  );
};

export default UserForm;
