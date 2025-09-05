import InputText from "@/components/form/InputText.tsx";

const ContactUsForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <InputText
          label="Contact Name"
          name="contactName"
          placeholder="Enter Contact Name"
        />
        <InputText
          label="Contact Email"
          name="contactEmail"
          placeholder="Enter Contact Email"
        />
        <InputText
          label="Contact Number"
          name="contactNumber"
          placeholder="Enter Contact Number"
        />
      </div>
    </>
  );
};

export default ContactUsForm;
